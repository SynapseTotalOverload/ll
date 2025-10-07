import { Button } from "../ui/button";
import InfoCard from "./info-card";
import ArrowRight from "@/public/assets/svg/arrow-right.svg";
import Link from "next/link";
export default function PortfolioCard({
  tags,
  fullLink,
  fullName,
  platform,
  description,
  backgroundUrl,
}: {
  tags: string[];
  fullLink: string;
  fullName: string;
  platform: string;
  description: string;
  backgroundUrl: string;
}) {
  return (
    <InfoCard className="h-[90vh] bg-no-repeat">
      <div
        style={{
          backgroundImage: `url(${backgroundUrl})`,
          backgroundOrigin: "content-box",
          backgroundSize: "140%",
          backgroundPosition: "center",
        }}
        className="flex h-full w-full flex-col justify-between rounded-2xl bg-no-repeat p-6"
      >
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-charcole text-[14px]">{platform}</span>
            <span className="bricolage text-[42px] font-[700]">{fullName}</span>
          </div>
          <span className="max-w-[36%] font-[400] text-white">{description}</span>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="bg-opacity-50-black border-border-black flex flex-row gap-6 rounded-full p-4 px-6">
            {tags.map((item, id) => {
              return (
                <span className="text-[14px] font-[300] text-white capitalize" key={item + id}>
                  {"#" + item}
                </span>
              );
            })}
          </div>
          <Link href={fullLink} className="flex flex-row items-center">
            <span className="font-[700]">Check out the full story and results here</span>
            <Button size="icon" className="blue-grad">
              <ArrowRight className="text-night-blue size-6" />
            </Button>
          </Link>
        </div>
      </div>
    </InfoCard>
  );
}
