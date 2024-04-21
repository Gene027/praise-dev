import { FC } from "react";
import FooterIntro from "./Intro";
import QuickLinks from "./QuickLinks";
import ServiceLocation from "./ServiceLocation";
import Newsletter from "./Newsletter";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="min-h-[527px] p-20 bg-text flex flex-col gap-8">
      <div className="flex justify-between">
       <FooterIntro />
       <QuickLinks />
       <ServiceLocation />
       <Newsletter />
      </div>
      <hr className="border-solid border-[1.5px] border-subText" />
      <div className="text-bg font-raleway text-sm font-medium">{`©Copyright ${new Date().getFullYear()} PraiseDev | All Rights Reserved`}</div>
    </div>
  );
};

export default Footer;
