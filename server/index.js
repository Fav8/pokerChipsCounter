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
  socket.on("join_room", (room, username) => {
    socket.join(room);
    socket.username = username;
    const socketIds = Array.from(io.sockets.adapter.rooms.get(room));
    const listOfUsers = socketIds.map((id) => {
      const clientSocket = io.sockets.sockets.get(id);
      return { username: clientSocket.username, id: id };
    });
    io.to(room).emit("newUsernameAdded", listOfUsers, pot);
  });

  //user clicks to add to middle 
  socket.on("addedToPot", (room, pot, amount) => { 
    pot += amount
    io.to(room).emit("moneyAddedToPot", pot);
  });

  //user clicks to remove from middle
  socket.on("removedFromPot", (room, pot, amount) => { 
    if(pot > amount) pot -= amount
    io.to(room).emit("removeFromPot", pot);
  });
});

server.listen(4000, () => {
  console.log("listening on *:4000");
});