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
      id: "com-lands",
      slug: "com-lands",
      hero: {
        title: "Community lands",
        description:
          "Community Lands is a platform offering affordable land for purchase across the United States, catering to individuals interested in nature, sustainability, and off-grid living. The site provides a marketplace for diverse land options, resources for prospective landowners, and a community space to connect with others passionate about land ownership and outdoor lifestyles.",
        type: "Web App",
        backgroundUrl: "/assets/dynamic/comunity_lands/bg_hero.png",
        mainImage: "/assets/dynamic/comunity_lands/img_hero.png",
        fullLink: "/case-studies/com-lands",
      },
      aboutProject: {
        description:
          "Community Lands is an innovative platform designed to connect users with real estate opportunities in a seamless and engaging way. Our project focuses on providing an intuitive and user-friendly interface for browsing, interacting, and managing property listings. Featuring advanced search functionality, real-time status indicators, and streamlined processes for handling orders, Community Lands is built to meet the evolving needs of both buyers and sellers in the real estate market.",
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
          "We used Svelte on the frontend to create adaptable interfaces with optimized UX, adding features like dialogue boxes for agent interaction and active view indicators on object pages. We updated filter designs and implemented status indicators like 'reserved.' On the backend, we worked with FastAPI and SQLAlchemy for reliable CRUD operations, developed functionality for offers, and integrated Google authentication via Keycloak. Additionally, we enhanced email formatting, added attachments, improved search logic, and set up data filtering for a smoother user experience.",
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
          "Community Lands is an innovative platform designed to connect users with real estate opportunities in a seamless and engaging way. Our project focuses on providing an intuitive and user-friendly interface for browsing, interacting, and managing property listings.",
        backgroundUrl: "/assets/dynamic/comunity_lands/bg_home_page.png",
      },
      smallProjectCards: [
        {
          title: "Home page",
          points: [
            {
              title: "Functions",
              description: [
                "Welcome banner with a brief description of the company's mission",
                "Button 'View available land plots' for quick access to the catalogue",
                "Sections with the benefits of land ownership, company services and customer reviews",
              ],
            },
            {
              title: "Features",
              description: [
                "Restrained and professional design with an emphasis on photos of land plots",
                "Convenient navigation with buttons to get to the main sections",
              ],
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
                "List of available plots with filters by price, size, location",
                "Possibility to sort by popularity, novelty or price",
                "Interactive map to visualise the location of plots",
              ],
            },
            {
              title: "Features",
              description: [
                "Cards with information: price, area, photo and basic description of each plot",
                "'More details' button to go to the page of a specific plot",
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
          goal: "Simplify the process of buying land through an online platform.",
        },
        {
          sign: "3. Educate clients",
          goal: "Educate clients on the benefits of land ownership and the processes involved.",
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
          goal: "Providing detailed information about each plot to help customers make an informed decision.",
        },
      ],
      startProject: {
        link: "/become-a-client",
      },
    },
    trackmyjobs: {
      id: "trackmyjobs",
      slug: "trackmyjobs",
      hero: {
        title: "TrackMyJobs",
        description:
          "Track My Jobs is a platform designed to help users manage and track their job applications, organize job search activities, and stay updated on application statuses. It supports job seekers in streamlining their job search process for greater efficiency and success.",
        type: "Web App",
        backgroundUrl: "/assets/dynamic/trackmyjobs/bg_hero.png",
        mainImage: "/assets/dynamic/trackmyjobs/img_hero.png",
        fullLink: "/case-studies/trackmyjobs",
      },
      aboutProject: {
        description:
          "TrackMyJobs is an all-in-one platform designed to streamline job search management and career progress tracking. With tools for organizing applications, setting reminders, and monitoring interview schedules, it keeps users on top of their job search journey. The platform offers insights into application status, personalized tips, and progress analytics to help users stay focused and achieve their career goals efficiently.",
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
          "We used React on the frontend to create the interface, adding Registration/Login functionality and an interactive Drag&Drop feature for managing job card statuses. Additionally, we developed a Google Chrome extension enabling Registration/Login and the ability to add job cards directly from LinkedIn. We used Nest.js on the backend to build a reliable CRUD and RESTful API, enabling card management and registration via cookies. User and card interactions are handled through REST requests. The project integrates with the RocketReach API to enhance networking capabilities, supporting precise job searches.",
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
          "TrackMyJobs is an all-in-one platform designed to streamline job search management and career progress tracking. With tools for organizing applications, setting reminders, and monitoring interview schedules, it keeps users on top of their job search journey.",
        backgroundUrl: "/assets/dynamic/trackmyjobs/bg_home_page.png",
      },
      smallProjectCards: [
        {
          title: "Home page",
          points: [
            {
              title: "Functions",
              description: [
                "Dashboard Overview: Summarizes job applications and tasks",
                "Quick Actions: Add or update job cards easily",
                "Job Tracker: Manage application statuses with drag-and-drop",
                "Insights: View activity trends and analytics",
              ],
            },
            {
              title: "Features",
              description: [
                "Chrome Extension: Add job cards directly from LinkedIn",
                "Networking Integration: Use RocketReach API for targeted job searches",
                "Custom Notifications: Get reminders for deadlines and follow-ups",
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
                "Connect with team members involved in the hiring process",
                "Save time by focusing on valuable and relevant contacts",
                "Expand professional connections beyond your current network",
                "Boost job search efficiency and increase chances of success",
              ],
            },
            {
              title: "Features",
              description: [
                "Selective networking to identify relevant LinkedIn contacts",
                "Suggests potential contacts outside your network for expanded reach",
                "Targeted approach to streamline and enhance networking efforts",
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
                "Quickly add job listings from any website to your job board",
                "Save time and effort with automated data entry",
                "Keep your job search organized and focused on applications and interviews",
              ],
            },
            {
              title: "Features",
              description: [
                "Streamlined Chrome extension for easy job board integration",
                "Auto-fills key job details like title, company, and location",
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
          goal: "Simplify the process of adding job listings to the job board from any website.",
        },
        {
          sign: "2. Automate data entry",
          goal: "Automate key data entry (job title, company, location) to save time and reduce errors.",
        },
        {
          sign: "3. Improve job search efficiency",
          goal: "Improve the efficiency of the job search process, allowing users to focus on applying and preparing for interviews.",
        },
        {
          sign: "4. Enhance user experience",
          goal: "Enhance user experience by seamlessly integrating the Chrome extension with the job board.",
        },
        {
          sign: "5. Ensure accurate data extraction",
          goal: "Ensuring accurate data extraction from various websites with different layouts.",
        },
        {
          sign: "6. Maintain consistent functionality",
          goal: "Maintaining consistent functionality across different browsers and platforms.",
        },
      ],
      startProject: {
        link: "/become-a-client",
      },
    },
    "boat-export": {
      id: "boat-export",
      slug: "boat-export",
      hero: {
        title: "Boat Export Usa",
        description:
          "Boat Export USA is an online platform that specializes in the sale and export of used American boats and yachts worldwide. They offer a wide range of vessels, including motor boats, fishing boats, cabin cruisers, deck boats, bow boats, cabin boats, center console boats, trawlers, and ski boats.",
        type: "Web App",
        backgroundUrl: "/assets/dynamic/boat_export/bg_hero.png",
        mainImage: "/assets/dynamic/boat_export/img_hero.png",
        fullLink: "/case-studies/boat-export",
      },
      aboutProject: {
        description:
          "Boat Export USA is a platform that specializes in the sale and export of used boats and yachts from the United States to customers around the world. The project combines a user-friendly interface, functional solutions, and international logistics to create a full-fledged service that simplifies the process of purchasing and delivering vessels.",
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
          "In creating and maintaining the Boat Export USA platform, modern services and technologies were used to ensure efficiency, speed and ease of use for both the company and customers. When creating the design for the Boat Export USA platform, a variety of tools and services could be used to help at every stage of development - from concept to implementation.",
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
          "Boat Export USA is a platform that specializes in the sale and export of used boats and yachts from the United States to customers around the world. The project combines a user-friendly interface, functional solutions, and international logistics.",
        backgroundUrl: "/assets/dynamic/boat_export/bg_home_page.png",
      },
      smallProjectCards: [
        {
          title: "Home page",
          points: [
            {
              title: "Functions",
              description: [
                "Search bar and filters: Boat type (motorboats, fishing boats, trawlers, etc.). Price. Year of manufacture. Condition (new or used)",
                "Delivery calculator: The interactive widget is located in the middle of the page",
                "Interactive map: A world map with interactive markers that show ports of destination and main delivery routes",
              ],
            },
            {
              title: "Features",
              description: [
                "Responsiveness: Optimized for mobile devices, tablets, and desktops",
                "Modern marine palette: White, blue and gray tones are associated with the sea and trust",
                "Easy UX: Simple navigation, placing the main functions in a visible area for easy use",
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
          goal: "Expand the reach and allow customers from all over the world to find and buy boats.",
        },
        {
          sign: "2. Provide comprehensive catalog",
          goal: "Provide a huge catalog of boat options in different categories and price ranges for different customer needs.",
        },
        {
          sign: "3. Simplify purchase process",
          goal: "To make the process of searching, selecting, and buying a boat as intuitive and convenient as possible.",
        },
        {
          sign: "4. Ensure trust and reliability",
          goal: "Provide customers with confidence that the company conducts safe and reliable transactions and that the boats offered meet quality requirements and standards.",
        },
      ],
      startProject: {
        link: "/become-a-client",
      },
    },
    "truth-or-dare": {
      id: "truth-or-dare",
      slug: "truth-or-dare",
      hero: {
        title: "Truth or dare",
        description:
          '"Truth or Dare" is an exciting mobile game where players challenge each other by completing daring tasks or answering candid questions. Choose between truth to reveal your secrets or dare to perform fun and unpredictable tasks.',
        type: "Mobile App",
        backgroundUrl: "/assets/dynamic/truth_or_dare/bg_hero.png",
        mainImage: "/assets/dynamic/truth_or_dare/img_hero.png",
        fullLink: "/case-studies/truth-or-dare",
      },
      aboutProject: {
        description:
          'Our project aims to revive the popular game in a new digital format that allows players to enjoy it anytime, anywhere. With an interactive interface, customization options, and regular content updates, "Truth or Dare" will become an essential element of your gatherings, providing unforgettable emotions and strengthening friendly bonds.',
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
          "Truth or Dare is a mobile game for groups of friends or couples with different modes: classic, romantic, and party. The app automatically generates tasks and questions, allows you to add your own, customize the difficulty, and keep a score. The app is available on iOS and Android, works offline, and the premium version unlocks additional features without ads.",
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
          'Our project aims to revive the popular game in a new digital format that allows players to enjoy it anytime, anywhere. With an interactive interface, customization options, and regular content updates, "Truth or Dare" will become an essential element of your gatherings.',
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
                "Variety of modes: Classic, romantic, party/adult",
                "Setting the difficulty",
                "Customize the game by adding your own tasks and questions",
              ],
            },
            {
              title: "Features",
              description: [
                "The game's flexibility means that it can be adapted to any company or situation",
                "Interactivity - automatic alternation of tasks for a dynamic process",
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
          goal: "Provide users with a fun and engaging way to communicate, improving social interactions during parties, meetings, or online games with friends.",
        },
        {
          sign: "2. User engagement",
          goal: "Use interactive elements, levels, tasks, or rewards to increase user retention and engage them in regular play.",
        },
        {
          sign: "3. Personalizing the experience",
          goal: "Introduce the ability to add your own questions and tasks, as well as adapt the game to age groups and difficulty levels to meet the diverse needs of users.",
        },
      ],
      startProject: {
        link: "/become-a-client",
      },
    },
    digibdr: {
      id: "digibdr",
      slug: "digibdr",
      hero: {
        title: "DigiBdr",
        description:
          "is a company that specialises in automating the process of attracting qualified B2B customers using artificial intelligence. Their solutions are designed to increase the efficiency of sales teams by automating routine tasks such as lead generation, personalised outreach, and meeting management.",
        type: "Web App",
        backgroundUrl: "/assets/dynamic/digibdr/bg_hero.png",
        mainImage: "/assets/dynamic/digibdr/img_hero.png",
        fullLink: "/case-studies/digibdr",
      },
      aboutProject: {
        description:
          "AI-powered, fully autonomous digital workforce, specialized in the core BDR functions of identifying, engaging, and qualifying high-potential prospects for accelerated sales growth. DigiBDR offers innovative solutions for automating customer acquisition processes, enabling companies to increase the efficiency of sales teams and achieve significant business growth",
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
          "Autonomous AI agents: Artificial intelligence that works 24/7 to find, research, and qualify leads, ensuring that you get more meetings with qualified leads. Process automation: A full cycle of interaction with potential customers, from prospecting and research to personalising messages and setting up meetings. Integration with existing tools: DigiBDR systems integrate seamlessly with other sales and marketing tools, allowing you to seamlessly integrate them into your existing processes.",
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
          "AI-powered, fully autonomous digital workforce, specialized in the core BDR functions of identifying, engaging, and qualifying high-potential prospects for accelerated sales growth.",
        backgroundUrl: "/assets/dynamic/digibdr/bg_home_page.png",
      },
      smallProjectCards: [
        {
          title: "Home page",
          points: [
            {
              title: "Functions",
              description: [
                "Presentation of the product and its benefits",
                "Button to quickly record new audio (for Information on how the DigiBDR solution increases the efficiency of sales departments",
                "CTA buttons: 'Learn more', 'Submit a request' or 'Contact us'",
              ],
            },
            {
              title: "Features",
              description: [
                "Structured presentation with catchy headlines and interactive elements",
                "Video or animation to demonstrate how the product works",
                "Customer reviews in the format of sliders",
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
                "A detailed description of autonomous AI agents and their functions",
                "Information about the processes automated by DigiBDR (lead prospecting, personalisation, meeting organisation)",
                "Diagrams or infographics to explain how the system works",
              ],
            },
            {
              title: "Features",
              description: [
                "Tabs for different aspects of the product: 'How does it work?', 'Functions', 'Integration'",
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
          goal: "Create an intuitive platform to connect businesses with potential customers, optimizing the digital advertising and lead generation process.",
        },
        {
          sign: "2. Implement advanced tracking",
          goal: "Implement advanced features for tracking advertising campaigns, allowing businesses to easily measure and improve performance.",
        },
        {
          sign: "3. Provide scalable solutions",
          goal: "Provide scalable solutions to accommodate business growth and increasing user demands.",
        },
        {
          sign: "4. Design user-friendly interface",
          goal: "Designing a user-friendly interface that caters to both businesses and customers with varying levels of tech knowledge.",
        },
        {
          sign: "5. Ensure seamless integration",
          goal: "Ensuring seamless integration with third-party analytics tools while maintaining an easy-to-navigate dashboard.",
        },
        {
          sign: "6. Develop robust system",
          goal: "Developing a system that is both flexible and robust enough to handle large volumes of data and users without compromising performance.",
        },
      ],
      startProject: {
        link: "/become-a-client",
      },
    },
    "teledyne-isco-flowcalc": {
      id: "teledyne-isco-flowcalc",
      slug: "teledyne-isco-flowcalc",
      hero: {
        title: "TELEDYNE ISCO FlowCalc",
        description:
          "This app calculates flow rates in open channels and partially filled pipes, making it easy for water and wastewater professionals to convert measured data, such as head (and sometimes velocity), into accurate flow rates. Ideal for spot-checking existing systems or verifying the accuracy of newly installed flow meters, this tool streamlines flow assessment with precision and ease.",
        type: "Mobile App",
        backgroundUrl: "/assets/dynamic/teledyne_isco_flowcalc/bg_hero.png",
        mainImage: "/assets/dynamic/teledyne_isco_flowcalc/img_hero.png",
        fullLink: "/case-studies/teledyne-isco-flowcalc",
      },
      aboutProject: {
        description:
          "Our project aims to revive the popular game in a new digital format that allows players to enjoy it anytime, anywhere. With an interactive interface, customization options, and regular content updates, 'Truth or Dare' will become an essential element of your gatherings, providing unforgettable emotions and strengthening friendly bonds.",
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
          "For the development and design of the TELEDYNE ISCO FlowCalc application, we utilized a comprehensive suite of tools and services to ensure efficiency and quality: Development Tools: Frontend Development: React Native was employed to create a cross-platform interface, ensuring a seamless user experience on both iOS and Android devices. Backend Development: Node.js and Express.js provided a robust framework for API development, ensuring reliable data processing and communication between the app and server. Database Management: MongoDB was chosen for its scalability and flexibility, ideal for managing flow calculation data and user profiles. Design Services: Prototyping: Figma was used for wireframing and prototyping, allowing iterative improvements to the app's design. User Interface Design: Figma helped craft an intuitive and visually appealing UI tailored to user needs in flow analysis. User Testing: UsabilityHub was utilized to validate design decisions and gather user feedback during the design process.",
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
          "This app calculates flow rates in open channels and partially filled pipes, making it easy for water and wastewater professionals to convert measured data, such as head (and sometimes velocity), into accurate flow rates.",
        backgroundUrl: "/assets/dynamic/teledyne_isco_flowcalc/bg_home_page.png",
      },
      smallProjectCards: [
        {
          title: "Home screen",
          points: [
            {
              title: "Functions",
              description: [
                "Flow Rate Calculation",
                "Data Input & Configuration",
                "Unit Conversion",
                "Save & Export Results",
              ],
            },
            {
              title: "Features",
              description: [
                "Intuitive Dashboard",
                "Interactive Graphs",
                "Preloaded Templates",
                "Offline Functionality",
                "Integration with ISCO Devices",
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
              description: ["Flume Type Selection", "Flow Rate Calculation", "Water Level Data Input"],
            },
            {
              title: "Features",
              description: [
                "Preloaded Flume Templates",
                "Interactive Diagrams",
                "Result Export Options",
                "Integration with ISCO Devices",
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
          goal: "Provide users with a straightforward tool to calculate flow rates accurately without manual computations.",
        },
        {
          sign: "2. Enhance Usability",
          goal: "Offer an intuitive interface for quick data entry and results visualization.",
        },
        {
          sign: "3. Integrate Real-Time Data",
          goal: "Enable seamless connection with ISCO sensors for live flow measurement.",
        },
        {
          sign: "4. Support Industry Standards",
          goal: "Ensure compliance with standard flume and area velocity measurement practices.",
        },
      ],
      startProject: {
        link: "/become-a-client",
      },
    },
    "sxipher-ai": {
      id: "sxipher-ai",
      slug: "sxipher-ai",
      hero: {
        title: "Sxipher.ai",
        description:
          "Sxipher.ai provides cybersecurity solutions focused on advanced penetration testing and security assessments to uncover and address digital vulnerabilities. The platform helps organizations protect their infrastructures by delivering custom security evaluations and risk mitigation strategies.",
        type: "Web App",
        backgroundUrl: "/assets/dynamic/sxipher_ai/bg_hero.png",
        mainImage: "/assets/dynamic/sxipher_ai/img_hero.png",
        fullLink: "/case-studies/sxipher-ai",
      },
      aboutProject: {
        description:
          "At Sxipher.ai, we focused on creating a modern, interactive user interface that provides a seamless interaction with the platform's AI-powered security testing tools. Our role was to design and optimise the user interface to facilitate access to various penetration testing modules, visualise security reports, and integrate the platform's artificial intelligence capabilities, including Genesis AI, which is designed to improve penetration testing using machine learning.",
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
          "We were responsible for creating responsive and user-friendly layouts, integrating APIs for real-time data visualisation, and ensuring the platform's usability in line with Sxipher's mission to improve digital security through cutting-edge technology. Our work focused on providing users with an intuitive experience that helps them easily navigate complex cybersecurity solutions",
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
          "At Sxipher.ai, we focused on creating a modern, interactive user interface that provides a seamless interaction with the platform's AI-powered security testing tools.",
        backgroundUrl: "/assets/dynamic/sxipher_ai/bg_home_page.png",
      },
      smallProjectCards: [
        {
          title: "Home page",
          points: [
            {
              title: "Functions",
              description: [
                "Introduction to the company's services, such as penetration testing, security and ransomware protection",
                "Product demonstrations are also available",
              ],
            },
            {
              title: "Features",
              description: ["Professional cybersecurity interface", "Service overview and demonstrations"],
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
              description: ["A section with the latest articles and news about cybersecurity trends"],
            },
            {
              title: "Features",
              description: ["Content management system", "Cybersecurity news and insights"],
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
              description: ["A page showcasing partnerships and integrations with other companies such as Acronis"],
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
          goal: "Ensure a positive first impression for customers and partners. Demonstrate technical expertise in cybersecurity",
        },
        {
          sign: "2. Ease of use",
          goal: "Easy access to key services and information for customers. Ensure clear navigation and fast loading times",
        },
        {
          sign: "3. Information security",
          goal: "Protecting the website from cyber attacks, especially taking into account the specifics of the company's activities",
        },
        {
          sign: "4. Flexibility and scalability",
          goal: "The ability to expand functionality in the future (new services, integrations).",
        },
        {
          sign: "5. Customer engagement",
          goal: "Using a blog to promote the brand through high-quality content. Creating forms and CTAs (Call-to-Action) that encourage cooperation.",
        },
      ],
      startProject: {
        link: "/become-a-client",
      },
    },
    reachfi: {
      id: "reachfi",
      slug: "reachfi",
      hero: {
        title: "ReachFi.Ai",
        description:
          "ReachFi.ai is a platform designed to automate personal finance management. It helps users track expenses, debts, manage taxes, and optimize financial tasks, making it easier to stay organized and in control of their finances.",
        type: "Web App",
        backgroundUrl: "/assets/dynamic/reachfi/bg_hero.png",
        mainImage: "/assets/dynamic/reachfi/img_hero.png",
        fullLink: "/case-studies/reachfi",
      },
      aboutProject: {
        description:
          "The platform assists in tracking debts and expenses, creating tailored plans for debt repayment, and estimating timelines for becoming debt-free. It evaluates the impact of major financial decisions—such as purchasing a house or car, or changing jobs—on long-term goals, allowing users to adjust income, purchases, and expenses to see how each choice shapes their financial future.",
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
          "Development Tools: Frontend Development: Built using React.js to create an intuitive and responsive user interface. Ensured seamless navigation and real-time data visualization for financial projections and asset tracking. Backend Development: Developed with Node.js and Express.js for robust server-side operations. Enabled secure API integrations, financial calculations, and data management. Database Management: PostgreSQL was used to store and manage financial data, ensuring security, scalability, and data integrity. Optimized database queries for high performance with large datasets. Design Services: Created intuitive user flows and financial dashboards using Figma and Adobe XD. Focused on a clean, user-friendly design to improve the overall user experience.",
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
          "ReachFi.ai is a platform designed to automate personal finance management. It helps users track expenses, debts, manage taxes, and optimize financial tasks.",
        backgroundUrl: "/assets/dynamic/reachfi/bg_home_page.png",
      },
      smallProjectCards: [
        {
          title: "Home screen",
          points: [
            {
              title: "Functions",
              description: [
                "User Dashboard: Provides an overview of key financial metrics and insights",
                "Quick Access Tools: Easy navigation to core platform features for seamless financial management",
                "Data Synchronization: Real-time updates for accurate financial tracking",
              ],
            },
            {
              title: "Features",
              description: [
                "Financial Overview: Displays key financial summaries and performance indicators",
                "Interactive Charts: Visualize financial data with dynamic graphs and analytics",
                "Personalized Insights: Tailored recommendations based on user activity and financial goals",
                "Secure Login: Ensures user data protection with advanced authentication methods",
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
                "Expense Tracking: Log and categorize expenses effortlessly",
                "Budget Management: Set spending limits and monitor real-time progress",
                "Expense Analysis: Gain insights into spending patterns and trends",
              ],
            },
            {
              title: "Features",
              description: [
                "Categorized Expenses: Organize spending into predefined or custom categories",
                "Visual Reports: Interactive charts for clear expense breakdowns",
                "Real-Time Updates: Immediate reflection of added or edited expenses",
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
          goal: "Provide users with an intuitive way to track and manage expenses, contributions, and savings.",
        },
        {
          sign: "2. Enhance Financial Transparency",
          goal: "Ensure clear visibility of financial activity and goals.",
        },
        {
          sign: "3. Promote User Engagement",
          goal: "Encourage consistent financial contributions through reminders and progress tracking.",
        },
      ],
      startProject: {
        link: "/become-a-client",
      },
    },
    chillbill: {
      id: "chillbill",
      slug: "chillbill",
      hero: {
        title: "Chill Bill",
        description:
          "Chill Bill is a mobile app designed to simplify the management of restaurant loyalty cards. Users can collect and store their cards digitally, and the app provides real-time updates on discounts from participating restaurants, keeping users informed about savings opportunities.",
        type: "Mobile App",
        backgroundUrl: "/assets/dynamic/chillbill/bg_hero.png",
        mainImage: "/assets/dynamic/chillbill/img_hero.png",
        fullLink: "/case-studies/chillbill",
      },
      aboutProject: {
        description:
          "ChillBill is a mobile app designed to enhance the restaurant experience by providing users with exclusive offers and personalized rewards. After registering, users receive special discounts and can earn bonus points by inviting friends. These points can be redeemed for discounts at partner restaurants. The app allows users to explore detailed restaurant profiles, browse menus, make reservations, and discover unique loyalty programs tailored to each restaurant. ChillBill simplifies the journey to lunch, making it more profitable and convenient for each user.",
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
        link: "/become-a-client",
      },
    },
  },
};

export default data;
