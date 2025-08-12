"use client";

import SignTitle from "@/components/modules/sign-title";

import CountCard from "@/components/modules/count-card";
import { Timer } from "lucide-react";

export default function BusinessSoftwareProcess() {
  return (
    <div className="flex w-full flex-col gap-16 px-20">
      <SignTitle>
        <SignTitle.Title>Our Software Development Process</SignTitle.Title>
        <SignTitle.Description>When starting a new project, we follow these four simple steps:</SignTitle.Description>
        <SignTitle.Separator />
      </SignTitle>

      {/* Process Steps Grid */}
      <div className="flex w-full flex-col gap-8">
        <CountCard className="self-start">
          <CountCard.Index>01</CountCard.Index>
          <CountCard.Separator />
          <CountCard.Content>
            <CountCard.Title>Assessing the client&apos;s goals</CountCard.Title>
            <CountCard.Description>
              First off, we learn as much as we can about your business goals. LogicCraft&apos;s experts will thoroughly research your business and the niche you&apos;re operating in. As we spot the areas that might need improvement with technology, we&apos;ll map out a plan for the development of your future solution.
            </CountCard.Description>
          </CountCard.Content>
        </CountCard>
        <CountCard className="self-end">
          <CountCard.Index>02</CountCard.Index>
          <CountCard.Separator />
          <CountCard.Content>
            <CountCard.Title>Analyzing requirements and planning resources</CountCard.Title>
            <CountCard.Description>
              Secondly, we analyze the requirements for a comprehensive perspective of your project and consider what teams will be necessary to implement it. They need to be skilled, cooperate effectively and quickly. Then, we roll out a business proposal and set out to assemble the optimal team(s) for your project.
            </CountCard.Description>
          </CountCard.Content>
        </CountCard>
        <CountCard className="self-start">
          <CountCard.Index>03</CountCard.Index>
          <CountCard.Separator />
          <CountCard.Content>
            <CountCard.Title>Recruitment</CountCard.Title>
            <CountCard.Description>
              Now it&apos;s time to assemble the team(s). We can either look for candidates internally or turn to external sources. Thanks to the corporate culture we nurture, we have become very attractive to talent in the well-known local IT community.
            </CountCard.Description>
          </CountCard.Content>
        </CountCard>
        <CountCard className="self-end">
          <CountCard.Index>04</CountCard.Index>
          <CountCard.Separator />
          <CountCard.Content>
            <CountCard.Title>Initiating the project</CountCard.Title>
            <CountCard.Description>
              We&apos;ll do everything so you can reach project goals seamlessly – set up communication, reporting, and collaboration tools, introduce team members, and more. Having honesty and partnership among our values, we always encourage transparency and quality. So rest assured: you can keep an eye on the critical project aspects anytime.
            </CountCard.Description>
          </CountCard.Content>
        </CountCard>
      </div>
    </div>
  );
}
