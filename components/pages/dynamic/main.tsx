"use client";
import DynamicHeroSection from "@/components/pages/dynamic/dynamic-hero-section";
import Footer from "@/components/modules/footer";
import DynamicAboutProject from "@/components/pages/dynamic/dynamic-about-project";
import DynamicServices from "@/components/pages/dynamic/dynamic-services";
import DynamicStats from "@/components/pages/dynamic/dynamic-stats";
import StartProject from "./start-project";
import DynamicSmallProjectCard from "./dynamic-small-project-card";
import DynamicProjectGoals from "./dynamic-project-goals";
import DynamicCreationProcess from "./dynamic-creation-process";
import PortfolioCard from "./dynamic-portfolio-card";
import { Project } from "@/constants/projects/project-config.types";

export default function DynamicMain({ project }: { project: Project }) {
  console.log(project.hero);
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
      <div className="container flex flex-col gap-[32px] pt-[120px]">
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
        />

        <div className="grid grid-cols-2 gap-8">
          <DynamicSmallProjectCard
            title={project.smallProjectCards[0].title}
            points={project.smallProjectCards[0].points}
            backgroundUrl={project.smallProjectCards[0].backgroundUrl}
            image={project.smallProjectCards[0].image}
          />
          <DynamicSmallProjectCard
            title={project.smallProjectCards[1].title}
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
