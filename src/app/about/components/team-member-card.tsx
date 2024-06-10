"use client";
import { FC } from "react";
import { Team } from "../constants/the-team";
import styles from "./index.module.scss";
import Paragraph from "../../../components/ui/Paragraph";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

interface TeamMembersProps extends Team {}

const TeamMembers: FC<TeamMembersProps> = ({ image, name, role, socials }) => {
  return (
    <div className="relative w-[319px] h-[420px] flex items-end">
      <div className="absolute inset-0 z-10 w-full max-h-[215px] flex justify-center">
        <img
          src={image}
          alt={name}
          className="w-[217px] h-[209px] object-cover"
        />
      </div>

      <div className={styles.team_card}>
        <div className="flex flex-col gap-6 items-center">
          <div
            title="Name and role"
            className="flex flex-col gap-3 max-w-[163px]"
          >
            <Paragraph className="text-center text-[#00000] text-2xl">
              {name}
            </Paragraph>
            <Paragraph className="text-center text-base text-subText">
              {role}
            </Paragraph>
          </div>
          <div title="Socials" className="flex gap-2">
            {socials.twitter && (
              <a
                className="w-12 h-12 border cursor-pointer border-solid border-subText p-2 rounded-full flex justify-center items-center"
                href={socials.twitter}
                target="_blank"
              >
                <FaSquareXTwitter className="w-[26px] h-[26px] bg-white text-subText" />
              </a>
            )}
            {socials.linkedin && (
              <a
                className="w-12 h-12 border cursor-pointer border-solid border-subText p-2 rounded-full flex justify-center items-center"
                href={socials.linkedin}
                target="_blank"
              >
                <FaLinkedin className="w-[26px] h-[26px] bg-white text-subText" />
              </a>
            )}
            {socials.github && (
              <a
                className="w-12 h-12 cursor-pointer border border-solid border-subText p-2 rounded-full flex justify-center items-center"
                href={socials.github}
                target="_blank"
              >
                <FaGithubSquare className="w-[26px] h-[26px] bg-white text-subText" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
