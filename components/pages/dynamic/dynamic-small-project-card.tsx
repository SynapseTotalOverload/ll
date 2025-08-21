import InfoCard from "@/components/modules/info-card";
import Image from "next/image";

export default function DynamicSmallProjectCard({
  title,
  points,
  image,
}: {
  title: string;

  points: {
    title: string;
    description: string[];
  }[];
  image: string;
}) {
  return (
    <InfoCard className="flex flex-col gap-4">
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
      <Image
        className="w-full rounded-[16px] object-cover"
        src={image}
        alt={"small-project"}
        width={500}
        height={500}
      />
    </InfoCard>
  );
}
