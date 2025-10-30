import InfoCard from "@/components/modules/info-card";

export default function DynamicStats({ stats }: { stats: { title: string; value: string }[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-8 lg:gap-10">
      {stats.map((stat, index) => (
        <InfoCard key={index}>
          <span className="text-plastic text-[16px] font-[400] uppercase sm:text-[20px] md:text-[24px]">
            {stat.title}
          </span>
          <span
            style={{
              background: "linear-gradient(40.01deg, #4BBFE9 16.66%, #4BBFE9 52.05%, #007AFF 84.06%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="bricolage text-[40px] font-[700] sm:text-[52px] md:text-[64px]"
          >
            {stat.value}
          </span>
        </InfoCard>
      ))}
    </div>
  );
}
