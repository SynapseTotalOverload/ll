"use client";
import { useState } from "react";
import SignTitle from "@/components/modules/sign-title";
import { NamedSwitcher } from "@/components/ui/named-switcher";
import { Separator } from "@/components/ui/separator";
import InfoCard from "@/components/modules/info-card";
import GoButton from "@/components/ui/go-button";
import { CheckIcon } from "lucide-react";

export default function PricingModel() {
  const [activeSwitcher, setActiveSwitcher] = useState("Dedicated teams");

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
        <InfoCard>
          <div className="flex flex-col gap-2">
            <InfoCard.Title className="bricolage text-[20px] leading-[120%] font-[700] tracking-[-2px] normal-case sm:text-[24px] md:text-[28px] lg:text-[32px]">
              Project Discovery Team{" "}
              <span className="text-night-blue text-[16px] font-[600] sm:text-[18px] md:text-[20px] lg:text-[24px]">
                (2 weeks)
              </span>
            </InfoCard.Title>
            <span className="text-plastic text-[14px]">
              Ideal for founders who need to shape their rough idea with a clickable prototype and a detailed project
              estimation.
            </span>
            <Separator className="my-4" />
          </div>
          <div>
            <span className="bricolage text-[16px] font-[600] sm:text-[18px] md:text-[19px] lg:text-[20px]">
              What you'll get:
            </span>
            <ul className="mt-4 flex flex-col gap-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <li className="flex flex-row items-center gap-2" key={index}>
                  <CheckIcon className="text-night-blue size-4" />
                  <span className="align-middle text-[14px] leading-[100%] font-medium tracking-[0%]">
                    Detailed feature description and user stories
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <span className="bricolage p-4 text-[32px] font-[700] text-white sm:p-5 sm:text-[40px] md:p-6 md:text-[45px] lg:text-[50px]">
            6000+
          </span>
          <div className="flex flex-row items-center justify-center">
            <GoButton className="w-full" text="Click here to get in touch with us" onClick={() => {}} />
          </div>
        </InfoCard>
        <InfoCard className="bg-opacity-20-black border-charcole border">
          <div className="flex flex-col gap-2">
            <InfoCard.Title className="bricolage text-[20px] leading-[120%] font-[700] tracking-[-2px] normal-case sm:text-[24px] md:text-[28px] lg:text-[32px]">
              Project Discovery Team{" "}
              <span className="text-night-blue text-[16px] font-[600] sm:text-[18px] md:text-[20px] lg:text-[24px]">
                (2 weeks)
              </span>
            </InfoCard.Title>
            <span className="text-plastic text-[14px]">
              Ideal for founders who need to shape their rough idea with a clickable prototype and a detailed project
              estimation.
            </span>
            <Separator className="my-4" />
          </div>
          <div>
            <span className="bricolage text-[16px] font-[600] sm:text-[18px] md:text-[19px] lg:text-[20px]">
              What you'll get:
            </span>
            <ul className="mt-4 flex flex-col gap-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <li className="flex flex-row items-center gap-2" key={index}>
                  <CheckIcon className="text-night-blue size-4" />
                  <span className="align-middle text-[14px] leading-[100%] font-medium tracking-[0%]">
                    Detailed feature description and user stories
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <span className="bricolage p-4 text-[32px] font-[700] text-white sm:p-5 sm:text-[40px] md:p-6 md:text-[45px] lg:text-[50px]">
            6000+
          </span>
          <div className="flex flex-row items-center justify-center">
            <GoButton className="w-full" text="Click here to get in touch with us" onClick={() => {}} />
          </div>
        </InfoCard>
        <InfoCard>
          <div className="flex flex-col gap-2">
            <InfoCard.Title className="bricolage text-[20px] leading-[120%] font-[700] tracking-[-2px] normal-case sm:text-[24px] md:text-[28px] lg:text-[32px]">
              Project Discovery Team{" "}
              <span className="text-night-blue text-[16px] font-[600] sm:text-[18px] md:text-[20px] lg:text-[24px]">
                (2 weeks)
              </span>
            </InfoCard.Title>
            <span className="text-plastic text-[14px]">
              Ideal for founders who need to shape their rough idea with a clickable prototype and a detailed project
              estimation.
            </span>
            <Separator className="my-4" />
          </div>
          <div>
            <span className="bricolage text-[16px] font-[600] sm:text-[18px] md:text-[19px] lg:text-[20px]">
              What you'll get:
            </span>
            <ul className="mt-4 flex flex-col gap-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <li className="flex flex-row items-center gap-2" key={index}>
                  <CheckIcon className="text-night-blue size-4" />
                  <span className="align-middle text-[14px] leading-[100%] font-medium tracking-[0%]">
                    Detailed feature description and user stories
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <span className="bricolage p-4 text-[32px] font-[700] text-white sm:p-5 sm:text-[40px] md:p-6 md:text-[45px] lg:text-[50px]">
            6000+
          </span>
          <div className="flex flex-row items-center justify-center">
            <GoButton className="w-full" text="Click here to get in touch with us" onClick={() => {}} />
          </div>
        </InfoCard>
      </div>
    </div>
  );
}
