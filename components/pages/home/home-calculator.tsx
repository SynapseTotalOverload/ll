"use client";

import SignTitle from "@/components/modules/sign-title";
import { NamedSwitcher } from "@/components/ui/named-switcher";
import { useEffect, useState, useMemo } from "react";
import WebIcon from "@/public/assets/svg/monitor.svg";
import MobileIcon from "@/public/assets/svg/mobile.svg";
import CalculatorCard from "@/components/modules/calculator-card";
import { Accordion, AccordionTrigger, AccordionContent, AccordionItem } from "@/components/ui/calc-accordion";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import GoButton from "@/components/ui/go-button";
import {
  ShoppingCart,
  Truck,
  Heart,
  GraduationCap,
  Settings,
  UserPlus,
  LogIn,
  User,
  Key,
  FileText,
  Upload,
  Search,
  MapPin,
  Map,
  Shield,
  Navigation,
  Calendar,
  BookOpen,
  Clock,
  MessageSquare,
  Bell,
  Mail,
  MessageCircle,
  Package,
  ShoppingBag,
  CreditCard,
  ClipboardList,
  LayoutDashboard,
  BarChart,
  Users,
  Activity,
  Webhook,
  Share2,
  Wallet,
  Cloud,
  Lock,
  ShieldCheck,
  Eye,
  FileCheck,
} from "lucide-react";

/**
 * Feature Definition Interface
 * Defines the structure for each feature with cost and time estimates
 */
interface FeatureDefinition {
  title: string;
  icon: React.ReactNode; // Icon component from lucide-react
  cost: {
    web: number; // Cost in USD for web platform
    mobile: number; // Cost in USD for mobile platform
    backend: number; // Backend cost component
    design: number; // Design cost component
  };
  time: {
    web: number; // Time in days for web platform
    mobile: number; // Time in days for mobile platform
    backend: number; // Backend time component
    design: number; // Design time component
  };
}

/**
 * App Size Configuration
 * Base costs and timelines for different app complexity levels
 */
interface AppSizeConfig {
  cost: {
    web: number;
    mobile: number;
    backend: number;
    design: number;
  };
  time: {
    web: number;
    mobile: number;
    backend: number;
    design: number;
  };
}

const APP_SIZE_CONFIGS: Record<string, AppSizeConfig> = {
  MVP: {
    cost: { web: 5000, mobile: 8000, backend: 10000, design: 5000 },
    time: { web: 30, mobile: 45, backend: 60, design: 20 },
  },
  Basic: {
    cost: { web: 8000, mobile: 12000, backend: 15000, design: 8000 },
    time: { web: 45, mobile: 60, backend: 90, design: 30 },
  },
  Refined: {
    cost: { web: 15000, mobile: 20000, backend: 25000, design: 15000 },
    time: { web: 90, mobile: 120, backend: 150, design: 60 },
  },
};

/**
 * Feature Definitions JSON
 * Centralized data structure containing all available features with costs and timelines
 * To add or modify features, simply update this JSON structure
 * Categories have varying numbers of features (3, 4, 5, 6) for visual variety
 */
const FEATURE_DEFINITIONS: Record<string, FeatureDefinition[]> = {
  "App field": [
    {
      title: "E-Commerce",
      icon: <ShoppingCart className="size-6" />,
      cost: { web: 8000, mobile: 10000, backend: 12000, design: 5000 },
      time: { web: 45, mobile: 60, backend: 75, design: 30 },
    },
    {
      title: "Logistics",
      icon: <Truck className="size-6" />,
      cost: { web: 7000, mobile: 12000, backend: 10000, design: 4000 },
      time: { web: 40, mobile: 70, backend: 65, design: 25 },
    },
    {
      title: "HealthCare",
      icon: <Heart className="size-6" />,
      cost: { web: 10000, mobile: 15000, backend: 15000, design: 6000 },
      time: { web: 50, mobile: 80, backend: 90, design: 35 },
    },
    {
      title: "Education",
      icon: <GraduationCap className="size-6" />,
      cost: { web: 6000, mobile: 9000, backend: 8000, design: 4000 },
      time: { web: 35, mobile: 55, backend: 50, design: 25 },
    },
    {
      title: "Custom",
      icon: <Settings className="size-6" />,
      cost: { web: 5000, mobile: 8000, backend: 7000, design: 3500 },
      time: { web: 30, mobile: 45, backend: 45, design: 20 },
    },
  ],
  "Users & Accounts": [
    {
      title: "User Registration",
      icon: <UserPlus className="size-6" />,
      cost: { web: 2000, mobile: 3000, backend: 3000, design: 1000 },
      time: { web: 10, mobile: 15, backend: 15, design: 5 },
    },
    {
      title: "Social Login",
      icon: <LogIn className="size-6" />,
      cost: { web: 1500, mobile: 2500, backend: 2000, design: 800 },
      time: { web: 8, mobile: 12, backend: 10, design: 4 },
    },
    {
      title: "User Profiles",
      icon: <User className="size-6" />,
      cost: { web: 2500, mobile: 3500, backend: 2500, design: 1200 },
      time: { web: 12, mobile: 18, backend: 15, design: 6 },
    },
    {
      title: "Password Reset",
      icon: <Key className="size-6" />,
      cost: { web: 1000, mobile: 1500, backend: 1500, design: 500 },
      time: { web: 5, mobile: 8, backend: 8, design: 3 },
    },
    {
      title: "Two-Factor Auth",
      icon: <Shield className="size-6" />,
      cost: { web: 3000, mobile: 4000, backend: 3500, design: 1500 },
      time: { web: 15, mobile: 20, backend: 18, design: 8 },
    },
  ],
  "App content": [
    {
      title: "Content Management",
      icon: <FileText className="size-6" />,
      cost: { web: 4000, mobile: 5000, backend: 5000, design: 2000 },
      time: { web: 20, mobile: 25, backend: 25, design: 10 },
    },
    {
      title: "Media Upload",
      icon: <Upload className="size-6" />,
      cost: { web: 2500, mobile: 3500, backend: 3000, design: 1000 },
      time: { web: 12, mobile: 18, backend: 15, design: 5 },
    },
    {
      title: "Search & Filter",
      icon: <Search className="size-6" />,
      cost: { web: 3000, mobile: 4000, backend: 3500, design: 1500 },
      time: { web: 15, mobile: 20, backend: 18, design: 8 },
    },
  ],
  Geolocation: [
    {
      title: "Location Services",
      icon: <MapPin className="size-6" />,
      cost: { web: 3000, mobile: 5000, backend: 3500, design: 1500 },
      time: { web: 15, mobile: 25, backend: 18, design: 8 },
    },
    {
      title: "Maps Integration",
      icon: <Map className="size-6" />,
      cost: { web: 3500, mobile: 6000, backend: 4000, design: 2000 },
      time: { web: 18, mobile: 30, backend: 20, design: 10 },
    },
    {
      title: "Geofencing",
      icon: <Shield className="size-6" />,
      cost: { web: 4000, mobile: 7000, backend: 5000, design: 2000 },
      time: { web: 20, mobile: 35, backend: 25, design: 10 },
    },
    {
      title: "Location Tracking",
      icon: <Navigation className="size-6" />,
      cost: { web: 3000, mobile: 5500, backend: 4000, design: 1800 },
      time: { web: 15, mobile: 28, backend: 20, design: 9 },
    },
    {
      title: "Route Optimization",
      icon: <Map className="size-6" />,
      cost: { web: 4500, mobile: 7000, backend: 5500, design: 2200 },
      time: { web: 22, mobile: 35, backend: 28, design: 11 },
    },
    {
      title: "Delivery Tracking",
      icon: <Truck className="size-6" />,
      cost: { web: 3500, mobile: 6000, backend: 4500, design: 1800 },
      time: { web: 18, mobile: 30, backend: 22, design: 9 },
    },
  ],
  "Scheduling / Booking": [
    {
      title: "Calendar Integration",
      icon: <Calendar className="size-6" />,
      cost: { web: 3500, mobile: 5000, backend: 4000, design: 1800 },
      time: { web: 18, mobile: 25, backend: 20, design: 9 },
    },
    {
      title: "Booking System",
      icon: <BookOpen className="size-6" />,
      cost: { web: 5000, mobile: 7000, backend: 6000, design: 2500 },
      time: { web: 25, mobile: 35, backend: 30, design: 12 },
    },
    {
      title: "Appointment Management",
      icon: <Clock className="size-6" />,
      cost: { web: 4000, mobile: 6000, backend: 5000, design: 2200 },
      time: { web: 20, mobile: 30, backend: 25, design: 11 },
    },
  ],
  "User interactions": [
    {
      title: "Chat & Messaging",
      icon: <MessageSquare className="size-6" />,
      cost: { web: 6000, mobile: 8000, backend: 7000, design: 3000 },
      time: { web: 30, mobile: 40, backend: 35, design: 15 },
    },
    {
      title: "Push Notifications",
      icon: <Bell className="size-6" />,
      cost: { web: 2000, mobile: 3500, backend: 2500, design: 1000 },
      time: { web: 10, mobile: 18, backend: 12, design: 5 },
    },
    {
      title: "In-App Communication",
      icon: <Mail className="size-6" />,
      cost: { web: 4000, mobile: 6000, backend: 5000, design: 2000 },
      time: { web: 20, mobile: 30, backend: 25, design: 10 },
    },
    {
      title: "User Feedback",
      icon: <MessageCircle className="size-6" />,
      cost: { web: 1500, mobile: 2500, backend: 2000, design: 800 },
      time: { web: 8, mobile: 12, backend: 10, design: 4 },
    },
  ],
  eCommerce: [
    {
      title: "Product Catalog",
      icon: <Package className="size-6" />,
      cost: { web: 3000, mobile: 4000, backend: 3500, design: 1800 },
      time: { web: 15, mobile: 20, backend: 18, design: 9 },
    },
    {
      title: "Shopping Cart",
      icon: <ShoppingBag className="size-6" />,
      cost: { web: 4000, mobile: 5500, backend: 4500, design: 2000 },
      time: { web: 20, mobile: 28, backend: 22, design: 10 },
    },
    {
      title: "Payment Processing",
      icon: <CreditCard className="size-6" />,
      cost: { web: 5000, mobile: 7000, backend: 6000, design: 2500 },
      time: { web: 25, mobile: 35, backend: 30, design: 12 },
    },
    {
      title: "Order Management",
      icon: <ClipboardList className="size-6" />,
      cost: { web: 4500, mobile: 6000, backend: 5500, design: 2200 },
      time: { web: 22, mobile: 30, backend: 28, design: 11 },
    },
    {
      title: "Inventory System",
      icon: <Package className="size-6" />,
      cost: { web: 3500, mobile: 5000, backend: 4500, design: 1800 },
      time: { web: 18, mobile: 25, backend: 22, design: 9 },
    },
  ],
  "Admin, Feedback & Analytics": [
    {
      title: "Admin Dashboard",
      icon: <LayoutDashboard className="size-6" />,
      cost: { web: 6000, mobile: 8000, backend: 7000, design: 3500 },
      time: { web: 30, mobile: 40, backend: 35, design: 18 },
    },
    {
      title: "Analytics Dashboard",
      icon: <BarChart className="size-6" />,
      cost: { web: 5000, mobile: 7000, backend: 6000, design: 3000 },
      time: { web: 25, mobile: 35, backend: 30, design: 15 },
    },
    {
      title: "User Analytics",
      icon: <Users className="size-6" />,
      cost: { web: 4000, mobile: 5500, backend: 5000, design: 2500 },
      time: { web: 20, mobile: 28, backend: 25, design: 12 },
    },
  ],
  "External APIs and Integrations": [
    {
      title: "Third-party APIs",
      icon: <Webhook className="size-6" />,
      cost: { web: 3000, mobile: 4000, backend: 4000, design: 1000 },
      time: { web: 15, mobile: 20, backend: 20, design: 5 },
    },
    {
      title: "Social Media Integration",
      icon: <Share2 className="size-6" />,
      cost: { web: 2500, mobile: 4000, backend: 3000, design: 1500 },
      time: { web: 12, mobile: 20, backend: 15, design: 7 },
    },
    {
      title: "Payment Gateways",
      icon: <Wallet className="size-6" />,
      cost: { web: 4000, mobile: 5500, backend: 5000, design: 2000 },
      time: { web: 20, mobile: 28, backend: 25, design: 10 },
    },
    {
      title: "Cloud Services",
      icon: <Cloud className="size-6" />,
      cost: { web: 3500, mobile: 5000, backend: 4500, design: 1800 },
      time: { web: 18, mobile: 25, backend: 22, design: 9 },
    },
    {
      title: "Email Service",
      icon: <Mail className="size-6" />,
      cost: { web: 2000, mobile: 3000, backend: 2500, design: 1000 },
      time: { web: 10, mobile: 15, backend: 12, design: 5 },
    },
  ],
  Security: [
    {
      title: "Authentication",
      icon: <Lock className="size-6" />,
      cost: { web: 4000, mobile: 5000, backend: 5000, design: 1500 },
      time: { web: 20, mobile: 25, backend: 25, design: 7 },
    },
    {
      title: "Data Encryption",
      icon: <ShieldCheck className="size-6" />,
      cost: { web: 3500, mobile: 5000, backend: 4500, design: 1500 },
      time: { web: 18, mobile: 25, backend: 22, design: 7 },
    },
    {
      title: "Security Monitoring",
      icon: <Eye className="size-6" />,
      cost: { web: 3000, mobile: 4500, backend: 4000, design: 1200 },
      time: { web: 15, mobile: 22, backend: 20, design: 6 },
    },
    {
      title: "Compliance",
      icon: <FileCheck className="size-6" />,
      cost: { web: 5000, mobile: 7000, backend: 6000, design: 2000 },
      time: { web: 25, mobile: 35, backend: 30, design: 10 },
    },
    {
      title: "Performance Monitoring",
      icon: <Activity className="size-6" />,
      cost: { web: 3500, mobile: 5000, backend: 4500, design: 2000 },
      time: { web: 18, mobile: 25, backend: 22, design: 10 },
    },
    {
      title: "Backup & Recovery",
      icon: <Cloud className="size-6" />,
      cost: { web: 4000, mobile: 5500, backend: 5000, design: 1500 },
      time: { web: 20, mobile: 28, backend: 25, design: 8 },
    },
  ],
};

/**
 * Transform feature definitions into accordion items format
 * This maintains the existing UI structure while using the new data-driven approach
 */
const accordionItems = Object.entries(FEATURE_DEFINITIONS).map(([title, features]) => ({
  title,
  cards: features.map((feature) => ({
    cardTitle: feature.title,
    cardIcon: feature.icon, // Use the lucide-react icon directly
    featureDefinition: feature, // Store reference to the feature definition
  })),
}));

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

  /**
   * Get all selected features from accordions
   * Returns an array of FeatureDefinition objects
   */
  const getSelectedFeatures = useMemo((): FeatureDefinition[] => {
    const selected: FeatureDefinition[] = [];

    accordionItems.forEach((accordionItem, index) => {
      const activeFeatureTitle = activeAccordion[index]?.active;
      if (activeFeatureTitle) {
        const card = accordionItem.cards.find((c) => c.cardTitle === activeFeatureTitle);
        if (card?.featureDefinition) {
          selected.push(card.featureDefinition);
        }
      }
    });

    return selected;
  }, [activeAccordion]);

  /**
   * Calculate costs and timelines based on selected features and app size
   * Returns breakdown by category (web, mobile, backend, design) and totals
   */
  const calculations = useMemo(() => {
    // Base costs and time from app size selection
    const baseConfig = APP_SIZE_CONFIGS[activeCard] || APP_SIZE_CONFIGS["MVP"];

    // Initialize totals with base values
    let webCost = baseConfig.cost.web;
    let mobileCost = baseConfig.cost.mobile;
    let backendCost = baseConfig.cost.backend;
    let designCost = baseConfig.cost.design;

    let webTime = baseConfig.time.web;
    let mobileTime = baseConfig.time.mobile;
    let backendTime = baseConfig.time.backend;
    let designTime = baseConfig.time.design;

    // Add selected features
    getSelectedFeatures.forEach((feature) => {
      webCost += feature.cost.web;
      mobileCost += feature.cost.mobile;
      backendCost += feature.cost.backend;
      designCost += feature.cost.design;

      webTime += feature.time.web;
      mobileTime += feature.time.mobile;
      backendTime += feature.time.backend;
      designTime += feature.time.design;
    });

    // Calculate total cost and time
    const totalCost = webCost + mobileCost + backendCost + designCost;
    const totalTime = Math.max(webTime, mobileTime) + backendTime + designTime; // Time is not additive, use max for parallel work

    return {
      web: { cost: webCost, time: webTime },
      mobile: { cost: mobileCost, time: mobileTime },
      backend: { cost: backendCost, time: backendTime },
      design: { cost: designCost, time: designTime },
      total: { cost: totalCost, time: totalTime },
    };
  }, [activeCard, getSelectedFeatures]);

  /**
   * Format currency for display
   */
  const formatCurrency = (amount: number): string => {
    return `$${amount.toLocaleString()}`;
  };

  /**
   * Format time for display (days or weeks)
   */
  const formatTime = (days: number): string => {
    if (days >= 14) {
      const weeks = Math.round(days / 7);
      return weeks === 1 ? "1 week" : `${weeks} weeks`;
    }
    return days === 1 ? "1 day" : `${days} days`;
  };

  return (
    <div className="flex w-full flex-col gap-4 px-4 sm:gap-6 sm:px-6 md:gap-7 md:px-8 lg:gap-8 lg:px-12 xl:px-20">
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
            <span className="inline-flex min-w-[100px] items-center justify-center gap-2 sm:min-w-[150px] md:min-w-[200px]">
              {" "}
              {getIconByName(option)} {option}
            </span>
          )}
        />
      </div>
      <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-[1.6fr_1fr] lg:gap-8">
        <div>
          <div className="flex flex-col gap-2 sm:gap-3">
            <span className="text-plastic text-sm font-bold uppercase sm:text-base md:text-lg lg:text-xl">
              How big is your app
            </span>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 md:gap-x-8 md:gap-y-4">
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
                  <AccordionContent className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:gap-x-6 md:gap-y-4 lg:grid-cols-3 lg:gap-x-8">
                    {item.cards.map((card) => (
                      <CalculatorCard
                        active={activeAccordion[index]?.active === card.cardTitle}
                        key={card.cardTitle}
                        icon={card.cardIcon}
                        title={card.cardTitle}
                        onClick={() => {
                          // Toggle feature selection (allow deselecting)
                          setActiveAccordion((prev) =>
                            prev.map((item, i) =>
                              i === index
                                ? { ...item, active: item.active === card.cardTitle ? null : card.cardTitle }
                                : item,
                            ),
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
            <div className="bg-opacity-100-black/90 bricolage flex h-full flex-1 flex-col gap-2 rounded-[20px] p-3 font-[700] sm:gap-3 sm:p-4 md:p-5 lg:p-6">
              <div className="bg-opacity-100-black/95 border-charcole flex flex-col justify-between gap-2 rounded-[20px] border p-2.5 sm:gap-3 sm:p-3 md:p-4">
                <span className="flex items-center gap-2 text-sm sm:text-base md:text-lg">
                  {" "}
                  <WebIcon /> Web
                </span>
                <span className="text-lg sm:text-xl md:text-2xl">{formatCurrency(calculations.web.cost)}</span>
              </div>
              <div className="bg-opacity-100-black/95 border-charcole flex flex-col justify-between gap-2 rounded-[20px] border p-2.5 sm:gap-3 sm:p-3 md:p-4">
                <span className="flex items-center gap-2 text-sm sm:text-base md:text-lg">
                  {" "}
                  <MobileIcon /> Mobile
                </span>
                <span className="text-lg sm:text-xl md:text-2xl">{formatCurrency(calculations.mobile.cost)}</span>
              </div>
              <div className="bricolage grid grid-cols-1 gap-2 font-bold text-white sm:grid-cols-2 sm:gap-3">
                <div className="bg-opacity-100-black/95 border-charcole flex flex-col justify-between gap-2 rounded-[20px] border p-2.5 sm:gap-3 sm:p-3 md:p-4">
                  <span className="text-sm sm:text-base md:text-lg">Backend</span>
                  <span className="text-lg sm:text-xl md:text-2xl">{formatCurrency(calculations.backend.cost)}</span>
                </div>
                <div className="bg-opacity-100-black/95 border-charcole flex flex-col justify-between gap-2 rounded-[20px] border p-2.5 sm:gap-3 sm:p-3 md:p-4">
                  <span className="text-sm sm:text-base md:text-lg">Design</span>
                  <span className="text-lg sm:text-xl md:text-2xl">{formatCurrency(calculations.design.cost)}</span>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-1.5 sm:gap-2">
                <span className="text-base sm:text-lg md:text-xl">Total Cost</span>
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px]">
                  {formatCurrency(calculations.total.cost)}
                </span>
              </div>
              <div className="flex flex-col justify-center gap-1.5 sm:gap-2">
                <span className="text-base sm:text-lg md:text-xl">Estimated Timeline</span>
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-[32px]">
                  {formatTime(calculations.total.time)}
                </span>
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
