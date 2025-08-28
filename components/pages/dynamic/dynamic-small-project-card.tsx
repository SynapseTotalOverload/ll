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
    <InfoCard className="flex flex-col gap-4">
      <div
        className="flex flex-col gap-4"
        style={{
          backgroundImage: `url(${backgroundUrl})`,
        }}
      >
        <span className="bricolage text-[20px] font-bold">{title}</span>
        <div className="flex flex-col gap-2">
          {points.map((point, index) => (
            <div className="flex flex-col gap-2" key={index}>
              <span className="text-[16px] font-bold text-white">{point.title}</span>
              <ul className="list-inside list-disc text-[16px] font-normal text-white">
                {point.description.map((description, index) => (
                  <li key={index}>{description}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="w-full rounded-[16px] object-contain" src={image} alt={"small-project"} />
      </div>
    </InfoCard>
  );
}
