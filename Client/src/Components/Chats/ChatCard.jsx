import React from "react";

export default function ChatMsg({msg, sender, me }) {
  const sentOrReceive =
    sender === me ? "bg-[#005c4b] self-end" : "bg-[#353535] self-start";

  return (
    <div className={`max-w-[30%] p-2 ${sentOrReceive} rounded-md m-2`}>
      <span>{msg}</span>
    </div>
  );
}
