const chatController = require('../Controllers/Chat.Controller.js')

module.exports = (app) => {
    app.post('/chat',chatController.chat)
    app.get('/getChats/:id',chatController.getChats)
}