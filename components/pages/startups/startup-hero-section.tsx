"use client";
import { Button } from "@/components/ui/button";
import heroBanner from "@/public/assets/hero-design.png";
import MenuBar from "@/components/modules/menu-bar";
import GoButton from "@/components/ui/go-button";
import Logo from "@/components/ui/logo";

export default function HeroSection() {
  const handleScrollToContactUs = () => {
    const contactUsSection = document.getElementById("contact-us-home");
    if (contactUsSection) {
      contactUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToEstimateProject = () => {
    const estimateProjectSection = document.getElementById("estimate-project-home");
    if (estimateProjectSection) {
      estimateProjectSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero-bg flex min-h-screen w-full flex-col justify-between bg-cover bg-center px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-20 lg:py-12">
      {/* Header Navigation */}
      <header className="flex flex-row items-center justify-between">
        <Logo className="h-[5vh] origin-top-left scale-[-10%] rotate-180 pt-20" />
        <div className="flex flex-1 flex-row items-center justify-end md:justify-center">
          <MenuBar />
        </div>
      </header>

      {/* Hero Content */}
      <div className="flex flex-1 flex-col items-center justify-center px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex w-full max-w-[95%] flex-col items-center justify-center gap-4 text-center sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] xl:max-w-[75%]">
          <h1 className="brig custom-font-bricolage text-2xl leading-tight font-bold tracking-tight sm:text-3xl sm:leading-snug md:text-4xl md:leading-normal lg:text-5xl lg:leading-relaxed xl:text-6xl xl:leading-loose">
            Grow your idea with software development for startups
          </h1>
          <p className="text-sm leading-relaxed font-normal sm:text-base md:text-lg lg:text-xl">
            We know what it takes to grow a product and make it thrive!
          </p>
          <p className="text-xs leading-relaxed font-normal sm:text-sm md:text-base lg:text-lg">
            With LogicCraft, you don&apos;t need to hire developers on your own, have tech know-how, or guess whether
            your project will work out or not. We&apos;ll handle all things tech while you do business.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="flex flex-col items-center justify-center gap-4 px-4 sm:flex-row sm:gap-12 md:gap-16 lg:gap-20">
        <GoButton
          text="Click here to get in touch with us"
          onClick={handleScrollToContactUs}
          className="w-full max-w-sm sm:w-auto sm:max-w-md md:max-w-lg lg:max-w-xl"
        />
        <GoButton
          text="Estimate my project"
          onClick={handleScrollToEstimateProject}
          className="w-full max-w-sm sm:w-auto sm:max-w-md md:max-w-lg lg:max-w-xl"
        />
      </div>
    </div>
  );
}
