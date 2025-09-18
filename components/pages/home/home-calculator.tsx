"use client";

import SignTitle from "@/components/modules/sign-title";
import { NamedSwitcher } from "@/components/ui/named-switcher";
import { useEffect, useState } from "react";
import WebIcon from "@/public/assets/svg/monitor.svg";
import MobileIcon from "@/public/assets/svg/mobile.svg";
import CalculatorCard from "@/components/modules/calculator-card";
import { Accordion, AccordionTrigger, AccordionContent, AccordionItem } from "@/components/ui/calc-accordion";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import GoButton from "@/components/ui/go-button";

const accordionItems = [
  {
    title: "App field",
    cards: [
      {
        cardTitle: "E-Commerce",
        cardIcon: <WebIcon />,
      },
      {
        cardTitle: "Logistics",
        cardIcon: <MobileIcon />,
      },
      {
        cardTitle: "HealthCare",
        cardIcon: <MobileIcon />,
      },
      {
        cardTitle: "Education",
        cardIcon: <MobileIcon />,
      },
      {
        cardTitle: "Custom",
        cardIcon: <MobileIcon />,
      },
    ],
  },
  {
    title: "Users & Accounts",
    cards: [
      {
        cardTitle: "User Registration",
        cardIcon: <WebIcon />,
      },
      {
        cardTitle: "Social Login",
        cardIcon: <MobileIcon />,
      },
      {
        cardTitle: "User Profiles",
        cardIcon: <MobileIcon />,
      },
      {
        cardTitle: "Password Reset",
        cardIcon: <MobileIcon />,
      },
    ],
  },
  {
    title: "App content",
    cards: [
      {
        cardTitle: "Content Management",
        cardIcon: <WebIcon />,
      },
      {
        cardTitle: "Media Upload",
        cardIcon: <MobileIcon />,
      },
      {
        cardTitle: "Search & Filter",
        cardIcon: <MobileIcon />,
      },
      {
        cardTitle: "Content Categorization",
        cardIcon: <MobileIcon />,
      },
    ],
  },
  {
    title: "Geolocation",
    cards: [
      {
        cardTitle: "Location Services",
        cardIcon: <WebIcon />,
      },
      {
        cardTitle: "Maps Integration",
        cardIcon: <MobileIcon />,
      },
      {
        cardTitle: "Geofencing",
        cardIcon: <MobileIcon />,
      },
      {
        cardTitle: "Location Tracking",
        cardIcon: <MobileIcon />,
      },
    ],
  },
  {
    title: "Scheduling / Booking",
    cards: [
      {
        cardTitle: "Calendar Integration",
        cardIcon: <WebIcon />,
      },
      {
        cardTitle: "Booking System",
        cardIcon: <MobileIcon />,
      },
      {
        cardTitle: "Appointment Management",
        cardIcon: <MobileIcon />,
      },
      {
        cardTitle: "Time Slots",
        cardIcon: <MobileIcon />,
      },
    ],
  },
  {
    title: "User interactions",
    cards: [
      {
        cardTitle: "Chat & Messaging",
        cardIcon: <WebIcon />,
      },
      {
        cardTitle: "Push Notifications",
        cardIcon: <MobileIcon />,
      },
      {
        cardTitle: "In-App Communication",
        cardIcon: <MobileIcon />,
      },
      {
        cardTitle: "User Feedback",
        cardIcon: <MobileIcon />,
      },
    ],
  },
  {
    title: "eCommerce",
    cards: [
      {
        cardTitle: "Product Catalog",
        cardIcon: <WebIcon />,
      },
      {
        cardTitle: "Shopping Cart",
        cardIcon: <MobileIcon />,
      },
      {
        cardTitle: "Payment Processing",
        cardIcon: <MobileIcon />,
      },
      {
        cardTitle: "Order Management",
        cardIcon: <MobileIcon />,
      },
    ],
  },
  {
    title: "Admin, Feedback & Analytics",
    cards: [
      {
        cardTitle: "Admin Dashboard",
        cardIcon: <WebIcon />,
      },
      {
        cardTitle: "Analytics Dashboard",
        cardIcon: <MobileIcon />,
      },
      {
        cardTitle: "User Analytics",
        cardIcon: <MobileIcon />,
      },
      {
        cardTitle: "Performance Monitoring",
        cardIcon: <MobileIcon />,
      },
    ],
  },
  {
    title: "External APIs and Integrations",
    cards: [
      {
        cardTitle: "Third-party APIs",
        cardIcon: <WebIcon />,
      },
      {
        cardTitle: "Social Media Integration",
        cardIcon: <MobileIcon />,
      },
      {
        cardTitle: "Payment Gateways",
        cardIcon: <MobileIcon />,
      },
      {
        cardTitle: "Cloud Services",
        cardIcon: <MobileIcon />,
      },
    ],
  },
  {
    title: "Security",
    cards: [
      {
        cardTitle: "Authentication",
        cardIcon: <WebIcon />,
      },
      {
        cardTitle: "Data Encryption",
        cardIcon: <MobileIcon />,
      },
      {
        cardTitle: "Security Monitoring",
        cardIcon: <MobileIcon />,
      },
      {
        cardTitle: "Compliance",
        cardIcon: <MobileIcon />,
      },
    ],
  },
];

export default function HomeCalculator() {
  const [activeSwitcher, setActiveSwitcher] = useState("Web");
  const [activeCard, setActiveCard] = useState<string>("MVP");
  const [activeAccordion, setActiveAccordion] = useState<
    {
      title: string;
      active: string | null;
    }[]
  >([]);

  useEffect(() => {
    setActiveAccordion(accordionItems.map((item) => ({ title: item.title, active: null })));
  }, []);

  return (
    <div className="flex w-full flex-col gap-6 px-4 sm:gap-7 sm:px-8 md:gap-8 md:px-12 lg:px-20">
      <SignTitle>
        <SignTitle.Title>Estimate my Project</SignTitle.Title>
        <SignTitle.Description>
          Select the features of your app that you want to implement to receive ballpark quoting.
        </SignTitle.Description>
        <SignTitle.Separator />
      </SignTitle>

      <div className="flex flex-row items-center justify-center">
        <NamedSwitcher
          options={["Web", "Mobile"]}
          active={activeSwitcher}
          onChange={(option) => setActiveSwitcher(option)}
          remderOptions={(option) => (
            <span className="inline-flex min-w-[200px] items-center justify-center gap-2">
              {" "}
              {getIconByName(option)} {option}
            </span>
          )}
        />
      </div>
      <div className="grid grid-cols-[1.6fr_1fr] gap-8">
        <div>
          <div className="flex flex-col gap-2">
            <span className="text-plastic text-xl font-bold uppercase">How big is your app</span>
            <div className="grid grid-cols-3 gap-x-8 gap-y-4">
              <CalculatorCard
                onClick={() => setActiveCard("MVP")}
                icon={<WebIcon />}
                title="MVP"
                active={activeCard === "MVP"}
              />
              <CalculatorCard
                onClick={() => setActiveCard("Basic")}
                icon={<MobileIcon />}
                title="Basic"
                active={activeCard === "Basic"}
              />
              <CalculatorCard
                onClick={() => setActiveCard("Refined")}
                icon={<MobileIcon />}
                title="Refined"
                active={activeCard === "Refined"}
              />
            </div>
            <Accordion type="multiple">
              {accordionItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent className="grid grid-cols-3 gap-x-8 gap-y-4">
                    {item.cards.map((card) => (
                      <CalculatorCard
                        active={activeAccordion[index]?.active === card.cardTitle}
                        key={card.cardTitle}
                        icon={card.cardIcon}
                        title={card.cardTitle}
                        onClick={() => {
                          console.log("clicked");
                          setActiveAccordion((prev) =>
                            prev.map((item, i) => (i === index ? { ...item, active: card.cardTitle } : item)),
                          );
                        }}
                      />
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        <div className="flex flex-col">
          <BackgroundGradient rounded="rounded-[20px]">
            <div className="bg-opacity-100-black/90 bricolage flex h-full flex-1 flex-col gap-3 rounded-[20px] p-6 font-[700]">
              <div className="bg-opacity-100-black/95 border-charcole flex flex-col justify-between gap-3 rounded-[20px] border p-4">
                <span className="flex items-center gap-2 text-lg">
                  {" "}
                  <WebIcon /> Web
                </span>
                <span className="text-2xl">$1000</span>
              </div>
              <div className="bg-opacity-100-black/95 border-charcole flex flex-col justify-between gap-3 rounded-[20px] border p-4">
                <span className="flex items-center gap-2 text-lg">
                  {" "}
                  <MobileIcon /> Mobile
                </span>
                <span className="text-2xl">$1000</span>
              </div>
              <div className="bricolage grid grid-cols-2 gap-3 font-bold text-white">
                <div className="bg-opacity-100-black/95 border-charcole flex flex-col justify-between gap-3 rounded-[20px] border p-4">
                  <span className="text-lg">Backend</span>
                  <span className="text-2xl">$1000</span>
                </div>
                <div className="bg-opacity-100-black/95 border-charcole flex flex-col justify-between gap-3 rounded-[20px] border p-4">
                  <span className="text-lg">Design</span>
                  <span className="text-2xl">$1000</span>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-2">
                <span className="text-xl">Total Cost</span>
                <span className="text-[42px]">$6000</span>
              </div>
              <GoButton className="w-full" text="Send me a free detailed estimation" onClick={() => {}} />
            </div>
          </BackgroundGradient>
        </div>
      </div>
    </div>
  );
}

export function getIconByName(name: string) {
  switch (name) {
    case "Web":
      return <WebIcon />;
    case "Mobile":
      return <MobileIcon />;

    default:
      return null;
  }
}
