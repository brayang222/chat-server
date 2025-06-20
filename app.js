import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import logger from "morgan";
import { Server as SocketServer } from "socket.io";
import http from "http";

const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
  cors: { origin: "http://localhost:5173" },
});

app.use(cors());
app.use(bodyParser.json());
app.use(logger("dev"));

io.on("connection", (socket) => {
  console.log("Client connected");

  socket.on("message", (data) => {
    console.log(data);
  });
});

server.listen(port, () => {
  console.log("Server is working at http://localhost:" + port);
});
