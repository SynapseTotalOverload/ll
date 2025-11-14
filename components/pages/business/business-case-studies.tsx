"use client";
import { Button } from "@/components/ui/button";
import { MoveRightIcon } from "lucide-react";
import SignTitle from "@/components/modules/sign-title";
import InfoCard from "@/components/modules/info-card";
import { LampEffect } from "@/components/ui/lamp-effect";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { portfolioBusiness as portfolio } from "@/constants/portfolio/portfolio";
import PortfolioCard from "@/components/modules/portfolio-card";
import DynamicSmallProjectCard from "@/components/pages/dynamic/dynamic-small-project-card";
import { getProject } from "@/constants/projects/project-config";

// Map portfolio items to project slugs
const portfolioToProjectMap: Record<string, string> = {
  "boat-export-usa-1": "boat-export",
  "teledyne-isco-flowcalc-3": "teledyne-isco-flowcalc",
  // "avantstay-2": no corresponding project
};

export default function PortfolioStartups() {
  return (
    <div className="flex w-full flex-col gap-8 px-4 sm:gap-12 sm:px-6 md:gap-16 md:px-8 lg:gap-20 lg:px-12 xl:gap-24 xl:px-16">
      <SignTitle>
        <SignTitle.Title className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          PRODUCT DESIGN AND DEVELOPMENT CASE STUDIES
        </SignTitle.Title>
        <SignTitle.Separator />
      </SignTitle>

      {/* Mobile: Small Project Cards */}
      <div className="grid grid-cols-1 gap-4 sm:hidden">
        {portfolio.map((item) => {
          const projectSlug = portfolioToProjectMap[item.id];
          const project = projectSlug ? getProject(projectSlug) : null;
          const hasSmallCard = project && project.smallProjectCards && project.smallProjectCards.length > 0;

          if (hasSmallCard) {
            const smallCard = project.smallProjectCards[0];
            return (
              <DynamicSmallProjectCard
                key={item.id}
                title={smallCard.title}
                points={smallCard.points}
                image={smallCard.image}
                backgroundUrl={smallCard.backgroundUrl}
              />
            );
          }

          // Fallback to portfolio data if no project found
          return (
            <DynamicSmallProjectCard
              key={item.id}
              title={item.fullName}
              points={[
                {
                  title: "Platform",
                  description: [item.platform],
                },
                {
                  title: "Technologies",
                  description: item.tags,
                },
                {
                  title: "Description",
                  description: [item.description],
                },
              ]}
              image={item.backgroundUrl}
              backgroundUrl={item.backgroundUrl}
            />
          );
        })}
      </div>

      {/* Desktop: Full Portfolio Cards */}
      <div className="hidden flex-col items-center gap-8 sm:flex sm:gap-12 md:gap-16 lg:gap-20">
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
    </div>
  );
}
