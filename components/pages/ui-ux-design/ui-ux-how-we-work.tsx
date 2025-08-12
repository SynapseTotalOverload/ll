"use client";
import { Button } from "@/components/ui/button";
import { BedIcon, MoveRightIcon } from "lucide-react";
import SignTitle from "@/components/modules/sign-title";
import InfoCard from "@/components/modules/info-card";
import { LampEffect } from "@/components/ui/lamp-effect";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function UIUXHowWeWork() {
  return (
    <div className="flex w-full flex-col gap-16 px-20">
      <SignTitle>
        <SignTitle.Title>How we work</SignTitle.Title>
        <SignTitle.Description>The approach.</SignTitle.Description>
        <SignTitle.Separator />
      </SignTitle>

      {/* Process Steps Grid */}
      <div className="grid grid-cols-6 place-items-center gap-8">
        {/* Step 1 */}
        <div className="col-span-2">
          <div className="flex flex-row items-center gap-4">
            <span className="text-night-blue">01</span>
            <InfoCard.Title>Understand your business and values as you do.</InfoCard.Title>
          </div>
          <InfoCard.Description className="mt-4">
            Before starting any project, we strive to obtain the same understanding of the product and business context as our clients have. Then, we go deeper and analyze the market and users.
          </InfoCard.Description>
        </div>

        {/* Step 2 */}
        <div className="col-span-2">
          <div className="flex flex-row items-center gap-4">
            <span className="text-night-blue">02</span>
            <InfoCard.Title>Create a solution that brings value to the user.</InfoCard.Title>
          </div>
          <InfoCard.Description className="mt-4">
            We&apos;re devoted to elegant digital product design and craft products users love and clients cherish – all thanks to the wide variety of design techniques and the business approach we use.
          </InfoCard.Description>
        </div>

        {/* Step 3 */}
        <div className="col-span-2">
          <div className="flex flex-row items-center gap-4">
            <span className="text-night-blue">03</span>
            <InfoCard.Title>Support the successful launch of the product.</InfoCard.Title>
          </div>
          <InfoCard.Description className="mt-4">
            We fight for the product from idea to its release and support it with development documentation, guidance, and supervision.
          </InfoCard.Description>
        </div>
      </div>
    </div>
  );
}
