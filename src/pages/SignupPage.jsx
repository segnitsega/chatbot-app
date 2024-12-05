import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../services/api"; 

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await signupUser(username, password);
      setErrorMessage("");
      navigate("/login"); 
    } catch (error) {
      console.error("Signup failed:", error.message);
      setErrorMessage(error.message);
    }
  };



  return (
    <div className="bg-slate-800 bg-cover min-h-screen flex flex-col items-center justify-center">
      <h1 className="mb-4 text-4xl font-bold text-blue-600">Sign Up</h1>

      {errorMessage && (
        <div className="mb-4 text-red-500 text-center font-semibold">
          {errorMessage}
        </div>
      )}

      <form className="bg-slate-700 w-96 p-6 shadow-md rounded-md" onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mb-4 px-4 py-2 border rounded-md"
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="focus:outline-none focus:ring-2 focus:ring-blue-700 w-full mb-4 px-4 py-2 border rounded-md"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="focus:outline-none focus:ring-2 focus:ring-blue-700 w-full mb-4 px-4 py-2 border rounded-md"
          required
        />
        <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Sign Up
        </button>
      </form>
       
    </div>
  );
};

export default SignupPage;