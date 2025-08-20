import InfoCard from "@/components/modules/info-card";

export default function DynamicStats({ stats }: { stats: { title: string; value: string }[] }) {
  return (
    <div className="grid grid-cols-3 gap-8">
      {stats.map((stat, index) => (
        <InfoCard key={index}>
          <span className="text-plastic text-[24px] font-[400] uppercase">{stat.title}</span>
          <span
            style={{
              background: "linear-gradient(40.01deg, #4BBFE9 16.66%, #4BBFE9 52.05%, #007AFF 84.06%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="bricolage text-[64px] font-[700]"
          >
            {stat.value}
          </span>
        </InfoCard>
      ))}
    </div>
  );
}
