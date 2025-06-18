"use client";
import React, { useState } from "react";
import { BsSendFill } from "react-icons/bs";
import { toast } from "../ui/toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    if (!email) {
      return toast({
        title: "Error",
        message: "Please enter your email",
        type: "error",
      });
    }
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(email)) {
      return toast({
        title: "Error",
        message: "Please enter a valid email",
        type: "error",
      });
    }

    toast({
      title: "Subscribed",
      message: "You have successfully subscribed to our newsletter",
      type: "success",
    });
  };
  
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <h1 className="font-raleway text-base md:text-lg font-semibold text-bg">
        Newsletter Sign up
      </h1>
      <p className="font-raleway text-xs md:text-sm text-bg">
        Sign up and receive exclusive offers.
      </p>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="bg-bg rounded-lg w-full sm:w-[160px] md:w-[197px] h-[40px] md:h-[45px] p-2 text-xs font-raleway font-semibold text-miniSubText"
          onChange={handleChange}
        />
        <div
          onClick={handleSubscribe}
          className="bg-primary hover:bg-normalHover flex justify-center items-center w-full sm:w-[45px] md:w-[50px] h-[40px] md:h-[45px] cursor-pointer rounded-lg transition-colors duration-200"
        >
          <BsSendFill className="text-white w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
