const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true,
        unique:[true,"Phone Number already registered"]
    },
    profilePic:{
        type : Buffer,
    },
    passwd:{
        type: String,
        required: true,
        minlength: 8
    }
})

const userModel = mongoose.model('WhatsAppUser',userSchema)

module.exports = userModel