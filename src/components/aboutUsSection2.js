import React from 'react';
import img2 from "../img/aboutUs.jpeg"
import img from "../img/aboutUs.jpeg"
const HindaviHero = ({ 
  // heroImage, 
  title, 
  paragraphs 
}) => {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-orange-100 min-h-screen p-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 py-12">
        {/* Logo Section */}
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="w-64 h-64 flex items-center justify-center">
            <div className="relative lg:h-full ">
              <img 
                src={img}
                alt="World map digital visualization"
                className="w-full h-full object-cover rounded-[10%]"
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-2/3">
          <h1 className="text-4xl font-bold text-red-800 mb-6">
            {title}
          </h1>
          
          <div className="space-y-6 text-gray-800">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HindaviHero;