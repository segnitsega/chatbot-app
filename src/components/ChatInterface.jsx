import React, { useState } from 'react';
import { sendMessageToChatbot } from '../services/api';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleSendMessage = async () => {
    if (userInput.trim() === '') return;

    // Display the user's message
    setMessages((prevMessages) => [...prevMessages, { text: userInput, sender: 'user' }]);
    
    try {
      // Send message to the chatbot
      const response = await sendMessageToChatbot(userInput);

      // Display the chatbot's response
      setMessages((prevMessages) => [...prevMessages, { text: response.response, sender: 'bot' }]);
    } catch (error) {
      setMessages((prevMessages) => [...prevMessages, { text: error.message, sender: 'bot' }]);
    }

    setUserInput('');
  };

  return (
    <div className="flex flex-col p-4 space-y-4 bg-gray-100 h-full">
      <div className="flex-grow overflow-auto bg-white p-4 rounded-md shadow-md">
        {messages.map((msg, index) => (
          <div key={index} className={`text-left ${msg.sender === 'user' ? 'text-blue-600' : 'text-gray-800'}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          className="border border-gray-300 p-2 w-full rounded-md"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button
          className="bg-blue-500 text-white p-2 rounded-md"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;
