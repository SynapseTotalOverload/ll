"use client";
import BusinessHeroSection from "@/components/pages/our-team/our-team-hero";
import Footer from "@/components/modules/footer";
import BusinessWhyChooseUs from "@/components/pages/our-team/our-team-count";
import AreYouReady from "@/components/pages/our-team/our-team-are-you-ready";
import OurTeamCount from "@/components/pages/our-team/our-team-count";
import OurTeamCards from "@/components/pages/our-team/our-team-cards";

export default function OurTeamPageClient() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <BusinessHeroSection />
      <div className="container flex w-full flex-col gap-16 px-4 py-8 sm:gap-20 sm:px-6 sm:py-12 md:gap-24 md:px-8 md:py-16 lg:gap-32 lg:px-12 lg:py-20 xl:gap-40 xl:px-16 xl:py-24">
        <OurTeamCount />
        <OurTeamCards />
        <AreYouReady />
      </div>
      <Footer />
    </div>
  );
}
