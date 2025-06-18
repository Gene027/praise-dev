"use client";
import React, { useRef, useState, useEffect } from "react";
import { portfolioSlides } from "./portfolio.constant";

const PortfolioSlide = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle scroll to update active indicator
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollLeft = container.scrollLeft;
      const itemWidth = 280 + 16; // item width + gap
      const currentIndex = Math.round(scrollLeft / itemWidth);
      setActiveIndex(currentIndex);
    }
  };

  // Scroll to specific item when indicator is clicked
  const scrollToItem = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const itemWidth = 280 + 16; // item width + gap
      const scrollPosition = index * itemWidth;
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  // Add scroll event listener
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <>
      {/* Desktop Layout - All items visible */}
      <div className="hidden md:flex gap-9 w-full max-w-[1440px] justify-center">
        {portfolioSlides.map((slide) => (
          <a key={slide.id} href={slide.link} target="_blank" rel="noopener noreferrer">
            <div className="flex justify-center items-center w-[344px] aspect-square bg-light hover:bg-gray-100 transition-colors duration-200 rounded-lg">
              <img
                src={slide.logo}
                alt={"Portfolio Image"}
                className="w-[200px] object-contain"
              />
            </div>
          </a>
        ))}
      </div>

      {/* Mobile Layout - Horizontal scroll without scrollbar */}
      <div className="md:hidden w-full">
        <div 
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto pb-4 px-4 scroll-smooth [&::-webkit-scrollbar]:hidden"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {portfolioSlides.map((slide) => (
            <a 
              key={slide.id} 
              href={slide.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <div className="flex justify-center items-center w-[280px] h-[280px] bg-light hover:bg-gray-100 transition-colors duration-200 rounded-lg border border-gray-200">
                <img
                  src={slide.logo}
                  alt={"Portfolio Image"}
                  className="w-[160px] object-contain"
                />
              </div>
            </a>
          ))}
        </div>
        
        {/* Interactive Scroll Indicators */}
        <div className="flex justify-center mt-4">
          <div className="flex space-x-2">
            {portfolioSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToItem(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === activeIndex 
                    ? 'bg-primary w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to portfolio item ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioSlide;
