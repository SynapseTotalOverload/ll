import Bg1 from "@/public/assets/mocks/startups/1.png";
import Bg2 from "@/public/assets/mocks/startups/2.png";
import Bg3 from "@/public/assets/mocks/startups/3.png";

import BgBusiness1 from "@/public/assets/mocks/business/1.png";
import BgBusiness2 from "@/public/assets/mocks/business/2.png";
import BgBusiness3 from "@/public/assets/mocks/business/3.png";

export const portfolio: {
  tags: string[];
  id: string;
  fullLink: string;
  fullName: string;
  platform: string;
  description: string;
  backgroundUrl: string;
}[] = [
  {
    tags: ["Cybersecurity", "Testing", "Business", "Solutions", "Platform"],
    id: "sxipher-1",
    fullLink: "/",
    fullName: "Sxipher.AI",
    platform: "Platform",
    description:
      "Sxipher.ai provides cybersecurity solutions focused on advanced penetration testing and security assessments to uncover and address digital vulnerabilities. The platform helps organizations protect their infrastructures by delivering custom security evaluations and risk mitigation strategies.",
    backgroundUrl: Bg1.src,
  },
  {
    tags: ["Land", "Nature", "Investment", "Marketplace", "Landowner"],
    id: "community-lands-2",
    fullLink: "/",
    fullName: "Community Lands",
    platform: "Business",
    description:
      "Community Lands is a platform offering affordable land for purchase across the United States, catering to individuals interested in nature, sustainability, and off-grid living. The site provides a marketplace for diverse land options, resources for prospective landowners, and a community space to connect with others passionate about land ownership and outdoor lifestyles.",
    backgroundUrl: Bg2.src,
  },
  {
    tags: ["Mobile app", "Audio", "Social Media", "Podcast", "Platforms"],
    id: "outspeak-3",
    fullLink: "/",
    fullName: "Outspeak",
    platform: "Mobile App",
    description:
      "OutSpeak is a mobile app for effortless audio creation, enabling users to express themselves through voice. It offers tools for quick recording, editing, and sharing of engaging audio content. With personalized insights and a community of creators, OutSpeak fosters authentic connections and growth through voice.",
    backgroundUrl: Bg3.src,
  },
];

export const portfolioBusiness: {
  tags: string[];
  id: string;
  fullLink: string;
  fullName: string;
  platform: string;
  description: string;
  backgroundUrl: string;
}[] = [
  {
    tags: ["Cybersecurity", "Testing", "Business", "Solutions", "Platform"],
    id: "sxipher-1",
    fullLink: "/",
    fullName: "Sxipher.AI",
    platform: "Platform",
    description:
      "Sxipher.ai provides cybersecurity solutions focused on advanced penetration testing and security assessments to uncover and address digital vulnerabilities. The platform helps organizations protect their infrastructures by delivering custom security evaluations and risk mitigation strategies.",
    backgroundUrl: BgBusiness1.src,
  },
  {
    tags: ["Land", "Nature", "Investment", "Marketplace", "Landowner"],
    id: "community-lands-2",
    fullLink: "/",
    fullName: "Community Lands",
    platform: "Business",
    description:
      "Community Lands is a platform offering affordable land for purchase across the United States, catering to individuals interested in nature, sustainability, and off-grid living. The site provides a marketplace for diverse land options, resources for prospective landowners, and a community space to connect with others passionate about land ownership and outdoor lifestyles.",
    backgroundUrl: BgBusiness2.src,
  },
  {
    tags: ["Mobile app", "Audio", "Social Media", "Podcast", "Platforms"],
    id: "outspeak-3",
    fullLink: "/",
    fullName: "Outspeak",
    platform: "Mobile App",
    description:
      "OutSpeak is a mobile app for effortless audio creation, enabling users to express themselves through voice. It offers tools for quick recording, editing, and sharing of engaging audio content. With personalized insights and a community of creators, OutSpeak fosters authentic connections and growth through voice.",
    backgroundUrl: BgBusiness3.src,
  },
];
