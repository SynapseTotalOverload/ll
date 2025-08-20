"use client";
import InfoCard from "@/components/modules/info-card";

export default function AboutUsMainContent() {
  return (
    <div className="flex w-full flex-col gap-16 px-20">
      {/* About Us Content */}
      <div>
        <div className="grid max-h-[270px] grid-cols-3 place-items-center gap-8">
          {/* About Us Card 1 */}
          <InfoCard className="">
            <InfoCard.Title className="mt-6">About Us</InfoCard.Title>
            <InfoCard.Description className="mt-4">
              LogicCraft is committed to pioneering innovative product design, delivering exceptional user experiences,
              and leveraging state-of-the-art AI solutions. Our primary goal is to transform the future by
              revolutionizing and improving people&apos;s lives through technological progress.
            </InfoCard.Description>
          </InfoCard>

          {/* Who We Are Card 2 */}
          <InfoCard className="">
            <InfoCard.Title className="mt-6">Who we are</InfoCard.Title>
            <InfoCard.Description className="mt-4">
              At our core, we are a team of passionate and driven professionals, united by a modern approach to crafting
              innovative business solutions. We excel in harnessing the power of synergy, seamlessly blending our
              expertise in design, development, QA, and PMO to achieve outstanding results.
            </InfoCard.Description>
          </InfoCard>

          {/* Partners Card 3 */}
          <InfoCard className="">
            <InfoCard.Title className="mt-6">Partners are crucial to our success</InfoCard.Title>
            <InfoCard.Description className="mt-4">
              Our partners play a pivotal role in our achievements. Their collaboration is essential for crafting
              top-tier products and driving collective growth and improvement. As we create effective platforms, web
              applications, websites, and mobile apps, we not only enhance our offerings but also contribute to
              increased revenue and success for our partners.
            </InfoCard.Description>
          </InfoCard>
        </div>
      </div>
    </div>
  );
}
