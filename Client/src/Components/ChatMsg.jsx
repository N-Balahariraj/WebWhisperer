import React from 'react'

export default function ChatMsg({id,msg,sender,time}) {

    const sentOrReceive = sender?"bg-[#353535] self-start":"bg-[#005c4b] self-end"

  return (
    <div className={`max-w-[30%] p-2 ${sentOrReceive} rounded-md m-2`}><span>{msg}</span></div>
  )
}
