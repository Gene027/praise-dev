import React from "react";
import { portfolioSlides } from "./portfolio.constant";

const PortfolioSlide = () => {
  return (
    <div className="flex gap-9 w-full max-w-[1440px] justify-center">
      {portfolioSlides.map((slide) => (
        <div
          key={slide.id}
          className="flex justify-center items-center w-[344px] aspect-square bg-light"
        >
          <a href={slide.link} target="_blank" rel="noopener noreferrer">
            <img
              src={slide.logo}
              alt={"Portfolio Image"}
              className="w-[200px]"
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default PortfolioSlide;
