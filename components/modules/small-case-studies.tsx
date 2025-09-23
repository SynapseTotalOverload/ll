import InfoCard from "@/components/modules/info-card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ArrowRight from "@/public/assets/svg/arrow-right.svg";

export function SmallCaseStudies({
  title,
  type,
  image,
  link,
}: {
  title: string;
  type: string;
  link?: string;
  image: string;
}) {
  return (
    <InfoCard className="flex h-full flex-1 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <span className="text-plastic text-[14px]">{type}</span>
        <InfoCard.Title className="">{title}</InfoCard.Title>
      </div>
      <Image alt="product" className="h-[100px] w-full flex-1 object-cover" src={image} width={300} height={100} />
      {link && (
        <div className="flex flex-row items-center justify-end">
          <Link href={link}>
            <Button size="icon" className="blue-grad">
              <ArrowRight className="text-night-blue flex size-6 items-center justify-center" />
            </Button>
          </Link>
        </div>
      )}
    </InfoCard>
  );
}
