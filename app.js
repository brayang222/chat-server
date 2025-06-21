import { Server as SocketServer } from "socket.io";
import { connectDB } from "./config/dbClient.js";
import http from "http";
import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import logger from "morgan";
import routeUsers from "./routes/users.js";
import routeChats from "./routes/chat.js";
import routeMessages from "./routes/message.js";

const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
  cors: { origin: "https://chatea-realtime.vercel.app/" },
});

app.use(cors());
app.use(bodyParser.json());
app.use(logger("dev"));

connectDB();
app.use("/users", routeUsers);
app.use("/chat", routeChats);
app.use("/message", routeMessages);

io.on("connection", (socket) => {
  console.log("Client connected");

  socket.on("message", (body) => {
    socket.broadcast.emit("message", {
      body,
      from: socket.id,
    });
    console.log(body);
  });
});

server.listen(port, () => {
  console.log("Server is working at http://localhost:" + port);
});

process.on("SIGINT", async () => {
  await closeDB();
  process.exit(0);
});
