export default function DynamicProjectGoals({ goals }: { goals: { sign: string; goal: string }[] }) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:gap-6 md:mt-16 md:grid-cols-2 md:gap-8 lg:mt-20 lg:gap-10">
      <span className="bricolage text-[32px] font-[700] text-white sm:text-[40px] md:text-[48px] lg:text-[56px]">
        Project goals
      </span>
      <ul className="flex list-inside list-disc flex-col gap-3 sm:gap-4 md:gap-5">
        {goals.map((goal, index) => (
          <li className="text-[12px] text-white sm:text-[14px] md:text-[16px]" key={index}>
            {goal.goal}
          </li>
        ))}
      </ul>
    </div>
  );
}
