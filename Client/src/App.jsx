import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'

function App() {
  
  const [home,setHome] = useState(true)

  return (
    <div className='App'>
      <Navbar/>
      <Outlet/>
    </div>
  )
}
export default App
