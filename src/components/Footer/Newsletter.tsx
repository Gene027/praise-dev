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
    <div className="flex flex-col gap-6">
      <h1 className="font-raleway text-lg font-semibold text-bg">
        Newsletter Sign up
      </h1>
      <p className="font-raleway text-sm text-bg">
        Sign up and receive exclusive offers.
      </p>
      <div className="flex gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="bg-bg rounded-lg w-[197px] h-[45px] p-2 text-xs font-raleway font-semibold text-miniSubText"
          onChange={handleChange}
        />
        <div
          onClick={handleSubscribe}
          className="bg-primary hover:bg-normalHover flex justify-center items-center w-[50px] h-[45px] cursor-pointer rounded-lg"
        >
          <BsSendFill className="text-white w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
