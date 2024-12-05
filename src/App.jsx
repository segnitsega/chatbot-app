import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ChatPage from "./pages/ChatPage";
import WelcomePage from "./pages/WelcomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<WelcomePage />} /> Welcome Page
          <Route path="/login" element={<LoginPage />} /> {/* Login Page */}
          <Route path="/signup" element={<SignupPage />} /> {/* Signup Page */}
          <Route path="/chat" element={<ChatPage />} /> {/* Chat Page */}
          <Route path="*" element={<WelcomePage />} /> {/* Redirect invalid routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
