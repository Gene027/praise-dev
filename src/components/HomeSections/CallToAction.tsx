import { FC } from "react";
import Paragraph from "../ui/Paragraph";
import { Button } from "../ui/Button";
import Link from "next/link";

interface CallToActionProps {}

const CallToAction: FC<CallToActionProps> = ({}) => {
  return (
    <div className="flex justify-center items-center bg-primary relative min-h-[502px]">
      <img
        className="absolute inset-0"
        src="/homepage/person writing on laptop.png"
        alt="Working"
      />
      <div className="flex flex-col max-w-[384px] gap-8 items-center">
        <Paragraph className="font-dmSerifDisplay text-bg text-4xl text-center">
          Enough Talk Let’s Build Something
        </Paragraph>
        <Paragraph className="text-light font-raleway text-base font-medium text-center">
          What kind of website would you like , let’s get you started to boost
          your business
        </Paragraph>
        <Link href="/contact">
          <Button
            size="sm"
            className="border-[1.5px] border-solid border-bg hover:border-[#B03A26] hover:bg-transparent text-bg font-semibold text-lg"
          >
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
