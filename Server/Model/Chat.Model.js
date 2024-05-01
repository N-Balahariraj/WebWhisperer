const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    users: Array,
    messages: [
      {
        senderId: String,
        text: String,
      }
    ],
  },
  {
    timestamps: true,
  }
);

const chatModel = mongoose.model("Chats", chatSchema);

module.exports = chatModel;
