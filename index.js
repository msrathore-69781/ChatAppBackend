// const express = require("express");
// const http = require("http");
// const cors = require("cors");
// const app = express();
// const port = process.env.PORT || 8080;
// var server = http.createServer(app);
// var io = require("socket.io")(server, {
//     // cors:
//     // {
//     //     origin: "*"
//     // }
// });
// //middle ware 
// app.use(express.json());
// app.use(cors());
// var clients =[];
// io.on("connection", (socket) => {
//     console.log("connected");
//     console.log(socket.id,"has joined");
//     socket.on("/signin",(id)=>{
//         console.log(id);
//         clients[id]=socket;
//         console.log(clients);
//     });
//     socket.on("/message",(msg)=>{
// console.log(msg);
// let targetId = msg.targetId;
// clients[targetId].emit("message",msg);
//     });
// });
// server.listen(port,"0.0.0.0", () => {
//     console.log("server started");
// });
    
// app.get('/', (req, res) => {
//     res.send('Hello, World!'); // Replace with your desired content
//   });

