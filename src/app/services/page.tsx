import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/Footer";
import ServicesContent from "./components/ServicesContent";

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col">
        <ServicesContent />
        <Footer />
      </main>
    </>
  );
} 