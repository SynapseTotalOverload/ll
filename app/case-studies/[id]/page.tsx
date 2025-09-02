"use client";

import DynamicMain from "@/components/pages/dynamic/main";
import { ProjectConfig } from "@/constants/projects/project-config.types";
import projectConfig from "@/constants/projects/project-config.json";

const data: ProjectConfig = projectConfig;

export default function CaseStudiesPage({ params }: { params: { id: string } }) {
  const project = data.projects["truth-or-dare"];
  return <DynamicMain project={project} />;
}
