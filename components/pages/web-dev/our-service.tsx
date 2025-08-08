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
        <SignTitle.Title>Our web development Services</SignTitle.Title>
        <SignTitle.Description>
          Whatever your business targets are, web development services at LogicCraft are called to support them. Be it
          an MVP development, website, or web portal development, as well as web app development of various complexity,
          we guarantee the quality and outstanding design behind each of the deliverables.
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

          {/* Service Card 4 */}
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

          {/* Service Card 5 */}
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
