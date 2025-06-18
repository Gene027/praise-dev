"use client";
import { FC, useState, useEffect } from "react";
import TitleTag from "../TitleTag";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { services } from "./services-constant";
import ServicesCard from "./ServicesCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface ServicesSectionProps {}

const ServicesSection: FC<ServicesSectionProps> = ({}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showBackground, setShowBackground] = useState<{[key: number]: boolean}>({});

  // Auto-cycle background images on mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setShowBackground(prev => {
        const newState: {[key: number]: boolean} = {};
        services.forEach((_, index) => {
          // Create a staggered effect - each card shows background at different times
          const cycleTime = (Date.now() + index * 2000) % 6000; // 6 second cycle, staggered by 2 seconds
          newState[index] = cycleTime < 3000; // Show background for first half of cycle
        });
        return newState;
      });
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(services.length / 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(services.length / 2)) % Math.ceil(services.length / 2));
  };

  const getCurrentServices = () => {
    const start = currentSlide * 2;
    return services.slice(start, start + 2);
  };

  return (
    <div className="flex flex-col gap-10 md:gap-14 w-full py-[60px] md:py-[100px] items-center bg-light px-4 md:px-0">
      <TitleTag title="Services" description="What PraiseDev offers" />
      
      {/* Desktop Layout - Grid */}
      <div className="hidden md:flex w-full max-w-[1440px]">
        {services.map((service) => (
          <ServicesCard
            key={service.id}
            id={service.id}
            title={service.title}
            description={service.description}
            backgroundImg={service.image}
          />
        ))}
      </div>

      {/* Mobile Layout - Two Cards Carousel */}
      <div className="md:hidden w-full max-w-2xl mx-auto">
        <div className="relative overflow-hidden rounded-lg">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(services.length / 2) }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0 px-2">
                <div className="flex gap-4">
                  {services.slice(slideIndex * 2, slideIndex * 2 + 2).map((service, cardIndex) => {
                    const serviceIndex = slideIndex * 2 + cardIndex;
                    return (
                      <div key={service.id} className="flex-1">
                        <div className="relative flex flex-col h-[400px] items-center bg-white rounded-lg shadow-md overflow-hidden">
                                                     {/* Background Image - Auto cycling on mobile */}
                           <div
                             className={`absolute inset-0 bg-cover bg-no-repeat bg-center transition-opacity duration-1000 z-0 ${
                               showBackground[serviceIndex] ? 'opacity-100' : 'opacity-0'
                             }`}
                             style={{ backgroundImage: `url(${service.image})` }}
                           />
                           
                           {/* Red primary overlay - matches desktop hover effect */}
                           <div 
                             className={`absolute inset-0 bg-primary bg-opacity-75 transition-opacity duration-1000 z-10 ${
                               showBackground[serviceIndex] ? 'opacity-100' : 'opacity-0'
                             }`} 
                           />
                           
                           {/* Additional gradient overlay for text readability */}
                           <div 
                             className={`absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent transition-opacity duration-1000 z-15 ${
                               showBackground[serviceIndex] ? 'opacity-100' : 'opacity-0'
                             }`} 
                           />
                          
                          <div className="relative z-20 flex flex-col h-full justify-between items-center p-6 text-center">
                            <div 
                              className={`font-dmSerifDisplay text-4xl mb-4 drop-shadow-lg transition-colors duration-1000 ${
                                showBackground[serviceIndex] ? 'text-white' : 'text-text'
                              }`}
                            >
                              {service.id}
                            </div>

                            <div className="flex flex-col gap-4">
                              <div 
                                className={`font-dmSerifDisplay text-xl drop-shadow-md transition-colors duration-1000 ${
                                  showBackground[serviceIndex] ? 'text-white' : 'text-text'
                                }`}
                              >
                                {service.title}
                              </div>
                              <div 
                                className={`font-raleway font-medium text-xs leading-relaxed drop-shadow-sm transition-colors duration-1000 ${
                                  showBackground[serviceIndex] ? 'text-gray-100' : 'text-subText'
                                }`}
                              >
                                {service.description}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200"
            aria-label="Previous services"
          >
            <FaChevronLeft className="w-4 h-4 text-primary" />
          </button>

          {/* Dot Indicators */}
          <div className="flex space-x-2">
            {Array.from({ length: Math.ceil(services.length / 2) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Go to services ${index * 2 + 1}-${Math.min(index * 2 + 2, services.length)}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200"
            aria-label="Next services"
          >
            <FaChevronRight className="w-4 h-4 text-primary" />
          </button>
        </div>
      </div>

      <Link href="/services">
        <Button
          variant="secondary"
          size="sm"
          className="border-text text-text font-raleway text-lg font-semibold"
        >
          View all
        </Button>
      </Link>
    </div>
  );
};

export default ServicesSection;
