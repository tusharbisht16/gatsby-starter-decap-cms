import React from 'react';

const RequirementsForm = () => {
  return (
    <div className=" bg-lime-500 flex items-center">
      <div className="container mx-auto flex">
        <div className="w-1/2 p-14">
          <h1 className="text-xl font-semibold mb-2">Stay Ahead with Us</h1>
          <h2 className="text-4xl font-bold text-green-800">Submit Your Requirements Here...</h2>
        </div>
        
        <div className="w-1/2 p-8">
          <form className="space-y-2">
            <div>
              <label className="text-sm mb-1 block">Name</label>
              <input
                type="text"
                className="w-full p-2 rounded border focus:outline-none focus:ring-1 focus:ring-green-500"
                placeholder="Name"
              />
            </div>

            <div>
              <label className="text-sm mb-1 block">Email</label>
              <input
                type="email"
                className="w-full p-2 rounded border focus:outline-none focus:ring-1 focus:ring-green-500"
                placeholder="Email"
              />
            </div>

            <div>
              <label className="text-sm mb-1 block">Requirements</label>
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
  );
};

export default RequirementsForm;