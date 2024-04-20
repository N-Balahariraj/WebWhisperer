// React Imports
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Style Sheets
import "./index.css";

// Components
import App from "./App.jsx";
import Messages from "./Components/Messages.jsx";
import CallScreen from "./Components/CallScreen.jsx";
import StatusScreen from "./Components/StatusScreen.jsx";
import Login from "./Components/Login.jsx";

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
