"use client";
import DynamicHeroSection from "@/components/pages/dynamic/dynamic-hero-section";
import Footer from "@/components/modules/footer";
import DynamicAboutProject from "@/components/pages/dynamic/dynamic-about-project";
import DynamicServices from "@/components/pages/dynamic/dynamic-services";
import DynamicStats from "@/components/pages/dynamic/dynamic-stats";
import StartProject from "./start-project";
import DynamicProjectGoals from "./dynamic-project-goals";
import DynamicCreationProcess from "./dynamic-creation-process";
import PortfolioCard from "./dynamic-portfolio-card";
import { Project } from "@/constants/projects/project-config.types";
import DynamicSmallAlternate from "./dynamic-small-alternate";

export default function DynamicMain({ project }: { project: Project }) {
  return (
    <div className="flex flex-col items-center">
      <DynamicHeroSection
        title={project.hero.title}
        description={project.hero.description}
        type={project.hero.type}
        backgroundUrl={project.hero.backgroundUrl}
        mainImage={project.hero.mainImage}
        fullLink={project.hero.fullLink}
      />

      {/* ===== MAIN CONTENT SECTIONS ===== */}
      <div className="container flex flex-col gap-8 px-4 pt-8 sm:gap-16 sm:px-6 sm:pt-16 md:gap-24 md:px-8 md:pt-24 lg:gap-[120px] lg:px-12 lg:pt-[120px]">
        <DynamicAboutProject
          description={project.aboutProject.description}
          image={project.aboutProject.image}
          backgroundUrl={project.aboutProject.backgroundUrl}
        />
        <DynamicServices services={project.services.services} description={project.services.description} />
        <DynamicStats stats={project.stats} />
        <DynamicCreationProcess processes={project.creationProcess} />
        <PortfolioCard
          mainImage={project.portfolioCard.mainImage}
          description={project.portfolioCard.description}
          backgroundUrl={project.portfolioCard.backgroundUrl}
          title={project.hero.title}
        />

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
          <DynamicSmallAlternate
            title={project.hero.title}
            points={project.smallProjectCards[0].points}
            backgroundUrl={project.smallProjectCards[0].backgroundUrl}
            image={project.smallProjectCards[0].image}
          />
          <DynamicSmallAlternate
            title={project.hero.title}
            points={project.smallProjectCards[1].points}
            backgroundUrl={project.smallProjectCards[1].backgroundUrl}
            image={project.smallProjectCards[1].image}
          />
        </div>
        <DynamicProjectGoals goals={project.projectGoals} />
      </div>
      <StartProject link={project.startProject.link} />

      <Footer />
    </div>
  );
}
