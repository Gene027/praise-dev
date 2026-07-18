"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Code2,
  Wand2,
} from "lucide-react";
import LargeHeading from "../ui/LargeHeading";
import Paragraph from "../ui/Paragraph";

const stats = [
  { value: "7+", label: "Years building" },
  { value: "10+", label: "Trusted clients" },
  { value: "3", label: "Core platforms" },
];

const capabilities = [
  {
    title: "Interfaces",
    description: "Clean product screens built for trust.",
  },
  {
    title: "Systems",
    description: "Fast, scalable backends behind the scenes.",
  },
  {
    title: "Launch",
    description: "Responsive delivery from idea to release.",
  },
];

const Hero: FC = () => {
  return (
    <section className="relative isolate w-full max-w-[100vw] overflow-hidden bg-bg">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(220,72,48,0.12),transparent_28%),radial-gradient(circle_at_84%_18%,rgba(250,192,37,0.16),transparent_26%),linear-gradient(135deg,rgba(255,253,253,1),rgba(255,248,238,0.72)_45%,rgba(255,253,253,1))]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-gradient-to-t from-white1 to-transparent" />

      <div className="mx-auto grid w-full min-w-0 max-w-[100vw] grid-cols-1 items-center gap-10 px-4 py-8 sm:px-6 sm:py-10 lg:min-h-[calc(100svh-180px)] lg:max-w-[1440px] lg:grid-cols-[0.92fr_1.08fr] lg:gap-12 lg:px-12 xl:px-16">
        <motion.div
          initial={false}
          className="flex w-[320px] min-w-0 max-w-[calc(100vw-2rem)] flex-col gap-7 sm:w-full sm:max-w-full lg:max-w-2xl"
        >
          <motion.div
            whileHover={{ y: -2 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/15 bg-white/80 px-4 py-2 shadow-[0_16px_50px_rgba(24,4,1,0.08)] backdrop-blur"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-40" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
            </span>
            <Paragraph className="font-raleway text-sm font-bold text-primary">
              Available for premium builds
            </Paragraph>
          </motion.div>

          <motion.div className="flex flex-col gap-5">
            <LargeHeading className="max-w-[10ch] font-dmSerifDisplay text-[40px] font-normal leading-[1.02] text-text sm:max-w-none sm:text-[64px] lg:text-[72px] xl:text-[86px]">
              Digital products with presence, polish, and performance.
            </LargeHeading>
            <Paragraph className="w-full max-w-full whitespace-normal break-words font-raleway text-base font-medium leading-8 text-subText sm:max-w-xl sm:text-lg">
              I design and build refined web experiences, scalable systems, and
              product interfaces that help ambitious brands look credible from
              the first second.
            </Paragraph>
          </motion.div>

          <motion.div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/portfolio"
              className="group inline-flex h-14 w-full items-center justify-center gap-2 rounded-lg bg-text px-6 font-raleway text-base font-bold text-white1 shadow-[0_18px_45px_rgba(24,4,1,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:w-auto"
            >
              View Portfolio
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-lg border border-text/15 bg-white/75 px-6 font-raleway text-base font-bold text-text backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:w-auto"
            >
              <Briefcase className="h-5 w-5" />
              Start a Project
            </Link>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-3 border-y border-text/10 py-4 sm:max-w-xl sm:gap-5"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <Paragraph className="font-dmSerifDisplay text-3xl font-normal leading-none text-primary sm:text-4xl">
                  {stat.value}
                </Paragraph>
                <Paragraph className="mt-2 font-raleway text-[11px] font-semibold leading-5 text-subText sm:text-sm">
                  {stat.label}
                </Paragraph>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={false}
          className="relative mx-auto w-full max-w-[720px] lg:max-w-none"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[28px] bg-gradient-to-br from-primary/16 via-secondary/12 to-text/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[26px] border border-white/80 bg-white shadow-[0_30px_90px_rgba(24,4,1,0.18)]">
              <Image
                src="/hero-premium-studio.webp"
                alt="Premium digital studio workspace with web and app interface previews"
                className="aspect-[1.6/1] w-full object-cover"
                width={1440}
                height={790}
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-text/18 via-transparent to-secondary/10" />
            </div>
          </motion.div>

          <motion.div
            initial={false}
            whileHover={{ y: -2 }}
            className="absolute top-6 hidden max-w-[220px] rounded-xl border border-white/80 bg-white/90 p-4 shadow-[0_18px_55px_rgba(24,4,1,0.14)] backdrop-blur lg:-left-8 lg:block"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Wand2 className="h-5 w-5" />
              </div>
              <div>
                <Paragraph className="font-raleway text-sm font-bold text-text">
                  Strategy first
                </Paragraph>
                <Paragraph className="mt-1 font-raleway text-xs font-medium leading-5 text-subText">
                  Built for clarity, speed, and trust.
                </Paragraph>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={false}
            whileHover={{ y: -2 }}
            className="absolute bottom-5 hidden w-[280px] rounded-xl border border-white/80 bg-text p-4 shadow-[0_18px_55px_rgba(24,4,1,0.2)] lg:-right-4 lg:block"
          >
            <div className="mb-3 flex items-center gap-2 text-secondary">
              <Code2 className="h-5 w-5" />
              <span className="font-raleway text-sm font-bold text-white1">
                End-to-end craft
              </span>
            </div>
            <div className="flex flex-col gap-3">
              {capabilities.map((capability) => (
                <div key={capability.title} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                  <div className="min-w-0">
                    <span className="block font-raleway text-xs font-bold leading-4 text-white1">
                      {capability.title}
                    </span>
                    <span className="mt-0.5 block font-raleway text-[11px] font-medium leading-4 text-white1/70">
                      {capability.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
