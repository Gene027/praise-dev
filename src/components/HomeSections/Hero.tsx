"use client";

import { FC, useState } from "react";
import Paragraph from "../ui/Paragraph";
import LargeHeading from "../ui/LargeHeading";
import AnimatedText from "../ui/AnimatedText";
import Carousel from "../ui/Carousel";

const Hero: FC = () => {

  return (
    <>
      <div className="flex flex-col gap-6 lg:gap-9 px-4 sm:px-6 lg:px-12 xl:px-16 py-6 lg:py-10">
        {/* Mobile Layout - Stacked */}
        <div className="flex flex-col gap-8 lg:hidden">
          {/* Main Heading - Mobile */}
          <div className="flex justify-center">
            <div className="min-h-[120px] sm:min-h-[140px] md:min-h-[160px] flex items-center">
              <LargeHeading className="font-dmSerifDisplay text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-center w-[280px] sm:w-[350px] md:w-[400px]">
                <AnimatedText text="Digital Dreams Built" />
              </LargeHeading>
            </div>
          </div>

          {/* Description Sections - Mobile Stack */}
          <div className="flex flex-col gap-6 items-center">
            <div className="text-center">
              <Paragraph className="font-raleway font-medium text-base sm:text-lg max-w-sm mx-auto">
                Unlock the power of the web, bring your creative vision to life
              </Paragraph>
            </div>

            <div className="text-center">
              <Paragraph className="font-raleway font-medium text-base sm:text-lg max-w-sm mx-auto">
                Over 7 years of experiences helping diverse of brands in all
                categories
              </Paragraph>
            </div>

            {/* Trust Section - Mobile */}
            <div className="flex flex-col gap-3 items-center">
              <Paragraph className="font-raleway font-normal text-sm text-subText">
                Trusted By
              </Paragraph>
              <div className="w-16 border-t border-text"></div>
              <Paragraph className="font-raleway font-medium text-sm text-center">
                10+ Companies and Individuals
              </Paragraph>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Three Columns */}
        <div className="hidden lg:flex flex-row gap-8 xl:gap-12">
          <div className="flex flex-1 w-1/3 items-center">
            <Paragraph className="font-raleway font-medium max-w-[210px] text-base xl:text-lg">
              Unlock the power of the web, bring your creative vision to life
            </Paragraph>
          </div>

          <div className="flex flex-1 w-1/3 justify-center">
            <div className="min-h-[140px] xl:min-h-[175px] flex items-center">
              <LargeHeading className="font-dmSerifDisplay text-4xl xl:text-[58px] font-normal leading-tight xl:leading-[70px] text-center max-w-md xl:max-w-none">
                <AnimatedText text="Digital Dreams Built" />
              </LargeHeading>
            </div>
          </div>

          <div className="flex-1 w-1/3 flex justify-end">
            <div className="h-full flex flex-col justify-between gap-8 xl:gap-12">
              <Paragraph className="font-raleway font-medium max-w-[210px] text-base xl:text-lg">
                Over 7 years of experiences helping diverse of brands in all
                categories
              </Paragraph>

              <div className="flex flex-col gap-3 max-w-[140px]">
                <Paragraph className="font-raleway font-normal text-sm xl:text-base">
                  Trusted By
                </Paragraph>
                <div className="w-[76px] border-t border-text"></div>
                <Paragraph className="font-raleway font-medium text-sm xl:text-base">
                  10+ Companies and Individuals
                </Paragraph>
              </div>
            </div>
          </div>
        </div>

        <Carousel />
      </div>
    </>
  );
};

export default Hero;
