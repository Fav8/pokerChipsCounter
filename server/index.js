const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*", 
  },
});

let pot = 0;

io.on("connection", (socket) => {
  socket.on("joinRoom", (username, room) => {
    socket.join(room);
    socket.username = username;
    const socketIds = Array.from(io.sockets.adapter.rooms.get(room));
    const listOfUsers = socketIds.map((id) => {
      const clientSocket = io.sockets.sockets.get(id);
      return { 
        username: clientSocket.username, 
        id: "gGBwyycyLIUZxeyzAAAH", 
        chips: {
          blue: {value: 25, qty: 64},
          red: {value: 50, qty: 64},
          green: {value: 100, qty: 32},
          purple: {value: 200, qty: 40}
      } 
    };
    });
    io.to(room).emit("newUsernameAdded", listOfUsers);
  });


  //user clicks to add to colour 
  socket.on("addToUser", (userId, chipColour, listOfUsers, room) => {
    for(user in listOfUsers) { 
      if(user.id === userId) user.chips[chipColour].qty += 1
    }
    console.log(listOfUsers)
    io.to(room).emit("moneyAddedToUser", listOfUsers)
  });

  //user clicks to remove from colour 
  socket.on("removeFromUser", (userId, chipColour, listOfUsers, room) => {
    for(user in listOfUsers) { 
      if(user.id === userId) user.chips[chipColour].qty -= 1
    }
    io.to(room).emit("moneyRemovedFromUser", listOfUsers)
  });

  //user clicks to add to middle 
  socket.on("addedToPot", (pot, amount, room) => { 
    pot += amount
    io.to(room).emit("moneyAddedToPot", pot);
  });

  //user clicks to remove from middle
  socket.on("removedFromPot", (pot, amount, room) => { 
    let didRemove = false
    if(pot > amount) {
      pot -= amount
      didRemove = false
    }
    io.to(room).emit("removeFromPot", pot, didRemove);
  });
});

server.listen(4000, () => {
  console.log("listening on *:4000");
});