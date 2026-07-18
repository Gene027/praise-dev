import React from "react";
import Link from "next/link";

const QuickLinks = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <h1 className="font-raleway text-base md:text-lg font-semibold text-bg">
        Quick Links
      </h1>
      <div className="flex flex-col gap-2 md:gap-3">
        <Link href="/about" className="text-bg font-raleway text-xs md:text-sm hover:text-primary transition-colors duration-200">
          About Us
        </Link>
        <Link href="/portfolio" className="text-bg font-raleway text-xs md:text-sm hover:text-primary transition-colors duration-200">
          Our Portfolio
        </Link>
        <Link href="/services" className="text-bg font-raleway text-xs md:text-sm hover:text-primary transition-colors duration-200">
          Services
        </Link>
        <Link href="/blog" className="text-bg font-raleway text-xs md:text-sm hover:text-primary transition-colors duration-200">
          Blog
        </Link>
        <Link href="/contact" className="text-bg font-raleway text-xs md:text-sm hover:text-primary transition-colors duration-200">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default QuickLinks;
