// Style Sheets
import "./App.css";

// Libraries
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./ContextAPIs/AuthContext.jsx";

// Components
import Navbar from "./Components/Navbar.jsx";
import Login from "./Components/Login/Login.jsx";

function App() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <>
      {isAuthenticated ? (
        <div className="App">
          <Navbar />
          <Outlet />
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}
export default App;
