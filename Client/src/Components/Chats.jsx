import React, { useState } from 'react'
import Contact from "../Data/Contacts"
import { IoIosSearch } from "react-icons/io";
import { LuListFilter } from "react-icons/lu";
import { FiEdit } from "react-icons/fi";
import ChatCard from './ChatCard';

export default function Chats({setHome}) {

  const [search,setSearch] = useState("")
  const [contact,setContact] = useState(Contact)

  function searchContact() {
    const Filter = Contact.filter((C) => {
      return C.Name.toLowerCase().includes(search.toLowerCase());
    });
    setContact(Filter);
  }

  return (
    <div className='Chats'>
      <div className=" flex justify-between items-center w-[100%] h-[5%]">
        <h2 className='text-xl font-semibold w-[85%]'>Chats</h2>
        <div className='flex justify-between w-[15%]'>
          <i className='h-[25px] w-[25px] p-1 hover:bg-[#3a3a3a] rounded-md'><FiEdit /></i>
          <i className='h-[25px] w-[25px] p-1 hover:bg-[#3a3a3a] rounded-md'><LuListFilter /></i>
        </div>
      </div>
      <div className="SearchBar">
        <IoIosSearch className='text-lg' onClick={()=>{searchContact()}}/>
        <input className='w-[93%] bg-transparent outline-none' placeholder='Search or start a new chat' value={search} onChange={(e)=>{setSearch(e.target.value)}} />
      </div>
      <div className="ChatList">
        {contact.map((C)=>{
          return <ChatCard key={C.id} id={C.id} name={C.Name} profile={C.Profile} setHome={setHome}/>
        })}
      </div>
    </div>
  )
}
