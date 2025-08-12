"use client";
import { Button } from "@/components/ui/button";
import { BedIcon, MoveRightIcon } from "lucide-react";
import SignTitle from "@/components/modules/sign-title";
import InfoCard from "@/components/modules/info-card";
import { LampEffect } from "@/components/ui/lamp-effect";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function StartupPricingModels() {
  return (
    <div className="flex w-full flex-col gap-16 px-20">
      <SignTitle>
        <SignTitle.Title>The pricing model tailored to your needs</SignTitle.Title>
        <SignTitle.Description>
          At LogicCraft, you can choose between three main software development pricing models based on your needs
        </SignTitle.Description>
        <SignTitle.Separator />
      </SignTitle>

      {/* Pricing Models Grid */}
      <div className="grid grid-cols-6 place-items-center gap-8">
        {/* Pricing Model 1 */}
        <div className="col-span-2">
          <div className="flex flex-row items-center gap-4">
            <BedIcon className="text-night-blue" />
            <InfoCard.Title>Fixed price</InfoCard.Title>
          </div>
          <InfoCard.Description className="mt-4">
            This collaboration model is ideal for building an MVP or the initial version of a product. It&apos;ll allow you
            to know exactly how much you are going to spend on the project, provided that you have an exact scope before
            signing a contract.
          </InfoCard.Description>
        </div>

        {/* Pricing Model 2 */}
        <div className="col-span-2">
          <div className="flex flex-row items-center gap-4">
            <BedIcon className="text-night-blue" />
            <InfoCard.Title>Dedicated development team</InfoCard.Title>
          </div>
          <InfoCard.Description className="mt-4">
            A go-to option if you have a ready solution that needs scaling. With this pricing model, you&apos;ll have a team fully dedicated to your product on an ongoing basis. They will constantly improve your product while solving technical challenges of any complexity.
          </InfoCard.Description>
        </div>

        {/* Pricing Model 3 */}
        <div className="col-span-2">
          <div className="flex flex-row items-center gap-4">
            <BedIcon className="text-night-blue" />
            <InfoCard.Title>Time and material</InfoCard.Title>
          </div>
          <InfoCard.Description className="mt-4">
            With this model, you&apos;ll pay only for hours spent and materials used during the project. This flexible model leaves room for changes throughout the development process. A perfect option for projects with unstable requirements.
          </InfoCard.Description>
        </div>
      </div>
    </div>
  );
}
