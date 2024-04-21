import Link from "next/link";
import React from "react";

const QuickLinks = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-raleway text-lg font-semibold text-bg">Quick Links</h1>
      <Link className="font-raleway text-sm text-bg" href="/about">
        About
      </Link>
      <Link className="font-raleway text-sm text-bg" href="/services">
        Services
      </Link>
      <Link className="font-raleway text-sm text-bg" href="/portfolio">
        Portfolio
      </Link>
      <Link className="font-raleway text-sm text-bg" href="/blog">
        Blog
      </Link>
      <Link className="font-raleway text-sm text-bg" href="/contact">
        Contact
      </Link>
      <Link className="font-raleway text-sm text-bg" href="/privacy-policy">
        Privacy Policy
      </Link>
      <Link className="font-raleway text-sm text-bg" href="/terms-condition">
        T&CS
      </Link>
    </div>
  );
};

export default QuickLinks;
