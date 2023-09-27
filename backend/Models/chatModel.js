// chatName
// isGroup
//users
//latestMessage
//groupAdmin


const mongoose = require("mongoose");

const chatModel = mongoose.Schema(
    {
        chatName: { type: String, trim: true },
        isGroupChat: { type: Boolean, default: false },
        users: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: " User"

        }],
        latestMessage: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message"
        },
        groupAdmin: {
            type: mongoose.Schema.Types.ObjectId,
            ref:"User",
            
        }


    },

    //mongoose create a time stamps
    {timesstamps :true,}
);


const Chat = mongoose.model("Chats",chatModel);

module.exports = Chat;