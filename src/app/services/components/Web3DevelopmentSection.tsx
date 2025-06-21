"use client";
import { FC } from "react";
import { Button } from "../../../components/ui/Button";
import LargeHeading from "../../../components/ui/LargeHeading";
import Paragraph from "../../../components/ui/Paragraph";

interface Web3DevelopmentSectionProps {}

const Web3DevelopmentSection: FC<Web3DevelopmentSectionProps> = ({}) => {
  return (
    <div className="w-full bg-[#F8F8F8] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          {/* Left Image */}
          <div className="flex-1 relative order-2 lg:order-1">
            <div className="relative">
              <img
                src="/service/Web3 Image.png"
                alt="Web3 Developer"
                className="w-full max-w-sm lg:max-w-md mx-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 relative order-1 lg:order-2">
            {/* Decorative Pattern */}
            <div className="absolute -top-8 -right-8 hidden lg:block">
              <img
                src="/service/Star Design.png"
                alt="Decorative pattern"
                className="w-24 h-24 opacity-60"
              />
            </div>

            <div className="flex flex-col max-w-xl text-center lg:text-left">
              <LargeHeading
                size="default"
                className="font-dmSerifDisplay text-text mb-6 md:mb-8 text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-tight"
              >
                Web3 Development
              </LargeHeading>

              <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                <Paragraph className="text-text font-raleway text-sm sm:text-base md:text-lg leading-relaxed">
                  Step into the future with our cutting-edge Web3 development
                  services. We specialize in blockchain applications, smart
                  contracts, and decentralized solutions that empower your
                  business in the new digital economy.
                </Paragraph>

                <Paragraph className="text-text font-raleway text-sm sm:text-base md:text-lg leading-relaxed">
                  Our experienced team works with various blockchain platforms
                  including Ethereum, Polygon, and other leading networks to
                  create secure, transparent, and innovative solutions tailored
                  to your specific needs.
                </Paragraph>

                <Paragraph className="text-text font-raleway text-sm sm:text-base md:text-lg leading-relaxed">
                  We can design with properties related to cryptocurrency, NFTs,
                  decentralized finance (DeFi), and other Web3 technologies that
                  give you competitive advantages. From coin development to
                  bring your vision to life.
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

export default Web3DevelopmentSection;
