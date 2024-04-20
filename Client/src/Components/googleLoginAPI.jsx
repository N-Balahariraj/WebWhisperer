import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
// import axios from "axios";

export default function GoogleLogin({ authenticate }) {
  // Handling successfull Login
  const handleSuccess = async (code) => {

    // Send a POST request to the backend
    try {
      const response = await fetch("http://localhost:4500/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({code : code}),
      })
      if(!response.ok){
        console.log("User not authorized")
        return
      }
      const data = await response.json()
      console.log(data)
      authenticate(true)
    } 
    // Catch for errors
    catch (error) {
      console.log(error)
    }
      
  };

  // Handling error on Login
  const handleError = (err) => {
    console.log(
      "ErrorCode : ",err.error,
      "\nMessage : ",err.message,
      "\nDescription : ",err.details,
      "\nError : ",err
    );
  };

  const Login = useGoogleLogin({
    onSuccess: ({ code }) => {
      handleSuccess(code);
    },
    flow: "auth-code",
    onError: (err) => {
      handleError(err);
    },
  });

  return <button onClick={() => Login()}>LogIn with Google </button>;
}
