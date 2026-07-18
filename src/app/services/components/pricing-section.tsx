"use client";

import { FC } from "react";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import TitleTag from "@/components/HomeSections/TitleTag";
import { Button } from "@/components/ui/Button";
import { pricingTiers } from "../services.constants";
import Link from "next/link";
import { FiCheck, FiArrowRight } from "react-icons/fi";

const PricingSection: FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-light/50">
      <div className="lg:px-24 px-6">
        <div className="flex flex-col items-center gap-6 mb-16">
          <TitleTag title="Pricing" description="Flexible engagement models" />
          <LargeHeading
            size="sm"
            className="font-dmSerifDisplay text-text text-center max-w-2xl"
          >
            Choose the right engagement model
          </LargeHeading>
          <Paragraph className="font-raleway text-subText text-center max-w-xl">
            Flexible pricing options designed to match your project needs and budget
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative bg-white rounded-3xl p-8 border transition-all duration-300 ${
                tier.highlighted
                  ? "border-primary shadow-2xl scale-105 z-10"
                  : "border-light hover:border-primary/30 hover:shadow-xl"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary to-secondary text-white text-xs font-raleway font-semibold px-4 py-2 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-dmSerifDisplay text-2xl text-text mb-2">
                  {tier.name}
                </h3>
                <Paragraph className="font-raleway text-subText text-sm">
                  {tier.description}
                </Paragraph>
              </div>

              <div className="space-y-4 mb-8">
                {tier.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                      <FiCheck size={12} className="text-primary" />
                    </div>
                    <Paragraph className="font-raleway text-text text-sm">
                      {feature}
                    </Paragraph>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="block">
                <Button
                  variant={tier.highlighted ? "primary" : "secondary"}
                  size="sm"
                  className="w-full"
                >
                  Get Started
                  <FiArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Paragraph className="font-raleway text-subText">
            Need a custom solution?{" "}
            <Link href="/contact" className="text-primary font-semibold hover:underline">
              Let&apos;s discuss your project
            </Link>
          </Paragraph>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
