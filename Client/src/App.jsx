import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import Login from "./Components/Login";

function App() {
  const [isAuthenticated, setAuthentication] = useState(false);

  return (
    <>
      {isAuthenticated ? (
        <div className="App">
          <Navbar />
          <Outlet />
        </div>
      ) : (
        <Login authenticate={setAuthentication}/>
      )}
    </>
  );
}
export default App;
