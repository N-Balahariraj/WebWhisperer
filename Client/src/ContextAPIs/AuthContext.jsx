import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";

export const AuthContext = createContext({
  isAuthenticated: false,
  user: {},
  login() {},
  logout() {},
});

async function loginApi(code) {
  try {
    const response = await fetch("http://localhost:5000/auth/google", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code: code }),
    });

    if (!response.ok) {
      throw new Error("User not authorized");
    }

    const data = await response.json();
    // console.log(data.details)
    return data.details;
  } catch (error) {
    console.log(error);
  }
}

export function AuthContextProvider({ children }) {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    user: {},
  });

  const login = useGoogleLogin({
    onSuccess: ({ code }) => {
      handleSuccess(code);
    },
    flow: "auth-code",
    onError: (err) => {
      handleError(err);
    },
  });

  // Handling success on Login
  const handleSuccess = async (code) => {
    // Send a POST request to the backend
    const user = await loginApi(code);
    // Storing the user data in localStorage
    localStorage.setItem("user", JSON.stringify(user));
    // Set Authenticatication status to true
    setAuthState({
      isAuthenticated: true,
      user,
    });
  };

  // Handling error on Login
  const handleError = (err) => {
    console.log(
      "ErrorCode : ",
      err.error,
      "\nMessage : ",
      err.message,
      "\nDescription : ",
      err.details,
      "\nError : ",
      err
    );
  };

  const logout = () => {
    localStorage.removeItem("user");
  };

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;
    setAuthState({
      isAuthenticated: true,
      user,
    });
  }, []);

  const ctxValue = {
    ...authState,
    login,
    logout,
  };

  console.log(ctxValue)

  return (
    <AuthContext.Provider value={ctxValue}>{children}</AuthContext.Provider>
  );
}

export default function useAuth(){
    return useContext(AuthContext)
}
