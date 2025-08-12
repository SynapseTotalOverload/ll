"use client";
import { Button } from "@/components/ui/button";
import { BedIcon, MoveRightIcon } from "lucide-react";
import SignTitle from "@/components/modules/sign-title";
import InfoCard from "@/components/modules/info-card";
import { LampEffect } from "@/components/ui/lamp-effect";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function StartupWhyUs() {
  return (
    <div className="flex w-full flex-col gap-16 px-20">
      <SignTitle>
        <SignTitle.Title>Why us?</SignTitle.Title>
        <SignTitle.Separator />
      </SignTitle>

      {/* Why Choose Us Grid */}
      <div className="grid grid-cols-6 place-items-center gap-8">
        {/* Reason 1 */}
        <div className="col-span-2">
          <span className="text-plastic custom-font-bricolage text-[126px] font-[700] tracking-[-12px]">01</span>
          <InfoCard.Title>Exceptional expertise and clear communication</InfoCard.Title>

          <InfoCard.Description className="mt-4">
            With our tech experts, you can finally focus on your core responsibilities. We&apos;ll handle all the aspects of software development, including tech challenges that require out-of-the-box approach and deliver high-quality work that satisfies your expectations. During the process, we&apos;ll explain every detail to you, making even the most complex project feel achievable to a non-tech person.
          </InfoCard.Description>
        </div>

        {/* Reason 2 */}
        <div className="col-span-2">
          <span className="text-plastic custom-font-bricolage text-[126px] font-[700] tracking-[-12px]">02</span>
          <InfoCard.Title>Resource-wise</InfoCard.Title>

          <InfoCard.Description className="mt-4">
            With LogicCraft, you can get the maximum value at a great price. Besides, you&apos;ll have full control over how much you spend on a project and how long it takes. We&apos;ll negotiate aspects like time and budget at the outset, and if necessary, you&apos;ll be able to scale up and down your team throughout the project.
          </InfoCard.Description>
        </div>

        {/* Reason 3 */}
        <div className="col-span-2">
          <span className="text-plastic custom-font-bricolage text-[126px] font-[700] tracking-[-12px]">03</span>
          <InfoCard.Title>Product owners just like you</InfoCard.Title>

          <InfoCard.Description className="mt-4">
            As startup founders, we&apos;ve seen all the ups and downs of project ownership from within. This explains our client-first approach in every interaction and our willingness to solve your problem. We&apos;ll fight for your project and propose a variety of innovative solutions until we make sure that users love it and investors receive it well.
          </InfoCard.Description>
        </div>
      </div>
    </div>
  );
}
