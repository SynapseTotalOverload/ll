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
      className="flex flex-col items-center justify-between gap-6 rounded-[16px] bg-cover px-4 py-8 sm:gap-8 sm:px-6 sm:py-12 md:flex-row md:gap-12 md:px-8 md:py-16 lg:gap-20 lg:px-10 lg:py-20"
    >
      <div className="flex w-full flex-col gap-6 sm:gap-8 md:max-w-[50%]">
        <span className="bricolage text-[28px] font-[700] text-white sm:text-[36px] md:text-[42px]">
          About the project
        </span>
        <span className="text-[14px] font-[300] text-white sm:text-[16px] md:text-[20px]">{description}</span>
      </div>

      <div className="flex w-full flex-1 items-center justify-center md:justify-end">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt="about-project"
          className="max-h-[300px] object-contain py-4 sm:max-h-[400px] sm:py-6 md:max-h-[460px] md:py-8"
        />
      </div>
    </div>
  );
}
