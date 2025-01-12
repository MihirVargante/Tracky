import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = ({ onSignUp }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Dummy logic for sign-up
    if (name && email && password) {
      onSignUp();
      alert("Account created successfully!");
      navigate("/login"); // Navigate to Login after successful sign-up
    } else {
      alert("Please fill all the fields correctly.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white rounded-lg shadow-lg w-[500px] overflow-hidden">
        {/* Top Header */}
        <div className="relative bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 h-24 flex items-center justify-center">
  <h2 className="text-2xl font-bold text-white">
    Create an Account
  </h2>
        </div>

        {/* Sign-Up Form */}
        <div className="p-8">
          <p className="text-sm text-gray-600 mb-6 text-center">
            Join us to get started!
          </p>
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-6 relative">
              <input
                id="name"
                type="text"
                className="block w-full p-3 pl-10 text-sm border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                    d="M16 17a4 4 0 00-8 0M12 5a3 3 0 110 6 3 3 0 010-6z"
                  />
                </svg>
              </span>
            </div>

            {/* Email Field */}
            <div className="mb-6 relative">
              <input
                id="email"
                type="email"
                className="block w-full p-3 pl-10 text-sm border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400"
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
                className="block w-full p-3 pl-10 text-sm border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400"
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

            {/* Confirm Password Field */}
            <div className="mb-6 relative">
              <input
                id="confirmPassword"
                type="password"
                className="block w-full p-3 pl-10 text-sm border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 text-sm bg-teal-600 text-white rounded-md hover:bg-teal-700 transition duration-150"
            >
              Sign Up
            </button>
          </form>

          {/* Footer */}
          <p className="text-xs text-gray-500 mt-6 text-center">
            Already have an account?{" "}
            <a href="/login" className="text-indigo-600 hover:underline">
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
