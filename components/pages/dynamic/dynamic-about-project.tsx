export default function DynamicAboutProject({
  description,
  image,
  backgroundUrl,
}: {
  description: string;
  image: string;
  backgroundUrl: string;
}) {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundUrl}) ` }}
      className="flex flex-row items-center justify-between gap-[90px] rounded-[16px] bg-cover"
    >
      <div className="flex max-w-[50%] flex-col gap-8 py-[60px] pl-8">
        <span className="bricolage text-[42px] font-[700] text-white">About the project</span>
        <span className="text-[20px] font-[300] text-white">{description}</span>
      </div>

      <div className="flex w-full flex-1 items-center justify-end">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt="about-project" className="max-h-[460px] object-contain py-[32px]" />
      </div>
    </div>
  );
}
