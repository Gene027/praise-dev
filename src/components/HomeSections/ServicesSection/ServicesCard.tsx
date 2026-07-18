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
    <article
      tabIndex={0}
      className="group flex min-h-[360px] flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm outline-none transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-xl focus:-translate-y-1.5 focus:border-primary/50 focus:shadow-xl focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-light active:-translate-y-1"
      aria-label={`${title} service`}
    >
      <div className="relative h-44 overflow-hidden bg-gray-100">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110 group-focus:scale-110 group-active:scale-105"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90 group-focus:opacity-90" />
        <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/95 font-dmSerifDisplay text-2xl text-primary shadow-md transition-colors duration-300 group-hover:bg-primary group-hover:text-white group-focus:bg-primary group-focus:text-white">
          {id}
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between gap-8 p-6 text-left sm:p-7 lg:p-6">
        <div className="flex flex-col gap-4">
          <div className="h-1 w-10 rounded-full bg-primary transition-all duration-300 group-hover:w-16 group-focus:w-16" />
          <Paragraph className="font-dmSerifDisplay text-3xl leading-tight text-text transition-colors duration-300 group-hover:text-primary group-focus:text-primary lg:text-[32px]">
            {title}
          </Paragraph>
          <Paragraph className="font-raleway text-sm font-medium leading-6 text-subText">
            {description}
          </Paragraph>
        </div>

        <div className="h-px w-full bg-gray-200 transition-colors duration-300 group-hover:bg-primary/40 group-focus:bg-primary/40" />
      </div>
    </article>
  );
};

export default ServicesCard;
