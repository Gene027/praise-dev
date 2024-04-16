"use client";
import React, { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import {
  Testimonials,
  testimonials as _testimonials,
} from "./testimonials.constant";

const TestimonialCarousel = () => {
  const [testimonials, setTestimonials] =
    useState<Testimonials[]>(_testimonials);
    const [activeIndex, setIndex] = useState(3);

    const handleNext = () => {
        const arr: any[] = [...testimonials];
        const length = arr.length;
        const count = 1 % length;
        for (let i = 0; i < count; i++) {
            arr.unshift(arr.pop());
        }
        
        setTestimonials(arr);
    };

    const handlePrev = () => {
        const arr: any[] = [...testimonials];
        const length = arr.length;
        const count = 1 % length;
        for (let i = 0; i < count; i++) {
            arr.push(arr.shift());
        }
        
        setTestimonials(arr);
    };
  return (
    <div className="flex flex-col gap-16 items-center">
      <div className="flex gap-28 items-center">
        <FaChevronLeft onClick={handlePrev} className="w-8 h-8 cursor-pointer" />
        <div className="flex gap-20 items-center">
          {testimonials.map((testimonial, index) => (
            <img
              key={testimonial.id}
              src={testimonial.image}
              alt={testimonial.company}
              className={`${
                index == activeIndex
                  ? "w-[100px] h-[100px]"
                  : "w-[70px] h-[70px]"
              } rounded-full animate-fadeIn`}
            />
          ))}
        </div>
        <FaChevronRight onClick={handleNext} className="w-8 h-8 cursor-pointer" />
      </div>

      <div className="flex flex-col gap-4 p-2 max-w-sm">
        <h1 className="font-dmSerifDisplay text-3xl text-text text-center">
          {testimonials[activeIndex].company}
        </h1>
        <p className="text-center font-raleway text-subText text-base font-medium">{testimonials[activeIndex].testimony}</p>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
