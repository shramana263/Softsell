import React, { useState } from "react";
import { getChatResponse } from "../geminiService";
import { IoMdClose } from "react-icons/io";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const exampleQuestions = [
  "How do I sell my license?",
  "What is the refund policy?",
  "How do I contact support?",
];

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: "Hello! I'm here to help with your questions about licenses. Try asking something like 'How do I sell my license?'",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    const response = await getChatResponse(input);
    const assistantMessage: ChatMessage = { role: "assistant", content: response };
    setMessages((prev) => [...prev, assistantMessage]);
    setIsTyping(false);
  };

  const handleExampleClick = async (question: string) => {
    setInput(question);
    await handleSend();
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-teal-600 text-white p-4 rounded-full shadow-lg hover:bg-teal-700 transition"
      >
        {isOpen ? <IoMdClose /> : <IoChatbubbleEllipsesOutline />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 h-[500px] bg-white rounded-lg shadow-xl flex flex-col mt-2">
          {/* Header */}
          <div className="bg-teal-600 text-white p-3 rounded-t-lg">
            <h2 className="text-lg font-semibold">Customer Support</h2>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-3 ${
                  msg.role === "user" ? "text-right" : "text-left"
                }`}
              >
                <span
                  className={`inline-block p-2 rounded-lg ${
                    msg.role === "user"
                      ? "bg-teal-100 text-teal-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {msg.content}
                </span>
              </div>
            ))}
            {isTyping && (
              <div className="text-left">
                <span className="inline-block p-2 bg-gray-100 text-gray-800 rounded-lg">
                  Typing...
                </span>
              </div>
            )}
          </div>

          {/* Example Questions */}
          <div className="p-4 border-t">
            <div className="flex flex-wrap gap-2">
              {exampleQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleExampleClick(question)}
                  className="text-sm bg-gray-200 text-gray-700 px-2 py-1 rounded hover:bg-gray-300"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your question..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
              <button
                onClick={handleSend}
                className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;