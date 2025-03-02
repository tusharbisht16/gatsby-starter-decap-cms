import React, { useEffect, useRef } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';

const CategoryCards = ({ categories, onProductClick, showAll }) => {
  // If showAll is false, only show the first 6 categories
  const displayCategories = showAll ? categories : categories.slice(0, 6);
  const cardRefs = useRef([]);

  // Initialize card refs array
  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, displayCategories.length);
  }, [displayCategories]);

  useEffect(() => {
    const observers = [];
    
    // Create an observer for each card
    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Only animate the specific card that came into view
              entry.target.classList.add('animate-in');
              // Disconnect this specific observer after animation is triggered
              observer.disconnect();
            }
          });
        },
        { threshold: 0.2 } // Trigger when at least 20% of the card is visible
      );
      
      observer.observe(card);
      observers.push(observer);
    });

    // Cleanup function to disconnect all observers
    return () => {
      observers.forEach(observer => {
        if (observer) {
          observer.disconnect();
        }
      });
    };
  }, [displayCategories]);

  return (
    <div className="w-full my-[50px] lg:my-[80px] max-w-7xl mx-auto px-4">
      <h1 className='text-center text-[28px] font-bold mb-[70px]'>Our Products Range</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {displayCategories.map((category, index) => (
          <div 
            key={category.id} 
            ref={el => cardRefs.current[index] = el}
            className="opacity-0 translate-y-10 flex flex-col bg-white rounded-lg shadow-[rgba(0,0,0,0.07)_0px_1px_1px,rgba(0,0,0,0.07)_0px_2px_2px,rgba(0,0,0,0.07)_0px_4px_4px,rgba(0,0,0,0.07)_0px_8px_8px,rgba(0,0,0,0.07)_0px_16px_16px] overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => onProductClick(category.id)}
            style={{
              transition: "transform 0.5s ease, opacity 0.5s ease",
            }}
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
      
      {/* Add this style tag for the animation */}
      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
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
  showAll: false, // Default behavior is to show only first 6 categories
};

export default CategoryCards;