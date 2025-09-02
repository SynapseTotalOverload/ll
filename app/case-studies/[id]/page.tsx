"use client";

import DynamicMain from "@/components/pages/dynamic/main";

import { getProject } from "@/constants/projects/project-config-data";

export default function CaseStudiesPage({ params }: { params: { id: string } }) {
  const project = getProject("com-lands");
  return <DynamicMain project={project} />;
}
