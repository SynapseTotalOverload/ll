"use client";
import CaseStudiesHeroSection from "@/components/pages/case-studies/case-studies-hero-section";
import Footer from "@/components/modules/footer";
import InfoCard from "@/components/modules/info-card";
import Image from "next/image";
import Product from "@/public/assets/placeholder.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ArrowRight from "@/public/assets/svg/arrow-right.svg";
import PortfolioCard from "@/components/modules/portfolio-card";

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col items-center">
      <CaseStudiesHeroSection />

      {/* ===== MAIN CONTENT SECTIONS ===== */}
      <div className="container flex flex-col gap-[32px] pt-[120px]">
        <div className="flex flex-row gap-8">
          <SmallCaseStudies title="Pixy" type="Mobile App" image={Product.src} link="/case-studies/pixy" />
          <SmallCaseStudies title="Outspeak" type="Mobile App" image={Product.src} link="/case-studies/outspeak" />
        </div>
        <PortfolioCard
          platform="Business"
          tags={["Land", "Nature", "Investment", "Marketplace", "Landowner"]}
          fullLink="/case-studies/community-lands"
          fullName="Community Lands"
          description="Community Lands is a platform offering affordable land for purchase across the United States, catering to individuals interested in nature, sustainability, and off-grid living. The site provides a marketplace for diverse land options, resources for prospective landowners, and a community space to connect with others passionate about land ownership and outdoor lifestyles."
          key="community-lands-1"
          backgroundUrl={Product.src}
        />
        <div className="flex flex-row gap-8">
          <SmallCaseStudies
            title="Truth or Dare"
            type="Mobile App"
            image={Product.src}
            link="/case-studies/truth-or-dare"
          />
          <SmallCaseStudies title="Chill Bill" type="Mobile App" image={Product.src} link="/case-studies/chill-bill" />
          <SmallCaseStudies title="DigiBdr" type="Platform" image={Product.src} link="/case-studies/digibdr" />
        </div>
        <div className="flex max-h-[1200px] flex-row gap-8">
          <div className="w-[50%] flex-1">
            <SmallCaseStudies
              title="TELEDYNE ISCO FlowCalc"
              type="Mobile App"
              image={Product.src}
              link="/case-studies/teledyne-isco-flowcalc"
            />
          </div>
          <div className="grid w-[50%] grid-rows-2 gap-8">
            <div className="flex-1">
              <SmallCaseStudies
                title="Track My Jobs"
                type="Platform"
                image={Product.src}
                link="/case-studies/track-my-jobs"
              />
            </div>
            <div className="flex-1">
              <SmallCaseStudies title="Tripsha" type="Platform" image={Product.src} link="/case-studies/tripsha" />
            </div>
          </div>
        </div>
        <PortfolioCard
          platform="Platform"
          tags={["Cybersecurity", "Testing", "Business", "Solutions", "Platform"]}
          fullLink="/case-studies/sxipher-ai"
          fullName="Sxipher.ai"
          description="Sxipher.ai provides cybersecurity solutions focused on advanced penetration testing and security assessments to uncover and address digital vulnerabilities. The platform helps organizations protect their infrastructures by delivering custom security evaluations and risk mitigation strategies."
          key="sxipher-ai-1"
          backgroundUrl={Product.src}
        />
        <div className="flex flex-row gap-8">
          <SmallCaseStudies title="Avantstay" type="Platform" image={Product.src} link="/case-studies/avantstay" />
          <SmallCaseStudies title="ReachFi.Ai" type="Platform" image={Product.src} link="/case-studies/reachfi-ai" />
        </div>
        <PortfolioCard
          platform="Platform"
          tags={["Shipping", "Yachts", "Logistics", "Sellers", "Buyers"]}
          fullLink="/case-studies/boat-export-usa"
          fullName="Boat Export USA"
          description="Boat Export USA was created to simplify the process of purchasing and exporting boats, yachts, and marine equipment from the United States to buyers worldwide. It connects international clients with U.S. sellers, offering support with selection, payment, and global shipping logistics."
          key="boat-export-usa-1"
          backgroundUrl={Product.src}
        />
        <div className="flex flex-row gap-8">
          <SmallCaseStudies title="Avantstay" type="Platform" image={Product.src} link="/case-studies/avantstay" />
          <SmallCaseStudies title="ReachFi.Ai" type="Platform" image={Product.src} link="/case-studies/reachfi-ai" />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export function SmallCaseStudies({
  title,
  type,
  image,
  link,
}: {
  title: string;
  type: string;
  link?: string;
  image: string;
}) {
  return (
    <InfoCard className="flex h-full flex-1 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <span className="text-plastic text-[14px]">{type}</span>
        <InfoCard.Title className="">{title}</InfoCard.Title>
      </div>
      <Image alt="product" className="h-[100px] w-full flex-1 object-cover" src={image} width={300} height={100} />
      {link && (
        <div className="flex flex-row items-center justify-end">
          <Link href={link}>
            <Button size="icon" className="blue-grad">
              <ArrowRight className="text-night-blue flex size-6 items-center justify-center" />
            </Button>
          </Link>
        </div>
      )}
    </InfoCard>
  );
}
