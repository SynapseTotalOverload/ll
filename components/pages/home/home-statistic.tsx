export function HomeStatistic() {
  return (
    <div className="grid grid-cols-1 gap-20 px-20 sm:grid-cols-2 lg:grid-cols-4">
      <HomeStatisticItem title="1,5 MO." description="average MVP time-to-market" />
      <HomeStatisticItem title="8k" description="minimum MVP budget" />
      <HomeStatisticItem title="2019" description="helping businesses since" />
      <HomeStatisticItem title="50+" description="projects delivered" />
    </div>
  );
}

export function HomeStatisticItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-night-blue bricolage text-[56px] font-bold">{title}</span>
      <span className="text-night-blue bricolage text-md">{description}</span>
    </div>
  );
}
