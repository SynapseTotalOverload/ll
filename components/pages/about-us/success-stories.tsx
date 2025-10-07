"use client";
import { Button } from "@/components/ui/button";
import { MoveRightIcon } from "lucide-react";
import SignTitle from "@/components/modules/sign-title";
import InfoCard from "@/components/modules/info-card";
import Image from "next/image";
import bgA2 from "@/public/assets/mocks/about-us/1.png";
import bgA3 from "@/public/assets/mocks/about-us/2.png";
import bgA1 from "@/public/assets/mocks/about-us/3.png";

export default function SuccessStories() {
  return (
    <div className="flex w-full flex-col gap-8 px-20">
      <SignTitle>
        <SignTitle.Title>Success Stories</SignTitle.Title>
        <SignTitle.Separator />
      </SignTitle>

      {/* Case Studies Header */}
      <div className="mt-8 flex cursor-pointer flex-row items-center justify-end gap-4">
        <span className="font-[400]">All case studies</span>
        <Button size="icon" className="blue-grad">
          <MoveRightIcon className="text-night-blue size-6 rotate-[-45deg]" />
        </Button>
      </div>

      {/* Case Studies Grid */}
      <div className="grid grid-cols-3 gap-8">
        {/* Case Study Card 1 */}
        <InfoCard className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-plastic text-[14px]">Mobile App</span>
            <InfoCard.Title className="">TELEDYNE ISCO FlowCalc</InfoCard.Title>
          </div>
          <Image alt="product" className="w-full object-cover" src={bgA1} />
        </InfoCard>

        {/* Case Study Card 2 */}
        <InfoCard className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-plastic text-[14px]">Platform</span>
            <InfoCard.Title className="">Sxipher.AI</InfoCard.Title>
          </div>
          <Image alt="product" className="w-full object-cover" src={bgA2} />
        </InfoCard>

        {/* Case Study Card 3 */}
        <InfoCard className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-plastic text-[14px]">Mobile App</span>
            <InfoCard.Title className="">Outspeak</InfoCard.Title>
          </div>
          <Image alt="product" className="w-full object-cover" src={bgA3} />
        </InfoCard>
      </div>
    </div>
  );
}
