import Test from "@/public/assets/bgs/start-project-bg.png";
import { Button } from "@/components/ui/button";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Link from "next/link";
export default function StartProject({ link = "" }: { link: string }) {
  return (
    <div
      style={{ backgroundImage: `url(${Test.src})` }}
      className="flex min-h-[60vh] w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-12 sm:min-h-[70vh] sm:px-6 md:min-h-screen md:px-8"
    >
      <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10">
        <span className="bricolage text-center text-[32px] font-[700] sm:text-[48px] md:text-[64px]">
          Start a project <br /> with LogicCraft
        </span>
        <Link href={link}>
          <BackgroundGradient>
            <Button
              type="submit"
              className="bg-opacity-100-black w-full rounded-full border px-6 py-2 text-[14px] text-white sm:px-8 sm:py-3 md:px-10 md:py-4"
            >
              Become a client
            </Button>
          </BackgroundGradient>
        </Link>
      </div>
    </div>
  );
}
