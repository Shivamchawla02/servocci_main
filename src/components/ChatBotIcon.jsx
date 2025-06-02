import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const ChatBotIcon = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleChatClick = () => {
    const whatsappLink = "https://wa.me/919958219958";
    window.open(whatsappLink, "_blank");
  };

  return (
    <div 
      onClick={handleChatClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ zIndex: 9999 }} // Ensure it's above everything
      className={`fixed right-0 bottom-0 transform mb-4 mr-4 bg-green-500 text-white p-4 rounded-full shadow-lg cursor-pointer transition-transform duration-300 ${
        isHovered ? "scale-110" : "scale-100"
      }`}
    >
      <FaWhatsapp className="w-8 h-8" />
    </div>
  );
};

export default ChatBotIcon;
