"use client";
import SignTitle from "@/components/modules/sign-title";
import InfoCard from "@/components/modules/info-card";
import { LampEffect } from "@/components/ui/lamp-effect";

export default function QAMethodology() {
  return (
    <div className="flex w-full flex-col gap-16 px-20">
      <SignTitle>
        <SignTitle.Title>Our QA Methodology</SignTitle.Title>
        <SignTitle.Separator />
      </SignTitle>

      {/* Methodology Grid */}
      <div className="grid grid-cols-3 place-items-center gap-8">
        {/* Methodology Card 1 */}
        <InfoCard className="">
          <LampEffect>
            <div className="text-night-blue text-2xl font-bold">01</div>
          </LampEffect>
          <InfoCard.Title className="mt-6">Risk management</InfoCard.Title>
          <InfoCard.Description className="mt-4">
            When we talk about software, anything can go wrong at any time. A risk management system helps to develop measures for minimizing risks and assess the effectiveness of these measures.
          </InfoCard.Description>
        </InfoCard>

        {/* Methodology Card 2 */}
        <InfoCard className="">
          <LampEffect>
            <div className="text-night-blue text-2xl font-bold">02</div>
          </LampEffect>
          <InfoCard.Title className="mt-6">Test strategy</InfoCard.Title>
          <InfoCard.Description className="mt-4">
            A good test strategy plays a significant role in customer satisfaction. It provides a long-term plan of action regarding the software testing QA process to ensure the quality and reliability of the product.
          </InfoCard.Description>
        </InfoCard>

        {/* Methodology Card 3 */}
        <InfoCard className="">
          <LampEffect>
            <div className="text-night-blue text-2xl font-bold">03</div>
          </LampEffect>
          <InfoCard.Title className="mt-6">Defect Management</InfoCard.Title>
          <InfoCard.Description className="mt-4">
            Communication, adequate tool support, a well-defined defect lifecycle, and an engaged defect management committee are necessary for effective and efficient defect management.
          </InfoCard.Description>
        </InfoCard>
      </div>
    </div>
  );
}
