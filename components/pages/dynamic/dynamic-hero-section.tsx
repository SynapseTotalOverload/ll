"use client";
import { Button } from "@/components/ui/button";
import MenuBar from "@/components/modules/menu-bar";
import GoButton from "@/components/ui/go-button";

import Link from "next/link";

export default function DynamicHeroSection({
  title,
  description,
  type,
  backgroundUrl,
  mainImage,
  fullLink,
}: {
  title: string;
  description: string;
  type: string;
  backgroundUrl: string;
  mainImage: string;
  fullLink: string;
}) {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundUrl})` }}
      className="flex h-screen w-full flex-col justify-between bg-cover bg-center px-4 py-4 sm:px-8 sm:py-6 md:px-12 md:py-8 lg:px-20 lg:py-10"
    >
      {/* Header Navigation */}
      <header className="flex flex-row items-center">
        <Button variant="link">LogicCraft</Button>
        <div className="flex flex-1 flex-row items-center justify-end md:justify-center">
          <MenuBar />
        </div>
      </header>

      <div className="flex w-full flex-col items-center gap-6 sm:gap-8 md:flex-row md:gap-10 lg:gap-12">
        <div className="flex w-full flex-col items-start gap-3 sm:gap-4 md:max-w-[40%]">
          <div className="flex flex-col gap-2">
            <span className="text-plastic text-[12px] sm:text-[14px]">{type}</span>
            <span className="bricolage text-[28px] font-[700] sm:text-[36px] md:text-[42px]">{title}</span>
          </div>
          <span className="text-[14px] font-[300] text-white sm:text-[16px] md:text-[20px]">{description}</span>
          <Link
            href={fullLink}
            className="flex flex-row items-center justify-center rounded-full bg-black px-6 py-3 text-sm sm:px-8 sm:py-4"
          >
            {fullLink}
          </Link>
        </div>
        <div className="flex w-full flex-1 items-center justify-center md:justify-end">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="max-h-[300px] object-contain sm:max-h-[400px] md:max-h-[500px]" src={mainImage} alt={title} />
        </div>
      </div>

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center gap-8 sm:gap-12 md:gap-16">
        <GoButton
          text="Click here to get in touch with us"
          onClick={() => {
            window.location.href = "/contact-us";
          }}
        />
      </div>
    </div>
  );
}
