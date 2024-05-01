// Style Sheets
import "./App.css";

// Libraries
import { useState } from "react";
import { Outlet } from "react-router-dom";

// Components
import Navbar from "./Components/Navbar.jsx";
import Login from "./Components/Login/Login.jsx";

function App() {
  const [isAuthenticated, setAuthentication] = useState("");

  return (
    <>
      {isAuthenticated ? (
        <div className="App">
          <Navbar />
          <Outlet context={[isAuthenticated]}/>
        </div>
      ) : (
        <Login authenticate={setAuthentication}/>
      )}
    </>
  );
}
export default App;
