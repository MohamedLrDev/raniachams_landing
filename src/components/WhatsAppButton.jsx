import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Replace the phone number with your own
    window.open('https://wa.me/1234567890', '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded flex items-center space-x-2"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="text-white" />
      <span>Chat on WhatsApp</span>
    </button>
  );
};

export default WhatsAppButton;
