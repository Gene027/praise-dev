import type { Metadata } from "next";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar";
import {
  PortfolioHero,
  ExperienceTimeline,
  SkillsShowcase,
  ProjectsGrid,
  ContactCTA,
} from "./components";

export const metadata: Metadata = {
  title: "PraiseDev | Portfolio",
  description:
    "Praise Anosike - Software Engineer with 7+ years of experience building secure, scalable products across gaming, fintech, e-commerce, and edtech.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Praise Anosike | Software Engineer Portfolio",
    description:
      "7+ years building scalable products. Expert in Node.js, NestJS, React, and AWS.",
    type: "website",
  },
};

export default function Portfolio() {
  return (
    <div className="flex flex-col min-h-screen bg-bg">
      <Navbar />
      <main className="flex-1 pt-[80px]">
        <PortfolioHero />
        <ExperienceTimeline />
        <SkillsShowcase />
        <ProjectsGrid />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
