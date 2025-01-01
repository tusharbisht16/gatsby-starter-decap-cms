import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, X } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const SpinningContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-8 bottom-20 -translate-y-1/2 z-50">
      <div className="relative w-12">
        {/* Main Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`absolute right-0 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 shadow-lg transition-all duration-500 ${isOpen ? 'rotate-180' : ''}`}
        >
          {isOpen ? <X size={24} /> : <Phone size={24} />}
        </button>

        {/* WhatsApp Button */}
        <button
          onClick={() => window.open('https://wa.me/YOUR_NUMBER', '_blank')}
          className={`absolute right-0 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition-all duration-500 ${
            isOpen ? '-translate-y-16' : 'translate-y-0 opacity-0 pointer-events-none'
          }`}
        >
            
            <FontAwesomeIcon icon={['fab', 'whatsapp']} />
          {/* <MessageCircle size={24} /> */}
        </button>

        {/* Email Button */}
        <button
          onClick={() => window.location.href = 'mailto:your@email.com'}
          className={`absolute right-0 bg-red-500 hover:bg-red-600 text-white rounded-full p-3 shadow-lg transition-all duration-500 ${
            isOpen ? '-translate-y-32' : 'translate-y-0 opacity-0 pointer-events-none'
          }`}
        >
          <Mail size={24} />
        </button>
      </div>
    </div>
  );
};

export default SpinningContact;