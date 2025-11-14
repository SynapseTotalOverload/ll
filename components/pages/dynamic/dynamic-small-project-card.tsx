import InfoCard from "@/components/modules/info-card";

export default function DynamicSmallProjectCard({
  title,
  points,
  image,
  backgroundUrl,
}: {
  title: string;

  points: {
    title: string;
    description: string[];
  }[];
  image: string;
  backgroundUrl: string;
}) {
  return (
    <InfoCard className="flex flex-col gap-3 sm:gap-4 md:gap-5">
      <span className="bricolage max-h-[60vh] text-[18px] font-bold sm:text-[20px] md:text-[24px]">{title}</span>
      <div className="flex flex-col gap-2 sm:gap-3">
        {points.map((point, index) => (
          <div className="flex flex-col gap-2" key={index}>
            <span className="text-[14px] font-bold text-white sm:text-[16px]">{point.title}</span>
            <ul className="list-inside list-disc text-[12px] font-normal text-white sm:text-[14px] md:text-[16px]">
              {point.description.map((description, index) => (
                <li key={index}>{description}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div
        style={{ backgroundImage: `url(${backgroundUrl})` }}
        className="flex w-full flex-1 items-center justify-center rounded-[16px] bg-cover py-4"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="h-[50vh] w-full rounded-[16px] object-contain bg-no-repeat" src={image} alt={"small-project"} />
      </div>
    </InfoCard>
  );
}
