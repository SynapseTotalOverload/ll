"use client";
import { Button } from "@/components/ui/button";
import { BedIcon, MoveRightIcon } from "lucide-react";
import SignTitle from "@/components/modules/sign-title";
import InfoCard from "@/components/modules/info-card";
import { LampEffect } from "@/components/ui/lamp-effect";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function OurStartUpService() {
  return (
    <div className="flex w-full flex-col gap-16 px-20">
      <SignTitle>
        <SignTitle.Title>Our startup services</SignTitle.Title>
        <SignTitle.Description>
          We’ll support you throughout the full cycle of software product development—from consulting to maintenance.
          Our key services include
        </SignTitle.Description>
        <SignTitle.Separator />
      </SignTitle>

      {/* Services Grid */}
      <div className="grid grid-cols-6 place-items-center gap-8">
        {/* Service Card 1 */}
        <InfoCard className="col-span-2">
          <LampEffect>
            <BedIcon className="text-night-blue size-6" />
          </LampEffect>
          <InfoCard.Title className="mt-6">UI/UX Design</InfoCard.Title>
          <InfoCard.Description className="mt-4">
            Thoughtful design based on user experience and deep analysis of business goals tailored to customer
            requirements
          </InfoCard.Description>
        </InfoCard>

        {/* Service Card 2 */}
        <InfoCard className="col-span-2">
          <LampEffect>
            <BedIcon className="text-night-blue size-6" />
          </LampEffect>
          <InfoCard.Title className="mt-6">UI/UX Design</InfoCard.Title>
          <InfoCard.Description className="mt-4">
            Thoughtful design based on user experience and deep analysis of business goals tailored to customer
            requirements
          </InfoCard.Description>
        </InfoCard>

        {/* Service Card 3 */}
        <InfoCard className="col-span-2">
          <LampEffect>
            <BedIcon className="text-night-blue size-6" />
          </LampEffect>
          <InfoCard.Title className="mt-6">UI/UX Design</InfoCard.Title>
          <InfoCard.Description className="mt-4">
            Thoughtful design based on user experience and deep analysis of business goals tailored to customer
            requirements
          </InfoCard.Description>
        </InfoCard>
      </div>
      <div className="flex flex-row items-center justify-center">
        <BackgroundGradient>
          <Button>Get an estimate</Button>
        </BackgroundGradient>
      </div>
    </div>
  );
}
