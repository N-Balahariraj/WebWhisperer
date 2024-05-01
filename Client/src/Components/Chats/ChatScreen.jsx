// Libraries
import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

// Components
import Contact from "./Contacts";
import Chat from "./Chats";
import Home from "../Home";
import { loadChats } from "../../Data/Message";

export default function Messages() {
  const [contactId, setId] = useState(0);
  const [isAuthenticated] = useOutletContext();

  useEffect(() => {
    loadChats(isAuthenticated);
  }, []);

  return (
    <div className="Box">
      <Contact setId={setId} myId={isAuthenticated} />
      {contactId ? <Chat id={contactId} myId={isAuthenticated} /> : <Home />}
    </div>
  );
}
