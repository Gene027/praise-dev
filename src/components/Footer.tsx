import { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="min-h-[527px] p-20 bg-text flex flex-col gap-8">
      <div className="flex justify-between">
        <div className="flex flex-col gap-6 max-w-[243px]">
          <img className="w-[113px] h-[61px]" src="logo.png" alt="Logo" />
          <p className="text-bg font-raleway text-sm ">
            Our company thrives on unity in diversity, with a nationwide team
            collaborating remotely to transform your digital dreams into
            reality, no matter where you are, no matter where we are.
          </p>
          
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <hr className="border-solid border-[1.5px] border-subText" />
      <div className="text-bg font-raleway text-sm font-medium">{`©Copyright ${new Date().getFullYear()} PraiseDev | All Rights Reserved`}</div>
    </div>
  );
};

export default Footer;
