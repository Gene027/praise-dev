import type { Metadata } from "next";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar";
import {
  ServicesHero,
  ServicesGrid,
  ProcessSection,
  PricingSection,
  TechStack,
  ServicesCTA,
} from "./components";

export const metadata: Metadata = {
  title: "PraiseDev | Services",
  description:
    "Professional software development services including backend APIs, frontend applications, mobile apps, cloud infrastructure, and payment integrations.",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Software Development Services | PraiseDev",
    description:
      "End-to-end development services: Backend, Frontend, Mobile, Cloud & DevOps, Payment Integration.",
    type: "website",
  },
};

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen bg-bg">
      <Navbar />
      <main className="flex-1 pt-[80px]">
        <ServicesHero />
        <ServicesGrid />
        <TechStack />
        <ProcessSection />
        <PricingSection />
        <ServicesCTA />
      </main>
      <Footer />
    </div>
  );
}
