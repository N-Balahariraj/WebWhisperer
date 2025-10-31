const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    senderId: String,
    text: String,
  },
  { _id: false }
);

const chatSchema = new mongoose.Schema(
  {
    users: Array,
    messages: [messageSchema],
  },
  {
    timestamps: true,
  }
);

const chatModel = mongoose.model("chats", chatSchema);

module.exports = chatModel;
