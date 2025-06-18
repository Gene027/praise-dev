import { FC } from "react";
import Paragraph from "../ui/Paragraph";
import { Button } from "../ui/Button";
import Link from "next/link";

interface CallToActionProps {}

const CallToAction: FC<CallToActionProps> = ({}) => {
  return (
    <div className="flex flex-col-reverse sm:flex-row justify-center items-center bg-primary relative min-h-[502px] px-4 sm:px-0 py-8 sm:py-0">
      <div className="h-[220px] sm:hidden" />
      <img
        className="w-[250px] sm:w-[370px] absolute bottom-0 left-0"
        src="/homepage/person writing on laptop.png"
        alt="Working"
      />
      <div className="flex flex-col max-w-[320px] sm:max-w-[384px] gap-6 sm:gap-8 items-center relative z-10 mb-6 sm:mb-0">
        <Paragraph className="font-dmSerifDisplay text-bg text-2xl sm:text-4xl text-center leading-tight">
          Enough Talk Let's Build Something
        </Paragraph>
        <Paragraph className="text-light font-raleway text-sm sm:text-base font-medium text-center leading-relaxed">
          What kind of website would you like , let's get you started to boost
          your business
        </Paragraph>
        <Link href="/contact">
          <Button
            size="md"
            className="border-[1.5px] border-solid border-bg hover:border-[#B03A26] hover:bg-transparent text-bg font-semibold text-base sm:text-lg px-6 py-3"
          >
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
