import React from "react";
import * as styles from './index.module.css';

const StarRating = ({ rating }) => {
  const totalStars = 5;
  return (
    <div className="flex mb-[8px]">
      {[...Array(totalStars)].map((_, index) => (
        <svg 
          key={index} 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill={index < rating ? "#FFC107" : "#E0E0E0"}
          stroke={index < rating ? "#FFC107" : "#888888"}
          strokeWidth="1"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
      ))}
    </div>
  );
};

const SingleSliderCard = ({userName, voc, index, rating = 0}) => {
  return (
    <div 
      className={`p-[24px] h-[160px] md:min-h-[246px] flex flex-col justify-between lg:p-[40px] rounded-[22px] border-[0.53px] text-[#78787D1F] border-opacity-[12%] ${index%2==0?styles.singleCardBgImg:styles.singleCardBgImg2}`}
    >
      <div>
        <StarRating rating={rating} />
        <div className="text-[#666666] text-[13px] leading-[16px] lg:text-[18px] lg:leading-[24px]">
          {voc}
        </div>
      </div>
      <div
        className="text-[13px] font-semibold leading-[16px] lg:text-[18px] text-[#6700B5] lg:font-bold lg:leading-[24px] mt-[12px]"
      >
        {userName}
      </div>
    </div>
  );
};

export default SingleSliderCard;