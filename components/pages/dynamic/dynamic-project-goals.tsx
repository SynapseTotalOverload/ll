export default function DynamicProjectGoals({ goals }: { goals: { sign: string; goal: string }[] }) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:gap-6 md:mt-16 md:grid-cols-2 md:gap-8 lg:mt-20 lg:gap-10">
      <span className="bricolage text-[28px] font-[700] sm:text-[36px] md:text-[42px]">Project goals</span>
      <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
        {goals.map((goal, index) => (
          <div className="flex flex-col gap-1 sm:gap-2" key={index}>
            <span className="text-plastic text-[14px] font-[700] sm:text-[16px]">{goal.sign}</span>
            <span className="text-[12px] font-[400] text-white sm:text-[14px] md:text-[16px]">{goal.goal}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
