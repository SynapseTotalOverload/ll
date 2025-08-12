"use client";
import { Button } from "@/components/ui/button";
import { BedIcon, MoveRightIcon } from "lucide-react";
import SignTitle from "@/components/modules/sign-title";
import InfoCard from "@/components/modules/info-card";
import { LampEffect } from "@/components/ui/lamp-effect";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function HowWeWork() {
  return (
    <div className="flex w-full flex-col gap-16 px-20">
      <SignTitle>
        <SignTitle.Title>How we work</SignTitle.Title>
        <SignTitle.Description>The approach.</SignTitle.Description>
        <SignTitle.Separator />
      </SignTitle>

      {/* Services Grid */}
      <div className="grid grid-cols-6 place-items-center gap-8">
        {/* Service Card 1 */}
        <div className="col-span-2">
          <div className="flex flex-row items-center gap-4">
            <span className="text-night-blue">01</span>
            <InfoCard.Title>UI/UX Design</InfoCard.Title>
          </div>
          <InfoCard.Description className="mt-4">
            This collaboration model is ideal for building an MVP or the initial version of a product. It’ll allow you
            to know exactly how much you are going to spend on the project, provided that you have an exact scope before
            signing a contract.
          </InfoCard.Description>
        </div>

        {/* Service Card 2 */}
        <div className="col-span-2">
          <div className="flex flex-row items-center gap-4">
            <span className="text-night-blue">02</span>
            <InfoCard.Title>UI/UX Design</InfoCard.Title>
          </div>
          <InfoCard.Description className="mt-4">
            This collaboration model is ideal for building an MVP or the initial version of a product. It’ll allow you
            to know exactly how much you are going to spend on the project, provided that you have an exact scope before
            signing a contract.
          </InfoCard.Description>
        </div>

        {/* Service Card 3 */}
        <div className="col-span-2">
          <div className="flex flex-row items-center gap-4">
            <span className="text-night-blue">03</span>
            <InfoCard.Title>UI/UX Design</InfoCard.Title>
          </div>
          <InfoCard.Description className="mt-4">
            This collaboration model is ideal for building an MVP or the initial version of a product. It’ll allow you
            to know exactly how much you are going to spend on the project, provided that you have an exact scope before
            signing a contract.
          </InfoCard.Description>
        </div>
      </div>
    </div>
  );
}
