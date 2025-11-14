import type { Metadata } from "next";
import ContactUs from "@/components/pages/home/home-contact-us";

export const metadata: Metadata = {
  title: "Contact Us - LogicCraft | Get in Touch",
  description:
    "Contact LogicCraft for custom software development, web development, mobile app development, and digital transformation services. Let's discuss your project.",
  keywords:
    "contact LogicCraft, software development contact, web development services, mobile app development, get quote, software consultation",
  authors: [{ name: "LogicCraft Team" }],
  openGraph: {
    title: "Contact Us - LogicCraft | Get in Touch",
    description:
      "Contact LogicCraft for custom software development, web development, mobile app development, and digital transformation services.",
    type: "website",
    url: "https://logiccraft.com/contact-us",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - LogicCraft | Get in Touch",
    description: "Contact LogicCraft for custom software development and digital solutions.",
  },
  alternates: {
    canonical: "https://logiccraft.com/contact-us",
  },
};

export default function ContactUsPage() {
  return (
    <div>
      <ContactUs />
    </div>
  );
}
