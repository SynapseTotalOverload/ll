"use client";
import { Button } from "@/components/ui/button";
import { BedIcon, MoveRightIcon } from "lucide-react";
import SignTitle from "@/components/modules/sign-title";
import InfoCard from "@/components/modules/info-card";
import { LampEffect } from "@/components/ui/lamp-effect";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function BusinessWhyChooseUs() {
  return (
    <div className="flex w-full flex-col gap-16 px-20">
      <SignTitle>
        <SignTitle.Title>Why choose us?</SignTitle.Title>
        <SignTitle.Separator />
      </SignTitle>

      {/* Why Choose Us Grid */}
      <div className="grid grid-cols-6 place-items-center gap-8">
        {/* Reason 1 */}
        <div className="col-span-2">
          <span className="text-plastic custom-font-bricolage text-[126px] font-[700] tracking-[-12px]">01</span>
          <InfoCard.Title>Deep technical expertise</InfoCard.Title>

          <InfoCard.Description className="mt-4">
            With LogicCraft, you get to work with tech pros, award-winning specialists in their fields. Our team consists of experts in a wide array of technologies, and we offer full-cycle software product development services. We&apos;re passionate about what we do, and that is what stands behind our high-quality work.
          </InfoCard.Description>
        </div>

        {/* Reason 2 */}
        <div className="col-span-2">
          <span className="text-plastic custom-font-bricolage text-[126px] font-[700] tracking-[-12px]">02</span>
          <InfoCard.Title>Best talents</InfoCard.Title>

          <InfoCard.Description className="mt-4">
            People are our greatest value. We invest in people and get rewarded with some of the best talents on the market. In the last five years, our quit rate has been close to zero, and most job offers have been accepted. Indeed, constant staff turnover is not an issue with us.
          </InfoCard.Description>
        </div>

        {/* Reason 3 */}
        <div className="col-span-2">
          <span className="text-plastic custom-font-bricolage text-[126px] font-[700] tracking-[-12px]">03</span>
          <InfoCard.Title>Clear development process</InfoCard.Title>

          <InfoCard.Description className="mt-4">
            Our clients praise LogicCraft for transparent project management and communication. Whether you&apos;re tech-savvy or not, we will be reporting the progress at each step of the software development lifecycle in a way that&apos;s tailored to you and makes our process clear.
          </InfoCard.Description>
        </div>
      </div>
    </div>
  );
}
