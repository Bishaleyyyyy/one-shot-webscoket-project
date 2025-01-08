import app from "./src/app";
import { envConfig } from "./src/config/config";
import connectTODB from "./src/config/db";
import { Server } from "socket.io";

//data recieved garda -- on
//data pathauda -- emit
//request -- socket
//api -- event

let io:Server | undefined
async function startServer() {
  await connectTODB();

  const port = envConfig.port || 4000;

  const server = app.listen(port, () => {
    console.log(`Server has started at port ${port}`);
  });

  const io = new Server(server);
  io.on("connection", (socket) => {
    socket.on("haha", (data) => {
      console.log(data);
      socket.emit("response", {
        message: "Data recieved garey hai maile",
      });
    });

    console.log("Someone connected (client)");
  });

  
}
function getSocketIO(){
  if(!io){
    throw new Error("Socket intialized bhako xaina hai!")
  }
  return io
}

startServer();
export {getSocketIO}
