"use client";
import { FC } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/Footer";
import ContactUs from "./components";

interface ContactProps {}

const ContactPage: FC<ContactProps> = ({}) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col justify-between">
        <ContactUs />
        <Footer />
      </main>
    </>
  );
};

export default ContactPage;
