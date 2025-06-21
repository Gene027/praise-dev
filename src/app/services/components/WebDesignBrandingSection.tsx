"use client";
import { FC } from "react";
import LargeHeading from "../../../components/ui/LargeHeading";
import Paragraph from "../../../components/ui/Paragraph";

interface WebDesignBrandingSectionProps {}

const WebDesignBrandingSection: FC<WebDesignBrandingSectionProps> = ({}) => {
  return (
    <div className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          {/* Left Images */}
          <div className="flex-1 relative order-2 lg:order-1">
            <div className="relative">
              <img
                src="/service/Design Imgs.png"
                alt="Web Design & Branding"
                className="w-full max-w-sm lg:max-w-lg mx-auto rounded-2xl shadow-lg"
              />

              {/* Yellow accent */}
              <div className="absolute top-4 right-4 w-12 h-12 md:w-16 md:h-16 bg-yellow-400 rounded-xl opacity-80"></div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 relative order-1 lg:order-2">
            <div className="flex flex-col max-w-xl text-center lg:text-left">
              <LargeHeading
                size="default"
                className="font-dmSerifDisplay text-text mb-6 md:mb-8 text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-tight"
              >
                Web Design & Branding
              </LargeHeading>

              <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                <Paragraph className="text-text font-raleway text-sm sm:text-base md:text-lg leading-relaxed">
                  Create a powerful brand presence with our comprehensive web
                  design and branding services. We combine strategic thinking
                  with creative excellence to build brands that resonate with
                  your target audience and drive business growth.
                </Paragraph>

                <Paragraph className="text-text font-raleway text-sm sm:text-base md:text-lg leading-relaxed">
                  From logo design and brand identity to complete website
                  redesigns, we ensure every touchpoint reflects your brand's
                  unique personality and values. Our designs are not just
                  beautiful—they're strategically crafted to convert visitors
                  into loyal customers.
                </Paragraph>

                <Paragraph className="text-text font-raleway text-sm sm:text-base md:text-lg leading-relaxed">
                  Our goal is to create a cohesive and memorable brand
                  experience across all digital platforms. Let us help you build
                  a brand that stands out in today's competitive marketplace and
                  leaves a lasting impression on your audience.
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
        </div>
      </div>
    </div>
  );
};

export default WebDesignBrandingSection;
