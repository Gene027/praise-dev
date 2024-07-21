"use client";
import { FC } from "react";
import { Button } from "../../../components/ui/Button";
import { Input } from "../../../components/ui/Input";
import { toast } from "../../../components/ui/toast";

interface FormProps {}

const Form: FC<FormProps> = ({}) => {
  const handleSubmit = () => {
    toast({
      title: "Message Sent",
      message: "We will get back to you shortly",
      type: "success",
    });
  };
  return (
    <div className="max-w-4xl bg-primary flex flex-col p-12 gap-16">
      <div className="flex flex-col gap-5 w-full">
        <div className="flex justify-between gap-5">
          <div className="flex flex-col gap-3">
            <label className="text-bg font-raleway text-lg">First Name</label>
            <input
              className="py-2 px-3 rounded-xl border border-solid border-[#C9C9C9] bg-inherit placeholder:font-raleway placeholder:text-[#C9C9C9] placeholder:text-base placeholder:font-normal focus:outline-none focus:border-white text-bg font-raleway text-lg"
              placeholder="John"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-bg font-raleway text-lg">Last Name</label>
            <input
              className="py-2 px-3 rounded-xl border border-solid border-[#C9C9C9] bg-inherit placeholder:font-raleway placeholder:text-[#C9C9C9] placeholder:text-base placeholder:font-normal focus:outline-none focus:border-white text-bg font-raleway text-lg"
              placeholder="Doe"
            />
          </div>
        </div>
        <div className="flex justify-between gap-5">
          <div className="flex flex-col gap-3">
            <label className="text-bg font-raleway text-lg">Email</label>
            <input
              className="py-2 px-3 rounded-xl border border-solid border-[#C9C9C9] bg-inherit placeholder:font-raleway placeholder:text-[#C9C9C9] placeholder:text-base placeholder:font-normal focus:outline-none focus:border-white text-bg font-raleway text-lg"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-bg font-raleway text-lg">Subject</label>
            <input
              className="py-2 px-3 rounded-xl border border-solid border-[#C9C9C9] bg-inherit placeholder:font-raleway placeholder:text-[#C9C9C9] placeholder:text-base placeholder:font-normal focus:outline-none focus:border-white text-bg font-raleway text-lg"
              placeholder="E-commerce Website"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-bg font-raleway text-lg">Your Message</label>
          <textarea
            className="w-full min-h-[190px] p-5 rounded-xl border border-solid border-[#C9C9C9] bg-inherit placeholder:font-raleway placeholder:text-[#C9C9C9] placeholder:text-base placeholder:font-normal focus:outline-none focus:border-white text-bg font-raleway text-lg"
            placeholder="Enter your message"
          ></textarea>
        </div>
      </div>

      <Button
        className="text-primary bg-bg hover:bg-slate-100 self-center"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </div>
  );
};

export default Form;
