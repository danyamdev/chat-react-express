import express from "express";
import dotenv from "dotenv";
import { createServer } from "http";
import cors from "cors";

import "./core/db";
import createRoutes from "./core/routes";
import createSocket from "./core/socket";

const app = express();
const http = createServer(app);
const io = createSocket(http);

dotenv.config();

app.use(cors())

createRoutes(app, io);

http.listen(process.env.PORT, function() {
  console.log(`Server: http://localhost:${process.env.PORT}`);
});