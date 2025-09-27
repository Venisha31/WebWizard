import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token
    if (onLogout) onLogout();         // Update App state
    navigate("/login");               // Redirect to login
  };

  return (
    <nav className="navbar">
      <h1>Notes App</h1>
      <button className="danger" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
