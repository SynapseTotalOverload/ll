"use client";
import { Button } from "@/components/ui/button";
import { BedIcon, ClockIcon, MoveRightIcon, Receipt, Users2Icon } from "lucide-react";
import SignTitle from "@/components/modules/sign-title";
import InfoCard from "@/components/modules/info-card";
import { LampEffect } from "@/components/ui/lamp-effect";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function BusinessPricingModels() {
  return (
    <div className="flex w-full flex-col gap-8 px-4 sm:gap-12 sm:px-6 md:gap-16 md:px-8 lg:gap-20 lg:px-12 xl:gap-24 xl:px-16">
      <SignTitle>
        <SignTitle.Title className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          The pricing model tailored to your needs
        </SignTitle.Title>
        <SignTitle.Description className="text-sm sm:text-base md:text-lg lg:text-xl">
          At LogicCraft, you can choose between three main software development pricing models based on your needs
        </SignTitle.Description>
        <SignTitle.Separator />
      </SignTitle>

      {/* Pricing Models Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 sm:gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-8">
        {/* Pricing Model 1 */}
        <div className="w-full">
          <div className="flex flex-row items-center gap-3 sm:gap-4">
            <Receipt className="text-night-blue h-5 w-5 sm:h-6 sm:w-6" />
            <InfoCard.Title className="text-lg sm:text-xl md:text-xl">Fixed price</InfoCard.Title>
          </div>
          <InfoCard.Description className="mt-3 text-sm sm:mt-4 sm:text-base md:text-lg">
            This collaboration model is ideal for building an MVP or the initial version of a product. It&apos;ll allow
            you to know exactly how much you are going to spend on the project, provided that you have an exact scope
            before signing a contract.
          </InfoCard.Description>
        </div>

        {/* Pricing Model 2 */}
        <div className="w-full">
          <div className="flex flex-row items-center gap-3 sm:gap-4">
            <Users2Icon className="text-night-blue h-5 w-5 sm:h-6 sm:w-6" />
            <InfoCard.Title className="text-lg sm:text-xl md:text-xl">Dedicated development team</InfoCard.Title>
          </div>
          <InfoCard.Description className="mt-3 text-sm sm:mt-4 sm:text-base md:text-lg">
            A go-to option if you have a ready solution that needs scaling. With this pricing model, you&apos;ll have a
            team fully dedicated to your product on an ongoing basis. They will constantly improve your product while
            solving technical challenges of any complexity.
          </InfoCard.Description>
        </div>

        {/* Pricing Model 3 */}
        <div className="w-full sm:col-span-1 md:col-span-2 lg:col-span-1">
          <div className="flex flex-row items-center gap-3 sm:gap-4">
            <ClockIcon className="text-night-blue h-5 w-5 sm:h-6 sm:w-6" />
            <InfoCard.Title className="text-lg sm:text-xl md:text-xl">Time and material</InfoCard.Title>
          </div>
          <InfoCard.Description className="mt-3 text-sm sm:mt-4 sm:text-base md:text-lg">
            With this model, you&apos;ll pay only for hours spent and materials used during the project. This flexible
            model leaves room for changes throughout the development process. A perfect option for projects with
            unstable requirements.
          </InfoCard.Description>
        </div>
      </div>
    </div>
  );
}
