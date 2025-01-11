import React, { useState } from "react";
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Login handler
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Logout handler
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Protected Route component
  const ProtectedRoute = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/login" />;
  };
  return (
    <>
      {/* Render Navbar only when the user is logged in */}
      {isLoggedIn && <Navbar onLogout={handleLogout} />}
      <Routes>
        {/* Login Page */}
        <Route
          path="/login"
          element={
            isLoggedIn ? <Navigate to="/" /> : <Login onLogin={handleLogin} />
          }
        />

        {/* Home Page (Protected) */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
      </>
  );
};

export default App;
