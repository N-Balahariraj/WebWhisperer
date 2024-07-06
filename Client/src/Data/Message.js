export let Chats;

export const loadChats = async (id) => {
  try {
    const res = await fetch(`http://localhost:4500/getChats/${id}`);
    const chats = await res.json()
    Chats = chats;
    console.log("Chats successfully retrived");
  } catch (error) {
    console.log(error);
  }
};

export const pushChats = async (senderId, receiverId, text) => {
  try {
    const res = await fetch("https://webwhisperer.onrender.com/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        senderId,
        receiverId,
        text,
      }),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};

