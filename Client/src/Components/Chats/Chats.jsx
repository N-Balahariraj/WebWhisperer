import React, { useEffect, useState } from "react";
import { GrEmoji } from "react-icons/gr";
import { VscMic } from "react-icons/vsc";
import { FiPaperclip } from "react-icons/fi";
import Contact from "../../Data/Contacts";
import { Chats, pushChats } from "../../Data/Message";
import ChatCard from "./ChatCard";
import EmojiPicker from "emoji-picker-react";

export default function Chat({ id, myId }) {
  let msgList;
  const [text, setText] = useState("");
  const [pickerVisibiity, setVisibility] = useState(false);

  for(const C of Chats){
    if(C.users.includes(id)) msgList = C.messages
  }

  const addEmoji = (emojiObj) => {
    setText(text + emojiObj.emoji);
    setVisibility(false);
  };

  const addMsg = async (event) => {
    if (event.key === "Enter") {
      const result = await pushChats(myId, id, text);
      console.log(result);
      setText("");
    }
  };

  const pos = Contact.findIndex((i) => i._id === id);

  return (
    <div className="ChatBox">
      <div className="h-[10%] bg-[#2d2d2d] flex items-center p-4 gap-4">
        <img
          src={Contact[pos].profilePic}
          alt="Img"
          className="w-[50px] h-[50px] rounded-full"
        />
        <span className="text-lg font-Nunito">{Contact[pos].name}</span>
      </div>
      <div className="h-[80%] flex flex-col p-4 overflow-y-auto">
        {msgList.map((M) => {
          return (
            <ChatCard
              key={M._id}
              // id={M._id}
              msg={M.text}
              sender={M.senderId}
              me={myId}
              // time={C.updatedAt}
            />
          );
        })}
      </div>
      <div className="h-[10%] bg-[#2d2d2d] flex justify-between items-center p-3 ">
        <EmojiPicker
          skinTonesDisabled={true}
          searchDisabled={true}
          onEmojiClick={addEmoji}
          open={pickerVisibiity}
          height={300}
          className="absolute bottom-[200px]"
        />
        <i className="h-[50px] w-[50px] rounded-md p-3 hover:bg-[#3a3a3a]">
          <GrEmoji
            className="text-2xl"
            onClick={() => {
              setVisibility(!pickerVisibiity);
            }}
          />
        </i>
        <i className="h-[50px] w-[50px] rounded-md p-4 hover:bg-[#3a3a3a]">
          <FiPaperclip className="text-lg" />
        </i>
        <input
          type="text"
          placeholder="Type a message"
          onKeyDown={addMsg}
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
          className="h-[80%] w-[80%] outline-none rounded-md p-5"
        />
        <i className="h-[50px] w-[50px] rounded-md p-4 hover:bg-[#3a3a3a]">
          <VscMic className="text-xl" />
        </i>
      </div>
    </div>
  );
}
