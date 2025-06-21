"use client";
import { FC } from "react";
import { Button } from "../../../components/ui/Button";
import LargeHeading from "../../../components/ui/LargeHeading";
import Paragraph from "../../../components/ui/Paragraph";

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = ({}) => {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero Content */}
      <div className="relative px-4 md:px-8 lg:px-16 xl:px-24 py-12 lg:py-20 min-h-[500px] md:min-h-[600px]">
        {/* 10+ Expert Developers - Desktop Top Left */}
        <div className="absolute top-8 left-8 lg:left-24 hidden lg:block">
          <div className="flex flex-col gap-4">
            <div className="flex -space-x-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                <img src="/homepage/testimonials/testimonial1.png" alt="Developer" className="w-full h-full object-cover" />
              </div>
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                <img src="/homepage/testimonials/testimonial2.png" alt="Developer" className="w-full h-full object-cover" />
              </div>
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                <img src="/homepage/testimonials/testimonial3.png" alt="Developer" className="w-full h-full object-cover" />
              </div>
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                <img src="/homepage/testimonials/testimonial4.png" alt="Developer" className="w-full h-full object-cover" />
              </div>
            </div>
            <Paragraph className="text-text font-raleway text-sm font-medium text-center">
              10+ Expert Developers and Designers
            </Paragraph>
          </div>
        </div>

        {/* Left Ellipse Image - Desktop Only */}
        <div className="absolute top-32 left-8 lg:left-24 hidden lg:block">
          <div className="relative">
            <div className="w-[200px] h-[240px] overflow-hidden rounded-[100px]">
              <img 
                src="/service/Rectangle 179.png" 
                alt="Team working" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Ellipse Image - Desktop Only */}
        <div className="absolute top-16 right-8 lg:right-24 hidden lg:block">
          <div className="relative">
            <div className="w-[200px] h-[240px] overflow-hidden rounded-[100px]">
              <img 
                src="/service/Rectangle 180.png" 
                alt="Developer working" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Mobile Expert Developers - Top Center */}
        <div className="flex justify-center mb-6 lg:hidden">
          <div className="flex flex-col items-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md">
                <img src="/homepage/testimonials/testimonial1.png" alt="Developer" className="w-full h-full object-cover" />
              </div>
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md">
                <img src="/homepage/testimonials/testimonial2.png" alt="Developer" className="w-full h-full object-cover" />
              </div>
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md">
                <img src="/homepage/testimonials/testimonial3.png" alt="Developer" className="w-full h-full object-cover" />
              </div>
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md">
                <img src="/homepage/testimonials/testimonial4.png" alt="Developer" className="w-full h-full object-cover" />
              </div>
            </div>
            <Paragraph className="text-text font-raleway text-xs font-medium text-center">
              10+ Expert Developers and Designers
            </Paragraph>
          </div>
        </div>

        {/* Center Content */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto pt-8 lg:pt-20">
          <LargeHeading 
            size="lg" 
            className="font-dmSerifDisplay text-text mb-8 text-[36px] sm:text-[48px] md:text-[64px] lg:text-[72px] leading-tight"
          >
            Digital Dreams Built
          </LargeHeading>
          
          <Button variant="primary" size="sm" className="mb-12 md:mb-16">
            Get Started
          </Button>
        </div>

        {/* Mobile Image - After Button */}
        <div className="flex justify-center mb-8 lg:hidden">
          <div className="relative">
            <div className="w-[160px] h-[200px] overflow-hidden rounded-[80px] shadow-xl">
              <img 
                src="/service/Rectangle 180.png" 
                alt="Developer working" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full opacity-80"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-400 rounded-full opacity-80"></div>
          </div>
        </div>

        {/* Bottom Right Text - Mobile Responsive */}
        <div className="static md:absolute md:bottom-8 md:right-8 lg:right-24 max-w-md mx-auto md:mx-0 mt-8 md:mt-0">
          {/* Decorative border - top */}
          <div className="mb-4">
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-orange-400 rounded-full mx-auto md:mx-0"></div>
          </div>
          
          <Paragraph className="text-text font-raleway text-sm md:text-base lg:text-lg leading-relaxed text-center md:text-left">
            Unlocking the Digital Potential: From web development to mobile apps, we craft 
            innovative solutions that empower your brand for the future
          </Paragraph>
        </div>

        {/* Decorative border - bottom right corner (yellowish) */}
        <div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8">
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 