// React Imports
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./ContextAPIs/AuthContext.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

// Components
import App from "./App.jsx";
import Messages from "./Components/Chats/ChatScreen.jsx";
import CallScreen from "./Components/Calls/CallScreen.jsx";
import StatusScreen from "./Components/Status/StatusScreen.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <GoogleOAuthProvider clientId="748177157900-9glch6e1n7dk5ter1b8i1qn1ee5edkib.apps.googleusercontent.com">
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </GoogleOAuthProvider>
    ),
    children: [
      {
        path: "/",
        element: <Messages />,
      },
      {
        path: "calls",
        element: <CallScreen />,
      },
      {
        path: "status",
        element: <StatusScreen />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
