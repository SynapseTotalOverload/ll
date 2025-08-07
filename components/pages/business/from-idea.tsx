"use client";

import SignTitle from "@/components/modules/sign-title";

import CountCard from "@/components/modules/count-card";
import { Timer } from "lucide-react";

export default function FromIdea() {
  return (
    <div className="flex w-full flex-col gap-16 px-20">
      <SignTitle>
        <SignTitle.Title>Our Software Development Processt</SignTitle.Title>
        <SignTitle.Description>When starting a new project, we follow these four simple steps:</SignTitle.Description>
        <SignTitle.Separator />
      </SignTitle>

      {/* Services Grid */}
      <div className="flex w-full flex-col gap-8">
        <CountCard className="self-start">
          <CountCard.Index>01</CountCard.Index>
          <CountCard.Separator />
          <CountCard.Content>
            <CountCard.Title>Interview</CountCard.Title>
            <CountCard.Description>
              with LogicCraft, you don’t need to hire developers on your own, have tech know-how, or guess whether your
              project will work out or not. We’ll handle all things tech while you do business.
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
            <CountCard.Title>Interview</CountCard.Title>
            <CountCard.Description>
              with LogicCraft, you don’t need to hire developers on your own, have tech know-how, or guess whether your
              project will work out or not. We’ll handle all things tech while you do business.
            </CountCard.Description>
            <div className="flex flex-row items-center gap-2">
              <Timer className="text-night-blue" />
              <span className="text-white">Timeline: 1-2 calls</span>
            </div>
          </CountCard.Content>
        </CountCard>
        <CountCard className="self-start">
          <CountCard.Index>03</CountCard.Index>
          <CountCard.Separator />
          <CountCard.Content>
            <CountCard.Title>Interview</CountCard.Title>
            <CountCard.Description>
              with LogicCraft, you don’t need to hire developers on your own, have tech know-how, or guess whether your
              project will work out or not. We’ll handle all things tech while you do business.
            </CountCard.Description>
            <div className="flex flex-row items-center gap-2">
              <Timer className="text-night-blue" />
              <span className="text-white">Timeline: 1-2 calls</span>
            </div>
          </CountCard.Content>
        </CountCard>
        <CountCard className="self-end">
          <CountCard.Index>04</CountCard.Index>
          <CountCard.Separator />
          <CountCard.Content>
            <CountCard.Title>Interview</CountCard.Title>
            <CountCard.Description>
              with LogicCraft, you don’t need to hire developers on your own, have tech know-how, or guess whether your
              project will work out or not. We’ll handle all things tech while you do business.
            </CountCard.Description>
            <div className="flex flex-row items-center gap-2">
              <Timer className="text-night-blue" />
              <span className="text-white">Timeline: 1-2 calls</span>
            </div>
          </CountCard.Content>
        </CountCard>
      </div>
    </div>
  );
}
