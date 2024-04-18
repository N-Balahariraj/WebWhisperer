const mongoose = require("mongoose");

const channelSchema = new mongoose.Schema({
  users: [
    {
      email: String,
      name: String,
      profilePic: String,
    },
  ],
  messages: [
    {
      senderEmail: String,
      message: String,
      messageType: {type : String, default : "TEXT"},
      messageTime: {type : String, default : Date.now()}
    },
  ],
  addedOn: { type: String, default: Date.now() },
});

const channelModel = mongoose.model("WhatsAppUser", channelSchema);

module.exports = channelModel;
