import projectConfigData from "./project-config.json";
import type {
  ProjectConfig,
  Project,
  HeroSection,
  AboutProject,
  Services,
  Stat,
  CreationProcess,
  PortfolioCard,
  SmallProjectCard,
  ProjectGoal,
  StartProject,
} from "./project-config.types";

// Type the imported JSON data
const projectConfig: ProjectConfig = projectConfigData;

// Utility function to get a specific project by slug
export function getProject(slug: string): Project | null {
  return projectConfig.projects[slug] || null;
}

// Utility function to get all project slugs
export function getAllProjectSlugs(): string[] {
  return Object.keys(projectConfig.projects);
}

// Utility function to get all projects
export function getAllProjects(): Project[] {
  return Object.values(projectConfig.projects);
}

// Export the typed configuration
export { projectConfig };
export type {
  ProjectConfig,
  Project,
  HeroSection,
  AboutProject,
  Services,
  Stat,
  CreationProcess,
  PortfolioCard,
  SmallProjectCard,
  ProjectGoal,
  StartProject,
};
