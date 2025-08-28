import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";

import cors from "cors";
// Import routes
import userRoutes from "./routes/userroutes.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", process.env.PORT || 3000);
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

//Routes
app.use("/api/v1/users", userRoutes);

const start = async () => {
  const connectiondb = await mongoose.connect(
    "mongodb+srv://rtvipinchaudhary:apnavideocall@apnavideocall.lff7obc.mongodb.net/?retryWrites=true&w=majority&appName=apnavideocall"
  );
  console.log(`MongoDB connected: ${connectiondb.connection.host}`);
  server.listen(app.get("port"), () => {
    console.log("app is running on the port 3000");
  });
};

start();
