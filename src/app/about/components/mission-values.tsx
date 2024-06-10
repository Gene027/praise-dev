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
    <div className="flex flex-col bg-[#F4F4F4] bg-opacity-50 items-center w-full p-[100px] gap-10">
      <div className="max-w-[482px] flex flex-col items-center gap-5">
        <TitleTag
          title="Mission, Vision & Values"
          description="What makes us, who we are"
        />
        <LargeHeading
          size={"sm"}
          className="text-center font-dmSerifDisplay text-text"
        >
          Our guiding principles: Mission, Vision & Values.
        </LargeHeading>
        <Paragraph className="font-raleway text-center">
          Defining our purposes, aspiring to our future and upholding our core
          beliefs.
        </Paragraph>
      </div>

      <div className="flex w-full justify-center relative">
        <div className="bg-[#F4F4F4] z-0 w-[844px] h-[332px]"></div>
        <div className="flex absolute inset-0 w-full justify-center items-center z-10 gap-5">
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
