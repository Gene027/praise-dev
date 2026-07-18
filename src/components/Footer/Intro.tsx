import React from "react";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const FooterIntro = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-6 max-w-full md:max-w-[243px]">
      <img className="w-12 h-12 md:w-14 md:h-14 object-contain" src="/logo-dark.png" alt="Logo" />
      <p className="text-bg font-raleway text-xs md:text-sm leading-relaxed">
        Our company thrives on unity in diversity, with a nationwide team
        collaborating remotely to transform your digital dreams into reality, no
        matter where you are, no matter where we are.
      </p>
      <div className="flex gap-3">
        <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="w-6 h-6 md:w-7 md:h-7 text-white hover:text-primary transition-colors duration-200" />
        </a>
        <a href="http://x.com" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter className="w-6 h-6 md:w-7 md:h-7 text-white hover:text-primary transition-colors duration-200" />
        </a>
        <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagramSquare className="w-6 h-6 md:w-7 md:h-7 text-white hover:text-primary transition-colors duration-200" />
        </a>
      </div>
    </div>
  );
};

export default FooterIntro;
