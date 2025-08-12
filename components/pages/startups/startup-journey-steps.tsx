"use client";

import SignTitle from "@/components/modules/sign-title";

import CountCard from "@/components/modules/count-card";
import { Timer } from "lucide-react";

export default function StartupJourneySteps() {
  return (
    <div className="flex w-full flex-col gap-16 px-20">
      <SignTitle>
        <SignTitle.Title>From idea to ready-for-market product</SignTitle.Title>
        <SignTitle.Description>
          We&apos;ll get your back up at any stage. Where are you in your startup journey?
        </SignTitle.Description>
        <SignTitle.Separator />
      </SignTitle>

      {/* Startup Journey Steps */}
      <div className="flex w-full flex-col gap-8">
        <CountCard className="self-start">
          <CountCard.Index>01</CountCard.Index>
          <CountCard.Separator />
          <CountCard.Content>
            <CountCard.Title>Interview</CountCard.Title>
            <CountCard.Description>
              With LogicCraft, you don&apos;t need to hire developers on your own, have tech know-how, or guess whether your
              project will work out or not. We&apos;ll handle all things tech while you do business.
            </CountCard.Description>
            <div className="flex flex-row items-center gap-2">
              <Timer className="text-night-blue" />
              <span className="text-white">Timeline: 1-2 calls</span>
            </div>
          </CountCard.Content>
        </CountCard>
        <CountCard className="self-end">
          <CountCard.Index>02</CountCard.Index>
          <CountCard.Separator />
          <CountCard.Content>
            <CountCard.Title>Discovery and research</CountCard.Title>
            <CountCard.Description>
              Just like you, we are interested in building a product that will bring a unique value to its audience and win a competitive edge. We&apos;ll help you achieve this with a failure-proof product strategy based on a thorough customer and competitor analysis.
            </CountCard.Description>
            <div className="flex flex-row items-center gap-2">
              <Timer className="text-night-blue" />
              <span className="text-white">Timeline: 1-2 Weeks</span>
            </div>
          </CountCard.Content>
        </CountCard>
        <CountCard className="self-start">
          <CountCard.Index>03</CountCard.Index>
          <CountCard.Separator />
          <CountCard.Content>
            <CountCard.Title>Requirements</CountCard.Title>
            <CountCard.Description>
              You already know what you are going to build and how. Let&apos;s finalize all the requirements, develop a detailed product roadmap, discuss the timeline and the pricing model, sign a contract, and get down to work.
            </CountCard.Description>
            <div className="flex flex-row items-center gap-2">
              <Timer className="text-night-blue" />
              <span className="text-white">Timeline: 1 week</span>
            </div>
          </CountCard.Content>
        </CountCard>
        <CountCard className="self-end">
          <CountCard.Index>04</CountCard.Index>
          <CountCard.Separator />
          <CountCard.Content>
            <CountCard.Title>Design</CountCard.Title>
            <CountCard.Description>
              The product&apos;s look and feel are crucial for getting initial user growth. We&apos;ll support you with mind maps, wireframes, prototypes, and everything you need for a seamless user experience. We can also build a product based on the ready-made design concept you provide.
            </CountCard.Description>
            <div className="flex flex-row items-center gap-2">
              <Timer className="text-night-blue" />
              <span className="text-white">Timeline: 1-2 month</span>
            </div>
          </CountCard.Content>
        </CountCard>
        <CountCard className="self-start">
          <CountCard.Index>05</CountCard.Index>
          <CountCard.Separator />
          <CountCard.Content>
            <CountCard.Title>MVP development</CountCard.Title>
            <CountCard.Description>
              Want to test your idea first before building your product from start to finish? Or perhaps you need to demonstrate the validity of your solution to get funding? We can help you build a minimum viable product (MVP).
            </CountCard.Description>
            <div className="flex flex-row items-center gap-2">
              <Timer className="text-night-blue" />
              <span className="text-white">Timeline: 1-3 month</span>
            </div>
          </CountCard.Content>
        </CountCard>
        <CountCard className="self-end">
          <CountCard.Index>06</CountCard.Index>
          <CountCard.Separator />
          <CountCard.Content>
            <CountCard.Title>Continuous product development</CountCard.Title>
            <CountCard.Description>
              Have you got an MVP or even a full-fledged solution already? Don&apos;t stop there. The market is constantly changing, and it&apos;s critical to keep up. But no worries, we&apos;ll help you harness change by constantly improving your product. We may support you with our CTO as a service for startups, ensuring your product&apos;s ongoing enhancement.
            </CountCard.Description>
            <div className="flex flex-row items-center gap-2">
              <Timer className="text-night-blue" />
              <span className="text-white">Timeline: depending on your needs</span>
            </div>
          </CountCard.Content>
        </CountCard>
      </div>
    </div>
  );
}
