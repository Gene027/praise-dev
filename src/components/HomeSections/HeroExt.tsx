"use client";

import { technologies } from "@/constants";
import { FC } from "react";
import Paragraph from "../ui/Paragraph";

const HeroExt: FC = () => {
  // Create multiple sets for seamless infinite scrolling
  const extendedTechnologies = [
    ...technologies,
    ...technologies,
    ...technologies,
  ];

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-gray-50 via-white to-gray-50 py-4 sm:py-6 lg:py-8 relative border-y border-gray-200">
      {/* Breaking news banner */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary"></div>

      {/* News ticker header */}
      <div className="flex items-center justify-center mb-4 sm:mb-6 px-4">
        <div className="flex items-center gap-2 sm:gap-4 bg-white/80 backdrop-blur-sm px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full shadow-lg border border-gray-200">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full animate-pulse"></div>
          <Paragraph className="font-raleway font-bold text-text uppercase tracking-widest text-xs sm:text-sm">
            ⚡ Our Tech Stack ⚡
          </Paragraph>
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-secondary rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Main infinite scrolling ticker */}
      <div className="relative py-4 sm:py-6 min-h-[80px] sm:min-h-[100px] overflow-hidden">
        {/* Primary scrolling track */}
        <div className="flex animate-scroll-left hover:pause items-center">
          {extendedTechnologies.map((skill, index) => (
            <div
              key={`primary-${skill.name}-${index}`}
              className="flex items-center gap-2 sm:gap-3 lg:gap-4 mx-4 sm:mx-6 lg:mx-8 group cursor-pointer flex-shrink-0"
            >
              {/* Tech icon with enhanced visibility */}
              <div className="relative p-2 sm:p-3 bg-white rounded-lg sm:rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300 border border-gray-100 w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] lg:w-[70px] lg:h-[70px] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src={skill.icon}
                  alt={`${skill.name} technology`}
                  className="relative object-contain group-hover:scale-110 transition-transform duration-300 max-w-[30px] max-h-[30px] sm:max-w-[40px] sm:max-h-[40px] lg:max-w-[50px] lg:max-h-[50px]"
                  loading="lazy"
                />
              </div>

              {/* Tech name with ticker styling */}
              <div className="flex items-center gap-1 sm:gap-2 lg:gap-3 whitespace-nowrap">
                <Paragraph className="font-raleway font-semibold text-text group-hover:text-primary transition-colors duration-300 text-sm sm:text-base">
                  {skill.name}
                </Paragraph>
                {/* Ticker separator */}
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary rounded-full"></div>
                  <div className="w-2 sm:w-3 h-px bg-gradient-to-r from-primary to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary scrolling track (simpler, text only) */}
        <div className="flex animate-scroll-right mt-4 sm:mt-6 opacity-40">
          {technologies
            .slice()
            .reverse()
            .concat(technologies.slice().reverse())
            .map((skill, index) => (
              <div
                key={`secondary-${skill.name}-${index}`}
                className="flex items-center gap-2 sm:gap-3 mx-6 sm:mx-8 lg:mx-10 group flex-shrink-0"
              >
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-secondary rounded-full group-hover:bg-primary transition-colors duration-300"></div>
                <Paragraph className="font-raleway font-medium text-subText group-hover:text-text transition-colors duration-300 text-xs sm:text-sm">
                  {skill.name}
                </Paragraph>
              </div>
            ))}
        </div>

        {/* Gradient overlays for seamless edges - responsive width */}
        <div className="absolute left-0 top-0 w-16 sm:w-24 lg:w-32 h-full bg-gradient-to-r from-white via-white/90 to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 w-16 sm:w-24 lg:w-32 h-full bg-gradient-to-l from-white via-white/90 to-transparent pointer-events-none z-10"></div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary via-primary to-secondary"></div>
    </div>
  );
};

export default HeroExt;
