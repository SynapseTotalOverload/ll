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
        "border-charcole bg-opacity-60-black relative flex min-h-[120px] flex-row items-center justify-center gap-2 rounded-[20px] border p-4 sm:min-h-[140px] sm:flex-col sm:gap-2 sm:p-5 md:min-h-[160px] md:p-6",
        className,
        active && "bg-opacity-100-black",
      )}
      {...props}
    >
      {icon && <LampEffect className="sm:mb-1">{icon}</LampEffect>}
      <span className="text-sm font-bold sm:text-base">{title}</span>
      {active && <TickCircle className="text-night-blue absolute top-0 right-0 size-5 sm:size-6 md:size-7 lg:size-8" />}
    </div>
  );
  return active ? <BackgroundGradient rounded="rounded-[20px]"> {content} </BackgroundGradient> : content;
}
