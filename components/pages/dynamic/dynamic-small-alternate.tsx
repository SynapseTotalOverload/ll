import InfoCard from "@/components/modules/info-card";

export default function DynamicSmallAlternate({
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
    <InfoCard className="flex h-full min-h-[450px] flex-col gap-2 border-[1px] border-[#1D1D1E] bg-[#111215] sm:min-h-[500px] sm:gap-3 md:min-h-[550px] md:gap-4">
      <span className="bricolage text-[16px] leading-tight font-bold sm:text-[18px] md:text-[20px] lg:text-[24px]">
        {title}
      </span>
      <div className="flex flex-col gap-2 sm:gap-2.5 md:gap-6">
        {points.map((point, index) => (
          <div className="flex flex-col gap-1 rounded-2xl bg-[#1D1D1E] p-4 sm:gap-1.5" key={index}>
            <span className="text-[13px] leading-snug font-normal text-white sm:text-[14px] md:text-[15px] lg:text-[16px]">
              {point.title}
            </span>
            <ul className="list-inside list-disc text-[11px] leading-relaxed font-normal text-white sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[16px]">
              {point.description.map((description, index) => (
                <li key={index} className="pl-1">
                  {description}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-auto flex w-full flex-1 items-center justify-center rounded-[10px] bg-[#1D1D1E] bg-cover bg-no-repeat py-2 sm:rounded-[12px] sm:py-3 md:rounded-[16px] md:py-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="h-[30vh] max-h-[250px] w-full rounded-[10px] object-contain sm:h-[35vh] sm:max-h-[300px] sm:rounded-[12px] md:h-[40vh] md:max-h-none md:rounded-[16px] lg:h-[45vh]"
          src={image}
          alt={"small-project"}
        />
      </div>
    </InfoCard>
  );
}
