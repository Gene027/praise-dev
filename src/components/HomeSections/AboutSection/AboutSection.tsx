"use client";
import { FC } from "react";
import Paragraph from "../../ui/Paragraph";
import { FaArrowRightLong } from "react-icons/fa6";
import { productsPoints } from "./contents";
import ProductCard from "./ProductCard";
import Link from "next/link";
import BusinessGrowth from "./BusinessGrowth";
import TitleTag from "../TitleTag";

const About: FC = () => {
  return (
    <div className="py-[100px] flex w-full justify-center">
      <div className="flex max-w-[967px] w-full justify-between">
        <div className="w-[37%] flex flex-col gap-6">
          <div className="p-1 flex w-full flex-col gap-8">
            <div className="flex flex-col w-full gap-[20px]">
              <TitleTag title={"About"} description={"Get to know PraiseDev"} />
              <Paragraph className="font-dmSerifDisplay text-[40px] font-normal">
                A new site for your agency? It’s here.
              </Paragraph>

              {productsPoints.map((p, idx) => (
                <ProductCard key={idx} description={p.desc} title={p.title} />
              ))}

              <Link href={"/about"} className="flex gap-1 items-center">
                <span className=" text-primary font-raleway font-semibold text-xl">
                  learn more
                </span>{" "}
                <FaArrowRightLong className="text-primary w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="w-[54%] flex items-center relative pl-4">
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
  );
};

export default About;
