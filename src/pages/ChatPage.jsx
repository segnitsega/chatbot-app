
import { useState } from "react";
import { sendMessageToAI } from "../services/api"; // Import API function to interact with the backend

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

 

  const handleSend = async () => {
    if (input.trim() !== "") {
      // Add user message to the message list
      setMessages([...messages, { sender: "user", text: input }]);

      setIsTyping(true);

      try {
        
        setInput("");
        const response = await sendMessageToAI(input);

        setIsTyping(false);

        
        setMessages((prev) => [...prev, { sender: "bot", text: response }]);
      } catch (error) {
        console.error("Error fetching AI response:", error);
        
        setMessages((prev) => [...prev, { sender: "bot", text: "Sorry, I couldn't get a response. Please try again." }]);
      }

      
    }

    
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); 
      handleSend(); 
    }
  }
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-slate-900 text-white">
        <h1 className="fixed w-full bg-slate-900 text-3xl py-4 flex justify-center">Generative AI Chatbot</h1>
      </header>
      <div className="flex-1 p-6 overflow-y-auto bg-slate-800">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-4 ${msg.sender === "user" ? "text-right" : "text-left"}`}
          >
            <div className={`inline-block px-4 py-2 rounded-md ${msg.sender === "user" ? "bg-blue-500 text-white mr-12 mt-16" : "bg-gray-300 ml-32 mr-80 mb-8"}`}>

              {msg.text}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="text-left ml-32 mb-4">
            <div className="font-bold inline-block text-blue-500 rounded-md">
              Typing ...
            </div>
          </div>
        )}

      </div>
      <footer className="fixed bottom-0 right-0 left-0 bg-slate-800 p-4 flex items-center ">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          className="position-fixed  focus:outline-none border-none  focus:ring-2 focus:ring-blue-600 p-2 flex-1 px-4 border rounded-lg ml-32"

        />
        <button onClick={handleSend} className="ml-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mr-12">
          Send
        </button>
      </footer>
    </div>
  );
};

export default ChatPage;
