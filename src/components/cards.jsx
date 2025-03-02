import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';

const CategoryCards = ({ categories, onProductClick, showAll }) => {
  // If showAll is false, only show the first 6 categories
  const displayCategories = showAll ? categories : categories.slice(0, 6);

  return (
    <div className="w-full my-[50px] lg:my-[80px] max-w-7xl mx-auto px-4">
      <h1 className='text-center text-[28px] font-bold mb-[70px]'>Our Products Range</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {displayCategories.map((category) => (
          <div 
            key={category.id} 
            className="flex flex-col bg-white rounded-lg shadow-[rgba(0,0,0,0.07)_0px_1px_1px,rgba(0,0,0,0.07)_0px_2px_2px,rgba(0,0,0,0.07)_0px_4px_4px,rgba(0,0,0,0.07)_0px_8px_8px,rgba(0,0,0,0.07)_0px_16px_16px] overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => onProductClick(category.id)}
          >
            <div className="h-48">
              <GatsbyImage
                image={category.image}
                alt={category.title || 'Product image'}
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

CategoryCards.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      image: PropTypes.object,
    })
  ).isRequired,
  onProductClick: PropTypes.func,
  showAll: PropTypes.bool,
};

CategoryCards.defaultProps = {
  onProductClick: () => {},
  showAll: false, // Default behavior is to show all categories
};

export default CategoryCards;