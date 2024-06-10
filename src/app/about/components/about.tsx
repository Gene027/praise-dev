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
      <div className="flex w-full justify-between pb-[70px]">
        <div className="lg:pl-[100px] max-w-3xl flex flex-col gap-8 mt-[132px]">
          <div className="flex flex-col gap-6">
            <LargeHeading className="font-dmSerifDisplay text-text text-[44px]">
              We’re a team of creators & innovators
            </LargeHeading>
            <Paragraph className="font-raleway">
              We help startups like yours grow revenue and improve customer
              loyalty with beautifully designed and developed websites.
            </Paragraph>
          </div>

          <Link href={"/contact"}>
            <Button size={"sm"} variant={"secondary"}>
              Get Started
            </Button>
          </Link>
        </div>

        <div
          title="About-hero-image"
          className="relative w-[564px] h-[574px] mt-[66px]"
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

      <div className="flex w-full justify-center">
        <div className="w-[482px] flex flex-col gap-5 items-center">
          <TitleTag title={"About"} description={"Get to know PraiseDev"} />
          <LargeHeading
            size={"sm"}
            className="font-dmSerifDisplay text-text text-center"
          >
            A new site for your agency? It’s here.
          </LargeHeading>
          <Paragraph className="font-raleway text-center">
            Our company thrives on unity in diversity, with a nationwide team
            collaborating remotely to transform your digital dreams into
            reality, no matter where you are, no matter where we are.
          </Paragraph>
        </div>
      </div>

      <div className="flex w-full justify-center mt-8 pb-[100px]">
        <div className="flex flex-col items-center gap-5">
          <img className="max-w-[572px]" src="/about/about-map.png" alt="Map" />

          <div className="flex items-center gap-[100px] max-w-5xl">
            <div className="max-w-[320px] flex flex-col gap-1">
              {productsPoints.map((p, idx) => (
                <ProductCard key={idx} description={p.desc} title={p.title} />
              ))}
            </div>

            <div className="w-[525px] flex items-center relative pl-4">
              <BusinessGrowth />
              <img
                className="h-[419px] w-[372px]"
                src="/homepage/Rectangle3.png"
                alt="background"
              />
              <div className="absolute top-0 left-[-16px] flex w-full h-full items-center">
                <img
                  className="h-[489px] w-[442px]"
                  src="/homepage/Rectangle4.png"
                  alt="Team growth"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
