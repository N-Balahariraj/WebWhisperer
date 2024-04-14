import React, { useState } from 'react'
import StatusHistory from '../Data/StatusHistory';
import StatusCard from './StatusCard';

export default function Status({setHome}) {

  const [contact,setContact] = useState(StatusHistory)


  return (
    <div className='Chats'>
      <div className=" flex justify-between items-center w-[100%] h-[5%]">
        <h2 className='text-xl font-semibold w-[85%]'>Status</h2>        
      </div>
      <div className="ChatList overflow-y-auto">
        {contact.map((C)=>{
          return <StatusCard key={C.id} id={C.id} name={C.Name} profile={C.Profile} setHome={setHome}/>
        })}
      </div>
    </div>
  )
}
