"use client";
import CaseStudiesHeroSection from "@/components/pages/case-studies/case-studies-hero-section";
import Footer from "@/components/modules/footer";
import PortfolioCard from "@/components/pages/dynamic/dynamic-portfolio-card";
import DynamicSmallProjectCard from "@/components/pages/dynamic/dynamic-small-project-card";
import { getAllProjects } from "@/constants/projects/project-config";
import Link from "next/link";

export default function CaseStudiesPage() {
  const projects = getAllProjects();

  // Create a map for easy lookup
  const projectsMap = new Map(projects.map((p) => [p.slug, p]));

  // Helper function to get project data or fallback
  const getProject = (slug: string) => projectsMap.get(slug);

  return (
    <div className="flex flex-col items-center">
      <CaseStudiesHeroSection />

      {/* ===== MAIN CONTENT SECTIONS ===== */}
      <div className="container flex flex-col gap-[32px] pt-[120px]">
        {getProject("com-lands") && (
          <Link href={getProject("com-lands")!.hero.fullLink}>
            <PortfolioCard
              description={getProject("com-lands")!.portfolioCard.description}
              backgroundUrl={getProject("com-lands")!.portfolioCard.backgroundUrl}
              mainImage={getProject("com-lands")!.portfolioCard.mainImage}
            />
          </Link>
        )}
        <div className="flex flex-row gap-8">
          {getProject("truth-or-dare") && getProject("truth-or-dare")!.smallProjectCards[0] && (
            <Link href={getProject("truth-or-dare")!.hero.fullLink} className="flex-1">
              <DynamicSmallProjectCard
                title={getProject("truth-or-dare")!.smallProjectCards[0].title}
                points={getProject("truth-or-dare")!.smallProjectCards[0].points}
                image={getProject("truth-or-dare")!.smallProjectCards[0].image}
                backgroundUrl={getProject("truth-or-dare")!.smallProjectCards[0].backgroundUrl}
              />
            </Link>
          )}
          {getProject("chillbill") && getProject("chillbill")!.smallProjectCards[0] && (
            <Link href={getProject("chillbill")!.hero.fullLink} className="flex-1">
              <DynamicSmallProjectCard
                title={getProject("chillbill")!.smallProjectCards[0].title}
                points={getProject("chillbill")!.smallProjectCards[0].points}
                image={getProject("chillbill")!.smallProjectCards[0].image}
                backgroundUrl={getProject("chillbill")!.smallProjectCards[0].backgroundUrl}
              />
            </Link>
          )}
        </div>
        <div className="flex max-h-[1200px] flex-row gap-8">
          <div className="w-[50%] flex-1">
            {getProject("teledyne-isco-flowcalc") && getProject("teledyne-isco-flowcalc")!.smallProjectCards[0] && (
              <Link href={getProject("teledyne-isco-flowcalc")!.hero.fullLink} className="h-full">
                <DynamicSmallProjectCard
                  title={getProject("teledyne-isco-flowcalc")!.smallProjectCards[0].title}
                  points={getProject("teledyne-isco-flowcalc")!.smallProjectCards[0].points}
                  image={getProject("teledyne-isco-flowcalc")!.smallProjectCards[0].image}
                  backgroundUrl={getProject("teledyne-isco-flowcalc")!.smallProjectCards[0].backgroundUrl}
                />
              </Link>
            )}
          </div>
          <div className="flex-1">
            {getProject("trackmyjobs") && getProject("trackmyjobs")!.smallProjectCards[0] && (
              <Link href={getProject("trackmyjobs")!.hero.fullLink} className="h-full">
                <DynamicSmallProjectCard
                  title={getProject("trackmyjobs")!.smallProjectCards[0].title}
                  points={getProject("trackmyjobs")!.smallProjectCards[0].points}
                  image={getProject("trackmyjobs")!.smallProjectCards[0].image}
                  backgroundUrl={getProject("trackmyjobs")!.smallProjectCards[0].backgroundUrl}
                />
              </Link>
            )}
          </div>
        </div>
        {getProject("sxipher-ai") && (
          <Link href={getProject("sxipher-ai")!.hero.fullLink}>
            <PortfolioCard
              description={getProject("sxipher-ai")!.portfolioCard.description}
              backgroundUrl={getProject("sxipher-ai")!.portfolioCard.backgroundUrl}
              mainImage={getProject("sxipher-ai")!.portfolioCard.mainImage}
            />
          </Link>
        )}
        <div className="flex flex-row gap-8">
          {getProject("reachfi") && getProject("reachfi")!.smallProjectCards[0] && (
            <Link href={getProject("reachfi")!.hero.fullLink} className="flex-1">
              <DynamicSmallProjectCard
                title={getProject("reachfi")!.smallProjectCards[0].title}
                points={getProject("reachfi")!.smallProjectCards[0].points}
                image={getProject("reachfi")!.smallProjectCards[0].image}
                backgroundUrl={getProject("reachfi")!.smallProjectCards[0].backgroundUrl}
              />
            </Link>
          )}
        </div>
        {getProject("boat-export") && (
          <Link href={getProject("boat-export")!.hero.fullLink}>
            <PortfolioCard
              description={getProject("boat-export")!.portfolioCard.description}
              backgroundUrl={getProject("boat-export")!.portfolioCard.backgroundUrl}
              mainImage={getProject("boat-export")!.portfolioCard.mainImage}
            />
          </Link>
        )}
      </div>

      <Footer />
    </div>
  );
}
