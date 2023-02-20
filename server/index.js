const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*", // <-- put you react url here.
    methods: ["GET", "POST"],
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
        id: id, 
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


  // //user clicks to add to colour 
  // socket.on("addToUser", (id, colour, room) => {
  //   console.log(room)
  //   io.to(room).emit("moneyAddedToUser", )
  // });

  // socket.on("removeFromUser", (id, colour, room) => {
  //   console.log(room)
  //   io.to(room).emit("moneyAddedToUser", )
  // });

  //user clicks to add to middle 
  socket.on("addedToPot", (pot, amount, id, room) => { 
    pot += amount
    io.to(room).emit("moneyAddedToPot", pot);
  });

  //user clicks to remove from middle
  socket.on("removedFromPot", (pot, amount, id, room) => { 
    if(pot > amount) pot -= amount
    io.to(room).emit("removeFromPot", pot);
  });
});

server.listen(4000, () => {
  console.log("listening on *:4000");
});