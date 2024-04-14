const mongoose = require('mongoose')

// Using user schema as datatype of users field in chat
const userModel = require('./Users.Model')
const userSchema = mongoose.model(userModel).schema

// Using message schema as datatype of messages field in chat
const messageModel = require('./Messages.Model')
const messageSchema = mongoose.model(messageModel).schema

const chatSchema = new mongoose.Schema({
    users : userSchema,
    messages : messageSchema
})

const chatModel = mongoose.model('WhatsAppUser',chatSchema)

module.exports = chatModel