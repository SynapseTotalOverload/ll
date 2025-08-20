"use client";
import DynamicHeroSection from "@/components/pages/dynamic/dynamic-hero-section";
import Footer from "@/components/modules/footer";
import Product from "@/public/assets/placeholder.png";
import Test from "@/public/assets/dynamic/com-lands/main-bg.png";
import Test2 from "@/public/assets/dynamic/com-lands/about-bg.png";
import DynamicAboutProject from "@/components/pages/dynamic/dynamic-about-project";
import DynamicServices from "@/components/pages/dynamic/dynamic-services";
import DynamicStats from "@/components/pages/dynamic/dynamic-stats";
interface DynamicHeroProps {
  title: string;
  description: string;
  type: string;
  backgroundUrl: string;
  mainImage: string;
  fullLink: string;
}
interface DynamicAboutProjectProps {
  description: string;
  image: string;
  backgroundUrl: string;
}
interface DynamicStatsProps {
  stats: string[];
}

export default function DynamicMain() {
  return (
    <div className="flex flex-col items-center">
      <DynamicHeroSection
        title="Truth or Dare"
        description="Community Lands is a platform offering affordable land for purchase across the United States, catering to individuals interested in nature, sustainability, and off-grid living. The site provides a marketplace for diverse land options, resources for prospective landowners, and a community space to connect with others passionate about land ownership and outdoor lifestyles."
        type="Mobile App"
        backgroundUrl={Test.src}
        mainImage={Product.src}
        fullLink="/case-studies/truth-or-dare"
      />

      {/* ===== MAIN CONTENT SECTIONS ===== */}
      <div className="container flex flex-col gap-[32px] pt-[120px]">
        <DynamicAboutProject
          description="Community Lands is a platform offering affordable land for purchase across the United States, catering to individuals interested in nature, sustainability, and off-grid living. The site provides a marketplace for diverse land options, resources for prospective landowners, and a community space to connect with others passionate about land ownership and outdoor lifestyles."
          image={Test2.src}
          backgroundUrl={Test.src}
        />
        <DynamicServices
          services={[
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
          ]}
          description="We Used Svelte On The Frontend To Create Adaptable Interfaces With Optimized UX, Adding Features Like Dialogue Boxes For Agent Interaction And Active View Indicators On Object Pages. We Updated Filter Designs And Implemented Status Indicators Like 'reserved.' On The Backend, We Worked With FastAPI And SQLAlchemy For Reliable CRUD Operations, Developed Functionality For Offers, And Integrated Google Authentication Via Keycloak. Additionally, We Enhanced Email Formatting, Added Attachments, Improved Search Logic, And Set Up Data Filtering For A Smoother User Experience. Additionally, we enhanced email formatting, added attachments, improved search logic, and set up data filtering for a smoother user experience."
        />
        <DynamicStats
          stats={[
            { title: "Screens", value: "100+" },
            { title: "Develomplent", value: "220h" },
            { title: "Design", value: "180h" },
          ]}
        />
      </div>

      <Footer />
    </div>
  );
}
