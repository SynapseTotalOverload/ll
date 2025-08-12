import Link from "next/link";
import { Button } from "../ui/button";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <div className="container flex flex-col items-center">
      <span className="bricolage text-[16vw] font-[800] text-white">
        Logi
        <div className="inline-flex flex-row items-center">
          <span
            style={{
              background: "linear-gradient(40.01deg, #4BBFE9 16.66%, #4BBFE9 52.05%, #007AFF 84.06%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="text-night-blue -mr-4 rotate-180"
          >
            C
          </span>
          <span
            style={{
              background: "linear-gradient(38.01deg, #4BBFE9 16.66%, #4BBFE9 52.05%, #007AFF 84.06%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="text-night-blue -ml-4"
          >
            C
          </span>
        </div>
        raft
      </span>
      <div className="grid w-full grid-cols-[1fr_4fr_1fr] items-center gap-4 py-8">
        <div className="flex flex-col gap-8 self-start">
          <Button className="w-fit" variant="link">
            LogicCraft
          </Button>
          <span className="text-[16px] text-white">logicCraft333@gmail.com</span>
        </div>
        <div className="flex flex-1 flex-col items-center">
          <div className="grid grid-cols-2 gap-16">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-[24px] font-[700] text-white">
                Home
              </Link>
              <Link href="/" className="text-[24px] font-[700] text-white">
                For startups
              </Link>
              <Link href="/" className="text-[24px] font-[700] text-white">
                For businesses
              </Link>
              <Link href="/" className="text-[24px] font-[700] text-white">
                Case studies
              </Link>
              <Link href="/" className="text-[24px] font-[700] text-white">
                About Us
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[24px] font-[700] text-white">Services</span>
              <Link href="/" className="text-[16px] font-[400] text-white">
                UI/UX Design
              </Link>
              <Link href="/" className="text-[16px] font-[400] text-white">
                Graphic design
              </Link>
              <Link href="/" className="text-[16px] font-[400] text-white">
                Mobile and web development
              </Link>
              <Link href="/" className="text-[16px] font-[400] text-white">
                CRM software building
              </Link>
              <Link href="/" className="text-[16px] font-[400] text-white">
                QA Automation and QA Manual
              </Link>
            </div>
          </div>
        </div>
        <div className="flex h-full flex-row gap-6 self-start">
          <Button className="aspect-square size-10 rounded-xl bg-white p-2">
            <Instagram className="text-black" />
          </Button>
          <Button className="aspect-square size-10 rounded-xl bg-white p-2">
            <Instagram className="text-black" />
          </Button>
          <Button className="aspect-square size-10 rounded-xl bg-white p-2">
            <Instagram className="text-black" />
          </Button>
          <Button className="aspect-square size-10 rounded-xl bg-white p-2">
            <Instagram className="text-black" />
          </Button>
        </div>
      </div>
    </div>
  );
}
