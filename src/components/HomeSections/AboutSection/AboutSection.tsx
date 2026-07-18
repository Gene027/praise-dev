"use client";
import { FC } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { productsPoints } from "./contents";
import ProductCard from "./ProductCard";
import Link from "next/link";
import BusinessGrowth from "./BusinessGrowth";
import TitleTag from "../TitleTag";
import Paragraph from "@/components/ui/Paragraph";

const About: FC = () => {
  return (
    <div className="py-[60px] md:py-[100px] flex w-full justify-center px-4 md:px-0">
      <div className="flex flex-col md:flex-row max-w-[967px] w-full justify-between gap-8 md:gap-0">
        <div className="w-full md:w-[37%] flex flex-col gap-6">
          <div className="p-1 flex w-full flex-col gap-6 md:gap-8">
            <div className="flex flex-col w-full gap-[20px]">
              <TitleTag title={"About"} description={"Get to know PraiseDev"} />
              <Paragraph className="font-dmSerifDisplay text-[28px] md:text-[40px] font-normal leading-tight">
                A new site for your agency? It&apos;s here.
              </Paragraph>

              <div className="flex flex-col gap-4 md:gap-6">
                {productsPoints.map((p, idx) => (
                  <ProductCard key={idx} description={p.desc} title={p.title} />
                ))}
              </div>

              <Link
                href={"/about"}
                className="flex gap-1 items-center group mt-2"
              >
                <span className=" text-primary group-hover:text-[#B03A26] font-raleway font-semibold text-xl">
                  Learn more
                </span>{" "}
                <FaArrowRightLong className="text-primary group-hover:text-[#B03A26] w-4 h-4" />
              </Link>
            </div>
          </div>
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
            <div className="absolute top-[-20px] left-[20px] md:top-0 md:left-[-16px] flex w-full h-full items-center">
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
  );
};

export default About;
