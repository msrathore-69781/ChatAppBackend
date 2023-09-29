const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
// const messageRoutes = require("./routes/messageRoute")
const chatRoutes = require("../backend/routes/chatRoutes");
const connectDB = require("../backend/config/db");
const colors = require("colors");
const { notFound, errorHandler } = require("../Middlewares/errorMiddleware");
const http = require("http");
const cors = require("cors");
const port = process.env.PORT || 8080;
const app = express();
app.use(express.json());
var server = http.createServer(app);
var io = require("socket.io")(server, {
    // cors:
    // {
    //     origin: "*"
    // }
});
// const newUsers = [];
io.on("connection", (socket) => {
    console.log("connected");
    console.log(socket.id, "has joined");
    socket.on("login", (msg) => {
        console.log(msg);
        // const newUser = {
        //     "name": msg.name,
        //     "email": msg.email,
        //     "password": msg.password
        // };
        app.use("/api/user", userRoutes);

    });
    socket.on("/message", (msg) => {
        console.log(msg);
        app.use("/api/message", messageRoutes);

    });
    socket.on("/chat", (msg) => {
        console.log(msg);
        app.use("/api/chat", chatRoutes);

    });
});
server.listen(port, "0.0.0.0", () => {
    console.log("server started");
});

dotenv.config();
connectDB();


// app.use("/api/user", userRoutes);
// app.use("/api/chat", chatRoutes);
// app.use("/api/message", messageRoutes);

// app.get("/", (req, res) => {
//     res.send("APi is running");
// });
// app.get("/api/chat",(req,res)=>{
// res.send(chats);
// });
// app.get("/api/chat/:id",(req,res)=>{
//     console.log(req.params.id);
//     const singleChat = chats.find((c)=> c._id == req.params.id);
//     res.send(singleChat);
// });
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8080;
app.listen(8000, console.log(`Server started at PORT ${PORT}`.yellow.bold));

