"use client";

import { FC } from "react";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import TitleTag from "@/components/HomeSections/TitleTag";
import { experiences } from "../portfolio.constants";
import { FiBriefcase, FiMapPin, FiCalendar } from "react-icons/fi";

const ExperienceTimeline: FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-light/50">
      <div className="lg:px-24 px-6">
        <div className="flex flex-col items-center gap-6 mb-16">
          <TitleTag title="Experience" description="My professional journey" />
          <LargeHeading
            size="sm"
            className="font-dmSerifDisplay text-text text-center max-w-2xl"
          >
            Building products that make a difference
          </LargeHeading>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary transform lg:-translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, idx) => (
              <div
                key={exp.id}
                className={`relative flex flex-col lg:flex-row gap-8 ${
                  idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="absolute left-0 lg:left-1/2 w-4 h-4 bg-primary rounded-full transform lg:-translate-x-1/2 border-4 border-white shadow-lg z-10" />

                <div className={`flex-1 pl-8 lg:pl-0 ${idx % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"}`}>
                  <div
                    className={`bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-light hover:border-primary/30 hover:shadow-xl transition-all group ${
                      idx % 2 === 0 ? "lg:ml-auto" : ""
                    } max-w-xl`}
                  >
                    <div className={`flex items-center gap-3 mb-4 ${idx % 2 === 0 ? "lg:justify-end" : ""}`}>
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <FiBriefcase className="text-primary" size={20} />
                      </div>
                      <div className={idx % 2 === 0 ? "lg:order-first" : ""}>
                        <h3 className="font-dmSerifDisplay text-xl text-text">
                          {exp.role}
                        </h3>
                        <Paragraph className="font-raleway text-primary font-semibold">
                          {exp.company}
                        </Paragraph>
                      </div>
                    </div>

                    <div className={`flex flex-wrap gap-4 mb-4 text-sm text-subText ${idx % 2 === 0 ? "lg:justify-end" : ""}`}>
                      <div className="flex items-center gap-1">
                        <FiMapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FiCalendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <ul className={`space-y-2 mb-5 ${idx % 2 === 0 ? "lg:text-right" : ""}`}>
                      {exp.highlights.slice(0, 3).map((highlight, hIdx) => (
                        <li
                          key={hIdx}
                          className="text-subText font-raleway text-sm leading-relaxed"
                        >
                          <span className="text-primary mr-2">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <div className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? "lg:justify-end" : ""}`}>
                      {exp.technologies.slice(0, 5).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 bg-light text-text text-xs font-raleway font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="hidden lg:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
