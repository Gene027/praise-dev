import React from "react";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const FooterIntro = () => {
  return (
    <div className="flex flex-col gap-6 max-w-[243px]">
      <img className="w-[113px] h-[61px]" src="logo-dark.png" alt="Logo" />
      <p className="text-bg font-raleway text-sm ">
        Our company thrives on unity in diversity, with a nationwide team
        collaborating remotely to transform your digital dreams into reality, no
        matter where you are, no matter where we are.
      </p>
      <div className="flex gap-3">
        <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="w-7 h-7 text-white" />
        </a>
        <a href="http://x.com" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter className="w-7 h-7 text-white" />
        </a>
        <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagramSquare className="w-7 h-7 text-white" />
        </a>
      </div>
    </div>
  );
};

export default FooterIntro;
