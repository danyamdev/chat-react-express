import socket from "socket.io";
import http from "http";

export default (http: http.Server) => {
  // @ts-ignore
  const io = socket(http);

  io.on("connection", function(socket: socket.Socket) {
    console.log('===>111', 111);
  });

  return io;
};