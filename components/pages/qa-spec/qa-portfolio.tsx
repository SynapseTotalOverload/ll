"use client";
import { Button } from "@/components/ui/button";
import { MoveRightIcon } from "lucide-react";
import SignTitle from "@/components/modules/sign-title";
import InfoCard from "@/components/modules/info-card";
import Image from "next/image";
import Product from "@/public/assets/placeholder.png";

export default function QAPortfolio() {
  return (
    <div className="flex w-full flex-col gap-8 px-20">
      <SignTitle>
        <SignTitle.Title>QA portfolio.</SignTitle.Title>
        <SignTitle.Separator />
      </SignTitle>

      {/* Portfolio Header */}
      <div className="mt-8 flex cursor-pointer flex-row items-center justify-end gap-4">
        <span className="font-[400]">All case studies</span>
        <Button size="icon" className="blue-grad">
          <MoveRightIcon className="text-night-blue size-6 rotate-[-45deg]" />
        </Button>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-3 gap-8">
        {/* Portfolio Card 1 */}
        <InfoCard className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-plastic text-[14px]">Platform</span>
            <InfoCard.Title className="">Sxipher.AI</InfoCard.Title>
          </div>
          <Image alt="product" className="w-full object-cover" src={Product} />
        </InfoCard>

        {/* Portfolio Card 2 */}
        <InfoCard className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-plastic text-[14px]">Mobile App</span>
            <InfoCard.Title className="">Truth or Dare</InfoCard.Title>
          </div>
          <Image alt="product" className="w-full object-cover" src={Product} />
        </InfoCard>

        {/* Portfolio Card 3 */}
        <InfoCard className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-plastic text-[14px]">Platform</span>
            <InfoCard.Title className="">Tripsha</InfoCard.Title>
          </div>
          <Image alt="product" className="w-full object-cover" src={Product} />
        </InfoCard>
      </div>
    </div>
  );
}
