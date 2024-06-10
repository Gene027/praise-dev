"use client";
import { FC } from "react";
import TitleTag from "../../../components/HomeSections/TitleTag";
import Paragraph from "../../../components/ui/Paragraph";
import { theTeam } from "../constants/the-team";
import TeamMembers from "./team-member-card";

interface OurTeamProps {}

const OurTeam: FC<OurTeamProps> = ({}) => {
  return (
    <div className="bg-[#F4F4F4] w-full flex flex-col gap-14 p-[100px] items-center">
      <div className="flex max-w-[487px] flex-col gap-5 items-center">
        <TitleTag title="Our Team" description="The people behind PraiseDev" />
        <Paragraph className="text-center font-dmSerifDisplay text-[32px]">
          A new site for your agency? It’s here.
        </Paragraph>
      </div>

      <div title="team" className="flex gap-12">
        {theTeam.map((team, index) => (
          <TeamMembers key={index} {...team} />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
