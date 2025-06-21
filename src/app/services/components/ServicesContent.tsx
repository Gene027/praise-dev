"use client";
import { FC } from "react";
import HeroSection from "./HeroSection";
import WebsiteDevelopmentSection from "./WebsiteDevelopmentSection";
import Web3DevelopmentSection from "./Web3DevelopmentSection";
import MobileAppDevelopmentSection from "./MobileAppDevelopmentSection";
import WebDesignBrandingSection from "./WebDesignBrandingSection";

interface ServicesContentProps {}

const ServicesContent: FC<ServicesContentProps> = ({}) => {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <WebsiteDevelopmentSection />
      <Web3DevelopmentSection />
      <MobileAppDevelopmentSection />
      <WebDesignBrandingSection />
    </div>
  );
};

export default ServicesContent; 