import axios from 'axios';

// Base URL for the backend API
const BASE_URL = 'http://localhost:5000'; // Update the port if necessary

// API for user login
export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, { username, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Login failed');
  }
};

// API for chatbot messages
export const sendMessageToChatbot = async (message) => {
  try {
    const response = await axios.post(`${BASE_URL}/chat`, { message });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error interacting with chatbot');
  }
};
