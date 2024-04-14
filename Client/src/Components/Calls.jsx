import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { MdOutlineAddIcCall } from "react-icons/md";
import CallHistory from '../Data/CallHistory';
import CallCard from './CallCard';

export default function Calls({setHome}) {

  const [search,setSearch] = useState("")
  const [contact,setContact] = useState(CallHistory)

  function searchContact() {
    const Filter = Contact.filter((C) => {
      return C.Name.toLowerCase().includes(search.toLowerCase());
    });
    setContact(Filter);
  }

  return (
    <div className='Chats'>
      <div className=" flex justify-between items-center w-[100%] h-[5%]">
        <h2 className='text-xl font-semibold w-[85%]'>Calls</h2>
          <i className='h-[25px] w-[25px] text-xl p-1 hover:bg-[#3a3a3a] rounded-md'><MdOutlineAddIcCall /></i>
        
      </div>
      <div className="SearchBar">
        <IoIosSearch className='text-lg' onClick={()=>{searchContact()}}/>
        <input className='w-[93%] bg-transparent outline-none' placeholder='Search or start a new call' value={search} onChange={(e)=>{setSearch(e.target.value)}} />
      </div>
      <div className="ChatList overflow-y-auto">
        {contact.map((C)=>{
          return <CallCard key={C.id} id={C.id} name={C.Name} profile={C.Profile} setHome={setHome}/>
        })}
      </div>
    </div>
  )
}
