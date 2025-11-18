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
    <InfoCard className="h-[60vh] p-4 sm:h-[70vh] sm:p-5 md:h-[80vh] md:p-6 lg:h-[90vh]">
      <div
        className="no-repeat flex h-full w-full flex-col justify-between rounded-2xl bg-cover p-4 sm:p-5 md:p-6"
        style={{
          backgroundImage: `url(${backgroundUrl})`,
        }}
      >
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center sm:gap-4">
          <div className="flex flex-col gap-2">
            <span className="bricolage text-[24px] font-[700] sm:text-[32px] md:text-[36px] lg:text-[42px]">Home Page</span>
          </div>
          <span className="w-full text-[14px] font-[400] text-white sm:max-w-[50%] sm:text-[15px] md:max-w-[40%] md:text-[16px] lg:max-w-[36%]">{description}</span>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="h-[70%] w-full object-contain sm:h-[75%] md:h-[80%]" src={mainImage} alt="main-image" />
      </div>
    </InfoCard>
  );
}
