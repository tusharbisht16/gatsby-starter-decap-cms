import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import { BsTelephone } from 'react-icons/bs';

const SpinningContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);
  
  useEffect(() => {
    // Show the "Contact us" hint after 2 seconds of inactivity
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowHint(true);
      }
    }, 2000);
    
    // Hide the hint when user scrolls
    const hideHintOnScroll = () => {
      setShowHint(false);
      
      // Reset the timer when scrolling stops
      setTimeout(() => {
        if (!isOpen) {
          setShowHint(true);
        }
      }, 2000);
    };
    
    window.addEventListener('scroll', hideHintOnScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', hideHintOnScroll);
    };
  }, [isOpen]);

  // Hide hint when contact menu is opened
  useEffect(() => {
    if (isOpen) {
      setShowHint(false);
    }
  }, [isOpen]);

  return (
    <div className="fixed right-8 bottom-20 -translate-y-1/2 z-50">
      <div className="relative w-12">
        {/* Contact Us Hint - Only shows when closed and after 2 seconds */}
        {showHint && !isOpen && (
          <div className="absolute -top-12 right-0 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg whitespace-nowrap">
            Contact us
            <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-4 h-4 bg-white"></div>
          </div>
        )}
      
        {/* Main Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`absolute right-0 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 shadow-lg transition-all duration-500 ${isOpen ? 'rotate-180' : ''}`}
        >
          {isOpen ? <IoClose size={22} /> : <BsTelephone size={22} />}
        </button>

        {/* WhatsApp Button */}
        <button
          onClick={() => window.open('//wa.me/9225385403', '_blank')}
          className={`absolute right-0 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition-all duration-500 ${
            isOpen ? '-translate-y-16' : 'translate-y-0 opacity-0 pointer-events-none'
          }`}
        >
          <FaWhatsapp size={22} />
        </button>

        {/* Email Button */}
        <button
          onClick={() => window.location.href = 'mailto:info@riddhisiddhitrader.com'}
          className={`absolute right-0 bg-red-500 hover:bg-red-600 text-white rounded-full p-3 shadow-lg transition-all duration-500 ${
            isOpen ? '-translate-y-32' : 'translate-y-0 opacity-0 pointer-events-none'
          }`}
        >
          <HiMail size={22} />
        </button>
      </div>
    </div>
  );
};

export default SpinningContact;