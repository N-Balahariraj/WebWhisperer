let ContactList = [
  {
    _id: 1,
    profilePic: "/Profile/photo.jpg",
    name: "N.Balahariraj",
  },
  {
    _id: 2,
    profilePic: "/Profile/Gokulan.png",
    name: "Gokulan S B",
  },
  {
    _id: 3,
    profilePic: "/Profile/Vijay.png",
    name: "Vijay S",
  },
];

const userDetails = async () => {
  try {
    const res = await fetch("http://localhost:4500/users");
    const data = await res.json();
    if(data){
      ContactList.length = 0;
      ContactList.push(...data)
    }
    // console.log(ContactList);
  } 
  catch (error) {
    console.log("Error while API fetching the data : \n", error);
  }
};


userDetails();

export default ContactList;
