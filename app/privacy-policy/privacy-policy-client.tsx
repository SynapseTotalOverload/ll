"use client";
import Footer from "@/components/modules/footer";
import MenuBar from "@/components/modules/menu-bar";
import Logo from "@/components/ui/logo";

export default function PrivacyPolicyPageClient() {
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
        <h1 className="mb-8 text-3xl font-bold text-white sm:text-4xl md:text-5xl">Privacy Policy</h1>
        <p className="mb-4 text-sm text-white/80 sm:text-base">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-invert max-w-none space-y-6 text-white/90">
          <section>
            <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">1. Introduction</h2>
            <p className="mb-4 text-sm leading-relaxed sm:text-base">
              LogicCraft (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit
              our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">2. Information We Collect</h2>
            <p className="mb-4 text-sm leading-relaxed sm:text-base">We may collect information about you in a variety of ways:</p>
            <ul className="ml-6 list-disc space-y-2 text-sm sm:text-base">
              <li>
                <strong>Personal Data:</strong> Name, email address, phone number, company name, and other contact
                information you provide when contacting us or requesting our services.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you access and use our website, including your IP
                address, browser type, pages visited, and time spent on pages.
              </li>
              <li>
                <strong>Project Information:</strong> Details about your project requirements, business needs, and other
                information shared during consultations and service delivery.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">3. How We Use Your Information</h2>
            <p className="mb-4 text-sm leading-relaxed sm:text-base">We use the information we collect to:</p>
            <ul className="ml-6 list-disc space-y-2 text-sm sm:text-base">
              <li>Provide, maintain, and improve our services</li>
              <li>Process your requests and respond to your inquiries</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, prevent, and address technical issues</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">4. Data Protection</h2>
            <p className="mb-4 text-sm leading-relaxed sm:text-base">
              We implement appropriate technical and organizational security measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
              over the Internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">5. Data Sharing and Disclosure</h2>
            <p className="mb-4 text-sm leading-relaxed sm:text-base">
              We do not sell, trade, or rent your personal information to third parties. We may share your information
              only in the following circumstances:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-sm sm:text-base">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations or respond to lawful requests</li>
              <li>To protect our rights, privacy, safety, or property</li>
              <li>With service providers who assist us in operating our business (under strict confidentiality
                agreements)</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">6. Your Rights</h2>
            <p className="mb-4 text-sm leading-relaxed sm:text-base">You have the right to:</p>
            <ul className="ml-6 list-disc space-y-2 text-sm sm:text-base">
              <li>Access and receive a copy of your personal data</li>
              <li>Rectify inaccurate or incomplete data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">7. Cookies and Tracking Technologies</h2>
            <p className="mb-4 text-sm leading-relaxed sm:text-base">
              We may use cookies and similar tracking technologies to track activity on our website and hold certain
              information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
              sent.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">8. GDPR Compliance</h2>
            <p className="mb-4 text-sm leading-relaxed sm:text-base">
              If you are located in the European Economic Area (EEA), you have certain data protection rights under the
              General Data Protection Regulation (GDPR). We are committed to complying with GDPR requirements and
              respecting your privacy rights.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">9. Data Retention</h2>
            <p className="mb-4 text-sm leading-relaxed sm:text-base">
              We will retain your personal information only for as long as necessary to fulfill the purposes outlined in
              this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">10. Changes to This Privacy Policy</h2>
            <p className="mb-4 text-sm leading-relaxed sm:text-base">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the &quot;Last updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">11. Contact Us</h2>
            <p className="mb-4 text-sm leading-relaxed sm:text-base">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mb-4 text-sm leading-relaxed sm:text-base">
              Email: marketing@logiccrft.com
              <br />
              Address: Lviv, George Washington str, 6
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
