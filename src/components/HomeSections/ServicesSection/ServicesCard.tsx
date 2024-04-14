import Paragraph from "@/components/ui/Paragraph";
import React from "react";
interface ServicesCardProps {
  id: string;
  title: string;
  description: string;
  backgroundImg: string;
}

const ServicesCard = ({
  id,
  backgroundImg,
  title,
  description,
}: ServicesCardProps) => {
  return (
    <div className=" relative flex flex-col flex-1 h-[570px] items-center border-r border-solid border-gray-300 group">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center hidden group-hover:flex h-full w-full z-0"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      ></div>

      <div className="flex hover:bg-primary hover:bg-opacity-75 z-10 flex-col h-full justify-between items-center p-3">
        <Paragraph className="text-center font-dmSerifDisplay text-[80px] text-text group-hover:text-bg">
          {id}
        </Paragraph>

        <div className="flex flex-col gap-5">
          <Paragraph className="text-center font-dmSerifDisplay text-[36px] text-text group-hover:text-bg">
            {title}
          </Paragraph>
          <Paragraph className="text-center font-dmSerifDisplay font-medium text-[16px] text-subText group-hover:text-bg">
            {description}
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
