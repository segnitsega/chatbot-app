import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Welcome Page */}
          <Route path="/login" element={<LoginPage />} /> {/* Login Page */}
          <Route path="/signup" element={<SignupPage />} /> {/* Signup Page */}
          <Route path="/chat" element={<ChatPage />} /> {/* Chat Page */}
          <Route path="*" element={<HomePage />} /> {/* Redirect invalid routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
