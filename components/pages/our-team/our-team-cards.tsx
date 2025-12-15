"use client";
import { Button } from "@/components/ui/button";
import { Palette, Brush, Code, Database, TestTube, MoveRightIcon } from "lucide-react";
import SignTitle from "@/components/modules/sign-title";
import InfoCard from "@/components/modules/info-card";
import { LampEffect } from "@/components/ui/lamp-effect";
import PixelTransition from "@/components/ui/card-pixel";
import Image from "next/image";
import { BackgroundGradient } from "@/components/ui/background-gradient";

interface OurTeamData {
  id: number;
  name: string;
  position: string;
  image?: string;
  description?: string;
  stack: string[];
}

export const ourTeamData: Record<string, OurTeamData> = {
  1: {
    id: 1,
    name: "John Doe",
    position: "CEO",
    image: "https://testingbot.com/free-online-tools/random-avatar/100",
    description: "CEO",
    stack: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Docker",
      "Kubernetes",
    ],
  },
  "2": {
    id: 2,
    name: "John Doe",
    image: "https://testingbot.com/free-online-tools/random-avatar/100",
    position: "CTO",
    description: "CTO",
    stack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  "3": {
    id: 3,
    name: "John Doe",

    position: "CTO",

    stack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  "4": {
    id: 4,
    name: "John Doe",

    position: "CTO",

    stack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  },
};

export default function HomeServices() {
  return (
    <div className="flex w-full flex-col gap-8 px-4 sm:gap-12 sm:px-8 md:gap-14 md:px-12 lg:gap-16 lg:px-20">
      <SignTitle>
        <SignTitle.Title>Our Team</SignTitle.Title>
        <SignTitle.Separator />
      </SignTitle>

      <div className="grid grid-cols-2 gap-20 px-20">
        <OurTeamCardItem id={"1"} />
        <OurTeamCardItem id={"2"} />
      </div>
      <div className="grid grid-cols-4 gap-10">
        <OurTeamCardItem id={"3"} />
        <OurTeamCardItem id={"4"} />
        <OurTeamCardItem id={"3"} />
        <OurTeamCardItem id={"4"} />
        <OurTeamCardItem id={"3"} />
        <OurTeamCardItem id={"4"} />
        <OurTeamCardItem id={"3"} />
        <OurTeamCardItem id={"4"} />
      </div>
    </div>
  );
}

export function PixelTransitionCard({ id }: { id: string }) {
  return (
    <BackgroundGradient rounded="rounded-[18px]">
      <PixelTransition
        firstContent={
          ourTeamData[id as keyof typeof ourTeamData]?.image ? (
            <WithImageFirstContent
              name={ourTeamData[id as keyof typeof ourTeamData].name}
              position={ourTeamData[id as keyof typeof ourTeamData].position}
              image={ourTeamData[id as keyof typeof ourTeamData]?.image || ""}
            />
          ) : (
            <FirstContent
              name={ourTeamData[id as keyof typeof ourTeamData].name}
              position={ourTeamData[id as keyof typeof ourTeamData].position}
            />
          )
        }
        secondContent={
          ourTeamData[id as keyof typeof ourTeamData]?.image ? (
            <SecondImageContent text={ourTeamData[id as keyof typeof ourTeamData].description || ""} />
          ) : (
            <SecondContent stack={ourTeamData[id as keyof typeof ourTeamData].stack} />
          )
        }
        gridSize={12}
        pixelColor="#00b7ff"
        once={false}
        aspectRatio="60%"
        animationStepDuration={0.2}
        className="custom-pixel-card"
      />
    </BackgroundGradient>
  );
}

export function OurTeamCardItem({ id }: { id: string }) {
  return <PixelTransitionCard id={id} />;
}

export function FirstContent({ name, position }: { name: string; position: string }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-1 bg-[#1D1D1E] p-4">
      <span className="text-[24px] font-[300] text-white uppercase">{name}</span>
      <span className="text-[12px] font-[300] text-white">{position}</span>
    </div>
  );
}

export function SecondContent({ stack }: { stack: string[] }) {
  return (
    <div className="grid h-full grid-cols-2 bg-[#1D1D1E] p-4">
      {stack.map((item) => (
        <div key={item} className="flex flex-col items-center justify-center">
          <span className="text-[12px] font-[300] text-white">{item}</span>
        </div>
      ))}
    </div>
  );
}
export function WithImageFirstContent({ name, position, image }: { name: string; position: string; image: string }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-1 bg-[#1D1D1E] p-4">
      <Image
        style={{ boxShadow: " 0px 0px 36px 3px rgba(46,199,255,1);" }}
        className="rounded-full"
        src={image}
        alt={name}
        width={100}
        height={100}
      />
      <span className="text-[24px] font-[300] text-white uppercase">{name}</span>
      <span className="text-[12px] font-[300] text-white">{position}</span>
    </div>
  );
}

export function SecondImageContent({ text }: { text: string }) {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-[#1D1D1E] p-4">
      <span className="text-[12px] font-[300] text-white">{text}</span>
    </div>
  );
}
