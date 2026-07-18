"use client";

import { FC } from "react";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { stats } from "../portfolio.constants";
import { FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const PortfolioHero: FC = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="relative lg:px-24 px-6 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="flex-1 flex flex-col gap-6 max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="h-1 w-12 bg-primary rounded-full" />
              <Paragraph className="font-raleway text-primary font-semibold uppercase tracking-wider text-sm">
                Software Engineer
              </Paragraph>
            </div>

            <LargeHeading className="font-dmSerifDisplay text-text text-4xl lg:text-6xl leading-tight">
              Hi, I&apos;m{" "}
              <span className="text-primary">Praise Anosike</span>
            </LargeHeading>

            <Paragraph className="font-raleway text-subText text-lg leading-relaxed">
              Software Engineer with 7+ years of experience building secure, scalable products
              across gaming, fintech, e-commerce, and edtech. Deep expertise in Node.js/NestJS
              microservices, payments, distributed system design, and AWS/DevOps.
            </Paragraph>

            <div className="flex flex-wrap gap-4 mt-2">
              <Link href="/contact">
                <Button variant="primary" size="sm">
                  <FiMail className="mr-2" />
                  Get in Touch
                </Button>
              </Link>
              <a
                href="/portfolio/Praise_Anosike_Resume_2026-05-30.pdf"
                download
                className="inline-flex h-[52px] min-w-[150px] items-center justify-center rounded-[12px] border-[1.5px] border-solid border-primary px-4 text-sm font-medium text-primary transition-colors hover:border-[#B03A26] hover:text-[#B03A26] lg:min-w-[190px] lg:text-lg"
              >
                <FiDownload className="mr-2" />
                Download CV
              </a>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://github.com/Gene027"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-light hover:bg-primary hover:text-white transition-colors"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/anosike-praise-a6a402230"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-light hover:bg-primary hover:text-white transition-colors"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="mailto:anosikepraise@gmail.com"
                className="p-3 rounded-full bg-light hover:bg-primary hover:text-white transition-colors"
              >
                <FiMail size={20} />
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
              <div className="relative w-[280px] h-[280px] lg:w-[380px] lg:h-[380px] rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src="/Profile_Headshot.jpeg"
                  alt="Praise Anosike"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-light">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <Paragraph className="font-raleway font-medium text-sm">
                    Available for work
                  </Paragraph>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 lg:mt-24">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-lg border border-light hover:border-primary/30 transition-colors group"
            >
              <div className="text-4xl lg:text-5xl font-dmSerifDisplay text-primary group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <Paragraph className="font-raleway text-subText mt-2">
                {stat.label}
              </Paragraph>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
