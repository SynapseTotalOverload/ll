"use client";
import { Button } from "@/components/ui/button";
import { MoveRightIcon } from "lucide-react";
import SignTitle from "@/components/modules/sign-title";
import InfoCard from "@/components/modules/info-card";
import Image from "next/image";
import Product from "@/public/assets/placeholder.png";

export default function QAPortfolio() {
  return (
    <div className="flex w-full flex-col gap-8 px-4 sm:gap-12 sm:px-6 md:gap-16 md:px-8 lg:gap-20 lg:px-12 xl:gap-24 xl:px-16">
      <SignTitle>
        <SignTitle.Title className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">QA portfolio.</SignTitle.Title>
        <SignTitle.Separator />
      </SignTitle>

      {/* Portfolio Header */}
      <div className="mt-6 flex cursor-pointer flex-row items-center justify-end gap-4 sm:mt-8 md:mt-10">
        <span className="text-sm font-normal sm:text-base md:text-lg">All case studies</span>
        <Button size="icon" className="blue-grad h-10 w-10 sm:h-12 sm:w-12">
          <MoveRightIcon className="text-night-blue size-5 rotate-[-45deg] sm:size-6" />
        </Button>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 sm:gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-8">
        {/* Portfolio Card 1 */}
        <InfoCard className="flex w-full flex-col gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-plastic text-xs sm:text-sm md:text-base">Platform</span>
            <InfoCard.Title className="text-lg sm:text-xl md:text-2xl lg:text-3xl">Sxipher.AI</InfoCard.Title>
          </div>
          <Image alt="product" className="w-full object-cover" src={Product} />
        </InfoCard>

        {/* Portfolio Card 2 */}
        <InfoCard className="flex w-full flex-col gap-4 sm:gap-6 md:gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-plastic text-xs sm:text-sm md:text-base">Mobile App</span>
            <InfoCard.Title className="text-lg sm:text-xl md:text-2xl lg:text-3xl">Truth or Dare</InfoCard.Title>
          </div>
          <Image alt="product" className="w-full object-cover" src={Product} />
        </InfoCard>

        {/* Portfolio Card 3 */}
        <InfoCard className="flex w-full flex-col gap-4 sm:col-span-1 sm:gap-6 md:col-span-2 md:gap-8 lg:col-span-1">
          <div className="flex flex-col gap-2">
            <span className="text-plastic text-xs sm:text-sm md:text-base">Platform</span>
            <InfoCard.Title className="text-lg sm:text-xl md:text-2xl lg:text-3xl">Tripsha</InfoCard.Title>
          </div>
          <Image alt="product" className="w-full object-cover" src={Product} />
        </InfoCard>
      </div>
    </div>
  );
}
