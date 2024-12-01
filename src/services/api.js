import axios from "axios";

const BASE_URL = "http://localhost:5000"; // Update as needed

// API for user login
export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/auth/login`, { username, password });
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
    const response = await axios.post(`${BASE_URL}/api/auth/signup`, { username, password });
    return response.data; // Successful signup response
  } catch (error) {
    const errorMessage = error.response?.data?.msg || "Signup failed due to an unknown error";
    console.error("Signup error:", errorMessage);
    throw new Error(errorMessage);
  }
};

// API for chatbot messages
export const sendMessageToChatbot = async (message) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/chat`, { message });
    return response.data;
  } catch (error) {
    console.error("Chatbot message error:", error.response?.data || error.message);
    throw error.response?.data || { msg: "Error interacting with chatbot" };
  }
};
