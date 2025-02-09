import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
const CategoryCards = ({categories}) => {
 

  return (
    <div className="w-full my-[100px] max-w-7xl mx-auto px-4">
      <h1 className='text-center text-[28px] font-bold mb-[70px]'>Hello Aryan</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((category) => (
          <div 
            key={category.id} 
            className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="h-48">
              
              <GatsbyImage
                image={category.image}
                alt={category.alt}
                className="w-full h-full object-cover"
                loading='lazy'
              />
              
            </div>
            <div className="p-4 bg-white">
              <h3 className="text-xl font-bold text-center text-gray-800">
                {category.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCards;