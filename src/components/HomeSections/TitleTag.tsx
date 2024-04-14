import React from "react";
import Paragraph from "../ui/Paragraph";

interface TitleTagProps {
  className?: string;
  title: string;
  description: string;
}

const TitleTag = ({ description, title, className }: TitleTagProps) => {
  return (
    <div className="flex p-3 rounded-[200px] border border-solid border-[#D7D7D7] w-fit">
      <div className="flex gap-2 items-center">
        <div className="py-2 px-6 bg-secondary flex justify-center items-center rounded-[100px] text-text font-raleway font-semibold text-xs max-w-[71px]">
          {title}
        </div>
        <Paragraph className="font-raleway text-base font-medium">
          {description}
        </Paragraph>
      </div>
    </div>
  );
};

export default TitleTag;
