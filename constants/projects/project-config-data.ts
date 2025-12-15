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
    "sxipher-ai": "sxipher-ai",
    "teledyne-isco-flowcalc": "teledyne_isco_flowcalc",
    trackmyjobs: "trackmyjobs",
    tripsha: "tripsha",
  };

  const folderName = projectFolderMap[projectName];
  console.log(projectName, folderName);
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
      link: "/contact-us",
    },
  };

  return data.projects[projectName as keyof typeof data] || baseConfig;
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
    "sxipher-ai": "sxipher-ai",
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

export const data: ProjectConfig = {
  projects: {
    "com-lands": {
      id: "com-lands",
      slug: "com-lands",
      hero: {
        title: "Community lands",
        description:
          "Platform offering affordable land for purchase across the United States. Provides marketplace for diverse land options and resources for prospective landowners.",
        type: "Web App",
        backgroundUrl: "/assets/dynamic/comunity_lands/bg_hero.png",
        mainImage: "/assets/dynamic/comunity_lands/img_hero.png",
        fullLink: "/case-studies/com-lands",
      },
      aboutProject: {
        description:
          "Platform connecting users with real estate opportunities. Features intuitive interface, advanced search, real-time status indicators, and streamlined order processes.",
        image: "/assets/dynamic/comunity_lands/img_about_project.png",
        backgroundUrl: "/assets/dynamic/comunity_lands/bg_about_project.png",
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
          "Frontend: Svelte for adaptable interfaces, dialogue boxes, and status indicators. Backend: FastAPI and SQLAlchemy for CRUD operations, offers functionality, and Google authentication via Keycloak.",
      },
      stats: [
        {
          title: "Screens",
          value: "70+",
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
          description:
            "A skilled team of designers, developers, and strategists worked on the project, which ensured its success",
        },
        {
          title: "Development stages",
          description: "From the initial concept and collection of design requirements, to the final launch.",
        },
        {
          title: "Testing",
          description: "Thorough testing of functionality and user experience was carried out.",
        },
        {
          title: "UI/UX Design",
          description:
            "From in-depth research and wireframing to developing a user-friendly and visually appealing interface",
        },
      ],
      portfolioCard: {
        mainImage: "/assets/dynamic/comunity_lands/img_home_page.png",
        description:
          "Platform connecting users with real estate opportunities. Features intuitive interface for browsing and managing property listings.",
        backgroundUrl: "/assets/dynamic/comunity_lands/bg_home_page.png",
      },
      smallProjectCards: [
        {
          title: "Home page",
          points: [
            {
              title: "Functions",
              description: [
                "Welcome banner with company mission",
                "Button 'View available land plots'",
                "Sections with benefits, services and reviews",
              ],
            },
            {
              title: "Features",
              description: ["Professional design with land plot photos", "Convenient navigation to main sections"],
            },
          ],
          backgroundUrl: "/assets/dynamic/comunity_lands/bg_home_page_1_block.png",
          image: "/assets/dynamic/comunity_lands/img_home_page_1_block.png",
        },
        {
          title: "Properties catalogue page",
          points: [
            {
              title: "Functions",
              description: [
                "List of plots with filters by price, size, location",
                "Sort by popularity, novelty or price",
                "Interactive map for plot locations",
              ],
            },
            {
              title: "Features",
              description: [
                "Cards with price, area, photo and description",
                "'More details' button for specific plot",
              ],
            },
          ],
          backgroundUrl: "/assets/dynamic/comunity_lands/bg_home_page_2_block.png",
          image: "/assets/dynamic/comunity_lands/img_home_page_2_block.png",
        },
      ],
      projectGoals: [
        {
          sign: "1. Provide access to affordable land plots",
          goal: "Provide access to affordable land plots for a wide range of clients.",
        },
        {
          sign: "2. Simplify the purchase process",
          goal: "Simplify buying land through an online platform.",
        },
        {
          sign: "3. Educate clients",
          goal: "Educate clients on land ownership benefits and processes.",
        },
        {
          sign: "4. Compete with other providers",
          goal: "Competing with other land providers.",
        },
        {
          sign: "5. Ensure transparency",
          goal: "Ensuring transparency and trust in online purchases.",
        },
        {
          sign: "6. Provide detailed information",
          goal: "Providing detailed information about each plot for informed decisions.",
        },
      ],
      startProject: {
        link: "/contact-us",
      },
    },
    trackmyjobs: {
      id: "trackmyjobs",
      slug: "trackmyjobs",
      hero: {
        title: "TrackMyJobs",
        description:
          "Platform helping users manage and track job applications, organize job search activities, and stay updated on application statuses.",
        type: "Web App",
        backgroundUrl: "/assets/dynamic/trackmyjobs/bg_hero.png",
        mainImage: "/assets/dynamic/trackmyjobs/img_hero.png",
        fullLink: "/case-studies/trackmyjobs",
      },
      aboutProject: {
        description:
          "All-in-one platform for job search management. Features tools for organizing applications, setting reminders, monitoring interviews, and tracking progress.",
        image: "/assets/dynamic/trackmyjobs/img_about_project.png",
        backgroundUrl: "/assets/dynamic/trackmyjobs/bg_about_project.png",
      },
      services: {
        services: [
          "Navigation Architecture",
          "Web design",
          "Chrome Extension",
          "UI/UX Design",
          "UX Research",
          "Style guide & Assets",
          "React",
          "Nest.js",
          "SQLAlchemy",
          "CRUD",
          "Node.js",
        ],
        description:
          "Frontend: React with Registration/Login and Drag&Drop for job cards. Chrome extension for adding cards from LinkedIn. Backend: Nest.js for CRUD and RESTful API. Integrates with RocketReach API.",
      },
      stats: [
        {
          title: "Screens",
          value: "70+",
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
          description: "A dedicated team of UX/UI designers, developers, and project managers",
        },
        {
          title: "Development stages",
          description: "From concept and requirements gathering to design, implementation, and launch",
        },
        {
          title: "Testing",
          description: "Comprehensive functionality and usability testing",
        },
        {
          title: "UI/UX Design",
          description:
            "From in-depth research and wireframing to crafting a user-friendly and visually engaging interface",
        },
      ],
      portfolioCard: {
        mainImage: "/assets/dynamic/trackmyjobs/img_home_page.png",
        description:
          "All-in-one platform for job search management. Features tools for organizing applications, setting reminders, and monitoring interviews.",
        backgroundUrl: "/assets/dynamic/trackmyjobs/bg_home_page.png",
      },
      smallProjectCards: [
        {
          title: "Home page",
          points: [
            {
              title: "Functions",
              description: [
                "Dashboard overview of applications and tasks",
                "Quick actions to add or update job cards",
                "Drag-and-drop job tracker",
                "Activity trends and analytics",
              ],
            },
            {
              title: "Features",
              description: [
                "Chrome extension for LinkedIn integration",
                "RocketReach API for targeted searches",
                "Custom notifications and reminders",
              ],
            },
          ],
          backgroundUrl: "/assets/dynamic/trackmyjobs/bg_home_page_1_block.png",
          image: "/assets/dynamic/trackmyjobs/img_home_page_1_block.png",
        },
        {
          title: "Quantitative analyst",
          points: [
            {
              title: "Functions",
              description: [
                "Connect with hiring team members",
                "Focus on valuable contacts",
                "Expand professional network",
                "Boost job search efficiency",
              ],
            },
            {
              title: "Features",
              description: [
                "Selective LinkedIn networking",
                "Suggestions for network expansion",
                "Targeted networking approach",
              ],
            },
          ],
          backgroundUrl: "/assets/dynamic/trackmyjobs/bg_home_page_2_block.png",
          image: "/assets/dynamic/trackmyjobs/img_home_page_2_block.png",
        },
        {
          title: "Chrome extension",
          points: [
            {
              title: "Functions",
              description: [
                "Add job listings from any website",
                "Automated data entry",
                "Organized job search focus",
              ],
            },
            {
              title: "Features",
              description: [
                "Chrome extension integration",
                "Auto-fills job details",
              ],
            },
          ],
          backgroundUrl: "/assets/dynamic/trackmyjobs/bg_home_page_3_block.png",
          image: "/assets/dynamic/trackmyjobs/img_home_page_3_block.png",
        },
      ],
      projectGoals: [
        {
          sign: "1. Simplify job listing process",
          goal: "Simplify adding job listings from any website.",
        },
        {
          sign: "2. Automate data entry",
          goal: "Automate data entry to save time and reduce errors.",
        },
        {
          sign: "3. Improve job search efficiency",
          goal: "Improve efficiency, allowing focus on applications and interviews.",
        },
        {
          sign: "4. Enhance user experience",
          goal: "Enhance UX with seamless Chrome extension integration.",
        },
        {
          sign: "5. Ensure accurate data extraction",
          goal: "Ensuring accurate extraction from various websites.",
        },
        {
          sign: "6. Maintain consistent functionality",
          goal: "Maintaining consistent functionality across browsers.",
        },
      ],
      startProject: {
        link: "/contact-us",
      },
    },
    "boat-export": {
      id: "boat-export",
      slug: "boat-export",
      hero: {
        title: "Boat Export Usa",
        description:
          "Online platform specializing in sale and export of used American boats and yachts worldwide. Offers wide range of vessels.",
        type: "Web App",
        backgroundUrl: "/assets/dynamic/boat_export/bg_hero.png",
        mainImage: "/assets/dynamic/boat_export/img_hero.png",
        fullLink: "/case-studies/boat-export",
      },
      aboutProject: {
        description:
          "Platform specializing in sale and export of used boats and yachts worldwide. Combines user-friendly interface, functional solutions, and international logistics.",
        image: "/assets/dynamic/boat_export/img_about_project.png",
        backgroundUrl: "/assets/dynamic/boat_export/bg_about_project.png",
      },
      services: {
        services: [
          "Navigation Architecture",
          "Web design",
          "API integrations",
          "UI/UX Design",
          "UX Research",
          "create wireframes",
          "Cloudflare",
          "Figma",
          "AWS",
          "React.js",
          "Node.js",
          "Adobe XD",
        ],
        description:
          "Modern services and technologies for efficiency and ease of use. Tools and services used throughout development from concept to implementation.",
      },
      stats: [
        {
          title: "Screens",
          value: "35+",
        },
        {
          title: "Development",
          value: "180h",
        },
        {
          title: "Design",
          value: "120h",
        },
      ],
      creationProcess: [
        {
          title: "Team",
          description:
            "A dedicated team of UX/UI designers, front-end and back-end developers, and project strategists",
        },
        {
          title: "Development stages",
          description: "From the initial concept and requirements gathering to development, testing, and final launch",
        },
        {
          title: "Testing",
          description: "Thorough testing of functionality, usability, and performance",
        },
        {
          title: "UI/UX Design",
          description:
            "From in-depth research and wireframing to crafting a user-friendly and visually appealing interface",
        },
      ],
      portfolioCard: {
        mainImage: "/assets/dynamic/boat_export/img_home_page.png",
        description:
          "Platform specializing in sale and export of used boats and yachts worldwide. Combines user-friendly interface and international logistics.",
        backgroundUrl: "/assets/dynamic/boat_export/bg_home_page.png",
      },
      smallProjectCards: [
        {
          title: "Home page",
          points: [
            {
              title: "Functions",
              description: [
                "Search bar and filters by boat type, price, year, condition",
                "Delivery calculator widget",
                "Interactive map with ports and routes",
              ],
            },
            {
              title: "Features",
              description: [
                "Responsive design for all devices",
                "Modern marine color palette",
                "Simple navigation and UX",
              ],
            },
          ],
          backgroundUrl: "/assets/dynamic/boat_export/bg_home_page_1_block.png",
          image: "/assets/dynamic/boat_export/img_home_page_1_block.png",
        },
        {
          title: "Product card",
          points: [
            {
              title: "Functions",
              description: ["Head unit with the image of a boat", "Title and brief information"],
            },
            {
              title: "Features",
              description: [
                "Built-in widget for instant communication with a company representative",
                "Buttons for sharing the link to the page via social networks (Facebook, Instagram, WhatsApp)",
              ],
            },
          ],
          backgroundUrl: "/assets/dynamic/boat_export/bg_home_page_2_block.png",
          image: "/assets/dynamic/boat_export/img_home_page_2_block.png",
        },
        {
          title: "About us",
          points: [
            {
              title: "Functions",
              description: ["Informing about the company", "Demonstration of expertise"],
            },
            {
              title: "Features",
              description: ["Dynamic content", "Information structure"],
            },
          ],
          backgroundUrl: "/assets/dynamic/boat_export/bg_home_page_3_block.png",
          image: "/assets/dynamic/boat_export/img_home_page_3_block.png",
        },
      ],
      projectGoals: [
        {
          sign: "1. Expand global reach",
          goal: "Allow customers worldwide to find and buy boats.",
        },
        {
          sign: "2. Provide comprehensive catalog",
          goal: "Provide large catalog of boats in different categories and price ranges.",
        },
        {
          sign: "3. Simplify purchase process",
          goal: "Make searching, selecting, and buying boats intuitive and convenient.",
        },
        {
          sign: "4. Ensure trust and reliability",
          goal: "Provide confidence in safe transactions and quality standards.",
        },
      ],
      startProject: {
        link: "/contact-us",
      },
    },
    "truth-or-dare": {
      id: "truth-or-dare",
      slug: "truth-or-dare",
      hero: {
        title: "Truth or dare",
        description:
          'Mobile game where players challenge each other by completing tasks or answering questions. Choose truth to reveal secrets or dare for fun tasks.',
        type: "Mobile App",
        backgroundUrl: "/assets/dynamic/truth_or_dare/bg_hero.png",
        mainImage: "/assets/dynamic/truth_or_dare/img_hero.png",
        fullLink: "/case-studies/truth-or-dare",
      },
      aboutProject: {
        description:
          'Revives the popular game in digital format. Features interactive interface, customization options, and regular content updates for gatherings.',
        image: "/assets/dynamic/truth_or_dare/img_about_project.png",
        backgroundUrl: "/assets/dynamic/truth_or_dare/bg_about_project.png",
      },
      services: {
        services: [
          "Developing UI",
          "Create personalized emojis",
          "Creating animations",
          "UI/UX Design",
          "UX Research",
          "For IOS",
          "For Android",
          "Creating a prototype",
        ],
        description:
          "Mobile game for groups with modes: classic, romantic, and party. Auto-generates tasks, allows custom content, difficulty settings, and scoring. Available on iOS and Android.",
      },
      stats: [
        {
          title: "Screens",
          value: "40+",
        },
        {
          title: "Development",
          value: "180h",
        },
        {
          title: "Design",
          value: "145h",
        },
      ],
      creationProcess: [
        {
          title: "Team",
          description: "UX/UI designers, developers, QA Engineer and product managers",
        },
        {
          title: "Development stages",
          description: "From concept development and requirements gathering to design, implementation, and launch",
        },
        {
          title: "Testing",
          description: "Thorough functionality and usability testing",
        },
        {
          title: "UI/UX Design",
          description:
            "From comprehensive research and wireframing to the creation of a full-fledged, user-friendly interactive interface",
        },
      ],
      portfolioCard: {
        mainImage: "/assets/dynamic/truth_or_dare/img_home_page.png",
        description:
          'Revives the popular game in digital format. Features interactive interface, customization options, and regular content updates.',
        backgroundUrl: "/assets/dynamic/truth_or_dare/bg_home_page.png",
      },
      smallProjectCards: [
        {
          title: "Screens of Dare or truth",
          points: [
            {
              title: "Functions",
              description: ["Display a task or question", "List of players", "Animations and sound effects"],
            },
            {
              title: "Features",
              description: ["Flexibility of the interface", "Control buttons"],
            },
          ],
          backgroundUrl: "/assets/dynamic/truth_or_dare/bg_home_page_1_block.png",
          image: "/assets/dynamic/truth_or_dare/img_home_page_1_block.png",
        },
        {
          title: "Selecting the game mode",
          points: [
            {
              title: "Functions",
              description: [
                "Modes: Classic, romantic, party/adult",
                "Difficulty settings",
                "Custom tasks and questions",
              ],
            },
            {
              title: "Features",
              description: [
                "Flexible for any situation",
                "Automatic task alternation",
              ],
            },
          ],
          backgroundUrl: "/assets/dynamic/truth_or_dare/bg_home_page_2_block.png",
          image: "/assets/dynamic/truth_or_dare/img_home_page_2_block.png",
        },
      ],
      projectGoals: [
        {
          sign: "1. Entertainment and socialization",
          goal: "Provide fun way to communicate and improve social interactions during parties and meetings.",
        },
        {
          sign: "2. User engagement",
          goal: "Use interactive elements to increase retention and regular play.",
        },
        {
          sign: "3. Personalizing the experience",
          goal: "Allow custom questions and tasks, adapt to age groups and difficulty levels.",
        },
      ],
      startProject: {
        link: "/contact-us",
      },
    },
    digibdr: {
      id: "digibdr",
      slug: "digibdr",
      hero: {
        title: "DigiBdr",
        description:
          "Company specializing in automating B2B customer acquisition using AI. Solutions increase sales team efficiency through automated lead generation and outreach.",
        type: "Web App",
        backgroundUrl: "/assets/dynamic/digibdr/bg_hero.png",
        mainImage: "/assets/dynamic/digibdr/img_hero.png",
        fullLink: "/case-studies/digibdr",
      },
      aboutProject: {
        description:
          "AI-powered autonomous digital workforce for BDR functions: identifying, engaging, and qualifying prospects. Automates customer acquisition for sales growth.",
        image: "/assets/dynamic/digibdr/img_about_project.png",
        backgroundUrl: "/assets/dynamic/digibdr/bg_about_project.png",
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
          "Autonomous AI agents work 24/7 to find, research, and qualify leads. Full cycle automation from prospecting to personalized messages and meetings. Integrates with existing sales and marketing tools.",
      },
      stats: [
        {
          title: "Screens",
          value: "70+",
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
          description: "A skilled team of designers, developers, and project managers worked together",
        },
        {
          title: "Development stages",
          description: "DigiBdr was created to provide innovative digital solutions tailored to the needs of users.",
        },
        {
          title: "Testing",
          description: "Testing was carried out to ensure that DigiBdr delivers flawless functionality",
        },
        {
          title: "UI/UX Design",
          description:
            "From thorough research and structure development to creating an intuitive and visually appealing interface.",
        },
      ],
      portfolioCard: {
        mainImage: "/assets/dynamic/digibdr/img_home_page.png",
        description:
          "AI-powered autonomous digital workforce for BDR functions: identifying, engaging, and qualifying prospects for sales growth.",
        backgroundUrl: "/assets/dynamic/digibdr/bg_home_page.png",
      },
      smallProjectCards: [
        {
          title: "Home page",
          points: [
            {
              title: "Functions",
              description: [
                "Product presentation and benefits",
                "Information on DigiBDR efficiency",
                "CTA buttons: Learn more, Submit request, Contact us",
              ],
            },
            {
              title: "Features",
              description: [
                "Structured presentation with headlines",
                "Product demonstration video",
                "Customer reviews slider",
              ],
            },
          ],
          backgroundUrl: "/assets/dynamic/digibdr/bg_home_page_1_block.png",
          image: "/assets/dynamic/digibdr/img_home_page_1_block.png",
        },
        {
          title: "Product page",
          points: [
            {
              title: "Functions",
              description: [
                "Description of AI agents and functions",
                "Automated processes: prospecting, personalization, meetings",
                "Diagrams explaining system workflow",
              ],
            },
            {
              title: "Features",
              description: [
                "Tabs: How it works, Functions, Integration",
              ],
            },
          ],
          backgroundUrl: "/assets/dynamic/digibdr/bg_home_page_2_block.png",
          image: "/assets/dynamic/digibdr/img_home_page_2_block.png",
        },
      ],
      projectGoals: [
        {
          sign: "1. Create intuitive platform",
          goal: "Create platform connecting businesses with customers, optimizing advertising and lead generation.",
        },
        {
          sign: "2. Implement advanced tracking",
          goal: "Implement tracking features for campaigns to measure and improve performance.",
        },
        {
          sign: "3. Provide scalable solutions",
          goal: "Provide scalable solutions for business growth and increasing demands.",
        },
        {
          sign: "4. Design user-friendly interface",
          goal: "Design user-friendly interface for businesses and customers of all tech levels.",
        },
        {
          sign: "5. Ensure seamless integration",
          goal: "Ensure seamless integration with third-party analytics tools.",
        },
        {
          sign: "6. Develop robust system",
          goal: "Develop flexible system handling large data volumes without performance issues.",
        },
      ],
      startProject: {
        link: "/contact-us",
      },
    },
    "teledyne-isco-flowcalc": {
      id: "teledyne-isco-flowcalc",
      slug: "teledyne-isco-flowcalc",
      hero: {
        title: "TELEDYNE ISCO FlowCalc",
        description:
          "App calculates flow rates in open channels and pipes. Converts measured data into accurate flow rates for water professionals.",
        type: "Mobile App",
        backgroundUrl: "/assets/dynamic/teledyne_isco_flowcalc/bg_hero.png",
        mainImage: "/assets/dynamic/teledyne_isco_flowcalc/img_hero.png",
        fullLink: "/case-studies/teledyne-isco-flowcalc",
      },
      aboutProject: {
        description:
          "App for calculating flow rates in open channels and partially filled pipes. Helps water professionals convert measured data into accurate flow rates.",
        image: "/assets/dynamic/teledyne_isco_flowcalc/img_about_project.png",
        backgroundUrl: "/assets/dynamic/teledyne_isco_flowcalc/bg_about_project.png",
      },
      services: {
        services: [
          "React Native",
          "Node.js",
          "MongoDB",
          "UI/UX Design",
          "Creating a prototype",
          "Creating animations",
          "UX Research",
          "User Testing",
          "For IOS",
          "For Android",
        ],
        description:
          "Frontend: React Native for cross-platform iOS and Android. Backend: Node.js and Express.js for API. Database: MongoDB for flow calculation data. Design: Figma for prototyping and UI design.",
      },
      stats: [
        {
          title: "Screens",
          value: "40+",
        },
        {
          title: "Development",
          value: "180h",
        },
        {
          title: "Design",
          value: "145h",
        },
      ],
      creationProcess: [
        {
          title: "Team",
          description: "UX/UI designers, developers, QA Engineer and product managers",
        },
        {
          title: "Development stages",
          description: "From concept development and requirements gathering to design, implementation, and launch",
        },
        {
          title: "Testing",
          description: "Thorough functionality and usability testing",
        },
        {
          title: "UI/UX Design",
          description:
            "From comprehensive research and wireframing to the creation of a full-fledged, user-friendly interactive interface",
        },
      ],
      portfolioCard: {
        mainImage: "/assets/dynamic/teledyne_isco_flowcalc/img_home_page.png",
        description:
          "App calculates flow rates in open channels and pipes. Converts measured data into accurate flow rates for water professionals.",
        backgroundUrl: "/assets/dynamic/teledyne_isco_flowcalc/bg_home_page.png",
      },
      smallProjectCards: [
        {
          title: "Home screen",
          points: [
            {
              title: "Functions",
              description: [
                "Flow rate calculation",
                "Data input and configuration",
                "Unit conversion",
                "Save and export results",
              ],
            },
            {
              title: "Features",
              description: [
                "Intuitive dashboard",
                "Interactive graphs",
                "Preloaded templates",
                "Offline functionality",
                "ISCO device integration",
              ],
            },
          ],
          backgroundUrl: "/assets/dynamic/teledyne_isco_flowcalc/bg_home_page_1_block.png",
          image: "/assets/dynamic/teledyne_isco_flowcalc/img_home_page_1_block.png",
        },
        {
          title: "Flumes screen",
          points: [
            {
              title: "Functions",
              description: ["Flume type selection", "Flow rate calculation", "Water level data input"],
            },
            {
              title: "Features",
              description: [
                "Preloaded flume templates",
                "Interactive diagrams",
                "Result export options",
                "ISCO device integration",
              ],
            },
          ],
          backgroundUrl: "/assets/dynamic/teledyne_isco_flowcalc/bg_home_page_2_block.png",
          image: "/assets/dynamic/teledyne_isco_flowcalc/img_home_page_2_block.png",
        },
      ],
      projectGoals: [
        {
          sign: "1. Simplify Flow Calculations",
          goal: "Provide straightforward tool for accurate flow rate calculations.",
        },
        {
          sign: "2. Enhance Usability",
          goal: "Offer intuitive interface for data entry and visualization.",
        },
        {
          sign: "3. Integrate Real-Time Data",
          goal: "Enable seamless connection with ISCO sensors for live measurements.",
        },
        {
          sign: "4. Support Industry Standards",
          goal: "Ensure compliance with standard measurement practices.",
        },
      ],
      startProject: {
        link: "/contact-us",
      },
    },
    "sxipher-ai": {
      id: "sxipher-ai",
      slug: "sxipher-ai",
      hero: {
        title: "Sxipher.ai",
        description:
          "Cybersecurity platform for penetration testing and security assessments. Helps organizations protect infrastructures with custom evaluations and risk mitigation.",
        type: "Web App",
        backgroundUrl: "/assets/dynamic/sxipher_ai/bg_hero.png",
        mainImage: "/assets/dynamic/sxipher_ai/img_hero.png",
        fullLink: "/case-studies/sxipher-ai",
      },
      aboutProject: {
        description:
          "Modern interactive interface for AI-powered security testing tools. Design facilitates access to penetration testing modules, security reports, and Genesis AI integration.",
        image: "/assets/dynamic/sxipher_ai/img_about_project.png",
        backgroundUrl: "/assets/dynamic/sxipher_ai/bg_about_project.png",
      },
      services: {
        services: [
          "Navigation Architecture",
          "Web design",
          "Chrome Extension",
          "UI/UX Design",
          "UX Research",
          "Style guide & Assets",
          "CSS",
          "JavaScript",
          "PHP",
          "HTML",
          "Node.js",
        ],
        description:
          "Responsive layouts, API integration for real-time data visualization, and usability aligned with Sxipher's mission. Intuitive experience for navigating cybersecurity solutions.",
      },
      stats: [
        {
          title: "Screens",
          value: "70+",
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
          description: "specialists involved in the creation",
        },
        {
          title: "Development stages",
          description: "from requirements gathering to launch",
        },
        {
          title: "Testing",
          description: "Checking the functionality and security before the launch.",
        },
        {
          title: "UI/UX Design",
          description: "all kinds of research, creation of wireframes, creation of a full-fledged design",
        },
      ],
      portfolioCard: {
        mainImage: "/assets/dynamic/sxipher_ai/img_home_page.png",
        description:
          "Modern interactive interface for AI-powered security testing tools. Seamless interaction with penetration testing modules.",
        backgroundUrl: "/assets/dynamic/sxipher_ai/bg_home_page.png",
      },
      smallProjectCards: [
        {
          title: "Home page",
          points: [
            {
              title: "Functions",
              description: [
                "Introduction to services: penetration testing, security, ransomware protection",
                "Product demonstrations",
              ],
            },
            {
              title: "Features",
              description: ["Professional cybersecurity interface", "Service overview"],
            },
          ],
          backgroundUrl: "/assets/dynamic/sxipher_ai/bg_home_page_1_block.png",
          image: "/assets/dynamic/sxipher_ai/img_home_page_1_block.png",
        },
        {
          title: "Blog",
          points: [
            {
              title: "Functions",
              description: ["Latest articles and news about cybersecurity trends"],
            },
            {
              title: "Features",
              description: ["Content management system", "Cybersecurity insights"],
            },
          ],
          backgroundUrl: "/assets/dynamic/sxipher_ai/bg_home_page_2_block.png",
          image: "/assets/dynamic/sxipher_ai/img_home_page_2_block.png",
        },
        {
          title: "Partners",
          points: [
            {
              title: "Functions",
              description: ["Showcase partnerships and integrations with companies like Acronis"],
            },
            {
              title: "Features",
              description: ["Partnership showcase", "Integration highlights"],
            },
          ],
          backgroundUrl: "/assets/dynamic/sxipher_ai/bg_home_page_3_block.png",
          image: "/assets/dynamic/sxipher_ai/img_home_page_3_block.png",
        },
      ],
      projectGoals: [
        {
          sign: "1. Creating a professional brand",
          goal: "Ensure positive first impression and demonstrate cybersecurity expertise.",
        },
        {
          sign: "2. Ease of use",
          goal: "Easy access to services with clear navigation and fast loading.",
        },
        {
          sign: "3. Information security",
          goal: "Protect website from cyber attacks considering company specifics.",
        },
        {
          sign: "4. Flexibility and scalability",
          goal: "Ability to expand functionality with new services and integrations.",
        },
        {
          sign: "5. Customer engagement",
          goal: "Use blog for brand promotion and CTAs to encourage cooperation.",
        },
      ],
      startProject: {
        link: "/contact-us",
      },
    },
    reachfi: {
      id: "reachfi",
      slug: "reachfi",
      hero: {
        title: "ReachFi.Ai",
        description:
          "Platform automating personal finance management. Helps track expenses, debts, manage taxes, and optimize financial tasks.",
        type: "Web App",
        backgroundUrl: "/assets/dynamic/reachfi/bg_hero.png",
        mainImage: "/assets/dynamic/reachfi/img_hero.png",
        fullLink: "/case-studies/reachfi",
      },
      aboutProject: {
        description:
          "Tracks debts and expenses, creates repayment plans, estimates debt-free timelines. Evaluates impact of major financial decisions on long-term goals.",
        image: "/assets/dynamic/reachfi/img_about_project.png",
        backgroundUrl: "/assets/dynamic/reachfi/bg_about_project.png",
      },
      services: {
        services: [
          "React Native",
          "Node.js",
          "PostgreSQL",
          "UI/UX Design",
          "Secure API integrations",
          "Creating a prototype",
          "UX Research",
          "User Testing",
          "Adobe XD",
        ],
        description:
          "Frontend: React.js for intuitive responsive interface with real-time data visualization. Backend: Node.js and Express.js for secure API integrations and calculations. Database: PostgreSQL for secure financial data management. Design: Figma and Adobe XD for user flows and dashboards.",
      },
      stats: [
        {
          title: "Screens",
          value: "40+",
        },
        {
          title: "Development",
          value: "180h",
        },
        {
          title: "Design",
          value: "145h",
        },
      ],
      creationProcess: [
        {
          title: "Team",
          description:
            "A multidisciplinary team of frontend and backend developers, UI/UX designers, QA engineers, and project managers",
        },
        {
          title: "Development stages",
          description: "from requirements gathering and architecture planning and launch",
        },
        {
          title: "Testing",
          description: "Thorough functional and performance testing ensured platform reliability.",
        },
        {
          title: "UI/UX Design",
          description:
            "Designers focused on building an intuitive and visually appealing interface that simplifies complex financial data and analytics.",
        },
      ],
      portfolioCard: {
        mainImage: "/assets/dynamic/reachfi/img_home_page.png",
        description:
          "Platform automating personal finance management. Tracks expenses, debts, manages taxes, and optimizes financial tasks.",
        backgroundUrl: "/assets/dynamic/reachfi/bg_home_page.png",
      },
      smallProjectCards: [
        {
          title: "Home screen",
          points: [
            {
              title: "Functions",
              description: [
                "User dashboard with financial metrics",
                "Quick access to core features",
                "Real-time data synchronization",
              ],
            },
            {
              title: "Features",
              description: [
                "Financial overview and summaries",
                "Interactive charts and analytics",
                "Personalized insights and recommendations",
                "Secure login and authentication",
              ],
            },
          ],
          backgroundUrl: "/assets/dynamic/reachfi/bg_home_page_1_block.png",
          image: "/assets/dynamic/reachfi/img_home_page_1_block.png",
        },
        {
          title: "Expenses screen",
          points: [
            {
              title: "Functions",
              description: [
                "Log and categorize expenses",
                "Set spending limits and monitor progress",
                "Analyze spending patterns and trends",
              ],
            },
            {
              title: "Features",
              description: [
                "Categorized expenses",
                "Interactive expense charts",
                "Real-time expense updates",
              ],
            },
          ],
          backgroundUrl: "/assets/dynamic/reachfi/bg_home_page_2_block.png",
          image: "/assets/dynamic/reachfi/img_home_page_2_block.png",
        },
      ],
      projectGoals: [
        {
          sign: "1. Simplify Financial Management",
          goal: "Provide intuitive way to track expenses, contributions, and savings.",
        },
        {
          sign: "2. Enhance Financial Transparency",
          goal: "Ensure clear visibility of financial activity and goals.",
        },
        {
          sign: "3. Promote User Engagement",
          goal: "Encourage consistent contributions through reminders and tracking.",
        },
      ],
      startProject: {
        link: "/contact-us",
      },
    },
    chillbill: {
      id: "chillbill",
      slug: "chillbill",
      hero: {
        title: "Chill Bill",
        description:
          "Mobile app simplifying restaurant loyalty card management. Users collect digital cards and receive real-time discount updates from participating restaurants.",
        type: "Mobile App",
        backgroundUrl: "/assets/dynamic/chillbill/bg_hero.png",
        mainImage: "/assets/dynamic/chillbill/img_hero.png",
        fullLink: "/case-studies/chillbill",
      },
      aboutProject: {
        description:
          "Mobile app enhancing restaurant experience with exclusive offers and rewards. Users earn bonus points, explore restaurant profiles, browse menus, make reservations, and access loyalty programs.",
        image: "/assets/dynamic/chillbill/img_about_project.png",
        backgroundUrl: "/assets/dynamic/chillbill/bg_about_project.png",
      },
      services: {
        services: [
          "React Native",
          "Node.js",
          "Express.js",
          "MongoDB",
          "UI/UX Design",
          "Wireframe",
          "Creating animations",
          "UX Research",
          "For IOS",
          "For Android",
        ],
        description:
          "For the development and design of the Chill Bill application, we utilized a comprehensive suite of tools and services to ensure efficiency and quality: Development Tools: Mobile App Development: Developed cross-platform functionality using React Native for smooth performance on both iOS and Android devices. Backend Development: Built a robust backend with Node.js and Express.js to handle user authentication, bonus systems, and data management. Database Management: Utilized MongoDB for efficient storage and retrieval of user and restaurant data. Design Services: UI/UX Design: Crafted intuitive and visually appealing interfaces for seamless user navigation and engagement.",
      },
      stats: [
        {
          title: "Screens",
          value: "40+",
        },
        {
          title: "Development",
          value: "180h",
        },
        {
          title: "Design",
          value: "145h",
        },
      ],
      creationProcess: [
        {
          title: "Team",
          description: "UX/UI designers, developers, QA Engineer and product managers",
        },
        {
          title: "Development stages",
          description: "From concept development and requirements gathering to design, implementation, and launch",
        },
        {
          title: "Testing",
          description: "Thorough functionality and usability testing",
        },
        {
          title: "UI/UX Design",
          description:
            "From comprehensive research and wireframing to the creation of a full-fledged, user-friendly interactive interface",
        },
      ],
      portfolioCard: {
        mainImage: "/assets/dynamic/chillbill/img_home_page.png",
        description:
          "Chill Bill is a mobile app designed to simplify the management of restaurant loyalty cards. Users can collect and store their cards digitally, and the app provides real-time updates on discounts.",
        backgroundUrl: "/assets/dynamic/chillbill/bg_home_page.png",
      },
      smallProjectCards: [
        {
          title: "Home page",
          points: [
            {
              title: "Functions",
              description: [
                "Search Bar: Allows users to search restaurants based on location, preferences, or keywords",
                "Category Filters: Quick access to restaurant categories (e.g., Vineyards, Mexico, Italian, Asia, American)",
                "Booking Option: Enables users to reserve a spot directly from the app",
                "Rewards System: Track and redeem points earned from visits and purchases",
              ],
            },
            {
              title: "Features",
              description: [
                "Dynamic Restaurant Listings: Displays restaurant details, images, and loyalty points progress",
                "Interactive Buttons: Options like Get Rewards and Book for seamless user interaction",
                "Personalized Experience: User profile icon for account management and notifications",
                "Navigation Menu: Quick access to Home, Rewards, QR Scan, Favorites, and Booked sections",
              ],
            },
          ],
          backgroundUrl: "/assets/dynamic/chillbill/bg_home_page_1_block.png",
          image: "/assets/dynamic/chillbill/img_home_page_1_block.png",
        },
        {
          title: "Restaurant page",
          points: [
            {
              title: "Functions",
              description: ["Restaurant Details Display", "Reward System Integration", "Ratings and Reviews"],
            },
            {
              title: "Features",
              description: ["Social Sharing Buttons", "Highlighted Menu Item"],
            },
          ],
          backgroundUrl: "/assets/dynamic/chillbill/bg_home_page_2_block.png",
          image: "/assets/dynamic/chillbill/img_home_page_2_block.png",
        },
      ],
      projectGoals: [
        {
          sign: "1. Enhancing Customer Experience",
          goal: "Provide users with an easy way to discover restaurants, view menus, and access special offers.",
        },
        {
          sign: "2. Building Loyal Customers",
          goal: "Create a reward and bonus system to encourage repeat visits.",
        },
        {
          sign: "3. Increasing Transparency",
          goal: "Offer detailed information about restaurants, including promotions, menus, and bonus point systems.",
        },
        {
          sign: "4. Social Integration",
          goal: "Allow users to invite friends and earn additional rewards.",
        },
        {
          sign: "5. Supporting HoReCa Businesses",
          goal: "Help restaurants attract new customers through the platform.",
        },
      ],
      startProject: {
        link: "/contact-us",
      },
    },
  },
};

export default data;
