// Libraries
import React, { useState, useEffect } from "react";

// Components
import Contacts from "./Contacts";
import Chats from "./Chats";
import Home from "../Home";
import { loadChats } from "../../Data/Message";
import useAuth from "../../ContextAPIs/AuthContext";

export default function Messages() {
  const myId = useAuth().user?._id
  const [contactId, setId] = useState(0);

  useEffect(() => {
    loadChats(myId);
  }, []);

  return (
    <div className="Box">
      <Contacts setId={setId} myId={myId}/>
      {contactId ? <Chats id={contactId} myId={myId}/> : <Home />}
    </div>
  );
}
