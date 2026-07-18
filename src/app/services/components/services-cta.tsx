"use client";

import { FC } from "react";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { FiMessageCircle, FiCalendar } from "react-icons/fi";

const ServicesCTA: FC = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="lg:px-24 px-6">
        <div className="relative max-w-5xl mx-auto overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-text via-tertiary to-text rounded-3xl" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
          
          <div className="relative p-8 lg:p-16">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-center lg:text-left">
                <LargeHeading
                  size="sm"
                  className="font-dmSerifDisplay text-white mb-4"
                >
                  Ready to bring your idea to life?
                </LargeHeading>
                <Paragraph className="font-raleway text-white/80 text-lg max-w-xl">
                  Let&apos;s discuss your project requirements and create a solution that
                  exceeds your expectations. I&apos;m here to help turn your vision into reality.
                </Paragraph>
              </div>

              <div className="flex flex-col gap-4 w-full lg:w-auto">
                <Link href="/contact">
                  <Button
                    variant="primary"
                    size="sm"
                    className="w-full px-4 lg:w-auto bg-white text-primary hover:bg-light"
                  >
                    <FiMessageCircle className="mr-2" />
                    Start a Conversation
                  </Button>
                </Link>
                <a
                  href="mailto:anosikepraise@gmail.com"
                  className="inline-flex items-center justify-center h-[52px] px-6 rounded-[12px] border-2 border-white text-white font-raleway font-semibold hover:bg-white/10 transition-colors"
                >
                  <FiCalendar className="mr-2" />
                  Schedule a Call
                </a>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="flex flex-wrap justify-center lg:justify-between gap-6">
                <div className="flex items-center gap-6 text-white/70 font-raleway text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span>Quick response</span>
                  </div>
                  <span>•</span>
                  <span>No commitment required</span>
                  <span>•</span>
                  <span>Free initial consultation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
