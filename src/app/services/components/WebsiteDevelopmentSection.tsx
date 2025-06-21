"use client";
import { FC } from "react";
import LargeHeading from "../../../components/ui/LargeHeading";
import Paragraph from "../../../components/ui/Paragraph";

interface WebsiteDevelopmentSectionProps {}

const WebsiteDevelopmentSection: FC<WebsiteDevelopmentSectionProps> = ({}) => {
  return (
    <div className="w-full bg-primary py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          {/* Left Content */}
          <div className="flex flex-col max-w-xl text-center lg:text-left">
            <LargeHeading
              size="default"
              className="font-dmSerifDisplay text-white mb-6 md:mb-8 text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-tight"
            >
              Website Development
            </LargeHeading>

            <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
              <Paragraph className="text-white font-raleway text-sm sm:text-base md:text-lg leading-relaxed">
                At PraiseDev, we specialize in building high-performance,
                scalable websites that make your business stand out online. Our
                expert team crafts custom solutions using the latest
                technologies and frameworks.
              </Paragraph>

              <Paragraph className="text-white font-raleway text-sm sm:text-base md:text-lg leading-relaxed">
                From responsive design to complex web applications, we ensure
                your website not only looks great but performs exceptionally
                across all devices and platforms.
              </Paragraph>

              <Paragraph className="text-white font-raleway text-sm sm:text-base md:text-lg leading-relaxed">
                We take full responsibility for every aspect of your web
                development project, from initial concept to deployment and
                ongoing maintenance. Partner with us to bring your digital
                vision to life.
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

          {/* Right Content - Tech Network */}
          <div className="flex-1 flex justify-center items-center mt-8 lg:mt-0">
            <div className="w-full max-w-sm lg:max-w-lg">
              <img 
                src="/service/web-image.png" 
                alt="Website Development" 
                className="w-full h-auto object-cover rounded-lg shadow-lg" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteDevelopmentSection;
