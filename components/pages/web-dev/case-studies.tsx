"use client";
import { Button } from "@/components/ui/button";
import { MoveRightIcon } from "lucide-react";
import SignTitle from "@/components/modules/sign-title";
import InfoCard from "@/components/modules/info-card";
import Image from "next/image";
import Product from "@/public/assets/placeholder.png";

export default function CaseStudies() {
  return (
    <div className="flex w-full flex-col gap-8 px-4 sm:gap-12 sm:px-6 md:gap-16 md:px-8 lg:gap-20 lg:px-12 xl:gap-24 xl:px-16">
      <SignTitle>
        <SignTitle.Title className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Web development case studies:
        </SignTitle.Title>
        <SignTitle.Separator />
      </SignTitle>

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 sm:gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-8">
        {/* Case Study Card 1 */}
        <InfoCard className="flex w-full flex-col gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-plastic text-xs sm:text-sm md:text-base">Mobile App</span>
            <InfoCard.Title className="text-lg sm:text-xl md:text-2xl lg:text-3xl">UI/UX Design</InfoCard.Title>
          </div>
          <Image alt="product" className="w-full object-cover" src={Product} />
        </InfoCard>

        {/* Case Study Card 2 */}
        <InfoCard className="flex w-full flex-col gap-4 sm:gap-6 md:gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-plastic text-xs sm:text-sm md:text-base">Web Application</span>
            <InfoCard.Title className="text-lg sm:text-xl md:text-2xl lg:text-3xl">E-commerce Platform</InfoCard.Title>
          </div>
          <Image alt="product" className="w-full object-cover" src={Product} />
        </InfoCard>

        {/* Case Study Card 3 */}
        <InfoCard className="flex w-full flex-col gap-4 sm:col-span-1 sm:gap-6 md:col-span-2 md:gap-8 lg:col-span-1">
          <div className="flex flex-col gap-2">
            <span className="text-plastic text-xs sm:text-sm md:text-base">SaaS Platform</span>
            <InfoCard.Title className="text-lg sm:text-xl md:text-2xl lg:text-3xl">Dashboard System</InfoCard.Title>
          </div>
          <Image alt="product" className="w-full object-cover" src={Product} />
        </InfoCard>
      </div>
    </div>
  );
}
