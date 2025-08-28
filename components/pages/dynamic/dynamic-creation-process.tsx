import { cn } from "@/lib/utils";
import Arrows from "@/public/assets/svg/arrows.svg";
import Point from "@/public/assets/svg/point.svg";
export default function DynamicCreationProcess({ processes }: { processes: { title: string; description: string }[] }) {
  return (
    <div className="flex flex-col gap-16 px-[100px] py-8">
      <span className="bricolage text-[42px] font-[700]">Creation processes</span>
      {processes.map((process, index) => (
        <div
          style={{
            paddingLeft: index * 150,
          }}
          className={cn("flex flex-row items-center gap-8")}
          key={process.title}
        >
          <div className="border-charcole flex flex-row items-center gap-8 rounded-full border-2 bg-transparent pr-4">
            <div className="bg-charcole flex flex-row items-center justify-center gap-4 rounded-full px-4 py-4 text-white">
              <Point />
              <span className="text-[16px] font-[700] text-white">{process.title}</span>
            </div>
            <Arrows />
          </div>
          <span className="text-[16px] font-[400] text-white">{process.description}</span>
        </div>
      ))}
    </div>
  );
}
