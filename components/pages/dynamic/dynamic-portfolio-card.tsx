import InfoCard from "@/components/modules/info-card";
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
    <InfoCard className="h-[55vh] min-h-[400px] sm:h-[65vh] sm:min-h-[450px] md:h-[75vh] md:min-h-[500px] lg:h-[85vh] lg:min-h-[600px]">
      <div
        className="no-repeat flex h-full w-full flex-col justify-between rounded-xl bg-cover p-3 sm:rounded-2xl sm:p-4 md:p-5 lg:p-6"
        style={{
          backgroundImage: `url(${backgroundUrl})`,
        }}
      >
        <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center sm:gap-3 md:gap-4">
          <div className="flex flex-col gap-1 sm:gap-2">
            <span className="bricolage text-[20px] font-[700] leading-tight sm:text-[28px] md:text-[32px] lg:text-[38px] xl:text-[42px]">Home Page</span>
          </div>
          <span className="w-full text-[13px] font-[400] leading-snug text-white sm:max-w-[50%] sm:text-[14px] md:max-w-[40%] md:text-[15px] lg:max-w-[36%] lg:text-[16px]">{description}</span>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="h-[65%] w-full object-contain sm:h-[70%] md:h-[75%] lg:h-[80%]" src={mainImage} alt="main-image" />
      </div>
    </InfoCard>
  );
}
