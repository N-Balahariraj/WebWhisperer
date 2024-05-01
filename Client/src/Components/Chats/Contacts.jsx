import React, { useState } from "react";
import ContactList from "../../Data/Contacts";
import { IoIosSearch } from "react-icons/io";
import { LuListFilter } from "react-icons/lu";
import { FiEdit } from "react-icons/fi";
import ContactCard from "./ContactCard";

export default function Contact({ setId, myId }) {
  const [search, setSearch] = useState("");
  const [contacts, setContacts] = useState(ContactList);

  function searchContact() {
    const Filter = ContactList.filter((C) => {
      return C.name.toLowerCase().includes(search.toLowerCase());
    });
    setContacts(Filter);
  }

  return (
    <div className="Contacts">
      <div className=" flex justify-between items-center w-[100%] h-[5%]">
        <h2 className="text-xl font-semibold w-[85%]">Chats</h2>
        <div className="flex justify-between w-[15%]">
          <i className="h-[25px] w-[25px] p-1 hover:bg-[#3a3a3a] rounded-md">
            <FiEdit />
          </i>
          <i className="h-[25px] w-[25px] p-1 hover:bg-[#3a3a3a] rounded-md">
            <LuListFilter />
          </i>
        </div>
      </div>
      <div className="SearchBar">
        <IoIosSearch
          className="text-lg"
          onClick={() => {
            searchContact();
          }}
        />
        <input
          className="w-[93%] bg-transparent outline-none"
          placeholder="Search or start a new chat"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className="ContactList">
        {contacts
          .filter((contact) => contact._id !== myId)
          .map((C) => {
            return (
              <ContactCard
                key={C._id}
                id={C._id}
                name={C.name}
                profile={C.profilePic}
                setId={setId}
              />
            );
          })}
      </div>
    </div>
  );
}
