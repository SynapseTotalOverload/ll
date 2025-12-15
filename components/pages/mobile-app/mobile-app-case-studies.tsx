"use client";
import { Button } from "@/components/ui/button";
import ArrowRight from "@/public/assets/svg/arrow-right.svg";
import SignTitle from "@/components/modules/sign-title";
import InfoCard from "@/components/modules/info-card";
import Image from "next/image";
import Product from "@/public/assets/placeholder.png";
import BgM1 from "@/public/assets/mocks/mob/1.png";
import BgM2 from "@/public/assets/mocks/mob/2.png";
import BgM3 from "@/public/assets/mocks/mob/3.png";

export default function MobileAppCaseStudies() {
  return (
    <div className="flex w-full flex-col gap-8 px-4 sm:gap-12 sm:px-6 md:gap-16 md:px-8 lg:gap-20 lg:px-12 xl:gap-24 xl:px-16">
      <SignTitle>
        <SignTitle.Title className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Mobile application development case studies
        </SignTitle.Title>
        <SignTitle.Separator />
      </SignTitle>

      {/* Case Studies Grid */}
      {/* Mobile: Horizontal scroll */}
      <div className="overflow-x-auto pb-4 sm:hidden">
        <div className="flex gap-6 px-4" style={{ width: "max-content" }}>
          {/* Case Study Card 1 */}
          <InfoCard className="flex w-80 flex-shrink-0 flex-col gap-4">
            <div className="flex flex-col gap-2">
              <span className="text-plastic text-xs">Mobile App</span>
              <InfoCard.Title className="text-lg">TELEDYNE ISCO FlowCalc</InfoCard.Title>
            </div>
            <Image alt="product" className="h-48 w-full object-contain" src={BgM1} />
          </InfoCard>

          {/* Case Study Card 2 */}
          <InfoCard className="flex w-80 flex-shrink-0 flex-col gap-4">
            <div className="flex flex-col gap-2">
              <span className="text-plastic text-xs">Mobile App</span>
              <InfoCard.Title className="text-lg">Pixy</InfoCard.Title>
            </div>
            <Image alt="product" className="h-48 w-full object-contain" src={BgM2} />
          </InfoCard>

          {/* Case Study Card 3 */}
          <InfoCard className="flex w-80 flex-shrink-0 flex-col gap-4">
            <div className="flex flex-col gap-2">
              <span className="text-plastic text-xs">Mobile App</span>
              <InfoCard.Title className="text-lg">Outspeak</InfoCard.Title>
            </div>
            <Image alt="product" className="h-48 w-full object-contain" src={BgM3} />
          </InfoCard>
        </div>
      </div>

      {/* Desktop: Grid layout */}
      <div className="hidden grid-cols-1 gap-6 sm:grid sm:gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-8">
        {/* Case Study Card 1 */}
        <InfoCard className="flex w-full flex-col justify-between gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-plastic text-xs sm:text-sm md:text-base">Mobile App</span>
            <InfoCard.Title className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
              TELEDYNE ISCO FlowCalc
            </InfoCard.Title>
          </div>
          <Image alt="product" className="h-48 w-full object-contain sm:h-56 md:h-64" src={BgM1} />
        </InfoCard>

        {/* Case Study Card 2 */}
        <InfoCard className="flex w-full flex-col justify-between gap-4 sm:col-span-1 md:col-span-1 lg:col-span-1">
          <div className="flex flex-col gap-2">
            <span className="text-plastic text-xs sm:text-sm md:text-base">Mobile App</span>
            <InfoCard.Title className="text-lg sm:text-xl md:text-2xl lg:text-3xl">Pixy</InfoCard.Title>
          </div>
          <Image alt="product" className="h-48 w-full object-contain sm:h-56 md:h-64" src={BgM2} />
        </InfoCard>

        {/* Case Study Card 3 */}
        <InfoCard className="flex w-full flex-col justify-between gap-4 sm:col-span-1 md:col-span-2 lg:col-span-1">
          <div className="flex flex-col gap-2">
            <span className="text-plastic text-xs sm:text-sm md:text-base">Mobile App</span>
            <InfoCard.Title className="text-lg sm:text-xl md:text-2xl lg:text-3xl">Outspeak</InfoCard.Title>
          </div>
          <Image alt="product" className="h-48 w-full object-contain sm:h-56 md:h-64" src={BgM3} />
        </InfoCard>
      </div>
    </div>
  );
}
