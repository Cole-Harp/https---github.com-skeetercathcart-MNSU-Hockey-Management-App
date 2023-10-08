'use client'


import useConversation from "@/app/hooks/useConversation";
import { createMessage } from "@/lib/Messages/createMessage";
import { auth } from "@clerk/nextjs";
import React, { useState } from "react";



const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { conversationId } = useConversation()

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    if (message.trim() !== "") {
      createMessage(message);
      setMessage("");
    }

  };

  return (
    <form onSubmit={handleSubmit} className = 'flex absolute w-1/2 bottom-0'>
      <input
        className = 'w-full border-2 border-gray-900 rounded-full px-3'
        type="text"
        placeholder="Type your message here..."
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <button 
      className = 'bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'
      type="submit">
        Send
      </button>
    </form>
  );
};

export default MessageInput;