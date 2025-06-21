"use client";
import { FC } from "react";
import TitleTag from "../../../components/HomeSections/TitleTag";
import LargeHeading from "../../../components/ui/LargeHeading";
import Paragraph from "../../../components/ui/Paragraph";
import { missionAndVision } from "../constants/mission-vision";
import MissionCard from "./mission-card";

interface MissionValuesProps {}

const MissionValues: FC<MissionValuesProps> = ({}) => {
  return (
    <div className="flex flex-col bg-[#F4F4F4] bg-opacity-50 items-center w-full p-4 sm:p-8 lg:p-[100px] gap-10 my-8 lg:my-16">
      <div className="max-w-[482px] w-full flex flex-col items-center gap-5 px-4 lg:px-0">
        <TitleTag
          title="Mission, Vision & Values"
          description="What makes us, who we are"
        />
        <LargeHeading
          size={"sm"}
          className="text-center font-dmSerifDisplay text-text text-[24px] sm:text-[28px] lg:text-[32px]"
        >
          Our guiding principles: Mission, Vision & Values.
        </LargeHeading>
        <Paragraph className="font-raleway text-center text-sm sm:text-base">
          Defining our purposes, aspiring to our future and upholding our core
          beliefs.
        </Paragraph>
      </div>

      <div className="flex w-full justify-center items-center">
        <div className="flex flex-col lg:flex-row gap-5 w-full max-w-6xl justify-center items-center px-4 lg:px-0">
          {missionAndVision.map((item, index) => (
            <MissionCard
              key={index}
              title={item.title}
              desc={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MissionValues;
