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
    <div className="flex w-full flex-col gap-8 px-4 sm:gap-12 sm:px-6 md:gap-16 md:px-8 lg:gap-20 lg:px-12 xl:gap-24 xl:px-16">
      <SignTitle>
        <SignTitle.Title className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Technologies</SignTitle.Title>
        <SignTitle.Description className="text-sm sm:text-base md:text-lg lg:text-xl">
          Our favorite tech stack covers popular technologies with their latest versions. We make the technological
          choice that perfectly aligns with our vision of web development services — rendered with high quality and
          supporting a long-term strategy. We employ only long-term proven technologies to provide the best price to
          quality ratio.
        </SignTitle.Description>
        <SignTitle.Separator />
      </SignTitle>

      {/* Technologies Grid */}
      <div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 sm:gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-16">
          {/* Technology Category 1 */}
          <div className="w-full">
            <LampEffect>
              <BedIcon className="text-night-blue size-6 sm:size-7 md:size-8" />
            </LampEffect>
            <InfoCard.Title className="mt-4 text-lg sm:mt-6 sm:text-xl md:text-2xl lg:text-3xl">
              Frontend Technologies
            </InfoCard.Title>
            <InfoCard.Description className="mt-3 text-sm sm:mt-4 sm:text-base md:text-lg">
              Modern frontend frameworks and libraries for creating responsive, interactive user interfaces
            </InfoCard.Description>
            <div className="grid min-h-[200px] grid-cols-3 gap-4 pt-6 sm:grid-cols-4 sm:gap-6 md:gap-8 lg:gap-10 lg:pt-10">
              <JsIcon className="" />
              <JsIcon className="" />
              <JsIcon className="" />
              <JsIcon className="" />
              <JsIcon className="" />
              <JsIcon className="" />
            </div>
          </div>

          {/* Technology Category 2 */}
          <div className="w-full">
            <LampEffect>
              <BedIcon className="text-night-blue size-6 sm:size-7 md:size-8" />
            </LampEffect>
            <InfoCard.Title className="mt-4 text-lg sm:mt-6 sm:text-xl md:text-2xl lg:text-3xl">
              Backend Technologies
            </InfoCard.Title>
            <InfoCard.Description className="mt-3 text-sm sm:mt-4 sm:text-base md:text-lg">
              Robust backend technologies for building scalable, secure, and high-performance web applications
            </InfoCard.Description>
            <div className="grid grid-cols-3 gap-4 pt-6 sm:grid-cols-4 sm:gap-6 md:gap-8 lg:gap-10 lg:pt-10">
              <JsIcon className="" />
              <JsIcon className="" />
              <JsIcon className="" />
              <JsIcon className="" />
              <JsIcon className="" />
              <JsIcon className="" />
            </div>
          </div>

          {/* Technology Category 3 */}
          <div className="w-full sm:col-span-1 md:col-span-2 lg:col-span-1">
            <LampEffect>
              <BedIcon className="text-night-blue size-6 sm:size-7 md:size-8" />
            </LampEffect>
            <InfoCard.Title className="mt-4 text-lg sm:mt-6 sm:text-xl md:text-2xl lg:text-3xl">
              DevOps & Tools
            </InfoCard.Title>
            <InfoCard.Description className="mt-3 text-sm sm:mt-4 sm:text-base md:text-lg">
              Modern development tools and DevOps practices for efficient deployment and continuous integration
            </InfoCard.Description>
            <div className="grid grid-cols-3 gap-4 pt-6 sm:grid-cols-4 sm:gap-6 md:gap-8 lg:gap-10 lg:pt-10">
              <JsIcon className="" />
              <JsIcon className="" />
              <JsIcon className="" />
              <JsIcon className="" />
              <JsIcon className="" />
              <JsIcon className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
