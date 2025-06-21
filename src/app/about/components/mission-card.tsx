"use client";
import { FC } from "react";
import Paragraph from "../../../components/ui/Paragraph";
import { BsArrowUpLeft } from "react-icons/bs";

interface MissionCardProps {
  title: string;
  desc: string;
}

const MissionCard: FC<MissionCardProps> = ({ title, desc }) => {
  return (
    <div className="w-full max-w-[382px] min-h-[200px] sm:min-h-[252px] bg-bg py-6 sm:py-10 px-4 sm:px-7 flex flex-col gap-4 sm:gap-6">
      <BsArrowUpLeft size={27} className="text-primary" />

      <div className="flex flex-col gap-3 sm:gap-4">
        <h3 className="font-dmSerifDisplay text-text text-xl sm:text-2xl">{title}</h3>

        <Paragraph className="font-raleway text-text text-sm sm:text-base">
          {desc}
        </Paragraph>
      </div>
    </div>
  );
};

export default MissionCard;
