const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    senderId : String,
    receiverId : String,
    message : String,
    messageTime : String,
    messageType : String,
})

const messageModel = mongoose.model('WhatsAppUser',messageSchema)

module.exports = messageModel