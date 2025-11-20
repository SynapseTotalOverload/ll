"use client";
import Footer from "@/components/modules/footer";
import MenuBar from "@/components/modules/menu-bar";
import Logo from "@/components/ui/logo";
import Link from "next/link";

export default function TermsOfUsagePageClient() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      {/* Header */}
      <header className="flex w-full flex-row items-center justify-between px-4 py-6 sm:px-8 sm:py-8 md:px-12 md:py-10 lg:px-20">
        <Logo className="h-[5vh] origin-top-left scale-[-30%] rotate-180 pt-20 md:scale-[-10%]" />
        <div className="flex flex-1 flex-row items-center justify-end md:justify-center">
          <MenuBar />
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20">
        <h1 className="mb-8 text-3xl font-bold text-white sm:text-4xl md:text-5xl">Terms of Usage</h1>
        <p className="mb-4 text-sm text-white/80 sm:text-base">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-invert max-w-none space-y-6 text-white/90">
          <section>
            <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">1. Acceptance of Terms</h2>
            <p className="mb-4 text-sm leading-relaxed sm:text-base">
              By accessing and using LogicCraft&apos;s services, you accept and agree to be bound by the terms and
              provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">2. Use License</h2>
            <p className="mb-4 text-sm leading-relaxed sm:text-base">
              Permission is granted to temporarily use LogicCraft&apos;s services for personal, non-commercial
              transitory viewing only. This is the grant of a license, not a transfer of title, and under this license
              you may not:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-sm sm:text-base">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on LogicCraft&apos;s website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">3. Service Agreement</h2>
            <p className="mb-4 text-sm leading-relaxed sm:text-base">
              When you engage LogicCraft for software development services, a separate service agreement will be
              executed that outlines the specific terms, deliverables, timelines, and payment terms for your project.
              These Terms of Usage apply in addition to any specific service agreement.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">4. Intellectual Property</h2>
            <p className="mb-4 text-sm leading-relaxed sm:text-base">
              All intellectual property rights in the services and materials provided by LogicCraft remain the property
              of LogicCraft or its licensors. Upon full payment and completion of services, ownership of
              custom-developed software will be transferred to the client as specified in the service agreement.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">5. Limitation of Liability</h2>
            <p className="mb-4 text-sm leading-relaxed sm:text-base">
              In no event shall LogicCraft or its suppliers be liable for any damages (including, without limitation,
              damages for loss of data or profit, or due to business interruption) arising out of the use or inability
              to use the materials on LogicCraft&apos;s services, even if LogicCraft or a LogicCraft authorized
              representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">6. Revisions and Errata</h2>
            <p className="mb-4 text-sm leading-relaxed sm:text-base">
              The materials appearing on LogicCraft&apos;s services could include technical, typographical, or
              photographic errors. LogicCraft does not warrant that any of the materials on its services are accurate,
              complete, or current. LogicCraft may make changes to the materials contained on its services at any time
              without notice.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">7. Contact Information</h2>
            <p className="mb-4 text-sm leading-relaxed sm:text-base">
              If you have any questions about these Terms of Usage, please contact us at marketing@logiccrft.com or
              visit us at Lviv, George Washington str, 6.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
