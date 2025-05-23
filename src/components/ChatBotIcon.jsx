import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Using WhatsApp icon from react-icons

const ChatBotIcon = () => {
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  const handleChatClick = () => {
    // Replace with your WhatsApp link
    const whatsappLink = "https://wa.me/919958219958"; // Updated with your WhatsApp number
    window.open(whatsappLink, "_blank");
  };

  return (
    <div 
      onClick={handleChatClick} 
      onMouseEnter={() => setIsHovered(true)} // Show hover effect on mouse enter
      onMouseLeave={() => setIsHovered(false)} // Hide hover effect on mouse leave
      className={`fixed right-0 bottom-0 transform mb-4 mr-4 bg-green-500 text-white p-4 rounded-full shadow-lg cursor-pointer transition-transform duration-300 ${
        isHovered ? "scale-110" : "scale-100"
      }`} 
    >
      <FaWhatsapp className="w-8 h-8" />
    </div>
  );
};

export default ChatBotIcon;
