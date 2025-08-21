import Test from "@/public/assets/bgs/start-project-bg.png";
import { Button } from "@/components/ui/button";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Link from "next/link";
export default function StartProject({ link = "" }: { link: string }) {
  return (
    <div
      style={{ backgroundImage: `url(${Test.src})` }}
      className="flex h-screen w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
    >
      <div className="flex flex-col items-center justify-center gap-8">
        <span className="bricolage text-[64px] font-[700]">
          Start a project <br /> with LogicCraft
        </span>
        <Link href={link}>
          <BackgroundGradient>
            <Button type="submit" className="bg-opacity-100-black w-full rounded-full border py-3 text-white">
              Become a client
            </Button>
          </BackgroundGradient>
        </Link>
      </div>
    </div>
  );
}
