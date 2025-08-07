import { cn } from "@/lib/utils";
import { Button } from "./button";
import ArrowRight from "@/public/assets/svg/arrow-right.svg";
import { BackgroundGradient } from "./background-gradient";

export default function GoButton({
  text,
  onClick,
  className,
}: {
  text: string;
  onClick: () => void;
  className?: string;
}) {
  return (
    <BackgroundGradient>
      <div
        className={cn(
          "bg-charcole flex w-fit cursor-pointer flex-row items-center justify-between gap-4 rounded-full py-2 pr-3 pl-6",
          className,
        )}
        onClick={onClick}
      >
        <span>{text}</span>
        <Button size="icon" className="blue-grad">
          <ArrowRight className="text-night-blue size-6" />
        </Button>
      </div>
    </BackgroundGradient>
  );
}
