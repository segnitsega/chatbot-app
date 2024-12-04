import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../services/api"; 

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(" ");


  const validateInputs = () => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Invalid email format.");
      return false;
    }
    if (username.length < 4) {
      setErrorMessage("Username must be at least 4 characters long.");
      return false;
    }
    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long.");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!validateInputs()) return;

    try {
      await signupUser({username, email, password});
      navigate("/login"); 
    } catch (error) {
      setErrorMessage("Signup failed. Please try again.");
      console.error("Signup failed:", error.message);
    }
  };



  return (
    <div className="bg-slate-800 bg-cover min-h-screen flex flex-col items-center justify-center">
      <h1 className="mb-4 text-4xl font-bold text-blue-600">Sign Up</h1>
      <form className="bg-slate-700 w-96 p-6 shadow-md rounded-md" onSubmit={handleSignup}>

        {errorMessage && (
          <p className="mb-4 text-red-500 text-center">{errorMessage}</p>
        )}

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
