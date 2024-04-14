import React from "react";
import { FaArrowUp, FaCircle, FaHeart } from "react-icons/fa6";

const BusinessGrowth = () => {
  return (
    <div className="absolute w-full h-full top-0 right-0 flex items-center justify-end z-20">
      <div className="max-w-[228px] max-h-[175px] flex flex-col gap-1 bg-bg rounded-[20px] drop-shadow p-6">
        <span className="font-dmSerifDisplay text-lg text-text">
          Business Growth
        </span>
        <img src="homepage/Level.png" alt="Graph" />
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <FaCircle color="#E01818" className="w-5 h-5" />
            <span className="font-medium text-text text-lg">12</span>
          </div>

          <div className="flex gap-2 items-center">
            <FaHeart color="#5C11BD" className="w-5 h-5" />
            <span className="font-medium text-text text-lg">7.5%</span>
            <FaArrowUp className="text-secondary h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessGrowth;
