"use client";
import { FC } from "react";
import Paragraph from "../../../components/ui/Paragraph";
import Form from "./form";

interface ContactUsProps {}

const ContactUs: FC<ContactUsProps> = ({}) => {
  return (
    <div className="px-[100px] py-[50px] flex gap-24 justify-between">
      <div className="flex flex-col gap-11 max-w-[338px]">
        <div className="flex flex-col gap-6">
          <Paragraph className="font-dmSerifDisplay text-[58px] text-text leading-none">
            Let&apos;s get in touch
          </Paragraph>
          <Paragraph className="font-raleway font-medium text-2xl text-subText">
            Don&apos;t be afraid to say hello to us!
          </Paragraph>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <Paragraph className="font-raleway font-medium text-xl text-subText">
              Phone
            </Paragraph>
            <Paragraph className="font-raleway font-semibold text-xl text-text">
              {"(+234) 704-128-4689"}
            </Paragraph>
          </div>
          <div className="flex flex-col gap-3">
            <Paragraph className="font-raleway font-medium text-xl text-subText">
              Email
            </Paragraph>
            <Paragraph className="font-raleway font-semibold text-xl text-text">
              {"anosikepraise@gmail.com"}
            </Paragraph>
          </div>
        </div>
      </div>

      <Form />
    </div>
  );
};

export default ContactUs;
