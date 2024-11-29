import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
      <h1 className="text-4xl font-bold mb-6">Welcome to Generative AI Chatbot</h1>
      <p className="mb-4 text-lg">Your personal AI assistant for seamless conversations!</p>
      <div className="flex space-x-4">
        <Link to="/login" className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-700">
          Login
        </Link>
        <Link to="/signup" className="px-6 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-900">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
