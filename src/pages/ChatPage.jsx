import React, { useState } from "react";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { sender: "user", text: input }]);
      setMessages((prev) => [...prev, { sender: "bot", text: "AI response to: " + input }]);
      setInput("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-blue-500 text-white px-6 py-4">
        <h1 className="text-2xl">Generative AI Chatbot</h1>
      </header>
      <div className="flex-1 p-6 overflow-y-auto bg-white">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-4 ${msg.sender === "user" ? "text-right" : "text-left"}`}
          >
            <div className={`inline-block px-4 py-2 rounded-md ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-300"}`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <footer className="p-4 bg-gray-200 flex items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 border rounded-md"
        />
        <button onClick={handleSend} className="ml-4 px-6 py-2 bg-blue-500 text-white rounded-md">
          Send
        </button>
      </footer>
    </div>
  );
};

export default ChatPage;