import { cn } from "@/lib/utils";
import Arrows from "@/public/assets/svg/arrows.svg";
import Point from "@/public/assets/svg/point.svg";
export default function DynamicCreationProcess({ processes }: { processes: { title: string; description: string }[] }) {
  return (
    <div className="flex flex-col gap-8 px-4 py-4 sm:gap-12 sm:px-6 sm:py-6 md:gap-16 md:px-10 md:py-8 lg:px-20">
      <span className="bricolage text-[28px] font-[700] sm:text-[36px] md:text-[42px]">Creation processes</span>
      {processes.map((process, index) => (
        <div
          style={{
            paddingLeft: Math.min(index * 40, 200),
          }}
          className={cn("flex flex-col items-start gap-4 sm:gap-6 md:flex-row md:items-center md:gap-8")}
          key={process.title}
        >
          <div className="border-charcole flex flex-row items-center gap-3 rounded-full border-2 bg-transparent pr-2 sm:gap-4 sm:pr-3 md:pr-4">
            <div className="bg-charcole flex flex-row items-center justify-center gap-2 rounded-full px-3 py-2 text-white sm:gap-3 sm:px-4 sm:py-4">
              <Point />
              <span className="text-[12px] font-[700] text-white sm:text-[14px] md:text-[16px]">{process.title}</span>
            </div>
            <Arrows />
          </div>
          <span className="text-[12px] font-[400] text-white sm:text-[14px] md:text-[16px]">{process.description}</span>
        </div>
      ))}
    </div>
  );
}
