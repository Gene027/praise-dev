import React from "react";
import { portfolioSlides } from "./portfolio.constant";

const PortfolioSlide = () => {
  return (
    <div className="flex gap-9 w-full max-w-[1440px] justify-center">
      {portfolioSlides.map((slide) => (
        <a href={slide.link} target="_blank" rel="noopener noreferrer">
          <div
            key={slide.id}
            className="flex justify-center items-center w-[344px] aspect-square bg-light"
          >
            <img
              src={slide.logo}
              alt={"Portfolio Image"}
              className="w-[200px]"
            />
          </div>
        </a>
      ))}
    </div>
  );
};

export default PortfolioSlide;
