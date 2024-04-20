const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  profilePic: String,
  addedOn: {
    type: String,
    default: Date.now(),
  },
});

const wc_user = mongoose.model("WhatsAppUser", userSchema);

module.exports = wc_user;
