
import React from "react";
import * as styles from './index.module.css';





const SingleSliderCard = ({userName, voc, index}) => {
  return (
    <div                    
      className={`p-[24px] h-[160px] md:min-h-[246px] flex flex-col justify-between lg:p-[40px] rounded-[22px] border-[0.53px] text-[#78787D1F] border-opacity-[12%] ${index%2==0?styles.singleCardBgImg:styles.singleCardBgImg2}` }
    >
      <div className=" text-[#666666] text-[12px] leading-[16px] lg:text-[16px] lg:leading-[24px]">
      {voc}
       
      {/* Tata Neu is my everyday app for all my needs. Right from the UPI payments to groceries to clothes and toys. It’s one of the super apps that anybody can use with ease. */}
      </div>
      <div
        className="text-[12px] font-semibold leading-[16px] lg:text-[16px] text-[#6700B5] 
      lg:font-bold lg:leading-[24px] mt-[12px]"
      >
         {userName}
       {/* Ady@money */}
      </div>
      {/* <div className="text-[10px] leading-[12px] lg:text-[16px] lg:leading-[24px] text-[#666666] ">
        On August 02, 2024
      </div> */}
    </div>
  );
};

export default SingleSliderCard;
