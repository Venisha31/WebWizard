import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Notes from "./pages/Notes";

const App = () => {
  const [token, setToken] = useState(null);

  // Load token from localStorage on mount
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) setToken(storedToken);
  }, []);

  // Logout callback
  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <Routes>
      {/* Notes page - accessible only if logged in */}
      <Route
        path="/"
        element={token ? <Notes onLogout={handleLogout} /> : <Navigate to="/login" />}
      />

      {/* Login page */}
      <Route
        path="/login"
        element={!token ? <Login onLogin={(t) => setToken(t)} /> : <Navigate to="/" />}
      />

      {/* Register page */}
      <Route
        path="/register"
        element={!token ? <Register /> : <Navigate to="/" />}
      />

      {/* Catch-all redirect */}
      <Route path="*" element={<Navigate to={token ? "/" : "/login"} />} />
    </Routes>
  );
};

export default App;
