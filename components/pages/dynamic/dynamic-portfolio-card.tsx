import InfoCard from "@/components/modules/info-card";
import Image from "next/image";
export default function PortfolioCard({
  description,
  backgroundUrl,
  mainImage,
}: {
  description: string;
  backgroundUrl: string;
  mainImage: string;
}) {
  return (
    <InfoCard className="h-[90vh] p-6">
      <div
        className="flex h-full w-full flex-col justify-between rounded-2xl p-6"
        style={{
          backgroundImage: `url(${backgroundUrl})`,
        }}
      >
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col gap-2">
            <span className="bricolage text-[42px] font-[700]">Home Page</span>
          </div>
          <span className="max-w-[36%] font-[400] text-white">{description}</span>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="h-[80%] w-full object-contain" src={mainImage} alt="main-image" />
      </div>
    </InfoCard>
  );
}
