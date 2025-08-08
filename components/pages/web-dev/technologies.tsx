"use client";
import { Button } from "@/components/ui/button";
import { BedIcon, MoveRightIcon } from "lucide-react";
import SignTitle from "@/components/modules/sign-title";
import InfoCard from "@/components/modules/info-card";
import { LampEffect } from "@/components/ui/lamp-effect";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import JsIcon from "@/public/assets/svg/javascript-original.svg";
export default function Technologies() {
  return (
    <div className="flex w-full flex-col gap-16 px-20">
      <SignTitle>
        <SignTitle.Title>Technologies</SignTitle.Title>
        <SignTitle.Description>
          Our favorite tech stack covers popular technologies with their latest versions. We make the technological
          choice that perfectly aligns with our vision of web development services — rendered with high quality and
          supporting a long-term strategy. We employ only long-term proven technologies to provide the best price to
          quality ratio.
        </SignTitle.Description>
        <SignTitle.Separator />
      </SignTitle>

      {/* Services Grid */}
      <div>
        <div className="grid grid-cols-3 place-items-center gap-8">
          {/* Service Card 1 */}
          <div className="">
            <LampEffect>
              <BedIcon className="text-night-blue size-6" />
            </LampEffect>
            <InfoCard.Title className="mt-6">UI/UX Design</InfoCard.Title>
            <InfoCard.Description className="mt-4">
              Thoughtful design based on user experience and deep analysis of business goals tailored to customer
              requirements
            </InfoCard.Description>
            <div className="grid grid-cols-4 gap-10 pt-10">
              <JsIcon />
              <JsIcon />
              <JsIcon />
              <JsIcon />
              <JsIcon />
              <JsIcon />
            </div>
          </div>
          <div className="">
            <LampEffect>
              <BedIcon className="text-night-blue size-6" />
            </LampEffect>
            <InfoCard.Title className="mt-6">UI/UX Design</InfoCard.Title>
            <InfoCard.Description className="mt-4">
              Thoughtful design based on user experience and deep analysis of business goals tailored to customer
              requirements
            </InfoCard.Description>
            <div className="grid grid-cols-4 gap-10 pt-10">
              <JsIcon />
              <JsIcon />
              <JsIcon />
              <JsIcon />
              <JsIcon />
              <JsIcon />
            </div>
          </div>
          <div className="">
            <LampEffect>
              <BedIcon className="text-night-blue size-6" />
            </LampEffect>
            <InfoCard.Title className="mt-6">UI/UX Design</InfoCard.Title>
            <InfoCard.Description className="mt-4">
              Thoughtful design based on user experience and deep analysis of business goals tailored to customer
              requirements
            </InfoCard.Description>
            <div className="grid grid-cols-4 gap-10 pt-10">
              <JsIcon />
              <JsIcon />
              <JsIcon />
              <JsIcon />
              <JsIcon />
              <JsIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
