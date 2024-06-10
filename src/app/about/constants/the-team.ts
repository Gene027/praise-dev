export interface Team {
  image: string;
  name: string;
  role: string;
  socials: {
    twitter: string;
    linkedin: string;
    github?: string;
  };
}

export const theTeam: Team[] = [
  {
    image: "/about/team-member-3.png",
    name: "Praise Anosike",
    role: "CEO & Engineer Lead",
    socials: {
      twitter: "https://twitter.com/praisean",
      linkedin: "https://www.linkedin.com/in/praise-anosike-0b4b3b1a9/",
      github: "http://www.github.com/gene027",
    },
  },
  {
    image: "/about/team-member-2.png",
    name: "Adetayo Alice",
    role: "UI/UX Designer",
    socials: {
      twitter: "https://twitter.com/chinonso_nwankw",
      linkedin: "https://www.linkedin.com/in/chinonso-nwankwo-3b2b0b1a9/",
    },
  },
  {
    image: "/about/team-member-1.png",
    name: "Adekunle Didunyemi",
    role: "Software Engineer",
    socials: {
      twitter: "https://twitter.com/chinonso_nwankw",
      linkedin: "https://www.linkedin.com/in/chinonso-nwankwo-3b2b0b1a9/",
    },
  },
];
