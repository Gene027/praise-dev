"use client";

import { FC } from "react";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { stats } from "../services.constants";
import { FiArrowRight } from "react-icons/fi";

const ServicesHero: FC = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />

      <div className="relative lg:px-24 px-6 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <Paragraph className="font-raleway text-primary font-semibold text-sm">
              Available for new projects
            </Paragraph>
          </div>

          <LargeHeading className="font-dmSerifDisplay text-text text-4xl lg:text-6xl leading-tight mb-6">
            Building{" "}
            <span className="text-primary">Digital Solutions</span>
            <br />
            That Drive Results
          </LargeHeading>

          <Paragraph className="font-raleway text-subText text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            From scalable backend systems to beautiful frontends and mobile apps,
            I deliver end-to-end solutions that help businesses grow and succeed in
            the digital world.
          </Paragraph>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Link href="/contact">
              <Button variant="primary" size="sm">
                Start a Project
                <FiArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="secondary" size="sm">
                View My Work
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl lg:text-5xl font-dmSerifDisplay text-primary mb-2">
                  {stat.value}
                </div>
                <Paragraph className="font-raleway text-subText text-sm">
                  {stat.label}
                </Paragraph>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
