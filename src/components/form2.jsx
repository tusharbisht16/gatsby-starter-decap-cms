import React from 'react';

const RequirementsForm2 = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-500 to-green-600 bg-opacity-90 py-12 px-4 sm:px-6 lg:px-8" 
         style={{
           backgroundImage: "url('/api/placeholder/1920/1080')",
           backgroundBlend: 'overlay',
           backgroundSize: 'cover',
           backgroundPosition: 'center'
         }}>
      <div className="max-w-7xl mx-auto lg:flex lg:items-center lg:gap-12">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-2xl font-bold mb-2 text-black">Stay Ahead with Us</h1>
          <h2 className="text-4xl font-bold text-green-800">Submit Your Requirements Here...</h2>
        </div>
        
        <div className="lg:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-6 bg-white/90 rounded-lg p-8 shadow-xl">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                placeholder="Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                placeholder="Email"
              />
            </div>

            <div>
              <label htmlFor="requirements" className="block text-lg font-medium text-gray-700">Requirements</label>
              <textarea
                id="requirements"
                name="requirements"
                rows={4}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                placeholder="Product Requirements"
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 rounded-md shadow-sm text-lg font-medium text-white bg-green-800 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequirementsForm2;