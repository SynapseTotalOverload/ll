"use client";

import SignTitle from "@/components/modules/sign-title";
import { NamedSwitcher } from "@/components/ui/named-switcher";
import { useEffect, useState, useMemo } from "react";
import WebIcon from "@/public/assets/svg/monitor.svg";
import MobileIcon from "@/public/assets/svg/mobile.svg";
import CalculatorCard from "@/components/modules/calculator-card";
import { Accordion, AccordionTrigger, AccordionContent, AccordionItem } from "@/components/ui/calc-accordion";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ArrowRight from "@/public/assets/svg/arrow-right.svg";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
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

const emailFormSchema = z.object({
  email: z.string().email("Invalid email address"),
});

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
      icon: <ShoppingCart className="text-night-blue size-6" />,
      cost: { web: 8000, mobile: 10000, backend: 12000, design: 5000 },
      time: { web: 45, mobile: 60, backend: 75, design: 30 },
    },
    {
      title: "Logistics",
      icon: <Truck className="text-night-blue size-6" />,
      cost: { web: 7000, mobile: 12000, backend: 10000, design: 4000 },
      time: { web: 40, mobile: 70, backend: 65, design: 25 },
    },
    {
      title: "HealthCare",
      icon: <Heart className="text-night-blue size-6" />,
      cost: { web: 10000, mobile: 15000, backend: 15000, design: 6000 },
      time: { web: 50, mobile: 80, backend: 90, design: 35 },
    },
    {
      title: "Education",
      icon: <GraduationCap className="text-night-blue size-6" />,
      cost: { web: 6000, mobile: 9000, backend: 8000, design: 4000 },
      time: { web: 35, mobile: 55, backend: 50, design: 25 },
    },
    {
      title: "Custom",
      icon: <Settings className="text-night-blue size-6" />,
      cost: { web: 5000, mobile: 8000, backend: 7000, design: 3500 },
      time: { web: 30, mobile: 45, backend: 45, design: 20 },
    },
  ],
  "Users & Accounts": [
    {
      title: "User Registration",
      icon: <UserPlus className="text-night-blue size-6" />,
      cost: { web: 2000, mobile: 3000, backend: 3000, design: 1000 },
      time: { web: 10, mobile: 15, backend: 15, design: 5 },
    },
    {
      title: "Social Login",
      icon: <LogIn className="text-night-blue size-6" />,
      cost: { web: 1500, mobile: 2500, backend: 2000, design: 800 },
      time: { web: 8, mobile: 12, backend: 10, design: 4 },
    },
    {
      title: "User Profiles",
      icon: <User className="text-night-blue size-6" />,
      cost: { web: 2500, mobile: 3500, backend: 2500, design: 1200 },
      time: { web: 12, mobile: 18, backend: 15, design: 6 },
    },
    {
      title: "Password Reset",
      icon: <Key className="text-night-blue size-6" />,
      cost: { web: 1000, mobile: 1500, backend: 1500, design: 500 },
      time: { web: 5, mobile: 8, backend: 8, design: 3 },
    },
    {
      title: "Two-Factor Auth",
      icon: <Shield className="text-night-blue size-6" />,
      cost: { web: 3000, mobile: 4000, backend: 3500, design: 1500 },
      time: { web: 15, mobile: 20, backend: 18, design: 8 },
    },
  ],
  "App content": [
    {
      title: "Content Management",
      icon: <FileText className="text-night-blue size-6" />,
      cost: { web: 4000, mobile: 5000, backend: 5000, design: 2000 },
      time: { web: 20, mobile: 25, backend: 25, design: 10 },
    },
    {
      title: "Media Upload",
      icon: <Upload className="text-night-blue size-6" />,
      cost: { web: 2500, mobile: 3500, backend: 3000, design: 1000 },
      time: { web: 12, mobile: 18, backend: 15, design: 5 },
    },
    {
      title: "Search & Filter",
      icon: <Search className="text-night-blue size-6" />,
      cost: { web: 3000, mobile: 4000, backend: 3500, design: 1500 },
      time: { web: 15, mobile: 20, backend: 18, design: 8 },
    },
  ],
  Geolocation: [
    {
      title: "Location Services",
      icon: <MapPin className="text-night-blue size-6" />,
      cost: { web: 3000, mobile: 5000, backend: 3500, design: 1500 },
      time: { web: 15, mobile: 25, backend: 18, design: 8 },
    },
    {
      title: "Maps Integration",
      icon: <Map className="text-night-blue size-6" />,
      cost: { web: 3500, mobile: 6000, backend: 4000, design: 2000 },
      time: { web: 18, mobile: 30, backend: 20, design: 10 },
    },
    {
      title: "Geofencing",
      icon: <Shield className="text-night-blue size-6" />,
      cost: { web: 4000, mobile: 7000, backend: 5000, design: 2000 },
      time: { web: 20, mobile: 35, backend: 25, design: 10 },
    },
    {
      title: "Location Tracking",
      icon: <Navigation className="text-night-blue size-6" />,
      cost: { web: 3000, mobile: 5500, backend: 4000, design: 1800 },
      time: { web: 15, mobile: 28, backend: 20, design: 9 },
    },
    {
      title: "Route Optimization",
      icon: <Map className="text-night-blue size-6" />,
      cost: { web: 4500, mobile: 7000, backend: 5500, design: 2200 },
      time: { web: 22, mobile: 35, backend: 28, design: 11 },
    },
    {
      title: "Delivery Tracking",
      icon: <Truck className="text-night-blue size-6" />,
      cost: { web: 3500, mobile: 6000, backend: 4500, design: 1800 },
      time: { web: 18, mobile: 30, backend: 22, design: 9 },
    },
  ],
  "Scheduling / Booking": [
    {
      title: "Calendar Integration",
      icon: <Calendar className="text-night-blue size-6" />,
      cost: { web: 3500, mobile: 5000, backend: 4000, design: 1800 },
      time: { web: 18, mobile: 25, backend: 20, design: 9 },
    },
    {
      title: "Booking System",
      icon: <BookOpen className="text-night-blue size-6" />,
      cost: { web: 5000, mobile: 7000, backend: 6000, design: 2500 },
      time: { web: 25, mobile: 35, backend: 30, design: 12 },
    },
    {
      title: "Appointment Management",
      icon: <Clock className="text-night-blue size-6" />,
      cost: { web: 4000, mobile: 6000, backend: 5000, design: 2200 },
      time: { web: 20, mobile: 30, backend: 25, design: 11 },
    },
  ],
  "User interactions": [
    {
      title: "Chat & Messaging",
      icon: <MessageSquare className="text-night-blue size-6" />,
      cost: { web: 6000, mobile: 8000, backend: 7000, design: 3000 },
      time: { web: 30, mobile: 40, backend: 35, design: 15 },
    },
    {
      title: "Push Notifications",
      icon: <Bell className="text-night-blue size-6" />,
      cost: { web: 2000, mobile: 3500, backend: 2500, design: 1000 },
      time: { web: 10, mobile: 18, backend: 12, design: 5 },
    },
    {
      title: "In-App Communication",
      icon: <Mail className="text-night-blue size-6" />,
      cost: { web: 4000, mobile: 6000, backend: 5000, design: 2000 },
      time: { web: 20, mobile: 30, backend: 25, design: 10 },
    },
    {
      title: "User Feedback",
      icon: <MessageCircle className="text-night-blue size-6" />,
      cost: { web: 1500, mobile: 2500, backend: 2000, design: 800 },
      time: { web: 8, mobile: 12, backend: 10, design: 4 },
    },
  ],
  eCommerce: [
    {
      title: "Product Catalog",
      icon: <Package className="text-night-blue size-6" />,
      cost: { web: 3000, mobile: 4000, backend: 3500, design: 1800 },
      time: { web: 15, mobile: 20, backend: 18, design: 9 },
    },
    {
      title: "Shopping Cart",
      icon: <ShoppingBag className="text-night-blue size-6" />,
      cost: { web: 4000, mobile: 5500, backend: 4500, design: 2000 },
      time: { web: 20, mobile: 28, backend: 22, design: 10 },
    },
    {
      title: "Payment Processing",
      icon: <CreditCard className="text-night-blue size-6" />,
      cost: { web: 5000, mobile: 7000, backend: 6000, design: 2500 },
      time: { web: 25, mobile: 35, backend: 30, design: 12 },
    },
    {
      title: "Order Management",
      icon: <ClipboardList className="text-night-blue size-6" />,
      cost: { web: 4500, mobile: 6000, backend: 5500, design: 2200 },
      time: { web: 22, mobile: 30, backend: 28, design: 11 },
    },
    {
      title: "Inventory System",
      icon: <Package className="text-night-blue size-6" />,
      cost: { web: 3500, mobile: 5000, backend: 4500, design: 1800 },
      time: { web: 18, mobile: 25, backend: 22, design: 9 },
    },
  ],
  "Admin, Feedback & Analytics": [
    {
      title: "Admin Dashboard",
      icon: <LayoutDashboard className="text-night-blue size-6" />,
      cost: { web: 6000, mobile: 8000, backend: 7000, design: 3500 },
      time: { web: 30, mobile: 40, backend: 35, design: 18 },
    },
    {
      title: "Analytics Dashboard",
      icon: <BarChart className="text-night-blue size-6" />,
      cost: { web: 5000, mobile: 7000, backend: 6000, design: 3000 },
      time: { web: 25, mobile: 35, backend: 30, design: 15 },
    },
    {
      title: "User Analytics",
      icon: <Users className="text-night-blue size-6" />,
      cost: { web: 4000, mobile: 5500, backend: 5000, design: 2500 },
      time: { web: 20, mobile: 28, backend: 25, design: 12 },
    },
  ],
  "External APIs and Integrations": [
    {
      title: "Third-party APIs",
      icon: <Webhook className="text-night-blue size-6" />,
      cost: { web: 3000, mobile: 4000, backend: 4000, design: 1000 },
      time: { web: 15, mobile: 20, backend: 20, design: 5 },
    },
    {
      title: "Social Media Integration",
      icon: <Share2 className="text-night-blue size-6" />,
      cost: { web: 2500, mobile: 4000, backend: 3000, design: 1500 },
      time: { web: 12, mobile: 20, backend: 15, design: 7 },
    },
    {
      title: "Payment Gateways",
      icon: <Wallet className="text-night-blue size-6" />,
      cost: { web: 4000, mobile: 5500, backend: 5000, design: 2000 },
      time: { web: 20, mobile: 28, backend: 25, design: 10 },
    },
    {
      title: "Cloud Services",
      icon: <Cloud className="text-night-blue size-6" />,
      cost: { web: 3500, mobile: 5000, backend: 4500, design: 1800 },
      time: { web: 18, mobile: 25, backend: 22, design: 9 },
    },
    {
      title: "Email Service",
      icon: <Mail className="text-night-blue size-6" />,
      cost: { web: 2000, mobile: 3000, backend: 2500, design: 1000 },
      time: { web: 10, mobile: 15, backend: 12, design: 5 },
    },
  ],
  Security: [
    {
      title: "Authentication",
      icon: <Lock className="text-night-blue size-6" />,
      cost: { web: 4000, mobile: 5000, backend: 5000, design: 1500 },
      time: { web: 20, mobile: 25, backend: 25, design: 7 },
    },
    {
      title: "Data Encryption",
      icon: <ShieldCheck className="text-night-blue size-6" />,
      cost: { web: 3500, mobile: 5000, backend: 4500, design: 1500 },
      time: { web: 18, mobile: 25, backend: 22, design: 7 },
    },
    {
      title: "Security Monitoring",
      icon: <Eye className="text-night-blue size-6" />,
      cost: { web: 3000, mobile: 4500, backend: 4000, design: 1200 },
      time: { web: 15, mobile: 22, backend: 20, design: 6 },
    },
    {
      title: "Compliance",
      icon: <FileCheck className="text-night-blue size-6" />,
      cost: { web: 5000, mobile: 7000, backend: 6000, design: 2000 },
      time: { web: 25, mobile: 35, backend: 30, design: 10 },
    },
    {
      title: "Performance Monitoring",
      icon: <Activity className="text-night-blue size-6" />,
      cost: { web: 3500, mobile: 5000, backend: 4500, design: 2000 },
      time: { web: 18, mobile: 25, backend: 22, design: 10 },
    },
    {
      title: "Backup & Recovery",
      icon: <Cloud className="text-night-blue size-6" />,
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
      active: string[]; // Changed to array to allow multiple selections
    }[]
  >([]);

  useEffect(() => {
    setActiveAccordion(accordionItems.map((item) => ({ title: item.title, active: [] })));
  }, []);

  /**
   * Get all selected features from accordions with their category
   * Returns an array of objects with feature and category
   * Supports multiple selections per category
   */
  const getSelectedFeatures = useMemo(() => {
    const selected: Array<{ feature: FeatureDefinition; category: string }> = [];

    accordionItems.forEach((accordionItem, index) => {
      const activeFeatureTitles = activeAccordion[index]?.active || [];
      activeFeatureTitles.forEach((activeFeatureTitle) => {
        const card = accordionItem.cards.find((c) => c.cardTitle === activeFeatureTitle);
        if (card?.featureDefinition) {
          selected.push({
            feature: card.featureDefinition,
            category: accordionItem.title,
          });
        }
      });
    });

    return selected;
  }, [activeAccordion]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof emailFormSchema>>({
    resolver: zodResolver(emailFormSchema),
    defaultValues: {
      email: "",
    },
  });

  /**
   * Handle email submission
   */
  const onSubmit = async (values: z.infer<typeof emailFormSchema>) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/estimate-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
          platform: activeSwitcher,
          appSize: activeCard,
          selectedFeatures: getSelectedFeatures.map((item) => ({
            category: item.category,
            feature: item.feature.title,
          })),
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
        setTimeout(() => setIsSubmitted(false), 3000);
      }
    } catch (error) {
      console.error("Error submitting estimate request:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="estimate-project-home"
      className="flex w-full flex-col gap-4 px-4 sm:gap-6 sm:px-6 md:gap-7 md:px-8 lg:gap-8 lg:px-12 xl:px-20"
    >
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
                        active={activeAccordion[index]?.active.includes(card.cardTitle) || false}
                        key={card.cardTitle}
                        icon={card.cardIcon}
                        title={card.cardTitle}
                        onClick={() => {
                          // Toggle feature selection (allow multiple selections per category)
                          setActiveAccordion((prev) =>
                            prev.map((item, i) => {
                              if (i !== index) return item;
                              const currentActive = item.active || [];
                              const isSelected = currentActive.includes(card.cardTitle);
                              return {
                                ...item,
                                active: isSelected
                                  ? currentActive.filter((title) => title !== card.cardTitle)
                                  : [...currentActive, card.cardTitle],
                              };
                            }),
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
            <div className="bg-opacity-100-black/90 bricolage flex h-full flex-1 flex-col gap-3 rounded-[20px] p-3 font-[700] sm:gap-4 sm:p-4 md:p-5 lg:p-6">
              <div className="flex flex-col gap-2 sm:gap-3">
                <span className="text-base font-bold text-white sm:text-lg md:text-xl">Your Selection</span>

                {/* Platform Selection */}
                <div className="bg-opacity-100-black/95 border-charcole flex items-center gap-2 rounded-[20px] border p-2.5 sm:gap-3 sm:p-3 md:p-4">
                  <span className="text-sm text-white/70 sm:text-base md:text-lg">Platform:</span>
                  <span className="flex items-center gap-2 text-sm font-medium text-white sm:text-base md:text-lg">
                    {getIconByName(activeSwitcher)} {activeSwitcher}
                  </span>
                </div>

                {/* App Size Selection */}
                <div className="bg-opacity-100-black/95 border-charcole flex items-center gap-2 rounded-[20px] border p-2.5 sm:gap-3 sm:p-3 md:p-4">
                  <span className="text-sm text-white/70 sm:text-base md:text-lg">App Size:</span>
                  <span className="text-sm font-medium text-white sm:text-base md:text-lg">{activeCard}</span>
                </div>

                {/* Selected Features */}
                {getSelectedFeatures.length > 0 ? (
                  <div className="flex flex-col gap-2">
                    <span className="text-sm text-white/70 sm:text-base md:text-lg">Selected Features:</span>
                    <div className="flex max-h-[300px] flex-col gap-2 overflow-y-auto">
                      {Object.entries(
                        getSelectedFeatures.reduce(
                          (acc, item) => {
                            if (!acc[item.category]) {
                              acc[item.category] = [];
                            }
                            acc[item.category].push(item.feature);
                            return acc;
                          },
                          {} as Record<string, FeatureDefinition[]>,
                        ),
                      ).map(([category, features]) => (
                        <div
                          key={category}
                          className="bg-opacity-100-black/95 border-charcole rounded-[20px] border p-2.5 sm:p-3 md:p-4"
                        >
                          <span className="mb-2 block text-xs font-medium text-white/80 sm:text-sm md:text-base">
                            {category}
                          </span>
                          <div className="flex flex-col gap-1.5">
                            {features.map((feature) => (
                              <div key={feature.title} className="flex items-center gap-2">
                                <span className="text-white/60">{feature.icon}</span>
                                <span className="text-xs text-white sm:text-sm md:text-base">{feature.title}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="bg-opacity-100-black/95 border-charcole rounded-[20px] border p-2.5 sm:p-3 md:p-4">
                    <span className="text-sm text-white/60 sm:text-base md:text-lg">No features selected yet</span>
                  </div>
                )}
              </div>

              {/* Email Form */}
              <div className="flex flex-col gap-2 sm:gap-3">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-white sm:text-base md:text-lg">
                            Your Email
                          </FormLabel>
                          <FormControl>
                            <Input
                              variant="default"
                              placeholder="Enter your email"
                              type="email"
                              className="border-charcole focus:outline-night-blue focus-within:!outline-night-blue hover:border-night-blue/50 rounded-[12px] border !bg-black/95 px-4 py-3 text-white transition-colors placeholder:text-white/50 focus-within:!outline-[2px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      disabled={isSubmitting || isSubmitted}
                      className="bg-charcole hover:bg-charcole/90 flex w-full items-center justify-center gap-2 rounded-full py-2 pr-3 pl-6 text-white disabled:opacity-50"
                    >
                      {isSubmitted ? (
                        "Request Sent!"
                      ) : isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <span>Send me a free detailed estimation</span>
                          <ArrowRight className="text-night-blue flex size-6 items-center justify-center" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
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
