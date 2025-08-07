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
        <SignTitle.Title>Our services for growing businesses</SignTitle.Title>
        <SignTitle.Description>
          Having worked with dozens of small and medium businesses, we know exactly what services they need from
          a software development outsourcing partner.
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
        <InfoCard className="col-span-2 col-start-2 col-end-4">
          <LampEffect>
            <BedIcon className="text-night-blue size-6" />
          </LampEffect>
          <InfoCard.Title className="mt-6">UI/UX Design</InfoCard.Title>
          <InfoCard.Description className="mt-4">
            Thoughtful design based on user experience and deep analysis of business goals tailored to customer
            requirements
          </InfoCard.Description>
        </InfoCard>

        {/* Service Card 5 */}
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
          <Button>Book a meeting</Button>
        </BackgroundGradient>
      </div>
    </div>
  );
}
