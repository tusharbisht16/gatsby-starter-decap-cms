import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import img2 from "../img/singleCardBg.png"
const ContactForm = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      {/* Header Section */}

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side - Image */}
        <div className="lg:w-1/2">
          <div className="relative h-64 lg:h-full">
            <img 
              src={img2}
              alt="World map digital visualization"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="lg:w-1/2">
        <div className=" mb-8">
        <h2 className="text-2xl font-bold mb-2">Get In Touch</h2>
        <div className="text-red-700">
          <h3 className="text-xl font-semibold">Any Question?</h3>
          <p className="text-lg">Write Down And Send Us</p>
        </div>
      </div>
          <form className="space-y-4">
            <div>
              <input 
                type="text"
                placeholder="Full Name*"
                className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <input 
                type="email"
                placeholder="Email Address*"
                className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <input 
                type="tel"
                placeholder="Phone Number*"
                className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <textarea 
                placeholder="Enter your message..."
                rows={6}
                className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button 
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors"
            >
              Send Message
            </button>
          </form>

          {/* Contact Information Cards */}
         
        </div>
        
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-red-700" />
                <span className="font-semibold">Main Office</span>
              </div>
              <p className="mt-2 text-sm">Office No 08, Kharadi, Pune, Maharashtra Pin: 411014</p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-red-700" />
                <span className="font-semibold">Make a Call</span>
              </div>
              <p className="mt-2 text-sm">+91 72489 10614</p>
              <p className="text-sm">+91 65954 97007</p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-red-700" />
                <span className="font-semibold">Send a Mail</span>
              </div>
              <p className="mt-2 text-sm">info@example.com</p>
              <p className="text-sm">enquiry@example.com</p>
            </div>
          </div>
    </div>
  );
};

export default ContactForm;