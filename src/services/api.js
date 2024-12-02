import axios from "axios";

const BASE_URL = "http://localhost:5000/api"; // Update as needed

// API for user login
export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, { username, password });
    return response.data; // Successful login response
  } catch (error) {
    const errorMessage = error.response?.data?.msg || "Login failed due to an unknown error";
    console.error("Login error:", errorMessage);
    throw new Error(errorMessage);
  }
};

// API for user signup
export const signupUser = async (username, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/signup`, { username, password });
    return response.data; // Successful signup response
  } catch (error) {
    const errorMessage = error.response?.data?.msg || "Signup failed due to an unknown error";
    console.error("Signup error:", errorMessage);
    throw new Error(errorMessage);
  }
};



// Function to send the chat message to the backend
export const sendMessageToAI = async (message) => {
  try {
    const token = localStorage.getItem("authToken"); // Retrieve token from storage
    const response = await axios.post(`${BASE_URL}/chat/send`, { message },
      {
        headers: {
          Authorization: `Bearer ${token}`, // Attach token
        },
      }
    );

    return response.data.response;
  } catch (error) {
    console.error("Error fetching AI response:", error);
    throw new Error("Failed to get AI response");
  }
};
