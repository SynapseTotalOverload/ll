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
      className="flex h-screen w-full flex-col justify-between bg-cover bg-center px-20 py-10"
    >
      {/* Header Navigation */}
      <header className="flex flex-row items-center">
        <Button variant="link">LogicCraft</Button>
        <div className="flex flex-1 flex-row items-center justify-end md:justify-center">
          <MenuBar />
        </div>
      </header>

      <div className="flex w-full flex-row items-center gap-10">
        <div className="flex max-w-[40%] flex-col items-start gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-plastic text-[14px]">{type}</span>
            <span className="bricolage text-[42px] font-[700]">{title}</span>
          </div>
          <span className="font-[300] text-white">{description}</span>
          <Link href={fullLink} className="flex flex-row items-center justify-center rounded-full bg-black px-8 py-4">
            {fullLink}
          </Link>
        </div>
        <div className="flex w-full flex-1 items-center justify-end">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="max-h-[500px] object-contain" src={mainImage} alt={title} />
        </div>
      </div>

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center gap-16">
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
