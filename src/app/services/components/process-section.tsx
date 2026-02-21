"use client";

import { FC } from "react";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import TitleTag from "@/components/HomeSections/TitleTag";
import { processSteps } from "../services.constants";
import {
  FiSearch,
  FiClipboard,
  FiCode,
  FiCheckCircle,
  FiSend,
  FiHeadphones,
} from "react-icons/fi";

const iconMap: Record<string, FC<{ size?: number; className?: string }>> = {
  search: FiSearch,
  clipboard: FiClipboard,
  code: FiCode,
  checkCircle: FiCheckCircle,
  rocket: FiSend,
  headphones: FiHeadphones,
};

const ProcessSection: FC = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="lg:px-24 px-6">
        <div className="flex flex-col items-center gap-6 mb-16">
          <TitleTag title="Process" description="How I work" />
          <LargeHeading
            size="sm"
            className="font-dmSerifDisplay text-text text-center max-w-2xl"
          >
            A streamlined process for successful delivery
          </LargeHeading>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary transform -translate-x-1/2" />

            <div className="flex flex-col gap-12 lg:gap-0">
              {processSteps.map((step, idx) => {
                const IconComponent = iconMap[step.icon] || FiSearch;
                const isLeft = idx % 2 === 0;

                return (
                  <div
                    key={step.id}
                    className={`relative flex flex-col lg:flex-row items-center gap-6 lg:gap-0 ${
                      isLeft ? "" : "lg:flex-row-reverse"
                    }`}
                  >
                    <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-14 h-14 bg-white rounded-full border-4 border-primary items-center justify-center z-10 shadow-lg">
                      <span className="font-dmSerifDisplay text-primary text-xl">
                        {step.id}
                      </span>
                    </div>

                    <div
                      className={`flex-1 ${
                        isLeft ? "lg:pr-20 lg:text-right" : "lg:pl-20"
                      }`}
                    >
                      <div
                        className={`bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-light hover:border-primary/30 hover:shadow-xl transition-all group ${
                          isLeft ? "lg:ml-auto" : ""
                        } max-w-md`}
                      >
                        <div
                          className={`flex items-center gap-4 mb-4 ${
                            isLeft ? "lg:flex-row-reverse" : ""
                          }`}
                        >
                          <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
                            <IconComponent size={24} className="text-primary" />
                          </div>
                          <h3 className="font-dmSerifDisplay text-xl text-text">
                            {step.title}
                          </h3>
                          <div className="lg:hidden flex items-center justify-center w-8 h-8 bg-primary rounded-full text-white font-raleway font-semibold text-sm ml-auto">
                            {step.id}
                          </div>
                        </div>
                        <Paragraph
                          className={`font-raleway text-subText leading-relaxed ${
                            isLeft ? "lg:text-right" : ""
                          }`}
                        >
                          {step.description}
                        </Paragraph>
                      </div>
                    </div>

                    <div className="hidden lg:block flex-1" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
