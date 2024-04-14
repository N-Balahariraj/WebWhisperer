import React, { useState } from 'react'
import { GrEmoji } from "react-icons/gr";
import { VscMic } from "react-icons/vsc";
import { FiPaperclip } from "react-icons/fi";
import Contact from '../Data/Contacts';
import { Message } from '../Data/Message';
import ChatMsg from './ChatMsg';
import EmojiPicker from 'emoji-picker-react';

export default function ChatBox({ id }) {

  const [MsgList, setList] = useState(Message)
  const [text,setText] = useState("")
  const [pickerVisibiity,setVisibility] = useState(false)

  const addEmoji = (emojiObj) =>{
    setText(text+emojiObj.emoji)
    setVisibility(false)
  }

  const pushMsg = (event) => {
    if (event.key === "Enter") {
      const message = [...MsgList]
      message.push({
        id: message.length+1,
        messageType: "TEXT",
        text,
        senderID: 0,
        addedOn: "12:00 PM",
      })
      setList(message)
      setText("")
    }
  }

  return (
    <div className='ChatBox'>
      <div className='h-[10%] bg-[#2d2d2d] flex items-center p-4 gap-4'>
        <img src={Contact[id].Profile} alt="Img" className='w-[50px] h-[50px] rounded-full' />
        <span className='text-lg font-Nunito'>{Contact[id].Name}</span>
      </div>
      <div className="h-[80%] flex flex-col p-4 overflow-y-auto">
        {MsgList.map((M) => {
          return <ChatMsg key={M.id} id={M.id} msg={M.text} sender={M.senderID} time={M.addedOn} />
        })}
      </div>
      <div className="h-[10%] bg-[#2d2d2d] flex justify-between items-center p-3 ">
        <EmojiPicker skinTonesDisabled={true} searchDisabled={true} onEmojiClick={addEmoji} open={pickerVisibiity} height={300} className='absolute bottom-[200px]'/>
        <i className='h-[50px] w-[50px] rounded-md p-3 hover:bg-[#3a3a3a]'><GrEmoji className='text-2xl' onClick={()=>{setVisibility(!pickerVisibiity)}} /></i>
        <i className='h-[50px] w-[50px] rounded-md p-4 hover:bg-[#3a3a3a]'><FiPaperclip className='text-lg' /></i>
        <input type="text" placeholder='Type a message' onKeyDown={pushMsg} onChange={(e)=>{setText(e.target.value)}} value={text} className='h-[80%] w-[80%] outline-none rounded-md p-5' />
        <i className='h-[50px] w-[50px] rounded-md p-4 hover:bg-[#3a3a3a]'><VscMic className='text-xl' /></i>
      </div>
    </div>
  )
}
