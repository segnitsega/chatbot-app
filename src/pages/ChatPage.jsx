
import { useState } from "react";
import { sendMessageToAI } from "../services/api"; // Import API function to interact with the backend

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (input.trim() !== "") {
      // Add user message to the message list
      setMessages([...messages, { sender: "user", text: input }]);

      try {
        // Send message to the backend to get AI's response
        const response = await sendMessageToAI(input);

        // Add AI response to the message list
        setMessages((prev) => [...prev, { sender: "bot", text: response }]);
      } catch (error) {
        console.error("Error fetching AI response:", error);
        // Optionally, you can show an error message to the user
        setMessages((prev) => [...prev, { sender: "bot", text: "Sorry, I couldn't get a response. Please try again." }]);
      }

      // Clear input field
      setInput("");
    }

    
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent the default behavior (e.g., new line in text area)
      handleSend(); // Call handleSend function when Enter key is pressed
    }
  }
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-slate-900 text-white">
        <h1 className="fixed w-full bg-slate-900 text-2xl">Generative AI Chatbot</h1>
      </header>
      <div className="flex-1 p-6 overflow-y-auto bg-slate-800">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-4 ${msg.sender === "user" ? "text-right" : "text-left"}`}
          >
            <div className={`inline-block px-4 py-2 rounded-md ${msg.sender === "user" ? "bg-blue-500 text-white mr-12 mt-4" : "bg-gray-300 ml-32 mr-80"}`}>

              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <footer className="fixed bottom-0 right-0 left-0 bg-slate-800 p-4 flex items-center ">
        <textarea
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          className="position-fixed  focus:outline-none focus:ring-2 focus:ring-blue-600 p-4 flex-1 px-4 border rounded-lg ml-32"

        />
        <button onClick={handleSend} className="ml-4 px-6 py-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 mr-12">
          Send
        </button>
      </footer>
    </div>
  );
};

export default ChatPage;
