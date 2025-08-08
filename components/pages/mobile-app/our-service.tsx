"use client";
import { Button } from "@/components/ui/button";
import { BedIcon, MoveRightIcon } from "lucide-react";
import SignTitle from "@/components/modules/sign-title";
import InfoCard from "@/components/modules/info-card";
import { LampEffect } from "@/components/ui/lamp-effect";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function OurService() {
  return (
    <div className="flex w-full flex-col gap-16 px-20">
      <SignTitle>
        <SignTitle.Title>Our mobile application development services:</SignTitle.Title>
        <SignTitle.Description>
          With LogicCraft, if you are looking to build, say, an app for iPhone, you don’t have to hire an iOS app
          development company to write code, a designer to craft an attractive UI/UX, a testing team to ensure quality,
          and a project manager to fine-tune all the processes and set them in motion. We cover everything. Below are
          our core mobile application development services.
        </SignTitle.Description>
        <SignTitle.Separator />
      </SignTitle>

      {/* Services Grid */}
      <div>
        <div className="grid grid-cols-3 place-items-center gap-8">
          {/* Service Card 1 */}
          <InfoCard className="">
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
          <InfoCard className="">
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
          <InfoCard className="">
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
        <div className="mt-16 flex w-full items-center justify-center">
          <BackgroundGradient className="">
            <Button>Get an estimate</Button>
          </BackgroundGradient>
        </div>
      </div>
    </div>
  );
}
