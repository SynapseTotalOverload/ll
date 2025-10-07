"use client";
import SignTitle from "@/components/modules/sign-title";
import InfoCard from "@/components/modules/info-card";
import Image from "next/image";
import bgA1 from "@/public/assets/mocks/about-us/a1.png";
import bgA2 from "@/public/assets/mocks/about-us/a2.png";
import bgA3 from "@/public/assets/mocks/about-us/a3.png";
import bgA4 from "@/public/assets/mocks/about-us/a4.png";

export default function CompanyValues() {
  return (
    <div className="flex w-full flex-col gap-8 px-20">
      <SignTitle>
        <SignTitle.Title>Company values</SignTitle.Title>
        <SignTitle.Separator />
      </SignTitle>

      <div className="grid-layout grid grid-cols-5 grid-rows-5 gap-[24px]">
        {/* Innovation Card */}
        <InfoCard style={{ gridArea: "a", justifyContent: "space-between" }}>
          <InfoCard.Title className="mt-6 text-2xl">Innovations</InfoCard.Title>
          <InfoCard.Description className="mt-4">
            We are committed to exploring innovative and creative solutions for every challenge we encounter. Our
            approach prioritizes innovation and efficiency, focusing on delivering cutting-edge results rather than
            opting for mere convenience.
          </InfoCard.Description>
          <Image src={bgA1} alt="innovations" />
        </InfoCard>

        {/* Integrity Card */}
        <InfoCard style={{ gridArea: "b", flexDirection: "row", gap: "32px" }} className="">
          <div className="flex flex-col justify-between">
            <InfoCard.Title className="mt-6 text-2xl">Integrity</InfoCard.Title>
            <InfoCard.Description className="mt-4">
              Analyzing each idea in detail enables us to develop precise estimations, establish milestones, and outline
              the primary goal. This ensures that our clients are well-informed about every step of the project before
              its commencement.
            </InfoCard.Description>
          </div>

          <Image src={bgA2} alt="integrity" />
        </InfoCard>

        {/* Resilience Card */}
        <InfoCard style={{ gridArea: "c" }} className="">
          <InfoCard.Title className="mt-6 text-2xl">Resilience</InfoCard.Title>
          <InfoCard.Description className="mt-4">
            We face challenges with dedication, creativity, and determination. Your genuine efforts reflect the values
            we always uphold.
          </InfoCard.Description>
        </InfoCard>

        {/* Empowerment Card */}
        <InfoCard style={{ gridArea: "d" }} className="">
          <InfoCard.Title className="mt-6 text-2xl">Empowerment</InfoCard.Title>
          <InfoCard.Description className="mt-4">
            In our company, we place equal importance on the success of our team members and clients. We are creating a
            culture that values continuous learning and growth, providing ample opportunities for individuals and
            businesses to thrive.
          </InfoCard.Description>
          <Image className="mt-6" src={bgA4} alt="empowerment" />
        </InfoCard>

        {/* Cheerfulness Card */}
        <InfoCard style={{ gridArea: "e" }} className="">
          <div>
            <InfoCard.Title className="mt-6 text-2xl">Cheerfulness</InfoCard.Title>
            <InfoCard.Description className="mt-4">
              We inject energy, positivity and fun into every task. We believe in actively engaging and inspiring our
              colleagues, clients, and communities - this approach is the foundation of our work.
            </InfoCard.Description>
          </div>

          <Image src={bgA3} alt="cheerfulness" className="mt-6" />
        </InfoCard>
      </div>
    </div>
  );
}
