import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Messages from './Components/Messages.jsx'
import CallScreen from './Components/CallScreen.jsx'
import StatusScreen from './Components/StatusScreen.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Messages/>
      },
      {
        path:"call",
        element:<CallScreen />
      },
      {
        path:"status",
        element:<StatusScreen/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

