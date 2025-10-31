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

const userModel = mongoose.model("whisperers", userSchema);

module.exports = userModel;
