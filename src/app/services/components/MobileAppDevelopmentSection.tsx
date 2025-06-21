"use client";
import { FC } from "react";
import LargeHeading from "../../../components/ui/LargeHeading";
import Paragraph from "../../../components/ui/Paragraph";

interface MobileAppDevelopmentSectionProps {}

const MobileAppDevelopmentSection: FC<
  MobileAppDevelopmentSectionProps
> = ({}) => {
  return (
    <div className="w-full bg-[#FFF8F5] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          {/* Left Content */}
          <div className="flex-1 relative">
            {/* Decorative Pattern */}
            <div className="absolute -top-8 -left-8 hidden lg:block">
              <div className="w-24 h-24 opacity-20">
                <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500 rounded-full"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-orange-300 to-yellow-400 rounded-full transform rotate-45"></div>
              </div>
            </div>

            <div className="flex flex-col max-w-xl text-center lg:text-left">
              <LargeHeading
                size="default"
                className="font-dmSerifDisplay text-text mb-6 md:mb-8 text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-tight"
              >
                Mobile App Development
              </LargeHeading>

              <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                <Paragraph className="text-text font-raleway text-sm sm:text-base md:text-lg leading-relaxed">
                  Transform your innovative ideas into powerful mobile
                  applications that users love. We create native and
                  cross-platform mobile apps that deliver exceptional user
                  experiences across iOS and Android platforms.
                </Paragraph>

                <Paragraph className="text-text font-raleway text-sm sm:text-base md:text-lg leading-relaxed">
                  Our mobile development expertise spans from concept to
                  deployment, ensuring your app not only functions flawlessly
                  but also stands out in the competitive app marketplace with
                  intuitive design and robust functionality.
                </Paragraph>

                <Paragraph className="text-text font-raleway text-sm sm:text-base md:text-lg leading-relaxed">
                  Whether you need a simple utility app or a complex enterprise
                  solution, we leverage the latest technologies and best
                  practices to deliver mobile applications that drive business
                  growth and user engagement.
                </Paragraph>
              </div>

              {/* Team avatars */}
              <div className="flex -space-x-3 justify-center lg:justify-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-white">
                  <img
                    src="/homepage/testimonials/testimonial1.png"
                    alt="Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-white">
                  <img
                    src="/homepage/testimonials/testimonial2.png"
                    alt="Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-white">
                  <img
                    src="/homepage/testimonials/testimonial3.png"
                    alt="Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-white">
                  <img
                    src="/homepage/testimonials/testimonial4.png"
                    alt="Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Images */}
          <div className="flex-1 relative mt-8 lg:mt-0">
            {/* Decorative Pattern */}
            <div className="absolute -top-8 -right-8 hidden lg:block">
              <div className="w-32 h-32 opacity-30">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <radialGradient id="sunburst" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#FF6B35" />
                      <stop offset="100%" stopColor="#FFA500" />
                    </radialGradient>
                  </defs>
                  {/* Sunburst pattern */}
                  {Array.from({ length: 16 }, (_, i) => (
                    <path
                      key={i}
                      d={`M 50 50 L 50 10 A 40 40 0 0 1 ${
                        50 + 40 * Math.sin((i * Math.PI) / 8)
                      } ${50 - 40 * Math.cos((i * Math.PI) / 8)} Z`}
                      fill={i % 2 === 0 ? "url(#sunburst)" : "#FF8C42"}
                      opacity={0.7}
                    />
                  ))}
                </svg>
              </div>
            </div>

            <div className="relative">
              <img
                src="/service/Mobileapp Imgs.png"
                alt="Mobile App Development"
                className="w-full max-w-sm lg:max-w-lg mx-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppDevelopmentSection;
