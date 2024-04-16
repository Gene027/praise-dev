"use client";

import { FC, useState } from "react";
import Paragraph from "../ui/Paragraph";
import LargeHeading from "../ui/LargeHeading";
import AnimatedText from "../ui/AnimatedText";
import Carousel from "../ui/Carousel";

const Hero: FC = () => {

  return (
    <>
      <div className="flex flex-col gap-9 lg:px-24 lg:py-10">
        <div className="flex justify-between">
          <div className="flex flex-1 w-1/3 items-center">
            <Paragraph className="font-raleway font-medium max-w-[210px]">
              Unlock the power of the web, bring your creative vision to life
            </Paragraph>
          </div>

          <div className="flex flex-1 w-1/3 min-w-[403px]">
            <LargeHeading className="font-dmSerifDisplay text-[58px] font-normal leading-[70px] text-center">
              <AnimatedText text="Digital Dreams Built" />
            </LargeHeading>
          </div>

          <div className="flex-1 w-1/3 flex justify-end">
            <div className="h-full flex flex-col justify-between gap-12">
              <Paragraph className="font-raleway font-medium max-w-[210px]">
                Over 3 years of experiences helping diverse of brands in all
                categories
              </Paragraph>

              <div className="flex flex-col gap-3 max-w-[140px]">
                <Paragraph className="font-raleway font-normal">
                  Trusted By
                </Paragraph>
                <div className="w-[76px] border-t border-text"></div>
                <Paragraph className="font-raleway font-medium">
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
