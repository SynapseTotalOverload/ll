"use client";
import CaseStudiesHeroSection from "@/components/pages/case-studies/case-studies-hero-section";
import Footer from "@/components/modules/footer";
import PortfolioCard from "@/components/pages/dynamic/dynamic-portfolio-card";
import DynamicSmallProjectCard from "@/components/pages/dynamic/dynamic-small-project-card";
import { getAllProjects } from "@/constants/projects/project-config";
import Link from "next/link";

export default function CaseStudiesPageClient() {
  const projects = getAllProjects();

  // Define grid pattern: 'large' for PortfolioCard, 'small' for DynamicSmallProjectCard
  // Pattern creates an interesting asymmetric layout
  const gridPattern = [
    { type: "large", span: "full" }, // Row 1: Large card
    { type: "small-duo", span: "half" }, // Row 2: Two small cards
    { type: "small-duo", span: "half" }, // Row 3: Two small cards
    { type: "large", span: "full" }, // Row 4: Large card
    { type: "small-trio", span: "third" }, // Row 5: Three small cards
    { type: "large", span: "full" }, // Row 6: Large card
  ];

  // Distribute projects based on pattern
  let projectIndex = 0;
  const gridItems: Array<{
    type: string;
    span: string;
    project: (typeof projects)[0] | null;
  }> = [];

  for (const pattern of gridPattern) {
    if (projectIndex >= projects.length) break;

    if (pattern.type === "large") {
      gridItems.push({
        type: "large",
        span: "full",
        project: projects[projectIndex],
      });
      projectIndex++;
    } else if (pattern.type === "small-duo") {
      // Add two small cards
      for (let i = 0; i < 2 && projectIndex < projects.length; i++) {
        gridItems.push({
          type: "small",
          span: "half",
          project: projects[projectIndex],
        });
        projectIndex++;
      }
    } else if (pattern.type === "small-trio") {
      // Add three small cards
      for (let i = 0; i < 3 && projectIndex < projects.length; i++) {
        gridItems.push({
          type: "small",
          span: "third",
          project: projects[projectIndex],
        });
        projectIndex++;
      }
    }
  }

  // Continue with remaining projects in a repeating pattern
  while (projectIndex < projects.length) {
    const remainingCount = projects.length - projectIndex;

    if (remainingCount >= 3) {
      // Add a large card
      gridItems.push({
        type: "large",
        span: "full",
        project: projects[projectIndex],
      });
      projectIndex++;

      // Add two small cards if available
      if (projectIndex < projects.length) {
        for (let i = 0; i < 2 && projectIndex < projects.length; i++) {
          gridItems.push({
            type: "small",
            span: "half",
            project: projects[projectIndex],
          });
          projectIndex++;
        }
      }
    } else {
      // Add remaining as small cards
      gridItems.push({
        type: "small",
        span: remainingCount === 2 ? "half" : "full",
        project: projects[projectIndex],
      });
      projectIndex++;
    }
  }

  // Group items by rows for proper rendering
  const rows: Array<Array<(typeof gridItems)[0]>> = [];
  let currentRow: Array<(typeof gridItems)[0]> = [];

  for (const item of gridItems) {
    if (item.span === "full" && currentRow.length > 0) {
      rows.push(currentRow);
      currentRow = [];
    }

    currentRow.push(item);

    if (item.span === "full") {
      rows.push(currentRow);
      currentRow = [];
    } else if (item.span === "half" && currentRow.length === 2) {
      rows.push(currentRow);
      currentRow = [];
    } else if (item.span === "third" && currentRow.length === 3) {
      rows.push(currentRow);
      currentRow = [];
    }
  }

  if (currentRow.length > 0) {
    rows.push(currentRow);
  }

  return (
    <div className="flex flex-col items-center">
      <CaseStudiesHeroSection />

      {/* ===== DYNAMIC GRID LAYOUT ===== */}
      <div className="container flex flex-col gap-4 pt-16 pb-16 sm:gap-6 md:gap-8 md:pt-24 lg:pt-[120px]">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`flex flex-col gap-4 sm:gap-6 md:gap-8 ${
              row.length === 1
                ? "flex-col"
                : row.length === 2
                  ? "md:flex-row"
                  : row.length === 3
                    ? "md:flex-row md:flex-wrap lg:flex-row"
                    : "flex-col"
            }`}
          >
            {row.map((item, itemIndex) => {
              if (!item.project) return null;

              const project = item.project;
              const key = `${rowIndex}-${itemIndex}`;

              if (item.type === "large") {
                return (
                  <Link
                    key={key}
                    href={project.hero.fullLink}
                    className="w-full transition-transform duration-300 hover:scale-[1.02]"
                  >
                    <PortfolioCard
                      description={project.portfolioCard.description}
                      backgroundUrl={project.portfolioCard.backgroundUrl}
                      mainImage={project.portfolioCard.mainImage}
                    />
                  </Link>
                );
              } else {
                // Small card
                const cardData = project.smallProjectCards[0];
                if (!cardData) return null;

                return (
                  <Link
                    key={key}
                    href={project.hero.fullLink}
                    className={`w-full transition-transform duration-300 hover:scale-[1.02] ${
                      item.span === "third"
                        ? "md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)]"
                        : item.span === "half"
                          ? "md:w-[calc(50%-1rem)]"
                          : "w-full"
                    } `}
                  >
                    <DynamicSmallProjectCard
                      title={cardData.title}
                      points={cardData.points}
                      image={cardData.image}
                      backgroundUrl={cardData.backgroundUrl}
                    />
                  </Link>
                );
              }
            })}
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
