"use client";
import { FC } from "react";
import { Team } from "../constants/the-team";

import Paragraph from "../../../components/ui/Paragraph";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

interface TeamMembersProps extends Team {}

const TeamMembers: FC<TeamMembersProps> = ({ image, name, role, socials }) => {
  return (
    <div className="relative w-full max-w-[319px] h-[350px] sm:h-[420px] flex items-end mx-auto">
      <div className="absolute inset-0 z-10 w-full max-h-[180px] sm:max-h-[215px] flex justify-center">
        <img
          src={image}
          alt={name}
          className="w-[180px] h-[174px] sm:w-[217px] sm:h-[209px] object-cover"
        />
      </div>

      <div className="flex justify-center items-end pb-6 sm:pb-8 w-full h-[250px] sm:h-[305px] bg-gradient-to-r from-gray-200 to-transparent border-2 border-white1 backdrop-blur-md z-0 rounded-t-[100px] rounded-b-[50px]">
        <div className="flex flex-col gap-4 sm:gap-6 items-center">
          <div
            aria-label="Name and Role"
            className="flex flex-col gap-2 sm:gap-3 max-w-[163px]"
          >
            <Paragraph className="text-center text-[#00000] text-xl sm:text-2xl">
              {name}
            </Paragraph>
            <Paragraph className="text-center text-sm sm:text-base text-subText">
              {role}
            </Paragraph>
          </div>
          <div aria-label="socials" className="flex gap-2">
            {socials.twitter && (
              <a
                className="w-10 h-10 sm:w-12 sm:h-12 border cursor-pointer border-solid border-subText p-2 rounded-full flex justify-center items-center"
                href={socials.twitter}
                target="_blank"
              >
                <FaSquareXTwitter className="w-[20px] h-[20px] sm:w-[26px] sm:h-[26px] bg-white text-subText" />
              </a>
            )}
            {socials.linkedin && (
              <a
                className="w-10 h-10 sm:w-12 sm:h-12 border cursor-pointer border-solid border-subText p-2 rounded-full flex justify-center items-center"
                href={socials.linkedin}
                target="_blank"
              >
                <FaLinkedin className="w-[20px] h-[20px] sm:w-[26px] sm:h-[26px] bg-white text-subText" />
              </a>
            )}
            {socials.github && (
              <a
                className="w-10 h-10 sm:w-12 sm:h-12 cursor-pointer border border-solid border-subText p-2 rounded-full flex justify-center items-center"
                href={socials.github}
                target="_blank"
              >
                <FaGithubSquare className="w-[20px] h-[20px] sm:w-[26px] sm:h-[26px] bg-white text-subText" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
