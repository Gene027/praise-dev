import { FC } from "react";
import TitleTag from "../TitleTag";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { services } from "./services-constant";
import ServicesCard from "./ServicesCard";

interface ServicesSectionProps {}

const ServicesSection: FC<ServicesSectionProps> = ({}) => {
  return (
    <div className="flex w-full flex-col items-center gap-10 bg-light px-5 py-[60px] sm:px-6 md:gap-14 md:px-8 md:py-[100px] lg:px-10 xl:px-12">
      <TitleTag title="Services" description="What PraiseDev offers" />

      <div className="grid w-full max-w-[1320px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {services.map((service) => (
          <ServicesCard
            key={service.id}
            id={service.id}
            title={service.title}
            description={service.description}
            backgroundImg={service.image}
          />
        ))}
      </div>

      <Link href="/services">
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

export default ServicesSection;
