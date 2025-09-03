import { useState, useEffect } from "react";
import { Menubar, MenubarCheckboxItem, MenubarContent, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    | "case-studies"
  >("home");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
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
      } else if (lastSlug === "case-studies") {
        setActive("case-studies");
      }
    }
  }, []);

  const handleMobileNavClick = (path: string) => {
    router.push(path);
    setIsDrawerOpen(false);
  };

  const isServicesActive =
    active === "web-development" ||
    active === "mobile-development" ||
    active === "ui-ux-design" ||
    active === "business" ||
    active === "qa" ||
    active === "graphic-design";

  return (
    <>
      {/* Desktop Menu - Hidden on mobile */}
      <div className="hidden lg:block">
        <Menubar className={`text-sm sm:text-base ${className}`}>
          <MenubarMenu>
            <Link href="/" className="block">
              <MenubarTrigger
                data-active={active === "home"}
                className="text-xs font-medium transition-colors duration-200 sm:text-sm md:text-base"
              >
                Home
              </MenubarTrigger>
            </Link>
          </MenubarMenu>

          <MenubarMenu>
            <Link href="/startups" className="block">
              <MenubarTrigger
                data-active={active === "startups"}
                className="text-xs font-medium transition-colors duration-200 sm:text-sm md:text-base"
              >
                For startups
              </MenubarTrigger>
            </Link>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger
              data-active={isServicesActive}
              className="text-xs font-medium transition-colors duration-200 sm:text-sm md:text-base"
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
              <MenubarTrigger
                data-active={active === "faq"}
                className="text-xs font-medium transition-colors duration-200 sm:text-sm md:text-base"
              >
                FAQ
              </MenubarTrigger>
            </Link>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger
              data-active={active === "case-studies"}
              className="text-xs font-medium transition-colors duration-200 sm:text-sm md:text-base"
            >
              Case studies
            </MenubarTrigger>
            <MenubarContent>
              <MenubarCheckboxItem
                onClick={() => router.push("/case-studies")}
                className="cursor-pointer transition-colors duration-200"
              >
                All Projects
              </MenubarCheckboxItem>
              <MenubarCheckboxItem
                onClick={() => router.push("/case-studies/com-lands")}
                className="cursor-pointer transition-colors duration-200"
              >
                Com Lands
              </MenubarCheckboxItem>
              <MenubarCheckboxItem
                onClick={() => router.push("/case-studies/truth-or-dare")}
                className="cursor-pointer transition-colors duration-200"
              >
                Truth or Dare
              </MenubarCheckboxItem>
              <MenubarCheckboxItem
                onClick={() => router.push("/case-studies/boat-export")}
                className="cursor-pointer transition-colors duration-200"
              >
                Boat Export
              </MenubarCheckboxItem>
              <MenubarCheckboxItem
                onClick={() => router.push("/case-studies/chillbill")}
                className="cursor-pointer transition-colors duration-200"
              >
                Chillbill
              </MenubarCheckboxItem>
              <MenubarCheckboxItem
                onClick={() => router.push("/case-studies/digibdr")}
                className="cursor-pointer transition-colors duration-200"
              >
                Digibdr
              </MenubarCheckboxItem>
              <MenubarCheckboxItem
                onClick={() => router.push("/case-studies/reachfi")}
                className="cursor-pointer transition-colors duration-200"
              >
                Reachfi
              </MenubarCheckboxItem>
              <MenubarCheckboxItem
                onClick={() => router.push("/case-studies/sxipher-ai")}
                className="cursor-pointer transition-colors duration-200"
              >
                Sxipher AI
              </MenubarCheckboxItem>
              <MenubarCheckboxItem
                onClick={() => router.push("/case-studies/teledyne-isco-flowcalc")}
                className="cursor-pointer transition-colors duration-200"
              >
                Teledyne ISCO Flowcalc
              </MenubarCheckboxItem>
              <MenubarCheckboxItem
                onClick={() => router.push("/case-studies/trackmyjobs")}
                className="cursor-pointer transition-colors duration-200"
              >
                Track My Jobs
              </MenubarCheckboxItem>
              <MenubarCheckboxItem
                onClick={() => router.push("/case-studies/tripsha")}
                className="cursor-pointer transition-colors duration-200"
              >
                Tripsha
              </MenubarCheckboxItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <Link href="/about-us" className="block">
              <MenubarTrigger
                data-active={active === "about-us"}
                className="text-xs font-medium transition-colors duration-200 sm:text-sm md:text-base"
              >
                About us
              </MenubarTrigger>
            </Link>
          </MenubarMenu>
        </Menubar>
      </div>

      {/* Mobile Drawer Menu - Hidden on desktop */}
      <div className="lg:hidden">
        <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
          <DrawerTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Menu className="h-6 w-6" />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="border-charcole border-t bg-transparent backdrop-blur-lg">
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader className="border-b border-white/20">
                <DrawerTitle className="text-lg font-semibold text-white">Menu</DrawerTitle>
              </DrawerHeader>

              <div className="max-h-[60vh] overflow-y-auto p-4">
                <nav className="flex flex-col space-y-2">
                  <button
                    onClick={() => handleMobileNavClick("/")}
                    className={`rounded-md px-4 py-3 text-left transition-colors ${
                      active === "home" ? "bg-white/20 text-white" : "text-white/80 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    Home
                  </button>

                  <button
                    onClick={() => handleMobileNavClick("/startups")}
                    className={`rounded-md px-4 py-3 text-left transition-colors ${
                      active === "startups"
                        ? "bg-white/20 text-white"
                        : "text-white/80 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    For startups
                  </button>

                  <div className="mt-2 border-t border-white/20 pt-4">
                    <div className="mb-3 px-4 text-sm font-medium text-white/60">Services</div>
                    <button
                      onClick={() => handleMobileNavClick("/business")}
                      className={`w-full rounded-md px-4 py-3 text-left transition-colors ${
                        active === "business"
                          ? "bg-white/20 text-white"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      For business
                    </button>
                    <button
                      onClick={() => handleMobileNavClick("/web-development")}
                      className={`w-full rounded-md px-4 py-3 text-left transition-colors ${
                        active === "web-development"
                          ? "bg-white/20 text-white"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      Web Development
                    </button>
                    <button
                      onClick={() => handleMobileNavClick("/mobile-development")}
                      className={`w-full rounded-md px-4 py-3 text-left transition-colors ${
                        active === "mobile-development"
                          ? "bg-white/20 text-white"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      Mobile Development
                    </button>
                    <button
                      onClick={() => handleMobileNavClick("/ui-ux-design")}
                      className={`w-full rounded-md px-4 py-3 text-left transition-colors ${
                        active === "ui-ux-design"
                          ? "bg-white/20 text-white"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      UI/UX Design
                    </button>
                    <button
                      onClick={() => handleMobileNavClick("/graphic-design")}
                      className={`w-full rounded-md px-4 py-3 text-left transition-colors ${
                        active === "graphic-design"
                          ? "bg-white/20 text-white"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      Graphic Design
                    </button>
                    <button
                      onClick={() => handleMobileNavClick("/qa")}
                      className={`w-full rounded-md px-4 py-3 text-left transition-colors ${
                        active === "qa" ? "bg-white/20 text-white" : "text-white/80 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      QA Automation & Manual
                    </button>
                  </div>

                  <button
                    onClick={() => handleMobileNavClick("/faq")}
                    className={`rounded-md px-4 py-3 text-left transition-colors ${
                      active === "faq" ? "bg-white/20 text-white" : "text-white/80 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    FAQ
                  </button>

                  <div className="mt-2 border-t border-white/20 pt-4">
                    <div className="mb-3 px-4 text-sm font-medium text-white/60">Case Studies</div>
                    <button
                      onClick={() => handleMobileNavClick("/case-studies")}
                      className={`w-full rounded-md px-4 py-3 text-left transition-colors ${
                        active === "case-studies"
                          ? "bg-white/20 text-white"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      All Projects
                    </button>
                    <button
                      onClick={() => handleMobileNavClick("/case-studies/com-lands")}
                      className={`w-full rounded-md px-4 py-3 text-left transition-colors ${
                        active === "case-studies"
                          ? "bg-white/20 text-white"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      Com Lands
                    </button>
                    <button
                      onClick={() => handleMobileNavClick("/case-studies/truth-or-dare")}
                      className={`w-full rounded-md px-4 py-3 text-left transition-colors ${
                        active === "case-studies"
                          ? "bg-white/20 text-white"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      Truth or Dare
                    </button>
                    <button
                      onClick={() => handleMobileNavClick("/case-studies/boat-export")}
                      className={`w-full rounded-md px-4 py-3 text-left transition-colors ${
                        active === "case-studies"
                          ? "bg-white/20 text-white"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      Boat Export
                    </button>
                    <button
                      onClick={() => handleMobileNavClick("/case-studies/chillbill")}
                      className={`w-full rounded-md px-4 py-3 text-left transition-colors ${
                        active === "case-studies"
                          ? "bg-white/20 text-white"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      Chillbill
                    </button>
                    <button
                      onClick={() => handleMobileNavClick("/case-studies/digibdr")}
                      className={`w-full rounded-md px-4 py-3 text-left transition-colors ${
                        active === "case-studies"
                          ? "bg-white/20 text-white"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      Digibdr
                    </button>
                    <button
                      onClick={() => handleMobileNavClick("/case-studies/reachfi")}
                      className={`w-full rounded-md px-4 py-3 text-left transition-colors ${
                        active === "case-studies"
                          ? "bg-white/20 text-white"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      Reachfi
                    </button>
                    <button
                      onClick={() => handleMobileNavClick("/case-studies/sxipher-ai")}
                      className={`w-full rounded-md px-4 py-3 text-left transition-colors ${
                        active === "case-studies"
                          ? "bg-white/20 text-white"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      Sxipher AI
                    </button>
                    <button
                      onClick={() => handleMobileNavClick("/case-studies/teledyne-isco-flowcalc")}
                      className={`w-full rounded-md px-4 py-3 text-left transition-colors ${
                        active === "case-studies"
                          ? "bg-white/20 text-white"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      Teledyne ISCO Flowcalc
                    </button>
                    <button
                      onClick={() => handleMobileNavClick("/case-studies/trackmyjobs")}
                      className={`w-full rounded-md px-4 py-3 text-left transition-colors ${
                        active === "case-studies"
                          ? "bg-white/20 text-white"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      Track My Jobs
                    </button>
                    <button
                      onClick={() => handleMobileNavClick("/case-studies/tripsha")}
                      className={`w-full rounded-md px-4 py-3 text-left transition-colors ${
                        active === "case-studies"
                          ? "bg-white/20 text-white"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      Tripsha
                    </button>
                  </div>

                  <button
                    onClick={() => handleMobileNavClick("/about-us")}
                    className={`rounded-md px-4 py-3 text-left transition-colors ${
                      active === "about-us"
                        ? "bg-white/20 text-white"
                        : "text-white/80 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    About us
                  </button>
                </nav>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}
