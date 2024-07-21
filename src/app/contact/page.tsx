"use client";
import { FC } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/Footer";
import ContactUs from "./components";

interface ContactProps {}

const ContactPage: FC<ContactProps> = ({}) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default ContactPage;
