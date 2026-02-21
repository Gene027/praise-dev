"use client";

import { FC } from "react";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import TitleTag from "@/components/HomeSections/TitleTag";
import {
  SiNodedotjs,
  SiNestjs,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiAmazon,
  SiTailwindcss,
  SiMongodb,
  SiStripe,
} from "react-icons/si";

const technologies = [
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "AWS", icon: SiAmazon, color: "#FF9900" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Stripe", icon: SiStripe, color: "#635BFF" },
];

const TechStack: FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-text via-tertiary to-text overflow-hidden">
      <div className="lg:px-24 px-6">
        <div className="flex flex-col items-center gap-6 mb-16">
          <div className="flex p-3 rounded-[200px] border border-solid border-white/20 w-fit">
            <div className="flex gap-2 items-center">
              <div className="py-2 px-6 bg-secondary flex justify-center items-center rounded-[100px] text-text font-raleway font-semibold text-xs capitalize">
                TECH STACK
              </div>
              <Paragraph className="font-raleway text-base font-medium text-white/80">
                Technologies I use
              </Paragraph>
            </div>
          </div>
          <LargeHeading
            size="sm"
            className="font-dmSerifDisplay text-white text-center max-w-2xl"
          >
            Built with modern technologies
          </LargeHeading>
          <Paragraph className="font-raleway text-white/70 text-center max-w-xl">
            I use industry-leading tools and frameworks to build robust, scalable solutions
          </Paragraph>
        </div>

        <div className="relative">
          <div className="flex animate-scroll">
            <div className="flex gap-8 min-w-max">
              {[...technologies, ...technologies].map((tech, idx) => {
                const IconComponent = tech.icon;
                return (
                  <div
                    key={idx}
                    className="group flex flex-col items-center gap-3 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 min-w-[120px]"
                  >
                    <div
                      className="p-4 rounded-xl transition-colors duration-300"
                      style={{ backgroundColor: `${tech.color}20` }}
                    >
                      <IconComponent
                        size={32}
                        style={{ color: tech.color }}
                        className="group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <Paragraph className="font-raleway text-white font-medium text-sm">
                      {tech.name}
                    </Paragraph>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </section>
  );
};

export default TechStack;
