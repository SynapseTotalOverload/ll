"use client";

import React from "react";
import { notFound } from "next/navigation";
import DynamicMain from "@/components/pages/dynamic/main";

import { getProject } from "@/constants/projects/project-config-data";

export default function CaseStudiesPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);

  try {
    const project = getProject(id);
    return <DynamicMain project={project} />;
  } catch (error) {
    notFound();
  }
}
