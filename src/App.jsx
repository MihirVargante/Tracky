import React, { useState } from "react";
import Home from './components/Home'
import { useSelector, useDispatch } from "react-redux";
import Login from './components/Login'
import SignUp from './components/Signup'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);

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
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <>
      {/* Render Navbar only when the user is logged in */}
      {currentUser && <Navbar onLogout={handleLogout} />}
      <Routes>
        {/* Login Page */}
        <Route
          path="/login"
          element={
            currentUser ? <Navigate to="/" /> : <Login/>
          }
        />

          {/* SignUp Page */}
        <Route
          path="/signup"
          element={
            currentUser ? <Navigate to="/" /> : <SignUp />
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
