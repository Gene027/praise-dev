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
    <div className="w-[382px] min-h-[252px] bg-bg py-10 px-7 flex flex-col gap-6">
      <BsArrowUpLeft size={27} className="text-primary" />

      <div className="flex flex-col gap-4">
        <h3 className="font-dmSerifDisplay text-text text-2xl">{title}</h3>

        <Paragraph className="font-raleway text-text text-base">
          {desc}
        </Paragraph>
      </div>
    </div>
  );
};

export default MissionCard;
