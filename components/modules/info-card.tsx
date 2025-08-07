import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export function InfoCardRoot({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      style={{
        boxShadow: "0px 32px 58px 0px #00B7FF0D, 0px -15px 67px 0px #364AFF0D",
      }}
      className={cn("bg-opacity-60-black flex flex-col rounded-2xl p-6", className)}
      {...props}
    >
      {children}
    </div>
  );
}

function InfoCardTitle({ className, children, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "flex flex-col",
        "align-middle font-['Apple_SD_Gothic_Neo'] text-[20px] leading-[100%] font-bold tracking-[0%] uppercase",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

function InfoCardDescription({ className, children, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "flex flex-col",
        "font-['Apple_SD_Gothic_Neo'] text-[16px] leading-[150%] font-medium tracking-[0%]",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

const InfoCard = Object.assign(InfoCardRoot, {
  Title: InfoCardTitle,
  Description: InfoCardDescription,
});

export default InfoCard;
