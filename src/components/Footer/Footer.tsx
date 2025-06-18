import { FC } from "react";
import FooterIntro from "./Intro";
import QuickLinks from "./QuickLinks";
import ServiceLocation from "./ServiceLocation";
import Newsletter from "./Newsletter";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="min-h-[400px] md:min-h-[527px] p-6 md:p-20 bg-text flex flex-col gap-6 md:gap-8">
      <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4">
       <FooterIntro />
       <QuickLinks />
       <ServiceLocation />
       <Newsletter />
      </div>
      <hr className="border-solid border-[1.5px] border-subText" />
      <div className="text-bg font-raleway text-xs md:text-sm font-medium text-center md:text-left">{`©Copyright ${new Date().getFullYear()} PraiseDev | All Rights Reserved`}</div>
    </div>
  );
};

export default Footer;
