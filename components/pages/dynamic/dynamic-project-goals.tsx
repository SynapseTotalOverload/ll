export default function DynamicProjectGoals({ goals }: { goals: { sign: string; goal: string }[] }) {
  return (
    <div className="mt-[100px] grid grid-cols-2 gap-4">
      <span className="bricolage text-[42px] font-[700]">Project goals</span>
      <div className="flex flex-col gap-4">
        {goals.map((goal, index) => (
          <div className="flex flex-col gap-2" key={index}>
            <span className="text-plastic text-[16px] font-[700]">{goal.sign}</span>
            <span className="text-[16px] font-[400] text-white">{goal.goal}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
