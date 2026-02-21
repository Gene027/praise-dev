"use client";

import { FC } from "react";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import TitleTag from "@/components/HomeSections/TitleTag";
import { skillCategories } from "../portfolio.constants";
import {
  FiServer,
  FiLayout,
  FiSmartphone,
  FiCloud,
  FiDatabase,
  FiShield,
} from "react-icons/fi";

const iconMap: Record<string, FC<{ size?: number; className?: string }>> = {
  server: FiServer,
  layout: FiLayout,
  smartphone: FiSmartphone,
  cloud: FiCloud,
  database: FiDatabase,
  shield: FiShield,
};

const SkillsShowcase: FC = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="lg:px-24 px-6">
        <div className="flex flex-col items-center gap-6 mb-16">
          <TitleTag title="Skills" description="Technologies I work with" />
          <LargeHeading
            size="sm"
            className="font-dmSerifDisplay text-text text-center max-w-2xl"
          >
            Full-stack expertise across the modern tech stack
          </LargeHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category) => {
            const IconComponent = iconMap[category.icon] || FiServer;
            return (
              <div
                key={category.id}
                className="group bg-white rounded-2xl p-6 lg:p-8 border border-light hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
                    <IconComponent size={24} className="text-primary" />
                  </div>
                  <h3 className="font-dmSerifDisplay text-xl text-text">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-2 bg-light text-text text-sm font-raleway rounded-lg hover:bg-primary hover:text-white transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 text-center lg:text-left">
              <h3 className="font-dmSerifDisplay text-2xl lg:text-3xl text-white mb-3">
                Award Recognition
              </h3>
              <Paragraph className="text-white/90 font-raleway">
                <span className="font-semibold">3rd Place</span> — Algorand Network Umoja 2 Bounty Hack
              </Paragraph>
              <Paragraph className="text-white/70 font-raleway text-sm mt-2">
                Built a multi-campaign crowdfunding dApp using Reach
              </Paragraph>
            </div>
            <div className="flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl backdrop-blur-sm">
              <span className="text-4xl">🏆</span>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-light rounded-full px-6 py-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <Paragraph className="font-raleway text-sm text-subText">
                HackerRank Certified
              </Paragraph>
            </div>
            <div className="w-px h-4 bg-subText/30" />
            <Paragraph className="font-raleway text-sm text-subText">
              B.Eng Chemical Engineering, FUTO
            </Paragraph>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsShowcase;
