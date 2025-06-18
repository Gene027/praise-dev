"use client";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import {
  Testimonials,
  testimonials,
} from "./testimonials.constant";

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  // Get 3 testimonials to display on mobile (previous, current, next)
  const getMobileVisibleTestimonials = () => {
    const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    const nextIndex = (currentIndex + 1) % testimonials.length;
    
    return [
      { testimonial: testimonials[prevIndex], index: prevIndex, position: 'prev' },
      { testimonial: testimonials[currentIndex], index: currentIndex, position: 'current' },
      { testimonial: testimonials[nextIndex], index: nextIndex, position: 'next' }
    ];
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Desktop Layout */}
      <div className="hidden md:flex flex-col gap-12 items-center">
        {/* Desktop Testimonial Images Row */}
        <div className="flex gap-6 lg:gap-12 items-center justify-center">
          <button
            onClick={prevTestimonial}
            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="w-5 h-5 text-primary" />
          </button>

          <div className="flex gap-4 lg:gap-8 items-center">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => goToTestimonial(index)}
                className={`relative transition-all duration-300 rounded-full overflow-hidden ${
                  index === currentIndex
                    ? "w-[100px] h-[100px] ring-4 ring-primary ring-opacity-50"
                    : "w-[70px] h-[70px] opacity-60 hover:opacity-80"
                }`}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.company}
                  className="w-full h-full object-cover"
                />
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-primary bg-opacity-10" />
                )}
              </button>
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="w-5 h-5 text-primary" />
          </button>
        </div>

        {/* Desktop Testimonial Content - Fixed Height */}
        <div className="flex flex-col gap-6 max-w-2xl text-center min-h-[200px] lg:min-h-[180px] flex items-center justify-center">
          <h2 className="font-dmSerifDisplay text-3xl lg:text-4xl text-text">
            {testimonials[currentIndex].company}
          </h2>
          <p className="font-raleway text-subText text-base lg:text-lg font-medium leading-relaxed">
            "{testimonials[currentIndex].testimony}"
          </p>
        </div>

        {/* Desktop Dot Indicators */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-primary w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Mobile Layout - Similar to Desktop */}
      <div className="md:hidden flex flex-col gap-8 items-center">
        {/* Mobile Testimonial Images Row - 3 Visible */}
        <div className="flex gap-4 items-center justify-center w-full">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="w-4 h-4 text-primary" />
          </button>

          <div className="flex gap-3 items-center">
            {getMobileVisibleTestimonials().map(({ testimonial, index, position }) => (
              <button
                key={`${testimonial.id}-${position}`}
                onClick={() => goToTestimonial(index)}
                className={`relative transition-all duration-300 rounded-full overflow-hidden ${
                  position === 'current'
                    ? "w-[80px] h-[80px] ring-4 ring-primary ring-opacity-50 z-10"
                    : "w-[60px] h-[60px] opacity-60"
                }`}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.company}
                  className="w-full h-full object-cover"
                />
                {position === 'current' && (
                  <div className="absolute inset-0 bg-primary bg-opacity-10" />
                )}
              </button>
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="w-4 h-4 text-primary" />
          </button>
        </div>

        {/* Mobile Testimonial Content - Fixed Height */}
        <div className="flex flex-col gap-4 max-w-sm text-center min-h-[160px] flex items-center justify-center">
          <h2 className="font-dmSerifDisplay text-2xl text-text">
            {testimonials[currentIndex].company}
          </h2>
          <p className="font-raleway text-subText text-sm font-medium leading-relaxed">
            "{testimonials[currentIndex].testimony}"
          </p>
        </div>

        {/* Mobile Dot Indicators */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-primary w-6' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
