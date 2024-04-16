import { FC } from "react";
import TitleTag from "../TitleTag";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import PortfolioSlide from "./PortfolioSlide";

interface BestPortfolioProps {}

const BestPortfolio: FC<BestPortfolioProps> = ({}) => {
  return (
    <div className="py-[100px] flex w-full items-center flex-col gap-16">
      <TitleTag title="Projects" description="Our best works" />
      <PortfolioSlide />
      <Link href="/portfolio">
        <Button
          variant="secondary"
          size="sm"
          className="border-text text-text font-raleway text-lg font-semibold"
        >
          View all
        </Button>
      </Link>
    </div>
  );
};

export default BestPortfolio;
