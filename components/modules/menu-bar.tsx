import { useState, useEffect } from "react";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function MenuBar({ className }: { className?: string }) {
  const [active, setActive] = useState<
    "home" | "startups" | "business" | "web-development" | "mobile-development" | "ui-ux-design"
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
      }
    }
  }, []);

  return (
    <Menubar className={className}>
      <MenubarMenu>
        <Link href="/">
          <MenubarTrigger data-active={active === "home"}>Home</MenubarTrigger>
        </Link>
      </MenubarMenu>
      <MenubarMenu>
        <Link href="/startups">
          <MenubarTrigger data-active={active === "startups"}>For startups</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Undo <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Find</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Search the web</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Find...</MenubarItem>
                <MenubarItem>Find Next</MenubarItem>
                <MenubarItem>Find Previous</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>Cut</MenubarItem>
            <MenubarItem>Copy</MenubarItem>
            <MenubarItem>Paste</MenubarItem>
          </MenubarContent>
        </Link>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger
          data-active={
            active === "web-development" ||
            active === "mobile-development" ||
            active === "ui-ux-design" ||
            active === "business"
          }
        >
          Services
        </MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem onClick={() => router.push("/business")}>For business</MenubarCheckboxItem>
          <MenubarCheckboxItem onClick={() => router.push("/web-development")}>Web Development</MenubarCheckboxItem>

          <MenubarCheckboxItem onClick={() => router.push("/mobile-development")}>
            Mobile Development
          </MenubarCheckboxItem>

          <MenubarCheckboxItem onClick={() => router.push("/ui-ux-design")}>UI/UX Design</MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Case studies</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>About us</MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}
