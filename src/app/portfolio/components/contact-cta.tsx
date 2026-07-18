"use client";

import { FC } from "react";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { FiMail, FiArrowRight } from "react-icons/fi";

const ContactCTA: FC = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="lg:px-24 px-6">
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl opacity-10 blur-3xl" />
          
          <div className="relative bg-gradient-to-br from-text to-tertiary rounded-3xl p-8 lg:p-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/20 rounded-full blur-3xl" />
            
            <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              <div className="flex-1 text-center lg:text-left">
                <LargeHeading
                  size="sm"
                  className="font-dmSerifDisplay text-white mb-4"
                >
                  Let&apos;s build something amazing together
                </LargeHeading>
                <Paragraph className="font-raleway text-white/80 text-lg max-w-xl">
                  I&apos;m always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision.
                </Paragraph>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    variant="primary"
                    size="sm"
                    className="w-full bg-white text-primary hover:bg-light"
                  >
                    <FiMail className="mr-2" />
                    Contact Me
                  </Button>
                </Link>
                <a
                  href="mailto:anosikepraise@gmail.com"
                  className="inline-flex items-center justify-center h-[52px] px-6 rounded-[12px] border-2 border-white text-white font-raleway font-semibold hover:bg-white/10 transition-colors group"
                >
                  Send Email
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="relative mt-12 pt-8 border-t border-white/20">
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 text-white/60 font-raleway text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full" />
                  Available for freelance
                </div>
                <div>Lagos, Nigeria</div>
                <a
                  href="mailto:anosikepraise@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  anosikepraise@gmail.com
                </a>
                <a
                  href="tel:+2347041284689"
                  className="hover:text-white transition-colors"
                >
                  +234 704 128 4689
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
