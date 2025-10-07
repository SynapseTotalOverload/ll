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
    tags: ["Shipping", "Yachts", "Logistics", "Sellers", "Buyers"],
    id: "boat-export-usa-1",
    fullLink: "/",
    fullName: "Boat Export USA",
    platform: "Platform",
    description:
      "Boat Export USA was created to simplify the process of purchasing and exporting boats, yachts, and marine equipment from the United States to buyers worldwide. It connects international clients with U.S. sellers, offering support with selection, payment, and global shipping logistics.",
    backgroundUrl: BgBusiness1.src,
  },
  {
    tags: ["Rentals", "Travel", "Vacation", "Property", "Service"],
    id: "avantstay-2",
    fullLink: "/",
    fullName: "Avantstay",
    platform: "Platform",
    description:
      "AvantStay is a platform for premium vacation rentals, specializing in group travel. It offers luxurious homes, personalized experiences, and modern amenities, making it easy to plan unforgettable getaways while benefiting from professional property management.",
    backgroundUrl: BgBusiness2.src,
  },
  {
    tags: ["Mobile app", "Measurement", "Water", "Flow", "Rates"],
    id: "teledyne-isco-flowcalc-3",
    fullLink: "/",
    fullName: "TELEDYNE ISCO FlowCalc",
    platform: "Mobile App",
    description:
      "This app calculates flow rates in open channels and partially filled pipes, making it easy for water and wastewater professionals to convert measured data, such as head (and sometimes velocity), into accurate flow rates. Ideal for spot-checking existing systems or verifying the accuracy of newly installed flow meters, this tool streamlines flow assessment with precision and ease.",
    backgroundUrl: BgBusiness3.src,
  },
];
