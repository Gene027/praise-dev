"use client";
import { FC } from "react";
import Paragraph from "../../../components/ui/Paragraph";
import Form from "./form";

interface ContactUsProps {}

const ContactUs: FC<ContactUsProps> = ({}) => {
  return (
    <div className="relative px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-[50px] flex flex-col lg:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-24 justify-between overflow-hidden">
      {/* Background for glass effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-tertiary/5 via-primary/5 to-secondary/10" />
      <div className="relative flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-11 w-full lg:max-w-[338px]">
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
          <Paragraph className="font-dmSerifDisplay text-[32px] sm:text-[40px] md:text-[48px] lg:text-[58px] text-text leading-none">
            Let&apos;s get in touch
          </Paragraph>
          <Paragraph className="font-raleway font-medium text-lg sm:text-xl md:text-2xl text-subText">
            Don&apos;t be afraid to say hello to us!
          </Paragraph>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
          <div className="flex flex-col gap-2 sm:gap-3">
            <Paragraph className="font-raleway font-medium text-lg sm:text-xl text-subText">
              Phone
            </Paragraph>
            <Paragraph className="font-raleway font-semibold text-lg sm:text-xl text-text">
              {"(+234) 704-128-4689"}
            </Paragraph>
          </div>
          <div className="flex flex-col gap-2 sm:gap-3">
            <Paragraph className="font-raleway font-medium text-lg sm:text-xl text-subText">
              Email
            </Paragraph>
            <Paragraph className="font-raleway font-semibold text-lg sm:text-xl text-text">
              {"anosikepraise@gmail.com"}
            </Paragraph>
          </div>
        </div>
      </div>

      <div className="relative w-full lg:flex-1">
        <Form />
      </div>
    </div>
  );
};

export default ContactUs;
