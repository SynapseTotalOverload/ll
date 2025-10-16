"use client";
import { Button } from "@/components/ui/button";
import { MoveRightIcon } from "lucide-react";
import SignTitle from "@/components/modules/sign-title";
import InfoCard from "@/components/modules/info-card";
import Image from "next/image";
import Product from "@/public/assets/placeholder.png";
import Product1 from "@/public/assets/mocks/home/1.png";
import Product3 from "@/public/assets/mocks/home/2.png";

export default function HomeCaseStudies() {
  return (
    <div className="flex w-full flex-col gap-6 px-4 sm:gap-7 sm:px-8 md:gap-8 md:px-12 lg:px-20">
      <SignTitle>
        <SignTitle.Title>Our successful stories</SignTitle.Title>
        <SignTitle.Description>Launched products LogicCraft assisted with.</SignTitle.Description>
        <SignTitle.Separator />
      </SignTitle>

      {/* Case Studies Header */}
      <div className="mt-6 flex cursor-pointer flex-row items-center justify-end gap-3 sm:mt-7 sm:gap-4 md:mt-8">
        <span className="font-[400]">All case studies</span>
        <Button size="icon" className="blue-grad">
          <MoveRightIcon className="text-night-blue size-6 rotate-[-45deg]" />
        </Button>
      </div>

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-8">
        {/* Case Study Card 1 */}
        <InfoCard className="flex flex-col gap-3 sm:gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-plastic text-[14px]">Mobile App</span>
            <InfoCard.Title className="">TELEDYNE ISCO FlowCalc</InfoCard.Title>
          </div>
          <Image alt="product" className="w-full object-cover" src={Product1} />
        </InfoCard>

        {/* Case Study Card 2 */}
        <InfoCard className="flex flex-col gap-6 sm:gap-7 md:gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-plastic text-[14px]">Platform</span>
            <InfoCard.Title className="">Sxipher.ai</InfoCard.Title>
          </div>
          <Image alt="product" className="w-full object-cover" src={Product} />
        </InfoCard>

        {/* Case Study Card 3 */}
        <InfoCard className="flex flex-col gap-6 sm:gap-7 md:gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-plastic text-[14px]">Mobile App</span>
            <InfoCard.Title className="">Outspeak</InfoCard.Title>
          </div>
          <Image alt="product" className="w-full object-cover" src={Product3} />
        </InfoCard>
      </div>
    </div>
  );
}
