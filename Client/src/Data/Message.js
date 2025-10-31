export let chatsData;

export const loadChats = async (id) => {
  try {
    const res = await fetch(`http://localhost:5000/getChats/${id}`);
    const chats = await res.json()
    chatsData = chats;
    console.log("chatsData successfully retrived",chatsData);
  } catch (error) {
    console.log(error);
  }
};

export const pushChats = async (senderId, receiverId, text) => {
  try {
    const res = await fetch("http://localhost:5000/chat", {
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

