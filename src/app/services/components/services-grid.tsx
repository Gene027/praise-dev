"use client";

import { FC } from "react";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import TitleTag from "@/components/HomeSections/TitleTag";
import { services } from "../services.constants";
import {
  FiServer,
  FiLayout,
  FiSmartphone,
  FiCloud,
  FiCreditCard,
  FiLink,
  FiArrowRight,
} from "react-icons/fi";
import Link from "next/link";

const iconMap: Record<string, FC<{ size?: number; className?: string }>> = {
  server: FiServer,
  layout: FiLayout,
  smartphone: FiSmartphone,
  cloud: FiCloud,
  creditCard: FiCreditCard,
  link: FiLink,
};

const ServicesGrid: FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-light/50">
      <div className="lg:px-24 px-6">
        <div className="flex flex-col items-center gap-6 mb-16">
          <TitleTag title="Services" description="What I offer" />
          <LargeHeading
            size="sm"
            className="font-dmSerifDisplay text-text text-center max-w-2xl"
          >
            End-to-end development services
          </LargeHeading>
          <Paragraph className="font-raleway text-subText text-center max-w-xl">
            Comprehensive solutions tailored to your business needs, from concept to deployment
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || FiServer;
            return (
              <div
                key={service.id}
                className="group bg-white rounded-3xl overflow-hidden border border-light hover:border-primary/30 hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                        <IconComponent size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-dmSerifDisplay text-2xl text-white">
                          {service.title}
                        </h3>
                        <Paragraph className="font-raleway text-white/80 text-sm">
                          {service.shortDescription}
                        </Paragraph>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 lg:p-8">
                  <Paragraph className="font-raleway text-subText leading-relaxed mb-6">
                    {service.description}
                  </Paragraph>

                  <div className="mb-6">
                    <Paragraph className="font-raleway font-semibold text-text text-sm mb-3">
                      Key Features:
                    </Paragraph>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <Paragraph className="font-raleway text-subText text-sm">
                            {feature}
                          </Paragraph>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-light text-text text-xs font-raleway font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-primary font-raleway font-semibold hover:gap-3 transition-all group/link"
                  >
                    Get Started
                    <FiArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
