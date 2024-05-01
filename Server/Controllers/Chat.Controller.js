const chatModel = require("../Model/Chat.Model");

exports.chat = async (req, res) => {
  const { senderId, receiverId, text } = req.body;

  const newChat = new chatModel({
    users: [senderId, receiverId],
    message: [
      {
        senderId,
        text,
      },
    ],
  });

  const exist = await chatModel.findOne({
    users: { $all: [senderId, receiverId] },
  });

  try {
    if (exist) {
      const result = await chatModel.updateOne(
        { _id: exist._id },
        { $push:{messages: { senderId, text }} }
      );
      res.status(200).json({message:'Message sent',details:result})
      return;
    }
    const result = await newChat.save()
    res.status(200).json({message:'New conversation started',details:result})
  } 
  catch (err) {
    console.log('Error : ',err)
    res.status(500).json({message:err.message})
  }
};

exports.getChats = async (req, res) => {
  const senderId = req.params.id
  const chats = await chatModel.find({users:{$in : [senderId]}})
  // console.log(chats)
  res.status(200).send(chats)
};
