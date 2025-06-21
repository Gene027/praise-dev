"use client";
import { FC } from "react";
import TitleTag from "../../../components/HomeSections/TitleTag";
import Paragraph from "../../../components/ui/Paragraph";
import { theTeam } from "../constants/the-team";
import TeamMembers from "./team-member-card";

interface OurTeamProps {}

const OurTeam: FC<OurTeamProps> = ({}) => {
  return (
    <div className="bg-[#F4F4F4] w-full flex flex-col gap-8 sm:gap-14 p-4 sm:p-8 lg:p-[100px] items-center my-8 lg:my-16">
      <div className="flex max-w-[487px] w-full flex-col gap-5 items-center px-4 lg:px-0">
        <TitleTag title="Our Team" description="The people behind PraiseDev" />
        <Paragraph className="text-center font-dmSerifDisplay text-[24px] sm:text-[28px] lg:text-[32px]">
          A new site for your agency? It's here.
        </Paragraph>
      </div>

      <div aria-label="team" className="flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center w-full max-w-6xl">
        {theTeam.map((team, index) => (
          <TeamMembers key={index} {...team} />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
