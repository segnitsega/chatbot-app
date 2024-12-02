

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api"; // Import login API function

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(username, password);
      // Save token to localStorage or context for use in protected routes
      localStorage.setItem("authToken", data.token); 
      navigate("/chat"); // Redirect to the chat page after successful login
    } catch (error) {
      // console.error("Login failed:", error.message);
      setErrorMessage(error.message);
    }
  };
  //oauth
  const handleOAuthLogin = () => {
    window.location.href = "http://localhost:5000/api/auth/google/login"; // Redirect to backend OAuth route
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
      <form className="w-96 bg-white p-6 shadow-md rounded-md" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-md"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-md"
          required
        />
        <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-md">
          Login
        </button>
      </form>
      {/* Google OAuth Button */}
      <button
        onClick={handleOAuthLogin}
        className="w-96 mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Login with Google
      </button>
    </div>
  );
};

export default LoginPage;
