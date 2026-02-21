"use client";
import { FC } from "react";
import LargeHeading from "../../../components/ui/LargeHeading";
import Paragraph from "../../../components/ui/Paragraph";
import { Button } from "../../../components/ui/Button";
import Link from "next/link";
import TitleTag from "../../../components/HomeSections/TitleTag";
import { productsPoints } from "../../../components/HomeSections/AboutSection/contents";
import ProductCard from "../../../components/HomeSections/AboutSection/ProductCard";
import BusinessGrowth from "../../../components/HomeSections/AboutSection/BusinessGrowth";

interface AboutUsProps {}

const AboutUs: FC<AboutUsProps> = ({}) => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <div className="flex w-full justify-between pb-[50px] lg:pb-[70px] flex-col lg:flex-row mb-16 lg:mb-16">
        <div className="lg:pl-[100px] px-4 lg:px-0 max-w-3xl flex flex-col gap-8 mt-8 lg:mt-[132px]">
          <div className="flex flex-col gap-6">
            <LargeHeading className="font-dmSerifDisplay text-text text-[28px] sm:text-[36px] lg:text-[44px] leading-tight">
              We're a team of creators & innovators
            </LargeHeading>
            <Paragraph className="font-raleway text-sm sm:text-base">
              We help startups like yours grow revenue and improve customer
              loyalty with beautifully designed and developed websites.
            </Paragraph>
          </div>

          <div className="flex justify-center lg:justify-start">
            <Link href={"/contact"}>
              <Button size={"sm"} variant={"secondary"}>
                Get Started
              </Button>
            </Link>
          </div>
        </div>

        <div
          title="About-hero-image"
          className="relative w-full max-w-[564px] aspect-[564/574] mt-[66px] mx-auto lg:mx-0"
        >
          <svg
            width="315"
            height="391"
            viewBox="0 0 315 391"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 right-0 z-0"
          >
            <rect width="315" height="391" fill="#FAE4E0" />
          </svg>
          <img
            className="absolute bottom-0 left-0 z-10"
            src="/about/about-hero-image.png"
            alt="Hero image"
          />
        </div>
      </div>

      {/* About Section */}
      <div className="flex w-full justify-center px-4 lg:px-0 mb-20 lg:mb-20">
        <div className="w-full max-w-[482px] flex flex-col gap-5 items-center">
          <TitleTag title={"About"} description={"Get to know PraiseDev"} />
          <LargeHeading
            size={"sm"}
            className="font-dmSerifDisplay text-text text-center text-[24px] sm:text-[28px] lg:text-[32px]"
          >
            A new site for your agency? It's here.
          </LargeHeading>
          <Paragraph className="font-raleway text-center text-sm sm:text-base">
            Our company thrives on unity in diversity, with a nationwide team
            collaborating remotely to transform your digital dreams into
            reality, no matter where you are, no matter where we are.
          </Paragraph>
        </div>
      </div>

      {/* Map and Content Section */}
      <div className="flex w-full justify-center mt-8 pb-[50px] lg:pb-[100px] px-4 lg:px-0">
        <div className="flex flex-col items-center gap-10 w-full max-w-7xl">
          <img
            className="w-full max-w-[572px] h-auto"
            src="/about/about-map.png"
            alt="Map"
          />

          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[100px] w-full justify-between">
            <div className="w-full lg:w-[40%] flex flex-col gap-1">
              {productsPoints.map((p, idx) => (
                <ProductCard key={idx} description={p.desc} title={p.title} />
              ))}
            </div>

            <div className="w-full md:max-w-[525px] flex items-center relative pl-0 md:pl-4 mt-8 md:mt-0">
              <div className="hidden md:block">
                <BusinessGrowth />
              </div>

              <div className="relative w-full flex justify-center md:justify-start">
                <img
                  className="h-[300px] w-[280px] md:h-[419px] md:w-[372px] object-cover rounded-lg"
                  src="/homepage/Rectangle3.png"
                  alt="background"
                />
                <div className="absolute top-[-10px] left-[20px] md:top-0 md:left-[-16px] flex w-full h-full items-center">
                  <img
                    className="h-[340px] w-[320px] md:h-[489px] md:w-[442px] object-cover rounded-lg"
                    src="/homepage/Rectangle4.png"
                    alt="Team growth"
                  />
                </div>
              </div>

              {/* Mobile Business Growth - positioned at center like desktop */}
              <div className="md:hidden absolute top-1/2 right-4 transform -translate-y-1/2">
                <BusinessGrowth />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
