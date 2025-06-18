import React from "react";
import { FaArrowUp, FaCircle, FaHeart } from "react-icons/fa6";

const BusinessGrowth = () => {
  return (
    <div className="absolute w-full h-full top-0 right-0 flex items-center justify-end z-20">
      <div className="max-w-[180px] md:max-w-[228px] max-h-[130px] md:max-h-[175px] flex flex-col gap-1 bg-bg rounded-[12px] md:rounded-[20px] drop-shadow p-3 md:p-6">
        <span className="font-dmSerifDisplay text-sm md:text-lg text-text whitespace-nowrap">
          Business Growth
        </span>
        <img 
          src="homepage/Level.png" 
          alt="Graph" 
          className="w-full h-auto max-h-[40px] md:max-h-none object-contain"
        />
        <div className="flex justify-between">
          <div className="flex gap-1 md:gap-2 items-center">
            <FaCircle color="#E01818" className="w-3 h-3 md:w-5 md:h-5" />
            <span className="font-medium text-text text-sm md:text-lg">12</span>
          </div>

          <div className="flex gap-1 md:gap-2 items-center">
            <FaHeart color="#5C11BD" className="w-3 h-3 md:w-5 md:h-5" />
            <span className="font-medium text-text text-sm md:text-lg">7.5%</span>
            <FaArrowUp className="text-secondary h-3 w-3 md:h-4 md:w-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessGrowth;
