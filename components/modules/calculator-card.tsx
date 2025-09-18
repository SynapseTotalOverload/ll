import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { LampEffect } from "../ui/lamp-effect";
import TickCircle from "@/public/assets/svg/tick-circle.svg";
import { BackgroundGradient } from "../ui/background-gradient";

export default function CalculatorCard({
  icon,
  title,
  active,
  className,
  onClick,
  props,
}: HTMLAttributes<HTMLDivElement> & {
  icon: React.ReactNode;
  title: string;
  active: boolean;
  className?: string;
  onClick?: () => void;
  props?: HTMLAttributes<HTMLDivElement>;
}) {
  const content = (
    <div
      onClick={onClick}
      className={cn(
        "border-charcole bg-opacity-60-black relative flex min-h-[160px] flex-col items-center justify-center gap-2 rounded-[20px] border p-6",
        className,
        active && "bg-opacity-100-black",
      )}
      {...props}
    >
      <LampEffect className="">{icon}</LampEffect>
      <span className="text-lg font-bold">{title}</span>
      {active && <TickCircle className="text-night-blue absolute top-0 right-0 size-6 sm:size-7 md:size-8" />}
    </div>
  );
  return active ? <BackgroundGradient rounded="rounded-[20px]"> {content} </BackgroundGradient> : content;
}
