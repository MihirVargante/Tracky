import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "user@example.com" && password === "password") {
      onLogin();
      navigate("/"); // Navigate to Home after login
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center w-[500px] bg-gray-50">
      <div className="bg-white rounded-lg shadow-lg w-full">
      <div className="relative bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 h-24 flex items-center justify-center">
          <h2 className="text-2xl font-semibold text-white text-center">
            Welcome Back
          </h2>
        </div>
        <div className="p-8">
        <p className="text-sm text-gray-600 mb-6 text-center">
          Sign in to access your account
        </p>
        <form onSubmit={handleSubmit}>
        <div className="mb-6 relative ">
            <input
              id="email"
              type="email"
              className="block w-full p-3 pl-10 text-sm border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span className="absolute top-3.5 left-3 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM2.25 12a9.75 9.75 0 0119.5 0M12 21.75a9.75 9.75 0 010-19.5"
                />
              </svg>
            </span>
          </div>
          
          {/* Password Field */}
          <div className="mb-6 relative">
            <input
              id="password"
              type="password"
              className="block w-full p-3 pl-10 text-sm border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="absolute top-3.5 left-3 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 12v.01m6.364-6.364A9 9 0 1112 3a9 9 0 016.364 2.636zM15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </span>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 text-sm bg-teal-600 text-white rounded-md hover:bg-teal-700 transition duration-150"
          >
            Login
          </button>
        </form>

        {/* Navigation to Sign Up */}
        <p className="text-sm text-gray-500 mt-4 text-center">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="text-indigo-600 hover:underline"
          >
            Sign Up
          </button>
        </p>
        <p className="text-xs text-gray-500 mt-4 text-center">
          By logging in, you agree to our Terms and Privacy Policy.
        </p>

        </div>

        
      </div>
    </div>
  );
};

export default Login;
