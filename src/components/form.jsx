import React from 'react';
import bgImage from '../img/fruits.jpeg';
const RequirementsForm = () => {
  return (
    <div className="relative bg-[#36cb2a] flex items-center lg:min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15" 
        style={{
          backgroundImage: `url(${bgImage})`, 
          zIndex: 1
        }}
      />
      
      {/* Transparent Overlay */}
      <div 
        className="absolute inset-0 bg-white bg-opacity-30" 
        style={{ zIndex: 2 }}
      />
      
      {/* Content Container */}
      <div 
        className="container mx-auto px-2 lg:px-4 relative z-10" 
        style={{ zIndex: 3 }}
      >
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-6 md:p-14 text-center md:text-left">
            <h1 className="text-lg md:text-xl font-semibold mb-2">Stay Ahead with Us</h1>
            <h2 className="text-2xl md:text-4xl font-bold text-green-800">Submit Your Requirements Here...</h2>
          </div>
          
          <div className="w-full md:w-1/2 p-6 md:p-8">
            <form className="space-y-4">
              <div>
                <label className="text-[20px] mb-1 block">Name</label>
                <input
                  type="text"
                  className="w-full p-2 rounded border focus:outline-none focus:ring-1 focus:ring-green-500"
                  placeholder="Name"
                />
              </div>

              <div>
                <label className="text-[20px] mb-1 block">Email</label>
                <input
                  type="email"
                  className="w-full p-2 rounded border focus:outline-none focus:ring-1 focus:ring-green-500"
                  placeholder="Email"
                />
              </div>

              <div>
                <label className="text-[20px] mb-1 block">Requirements</label>
                <textarea
                  rows={4}
                  className="w-full p-2 rounded border focus:outline-none focus:ring-1 focus:ring-green-500"
                  placeholder="Product Requirements"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-green-800 text-white rounded hover:bg-green-700 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequirementsForm;