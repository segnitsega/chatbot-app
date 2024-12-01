// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const SignupPage = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSignup = (e) => {
//     e.preventDefault();
//     // Add signup logic here
//     navigate("/login");
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <h1 className="text-3xl font-bold mb-6">Sign Up</h1>
//       <form className="w-96 bg-white p-6 shadow-md rounded-md" onSubmit={handleSignup}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           className="w-full mb-4 px-4 py-2 border rounded-md"
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full mb-4 px-4 py-2 border rounded-md"
//           required
//         />
//         <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-md">
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SignupPage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../services/api"; // Import the signup API function

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // Make the signup API call
      await signupUser(username, password);
      navigate("/login"); // Redirect to the login page after successful signup
    } catch (error) {
      console.error("Signup failed:", error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Sign Up</h1>
      <form className="w-96 bg-white p-6 shadow-md rounded-md" onSubmit={handleSignup}>
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
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
