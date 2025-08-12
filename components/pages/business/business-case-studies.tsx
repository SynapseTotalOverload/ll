"use client";
import { Button } from "@/components/ui/button";
import { BedIcon, MoveRightIcon } from "lucide-react";
import SignTitle from "@/components/modules/sign-title";
import InfoCard from "@/components/modules/info-card";
import { LampEffect } from "@/components/ui/lamp-effect";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { portfolio } from "@/constants/portfolio/portfolio";
import PortfolioCard from "@/components/modules/portfolio-card";
export default function PortfolioStartups() {
  return (
    <div className="flex w-full flex-col gap-16 px-20">
      <SignTitle>
        <SignTitle.Title className="capitalize">PRODUCT DESIGN AND DEVELOPMENT CASE STUDIES</SignTitle.Title>

        <SignTitle.Separator />
      </SignTitle>
      <div className="flex flex-col items-center gap-16">
        {portfolio.map((item) => {
          return (
            <PortfolioCard
              platform={item.platform}
              tags={item.tags}
              fullLink={item.fullLink}
              fullName={item.fullName}
              description={item.description}
              key={item.id}
              backgroundUrl={item.backgroundUrl}
            />
          );
        })}
      </div>
      {/* Services Grid */}
    </div>
  );
}
