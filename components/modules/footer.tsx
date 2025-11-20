import Link from "next/link";
import { Button } from "../ui/button";
import { Instagram, Mail, MapPin } from "lucide-react";
import Logo from "../ui/logo";
import { LampEffect } from "../ui/lamp-effect";

export default function Footer() {
  return (
    <div className="container flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-0">
      <Logo />

      <div className="grid w-full grid-cols-1 items-center gap-6 py-6 sm:gap-8 sm:py-8 lg:grid-cols-[1fr_4fr_1fr] lg:gap-4">
        {/* Contact Info - Full width on mobile, left column on desktop */}
        <div className="order-1 flex flex-col gap-4 sm:gap-6 lg:order-1 lg:gap-8 lg:self-start">
          <div className="flex items-center gap-3">
            <LampEffect>
              <Mail className="text-night-blue size-5" />
            </LampEffect>
            <span className="text-[12px] text-white sm:text-[13px] lg:text-[14px]">marketing@logiccrft.com</span>
          </div>
          <div className="flex items-center gap-3">
            <LampEffect>
              <MapPin className="text-night-blue size-5" />
            </LampEffect>
            <span className="text-[12px] text-white sm:text-[13px] lg:text-[14px]">Lviv, George Washington str,6</span>
          </div>
        </div>

        {/* Navigation - Full width on mobile, center column on desktop */}
        <div className="order-3 flex flex-1 flex-col items-center lg:order-2">
          <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-12 lg:gap-16">
            <div className="flex flex-col gap-3 sm:gap-4">
              <Link href="/" className="text-[16px] font-[700] text-white sm:text-[18px] md:text-[20px] lg:text-[22px]">
                Home
              </Link>
              <Link
                href="/business"
                className="text-[16px] font-[700] text-white sm:text-[18px] md:text-[20px] lg:text-[22px]"
              >
                For businesses
              </Link>
              <Link
                href="/case-studies"
                className="text-[16px] font-[700] text-white sm:text-[18px] md:text-[20px] lg:text-[22px]"
              >
                Case studies
              </Link>
              <Link
                href="/about-us"
                className="text-[16px] font-[700] text-white sm:text-[18px] md:text-[20px] lg:text-[22px]"
              >
                About Us
              </Link>
            </div>
            <div className="flex flex-col gap-3 sm:gap-4">
              <span className="text-[16px] font-[700] text-white sm:text-[18px] md:text-[20px] lg:text-[22px]">
                Services
              </span>
              <Link href="/ui-ux-design" className="text-[12px] font-[400] text-white sm:text-[13px] lg:text-[14px]">
                UI/UX Design
              </Link>
              <Link href="/graphic-design" className="text-[12px] font-[400] text-white sm:text-[13px] lg:text-[14px]">
                Graphic design
              </Link>
              <Link href="/web-development" className="text-[12px] font-[400] text-white sm:text-[13px] lg:text-[14px]">
                Mobile and web development
              </Link>
              <Link href="/business" className="text-[12px] font-[400] text-white sm:text-[13px] lg:text-[14px]">
                CRM software building
              </Link>
              <Link href="/qa" className="text-[12px] font-[400] text-white sm:text-[13px] lg:text-[14px]">
                QA Automation and QA Manual
              </Link>
            </div>
          </div>
        </div>

        {/* Social Media - Full width on mobile, right column on desktop */}
        <div className="order-2 flex h-full flex-row justify-center gap-4 sm:gap-6 lg:order-3 lg:justify-start lg:self-start"></div>
      </div>

      {/* Legal Links */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4 border-t border-white/20 pt-6 sm:gap-6 sm:pt-8">
        <Link
          href="/terms-of-usage"
          className="text-[12px] text-white/70 hover:text-white sm:text-[13px] lg:text-[14px]"
        >
          Terms of Usage
        </Link>
        <span className="text-[12px] text-white/50 sm:text-[13px] lg:text-[14px]">|</span>
        <Link
          href="/privacy-policy"
          className="text-[12px] text-white/70 hover:text-white sm:text-[13px] lg:text-[14px]"
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}
