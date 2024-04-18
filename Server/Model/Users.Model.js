const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email already registered"],
  },
  profilePic: String,
  addedOn: {
    type: String,
    default: Date.now(),
  },
});

const userModel = mongoose.model("WhatsAppUser", userSchema);

module.exports = userModel;
