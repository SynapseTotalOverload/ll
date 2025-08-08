export function PointLine({ title, description, index }: { title: string; description: string; index: number }) {
  return (
    <div className="flex flex-row gap-[12px]">
      <div className="flex flex-col items-center">
        <div className="bg-night-blue outline-night-blue aspect-square size-4 rounded-full outline-[1px] outline-offset-[4px]" />
        <div className="item-center flex w-full flex-col">
          <div className="bg-night-blue h-full w-[1px]" />
        </div>
      </div>
      <div className="mb-8 flex flex-col gap-2">
        <span className="text-charcoal text-[20px] font-[700]">
          {index}. {title}
        </span>
        <p className="text-[24px] font-[400] text-white">{description}</p>
      </div>
    </div>
  );
}
