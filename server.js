//import necessary modules
import dotenv from "dotenv";
import express from "express";
import http from "http";
import { Server } from "socket.io";
dotenv.config();

//creating instances of imports to use
const app = express();
const port = process.env.PORT;
const server = http.createServer(app);

//creating a new socket.io server with CORS config
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

//when a new client connects to the server
io.on("connection", (socket) => {
  //using handshake to query the url for username
  const username = socket.handshake.query.username;

  socket.username = username;

  //log the user's ID
  console.log(`User Connected: ${socket.username}`);

  //show user id on connection
  socket.emit("message", `Connected user: ${socket.username}`);

  //broadcast new message to all users
  socket.broadcast.emit("message", `User ${socket.username} joined the chat.`);

  //when the socket gets a message
  socket.on("message", (message) => {
    //log for testing
    console.log(`Message Recived from ${socket.username}`, message);

    //broadcast messages to all users connected to socket
    socket.broadcast.emit("message", `${socket.username} says: ${message}`);
  });

  //when socket is closed broadcast to users connected to socket, log for testing
  socket.on("disconnect", () => {
    socket.broadcast.emit("message", `${socket.username} Disconnected.`);
    console.log(`${socket.username} Disconnected.`);
  });
});

//start the server and listen on port, log to indicate running
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
