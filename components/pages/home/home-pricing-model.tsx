"use client";
import { useState } from "react";
import SignTitle from "@/components/modules/sign-title";
import { NamedSwitcher } from "@/components/ui/named-switcher";
import { Separator } from "@/components/ui/separator";
import InfoCard from "@/components/modules/info-card";
import GoButton from "@/components/ui/go-button";
import { CheckIcon } from "lucide-react";

interface PricingTier {
  title: string;
  subtitle: string;
  description: string;
  price: string;
  features: string[];
}

const DEDICATED_TEAMS_TIERS: PricingTier[] = [
  {
    title: "Starter Team",
    subtitle: "2-3 developers",
    description:
      "Perfect for small projects and MVPs. Ideal for startups launching their first product with a focused team.",
    price: "$12,000",
    features: [
      "2-3 dedicated developers",
      "Project manager included",
      "Weekly progress reports",
      "Agile methodology",
      "Code reviews & quality assurance",
      "Monthly team meetings",
    ],
  },
  {
    title: "Professional Team",
    subtitle: "4-6 developers",
    description:
      "Best for growing businesses. Comprehensive team with full-stack capabilities for complex projects and scaling.",
    price: "$25,000",
    features: [
      "4-6 dedicated developers",
      "Senior tech lead included",
      "Daily standups & sprint planning",
      "DevOps & CI/CD pipeline",
      "Performance optimization",
      "Priority support & maintenance",
    ],
  },
  {
    title: "Enterprise Team",
    subtitle: "7+ developers",
    description:
      "For large-scale projects and established companies. Full-service team with specialized expertise across all domains.",
    price: "$45,000",
    features: [
      "7+ dedicated developers",
      "Architecture & tech consulting",
      "24/7 support & monitoring",
      "Enterprise-grade security",
      "Scalable infrastructure",
      "Dedicated account manager",
    ],
  },
];

const ON_DEMAND_DEVELOPERS_TIERS: PricingTier[] = [
  {
    title: "QA Specialists",
    subtitle: "Quality Assurance",
    description:
      "Dedicated quality assurance professionals. Manual and automated testing, bug tracking, and quality control.",
    price: "$25",
    features: [
      "Manual & automated testing",
      "Test planning & execution",
      "Bug tracking & reporting",
      "Quality assurance processes",
      "Regression testing",
      "Test documentation",
    ],
  },
  {
    title: "Developers & Designers",
    subtitle: "Full-stack, Backend, Frontend, UX/UI",
    description:
      "Experienced professionals for development and design. Full-stack, backend, frontend developers and UX/UI designers available.",
    price: "$30",
    features: [
      "Full-stack development",
      "Backend & API development",
      "Frontend & UI implementation",
      "UX/UI design & prototyping",
      "Code implementation & testing",
      "Technical documentation",
    ],
  },
  {
    title: "Lead Developers",
    subtitle: "Expert level",
    description:
      "Senior technical leaders with extensive experience. Perfect for architecture design, technical strategy, and team leadership.",
    price: "$35",
    features: [
      "System architecture design",
      "Technical strategy & planning",
      "Team leadership & mentoring",
      "Code quality oversight",
      "Performance optimization",
      "Executive-level consultation",
    ],
  },
];

export default function PricingModel() {
  const [activeSwitcher, setActiveSwitcher] = useState("Dedicated teams");

  const pricingTiers = activeSwitcher === "Dedicated teams" ? DEDICATED_TEAMS_TIERS : ON_DEMAND_DEVELOPERS_TIERS;

  return (
    <div className="flex w-full flex-col gap-6 px-4 sm:gap-7 sm:px-8 md:gap-8 md:px-12 lg:px-20">
      <SignTitle>
        <SignTitle.Title>Choose your pricing model</SignTitle.Title>
        <SignTitle.Description className="capitalize">
          you need a highly committed team that can build your MVP from scratch or support an existing product with the
          same level of dedication as your in-house employees.
        </SignTitle.Description>
        <SignTitle.Separator />
      </SignTitle>

      <div className="flex flex-row items-center justify-center">
        <NamedSwitcher
          options={["Dedicated teams", "On-Demand Developers"]}
          active={activeSwitcher}
          onChange={(option) => setActiveSwitcher(option)}
        />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-8">
        {pricingTiers.map((tier, index) => (
          <InfoCard key={index} className={index === 1 ? "bg-opacity-20-black border-charcole border" : ""}>
            <div className="flex flex-col gap-2">
              <InfoCard.Title className="bricolage text-[20px] leading-[120%] font-[700] tracking-[-2px] normal-case sm:text-[24px] md:text-[28px] lg:text-[32px]">
                {tier.title}{" "}
                <span className="text-night-blue text-[16px] font-[600] sm:text-[18px] md:text-[20px] lg:text-[24px]">
                  ({tier.subtitle})
                </span>
              </InfoCard.Title>
              <span className="text-plastic text-[14px]">{tier.description}</span>
              <Separator className="my-4" />
            </div>
            <div>
              <span className="bricolage text-[16px] font-[600] sm:text-[18px] md:text-[19px] lg:text-[20px]">
                What you&apos;ll get:
              </span>
              <ul className="mt-4 flex flex-col gap-3">
                {tier.features.map((feature, featureIndex) => (
                  <li className="flex flex-row items-center gap-2" key={featureIndex}>
                    <CheckIcon className="text-night-blue size-4" />
                    <span className="align-middle text-[14px] leading-[100%] font-medium tracking-[0%]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <span className="bricolage p-4 text-[32px] font-[700] text-white sm:p-5 sm:text-[40px] md:p-6 md:text-[45px] lg:text-[50px]">
              {tier.price}
              {activeSwitcher === "Dedicated teams" ? (
                <span className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]">/month</span>
              ) : (
                <span className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]">/hour</span>
              )}
            </span>
            <div className="flex flex-row items-center justify-center">
              <GoButton
                className="w-full"
                text="Click here to get in touch with us"
                onClick={() => {
                  window.location.href = "/contact-us";
                }}
              />
            </div>
          </InfoCard>
        ))}
      </div>
    </div>
  );
}
