import { FC } from "react";
import TitleTag from "../TitleTag";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { services } from "./services-constant";
import ServicesCard from "./ServicesCard";

interface ServicesSectionProps {}

const ServicesSection: FC<ServicesSectionProps> = ({}) => {
  return (
    <div className="flex flex-col gap-14 w-full py-[100px] items-center bg-light">
      <TitleTag title="Services" description="What PraiseDev offers" />
      <div className="w-full flex max-w-[1440px]">
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
