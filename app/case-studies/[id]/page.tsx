import type { Metadata } from "next";
import React from "react";
import { notFound } from "next/navigation";
import DynamicMain from "@/components/pages/dynamic/main";
import { getProject } from "@/constants/projects/project-config-data";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  try {
    const project = getProject(id);
    return {
      title: `${project.hero.title} - Case Study | LogicCraft`,
      description: project.aboutProject?.description || project.hero.description || "Explore this software development case study from LogicCraft.",
      keywords: project.services?.services?.join(", ") || "software development, case study, web development, mobile app development",
      authors: [{ name: "LogicCraft Team" }],
      openGraph: {
        title: `${project.hero.title} - Case Study | LogicCraft`,
        description: project.aboutProject?.description || project.hero.description || "Explore this software development case study.",
        type: "website",
        url: `https://logiccraft.com${project.hero.fullLink}`,
      },
      twitter: {
        card: "summary_large_image",
        title: `${project.hero.title} - Case Study | LogicCraft`,
        description: project.aboutProject?.description || project.hero.description || "Explore this software development case study.",
      },
      alternates: {
        canonical: `https://logiccraft.com${project.hero.fullLink}`,
      },
    };
  } catch {
    return {
      title: "Case Study - LogicCraft",
      description: "Explore this software development case study from LogicCraft.",
    };
  }
}

export default async function CaseStudiesPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  try {
    const project = getProject(id);
    return <DynamicMain project={project} />;
  } catch (error) {
    notFound();
  }
}
