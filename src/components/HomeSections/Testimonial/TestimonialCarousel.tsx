"use client";
import Image from "next/image";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "./testimonials.constant";

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeTestimonial = testimonials[currentIndex];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex w-full flex-col items-center gap-8">
      <div className="relative flex w-full flex-col gap-8 overflow-hidden rounded-lg border border-[#E4E4E4] bg-white px-5 py-7 shadow-[0_24px_80px_-50px_rgba(24,4,1,0.5)] sm:px-8 sm:py-9 md:px-10 lg:grid lg:grid-cols-[220px_minmax(0,1fr)_220px] lg:items-center lg:gap-8 lg:px-12 lg:py-11">
        <div className="flex items-center justify-center lg:justify-start">
          <div className="relative h-[116px] w-[116px] shrink-0 overflow-hidden rounded-full border-4 border-white shadow-[0_18px_45px_-28px_rgba(24,4,1,0.75)] ring-2 ring-secondary sm:h-[136px] sm:w-[136px] lg:h-[156px] lg:w-[156px]">
            <Image
              src={activeTestimonial.image}
              alt={activeTestimonial.company}
              width={156}
              height={156}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <article className="flex min-h-[230px] flex-col items-center justify-center gap-5 text-center sm:min-h-[210px] lg:min-h-[240px]">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary/25 text-primary">
            <Quote className="h-5 w-5" aria-hidden="true" />
          </div>

          <p className="max-w-[680px] font-raleway text-[17px] font-medium leading-8 text-subText sm:text-xl sm:leading-9 lg:text-[22px] lg:leading-10">
            &ldquo;{activeTestimonial.testimony}&rdquo;
          </p>

          <div className="flex flex-col items-center gap-1">
            <h2 className="font-dmSerifDisplay text-[28px] leading-tight text-text sm:text-[34px]">
              {activeTestimonial.company}
            </h2>
            <span className="font-raleway text-sm font-semibold text-primary">
              PraiseDev client
            </span>
          </div>
        </article>

        <div className="flex items-center justify-center gap-3 lg:justify-end">
          <button
            onClick={prevTestimonial}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D7D7D7] bg-white text-primary transition-all duration-200 hover:border-primary hover:bg-primary hover:text-white1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            onClick={nextTestimonial}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-primary bg-primary text-white1 transition-all duration-200 hover:bg-normalHover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="flex w-full max-w-[760px] flex-col items-center gap-5">
        <div className="flex w-full flex-wrap items-center justify-center gap-3 px-1 sm:gap-4">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => goToTestimonial(index)}
              className={`relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:h-14 sm:w-14 ${
                index === currentIndex
                  ? "border-primary opacity-100 ring-2 ring-primary/25"
                  : "border-white opacity-60 hover:opacity-100"
              }`}
              aria-label={`Show testimonial from ${testimonial.company}`}
              aria-current={index === currentIndex ? "true" : undefined}
            >
              <Image
                src={testimonial.image}
                alt={testimonial.company}
                width={56}
                height={56}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => goToTestimonial(index)}
              className={`h-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                index === currentIndex
                  ? "w-7 bg-primary"
                  : "w-2 bg-[#D7D7D7] hover:bg-miniSubText"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={index === currentIndex ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
