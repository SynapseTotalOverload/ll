import Image from "next/image";

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
      style={{ backgroundImage: `url(${backgroundUrl})` }}
      className="flex flex-row items-center justify-between gap-[90px] rounded-[16px]"
    >
      <div className="flex max-w-[50%] flex-col gap-8 py-[60px] pl-8">
        <span className="bricolage text-[42px] font-[700] text-white">About the project</span>
        <span className="text-[20px] font-[300] text-white">{description}</span>
      </div>
      <Image src={image} alt="about-project" className="max-h-[460px] w-full py-[32px]" width={100} height={100} />
    </div>
  );
}
