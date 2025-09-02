import { Project, ProjectConfig } from "./project-config.types";

// Function to get project configuration with updated image links and slug
export function getProject(projectName: string): Project {
  // Mapping of project names to folder names from @dynamic/
  const projectFolderMap: Record<string, string> = {
    "com-lands": "comunity_lands",
    "truth-or-dare": "truth_or_dare",
    "boat-export": "boat_export",
    chillbill: "chillbill",
    digibdr: "digibdr",
    reachfi: "reachfi",
    "sxipher-ai": "sxipher_ai",
    "teledyne-isco-flowcalc": "teledyne_isco_flowcalc",
    trackmyjobs: "trackmyjobs",
    tripsha: "tripsha",
  };

  const folderName = projectFolderMap[projectName];
  if (!folderName) {
    throw new Error(`Project "${projectName}" not found in folder mapping`);
  }

  // Base template for project configuration
  const baseConfig: Project = {
    id: projectName,
    slug: projectName,
    hero: {
      title: "Project Title",
      description: "Project description goes here...",
      type: "Web App",
      backgroundUrl: `/assets/dynamic/${folderName}/bg_hero.png`,
      mainImage: `/assets/dynamic/${folderName}/img_hero.png`,
      fullLink: `/case-studies/${projectName}`,
    },
    aboutProject: {
      description: "About project description goes here...",
      image: `/assets/dynamic/${folderName}/img_about_project.png`,
      backgroundUrl: `/assets/dynamic/${folderName}/bg_about_project.png`,
    },
    services: {
      services: ["UI/UX Design", "Web Development", "Mobile Development"],
      description: "Services description goes here...",
    },
    stats: [
      {
        title: "Screens",
        value: "50+",
      },
      {
        title: "Development",
        value: "120h",
      },
      {
        title: "Design",
        value: "80h",
      },
    ],
    creationProcess: [
      {
        title: "Discovery",
        description: "Understanding requirements and planning the project.",
      },
      {
        title: "Design",
        description: "Creating wireframes and visual designs.",
      },
      {
        title: "Development",
        description: "Building the application with modern technologies.",
      },
      {
        title: "Testing",
        description: "Quality assurance and testing phases.",
      },
    ],
    portfolioCard: {
      mainImage: `/assets/dynamic/${folderName}/img_home_page.png`,
      description: "Portfolio card description goes here...",
      backgroundUrl: `/assets/dynamic/${folderName}/bg_home_page.png`,
    },
    smallProjectCards: [
      {
        title: "Home Page",
        points: [
          {
            title: "Hero Section",
            description: ["Modern design", "Responsive layout"],
          },
          {
            title: "Features",
            description: ["User-friendly", "Fast performance"],
          },
        ],
        backgroundUrl: `/assets/dynamic/${folderName}/bg_home_page_1_block.png`,
        image: `/assets/dynamic/${folderName}/img_home_page_1_block.png`,
      },
      {
        title: "About Page",
        points: [
          {
            title: "Company Info",
            description: ["Professional presentation", "Clear messaging"],
          },
          {
            title: "Team",
            description: ["Expert team", "Dedicated support"],
          },
        ],
        backgroundUrl: `/assets/dynamic/${folderName}/bg_home_page_2_block.png`,
        image: `/assets/dynamic/${folderName}/img_home_page_2_block.png`,
      },
    ],
    projectGoals: [
      {
        sign: "1. User Experience",
        goal: "Create an intuitive and engaging user experience that exceeds expectations.",
      },
      {
        sign: "2. Performance",
        goal: "Ensure fast loading times and smooth interactions across all devices.",
      },
      {
        sign: "3. Accessibility",
        goal: "Make the application accessible to users with diverse needs and abilities.",
      },
      {
        sign: "4. Scalability",
        goal: "Build a robust foundation that can grow with business needs.",
      },
    ],
    startProject: {
      link: "/become-a-client",
    },
  };

  return baseConfig;
}

// Function to update existing project data with correct image paths
export function updateProjectWithCorrectPaths(projectName: string, existingData: Project): Project {
  const projectFolderMap: Record<string, string> = {
    "com-lands": "comunity_lands",
    "truth-or-dare": "truth_or_dare",
    "boat-export": "boat_export",
    chillbill: "chillbill",
    digibdr: "digibdr",
    reachfi: "reachfi",
    "sxipher-ai": "sxipher_ai",
    "teledyne-isco-flowcalc": "teledyne_isco_flowcalc",
    trackmyjobs: "trackmyjobs",
    tripsha: "tripsha",
  };

  const folderName = projectFolderMap[projectName];
  if (!folderName) {
    throw new Error(`Project "${projectName}" not found in folder mapping`);
  }

  // Deep clone the existing data
  const updatedData: Project = JSON.parse(JSON.stringify(existingData));

  // Update the slug
  updatedData.slug = projectName;

  // Update image paths in hero section
  if (updatedData.hero) {
    updatedData.hero.backgroundUrl = `/assets/dynamic/${folderName}/bg_hero.png`;
    updatedData.hero.mainImage = `/assets/dynamic/${folderName}/img_hero.png`;
    updatedData.hero.fullLink = `/case-studies/${projectName}`;
  }

  // Update image paths in aboutProject section
  if (updatedData.aboutProject) {
    updatedData.aboutProject.image = `/assets/dynamic/${folderName}/img_about_project.png`;
    updatedData.aboutProject.backgroundUrl = `/assets/dynamic/${folderName}/bg_about_project.png`;
  }

  // Update image paths in portfolioCard section
  if (updatedData.portfolioCard) {
    updatedData.portfolioCard.mainImage = `/assets/dynamic/${folderName}/img_home_page.png`;
    updatedData.portfolioCard.backgroundUrl = `/assets/dynamic/${folderName}/bg_home_page.png`;
  }

  // Update image paths in smallProjectCards section
  if (updatedData.smallProjectCards && Array.isArray(updatedData.smallProjectCards)) {
    updatedData.smallProjectCards.forEach((card, index) => {
      card.backgroundUrl = `/assets/dynamic/${folderName}/bg_home_page_${index + 1}_block.png`;
      card.image = `/assets/dynamic/${folderName}/img_home_page_${index + 1}_block.png`;
    });
  }

  return updatedData;
}

// Utility function to get all available project names
export function getAvailableProjectNames(): string[] {
  return [
    "com-lands",
    "truth-or-dare",
    "boat-export",
    "chillbill",
    "digibdr",
    "reachfi",
    "sxipher-ai",
    "teledyne-isco-flowcalc",
    "trackmyjobs",
    "tripsha",
  ];
}

const data: ProjectConfig = {
  projects: {
    "com-lands": {
      id: "truth-or-dare",
      slug: "truth-or-dare",
      hero: {
        title: "Truth or Dare",
        description:
          "Community Lands is a platform offering affordable land for purchase across the United States, catering to individuals interested in nature, sustainability, and off-grid living. The site provides a marketplace for diverse land options, resources for prospective landowners, and a community space to connect with others passionate about land ownership and outdoor lifestyles.",
        type: "Mobile App",
        backgroundUrl: "/assets/dynamic/com-lands/main-bg.png",
        mainImage: "/assets/dynamic/com-lands/design-bg.png",
        fullLink: "/case-studies/truth-or-dare",
      },
      aboutProject: {
        description:
          "Community Lands is a platform offering affordable land for purchase across the United States, catering to individuals interested in nature, sustainability, and off-grid living. The site provides a marketplace for diverse land options, resources for prospective landowners, and a community space to connect with others passionate about land ownership and outdoor lifestyles.",
        image: "/assets/dynamic/com-lands/about-bg.png",
        backgroundUrl: "/assets/dynamic/com-lands/main-bg.png",
      },
      services: {
        services: [
          "Navigation Architecture",
          "Web design",
          "Chrome Extension",
          "UI/UX Design",
          "UX Research",
          "Style guide & Assets",
          "Svelte",
          "FastAPI",
          "SQLAlchemy",
          "CRUD",
          "Node.js",
        ],
        description:
          "We Used Svelte On The Frontend To Create Adaptable Interfaces With Optimized UX, Adding Features Like Dialogue Boxes For Agent Interaction And Active View Indicators On Object Pages. We Updated Filter Designs And Implemented Status Indicators Like 'reserved.' On The Backend, We Worked With FastAPI And SQLAlchemy For Reliable CRUD Operations, Developed Functionality For Offers, And Integrated Google Authentication Via Keycloak. Additionally, We Enhanced Email Formatting, Added Attachments, Improved Search Logic, And Set Up Data Filtering For A Smoother User Experience. Additionally, we enhanced email formatting, added attachments, improved search logic, and set up data filtering for a smoother user experience.",
      },
      stats: [
        {
          title: "Screens",
          value: "100+",
        },
        {
          title: "Development",
          value: "220h",
        },
        {
          title: "Design",
          value: "180h",
        },
      ],
      creationProcess: [
        {
          title: "Team",
          description: "We have a team of 10 people who are working on the project.",
        },
        {
          title: "UI/UX",
          description: "We have a team of 10 people who are working on the project.",
        },
        {
          title: "Development",
          description: "We have a team of 10 people who are working on the project.",
        },
        {
          title: "Testing",
          description: "We have a team of 10 people who are working on the project.",
        },
      ],
      portfolioCard: {
        mainImage: "/assets/dynamic/com-lands/design-bg.png",
        description:
          "We have a team of 10 people who are working on the project. We have a team of 10 people who are working on the project.",
        backgroundUrl: "/assets/dynamic/com-lands/main-bg.png",
      },
      smallProjectCards: [
        {
          title: "Screens",
          points: [
            {
              title: "Screen 1",
              description: ["Description 1", "Description 2"],
            },
            {
              title: "Screen 2",
              description: ["Description 3", "Description 4"],
            },
          ],
          backgroundUrl: "/assets/dynamic/com-lands/main-bg.png",
          image: "/assets/dynamic/com-lands/design-bg.png",
        },
        {
          title: "Screens",
          points: [
            {
              title: "Screen 1",
              description: ["Description 1", "Description 2"],
            },
            {
              title: "Screen 2",
              description: ["Description 3", "Description 4"],
            },
          ],
          backgroundUrl: "/assets/dynamic/com-lands/main-bg.png",
          image: "/assets/dynamic/com-lands/design-bg.png",
        },
      ],
      projectGoals: [
        {
          sign: "1. Creating a professional brand",
          goal: "Ensure a positive first impression for customers and partners. Demonstrate technical expertise in cybersecurity",
        },
        {
          sign: "2. Creating a professional brand",
          goal: "Ensure a positive first impression for customers and partners. Demonstrate technical expertise in cybersecurity",
        },
        {
          sign: "3. Creating a professional brand",
          goal: "Ensure a positive first impression for customers and partners. Demonstrate technical expertise in cybersecurity",
        },
        {
          sign: "4. Creating a professional brand",
          goal: "Ensure a positive first impression for customers and partners. Demonstrate technical expertise in cybersecurity",
        },
        {
          sign: "5. Creating a professional brand",
          goal: "Ensure a positive first impression for customers and partners. Demonstrate technical expertise in cybersecurity",
        },
        {
          sign: "6. Creating a professional brand",
          goal: "Ensure a positive first impression for customers and partners. Demonstrate technical expertise in cybersecurity",
        },
        {
          sign: "7. Creating a professional brand",
          goal: "Ensure a positive first impression for customers and partners. Demonstrate technical expertise in cybersecurity",
        },
        {
          sign: "8. Creating a professional brand",
          goal: "Ensure a positive first impression for customers and partners. Demonstrate technical expertise in cybersecurity",
        },
      ],
      startProject: {
        link: "/become-a-client",
      },
    },
  },
};

export default data;
