// React Imports
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Components
import App from "./App.jsx";
import Messages from "./Components/Chats/ChatScreen.jsx";
import CallScreen from "./Components/Calls/CallScreen.jsx";
import StatusScreen from "./Components/Status/StatusScreen.jsx";
import Login from "./Components/Login/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Messages />,
      },
      {
        path: "/",
        element: <Login />,
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
