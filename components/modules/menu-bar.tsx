import { useState, useEffect } from "react";
import { Menubar, MenubarCheckboxItem, MenubarContent, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function MenuBar({ className }: { className?: string }) {
  const [active, setActive] = useState<
    | "home"
    | "startups"
    | "business"
    | "web-development"
    | "mobile-development"
    | "ui-ux-design"
    | "qa"
    | "graphic-design"
    | "faq"
    | "about-us"
  >("home");
  const router = useRouter();

  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/") {
      setActive("home");
    } else {
      const pathSlugs = path.split("/");
      const lastSlug = pathSlugs[pathSlugs.length - 1];

      // Map the last slug to the active state
      if (lastSlug === "startups") {
        setActive("startups");
      } else if (lastSlug === "web-development") {
        setActive("web-development");
      } else if (lastSlug === "mobile-development") {
        setActive("mobile-development");
      } else if (lastSlug === "ui-ux-design") {
        setActive("ui-ux-design");
      } else if (lastSlug === "business") {
        setActive("business");
      } else if (lastSlug === "qa") {
        setActive("qa");
      } else if (lastSlug === "graphic-design") {
        setActive("graphic-design");
      } else if (lastSlug === "faq") {
        setActive("faq");
      } else if (lastSlug === "about-us") {
        setActive("about-us");
      }
    }
  }, []);

  return (
    <Menubar className={className}>
      <MenubarMenu>
        <Link href="/" className="block">
          <MenubarTrigger data-active={active === "home"} className="font-medium transition-colors duration-200">
            Home
          </MenubarTrigger>
        </Link>
      </MenubarMenu>

      <MenubarMenu>
        <Link href="/startups" className="block">
          <MenubarTrigger data-active={active === "startups"} className="font-medium transition-colors duration-200">
            For startups
          </MenubarTrigger>
        </Link>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger
          data-active={
            active === "web-development" ||
            active === "mobile-development" ||
            active === "ui-ux-design" ||
            active === "business" ||
            active === "qa" ||
            active === "graphic-design"
          }
          className="font-medium transition-colors duration-200"
        >
          Services
        </MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem
            onClick={() => router.push("/business")}
            className="cursor-pointer transition-colors duration-200"
          >
            For business
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            onClick={() => router.push("/web-development")}
            className="cursor-pointer transition-colors duration-200"
          >
            Web Development
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            onClick={() => router.push("/mobile-development")}
            className="cursor-pointer transition-colors duration-200"
          >
            Mobile Development
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            onClick={() => router.push("/ui-ux-design")}
            className="cursor-pointer transition-colors duration-200"
          >
            UI/UX Design
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            onClick={() => router.push("/graphic-design")}
            className="cursor-pointer transition-colors duration-200"
          >
            Graphic Design
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            onClick={() => router.push("/qa")}
            className="cursor-pointer transition-colors duration-200"
          >
            QA Automation & Manual
          </MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <Link href="/faq" className="block">
          <MenubarTrigger data-active={active === "faq"} className="font-medium transition-colors duration-200">
            FAQ
          </MenubarTrigger>
        </Link>
      </MenubarMenu>

      <MenubarMenu>
        <Link href="/about-us" className="block">
          <MenubarTrigger data-active={active === "about-us"} className="font-medium transition-colors duration-200">
            About us
          </MenubarTrigger>
        </Link>
      </MenubarMenu>
    </Menubar>
  );
}
