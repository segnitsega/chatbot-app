
import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Welcome to the AI Chatbot!
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Start chatting with our advanced AI by logging in or signing up.
        </p>
        <div>
          <Link to="/login" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 mr-4">
            Login
          </Link>
          <Link to="/signup" className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
