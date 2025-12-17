import { cn } from "@/lib/utils";
import { Button } from "./button";
import ArrowRight from "@/public/assets/svg/arrow-right.svg";
import { BackgroundGradient } from "./background-gradient";

export default function GoButton({
  text,
  onClick,
  className,
  textClassName,
}: {
  text: string;
  onClick: () => void;
  className?: string;
  textClassName?: string;
}) {
  return (
    <BackgroundGradient>
      <div
        className={cn(
          "bg-charcole flex w-fit cursor-pointer flex-row items-center justify-between gap-2 rounded-full py-1.5 pr-2 pl-4 sm:gap-4 sm:py-2 sm:pr-3 sm:pl-6",
          className,
        )}
        onClick={onClick}
      >
        <span className={textClassName}>{text}</span>
        <Button size="icon" className="blue-grad p-0.5 sm:p-1">
          <ArrowRight className="text-night-blue flex size-6 items-center justify-center" />
        </Button>
      </div>
    </BackgroundGradient>
  );
}
