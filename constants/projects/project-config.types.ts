export interface HeroSection {
  title: string;
  description: string;
  type: string;
  backgroundUrl: string;
  mainImage: string;
  fullLink: string;
}

export interface AboutProject {
  description: string;
  image: string;
  backgroundUrl: string;
}

export interface Services {
  services: string[];
  description: string;
}

export interface Stat {
  title: string;
  value: string;
}

export interface CreationProcess {
  title: string;
  description: string;
}

export interface PortfolioCard {
  mainImage: string;
  description: string;
  backgroundUrl: string;
}

export interface ProjectPoint {
  title: string;
  description: string[];
}

export interface SmallProjectCard {
  title: string;
  points: ProjectPoint[];
  backgroundUrl: string;
  image: string;
}

export interface ProjectGoal {
  sign: string;
  goal: string;
}

export interface StartProject {
  link: string;
}

export interface Project {
  id: string;
  slug: string;
  hero: HeroSection;
  aboutProject: AboutProject;
  services: Services;
  stats: Stat[];
  creationProcess: CreationProcess[];
  portfolioCard: PortfolioCard;
  smallProjectCards: SmallProjectCard[];
  projectGoals: ProjectGoal[];
  startProject: StartProject;
}

export interface ProjectConfig {
  projects: {
    [key: string]: Project;
  };
}
