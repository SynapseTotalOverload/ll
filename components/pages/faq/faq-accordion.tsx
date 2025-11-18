"use client";
import SignTitle from "@/components/modules/sign-title";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQAccordion() {
  return (
    <div className="flex w-full flex-col gap-8 px-4 sm:gap-12 sm:px-6 md:gap-16 md:px-8 lg:gap-20 lg:px-12 xl:gap-24 xl:px-16">
      <SignTitle>
        <SignTitle.Title className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Frequently Asked Questions
        </SignTitle.Title>
        <SignTitle.Description className="text-sm sm:text-base md:text-lg lg:text-xl">
          Find answers to the most common questions about our services
        </SignTitle.Description>
        <SignTitle.Separator />
      </SignTitle>

      <div className="flex w-full flex-col items-center justify-center">
        <Accordion
          type="single"
          collapsible
          className="flex w-full max-w-4xl flex-col gap-3 sm:gap-4 md:gap-5"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1" className="">
            <AccordionTrigger className="text-left text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
              <span>What&apos;s the difference between the front-end and the back-end?</span>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 pt-2 sm:gap-4 sm:pt-3 md:gap-5 md:pt-4">
              <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                The front-end is all about the visual side of the project, the one that users interact with. The
                back-end is what goes behind the scenes: it collects and processes data and then transfers it back to
                the client side. Roughly, the data do not go directly from user A to user B—they always pass through the
                back-end first.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="">
            <AccordionTrigger className="text-left text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
              What are your pricing models?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 pt-2 sm:gap-4 sm:pt-3 md:gap-5 md:pt-4">
              <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                We offer flexible pricing models tailored to your project needs. Our main options include fixed-price contracts for well-defined projects, time and materials for ongoing development, and dedicated team models for long-term partnerships. For startups, we provide MVP packages starting from $8k with a typical timeline of 1.5 months. We also offer milestone-based payments and can customize a pricing structure that aligns with your budget and project requirements.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="">
            <AccordionTrigger className="text-left text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
              How long does it take to get started?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 pt-2 sm:gap-4 sm:pt-3 md:gap-5 md:pt-4">
              <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                Getting started is quick and straightforward. After our initial interview call (1–2 short calls), we typically begin the discovery and research phase within 1–2 weeks. The entire onboarding process, including requirements finalization and contract signing, usually takes about 1 week. Once we have a signed agreement, we can start development immediately. For urgent projects, we can expedite the process and begin work within a few days.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="">
            <AccordionTrigger className="text-left text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
              Do you offer any discounts for long-term contracts?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 pt-2 sm:gap-4 sm:pt-3 md:gap-5 md:pt-4">
              <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                Yes, we value long-term partnerships and offer attractive discounts for extended contracts. Projects spanning 6 months or more typically receive a 10–15% discount, while annual contracts can save you up to 20%. We also provide dedicated team models with reduced rates for ongoing development work. The exact discount depends on the project scope, duration, and commitment level. Contact us to discuss a customized pricing plan for your long-term needs.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="">
            <AccordionTrigger className="text-left text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
              What are the payment methods available?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 pt-2 sm:gap-4 sm:pt-3 md:gap-5 md:pt-4">
              <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                We accept various payment methods to make transactions convenient for our clients. You can pay via bank transfer, wire transfer, credit or debit cards, and popular payment platforms like PayPal and Stripe. For international clients, we also support cryptocurrency payments. Payment schedules are typically structured as milestone-based installments, with an initial deposit to begin work. All payment terms are clearly outlined in our contract before project commencement.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="">
            <AccordionTrigger className="text-left text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
              Can I customize my plan based on my needs?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 pt-2 sm:gap-4 sm:pt-3 md:gap-5 md:pt-4">
              <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                Absolutely! We believe every project is unique, and we work closely with you to create a customized plan that fits your specific requirements, budget, and timeline. During our discovery phase, we analyze your needs and propose a tailored solution that may include specific features, development approaches, team composition, and pricing structures. Whether you need a simple MVP or a complex enterprise solution, we'll design a plan that aligns perfectly with your goals.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="">
            <AccordionTrigger className="text-left text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
              Are there any additional fees for extra features?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 pt-2 sm:gap-4 sm:pt-3 md:gap-5 md:pt-4">
              <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                Any features or changes beyond the initially agreed scope will be discussed and quoted separately. We always provide transparent pricing before implementing additional features, so you'll know exactly what you're paying for. If you want to add features during development, we'll provide a detailed estimate and timeline impact. There are no hidden fees—everything is clearly documented in our contracts and change orders. We believe in transparent communication about costs throughout the project.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8" className="">
            <AccordionTrigger className="text-left text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
              Is there a trial period available for testing the service?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 pt-2 sm:gap-4 sm:pt-3 md:gap-5 md:pt-4">
              <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                While we don't offer a traditional "trial period" for development services, we provide several ways to evaluate our work before committing to a full project. We offer a discovery phase where we analyze your needs and provide detailed proposals. For larger projects, we can start with an MVP or proof of concept. Additionally, we provide portfolio examples and case studies, and we're happy to schedule a consultation call to discuss your project and answer any questions. This approach ensures you understand our capabilities before making a commitment.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9" className="">
            <AccordionTrigger className="text-left text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
              Do you provide customer support during weekends?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 pt-2 sm:gap-4 sm:pt-3 md:gap-5 md:pt-4">
              <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                Our standard support hours are Monday through Friday, but we understand that urgent issues can arise at any time. For critical production issues, we provide emergency support during weekends and holidays. This is typically included in our maintenance and support packages. For clients with dedicated teams or ongoing projects, we can arrange weekend support as part of a custom agreement. Regular development work follows standard business hours, but we're flexible and can accommodate urgent needs when necessary.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10" className="">
            <AccordionTrigger className="text-left text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
              Are there any restrictions on the number of users per plan?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 pt-2 sm:gap-4 sm:pt-3 md:gap-5 md:pt-4">
              <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                Since we're a custom software development company, we don't operate on a traditional "plan" system with user limits. Instead, we build solutions tailored to your specific needs, whether that's for 10 users or 10,000 users. The architecture and infrastructure we design will scale according to your requirements. If you're asking about our development team access or project stakeholders, we typically work with your core team and can accommodate multiple stakeholders through our communication channels and project management tools.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-11" className="">
            <AccordionTrigger className="text-left text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
              What happens if I exceed the usage limits of my plan?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 pt-2 sm:gap-4 sm:pt-3 md:gap-5 md:pt-4">
              <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                As a custom development company, we don't impose usage limits on the software we build for you. However, if your application experiences unexpected growth or increased usage that requires infrastructure scaling, we'll work with you to optimize performance and scale resources accordingly. This may involve additional costs for hosting, cloud services, or performance optimization work. We always discuss these scenarios proactively and provide solutions that align with your growth trajectory and budget.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-12" className="">
            <AccordionTrigger className="text-left text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
              How secure is my data with your service?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 pt-2 sm:gap-4 sm:pt-3 md:gap-5 md:pt-4">
              <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                Data security is a top priority for us. We implement industry-standard security practices including encryption in transit and at rest, secure authentication mechanisms, regular security audits, and compliance with GDPR and other data protection regulations. All our team members sign strict NDAs, and we follow secure development practices. We can also help you implement additional security measures like two-factor authentication, role-based access control, and regular security updates. Your data remains confidential and is only used for project development purposes.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-13" className="">
            <AccordionTrigger className="text-left text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
              Can I downgrade or upgrade my plan at any time?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 pt-2 sm:gap-4 sm:pt-3 md:gap-5 md:pt-4">
              <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                Since we work with custom development projects rather than subscription plans, changes to project scope are handled through our change management process. You can always request to add features (upgrade) or reduce scope (downgrade), and we'll provide updated timelines and pricing. For ongoing maintenance and support contracts, you can adjust the level of support or team size as your needs change. We're flexible and work with you to find solutions that match your evolving requirements and budget.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-14" className="">
            <AccordionTrigger className="text-left text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
              Are there any integrations with third-party tools available?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 pt-2 sm:gap-4 sm:pt-3 md:gap-5 md:pt-4">
              <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                Yes, we can integrate your software with a wide range of third-party tools and services. Common integrations include payment gateways (Stripe, PayPal), authentication services (Auth0, Firebase), cloud storage (AWS S3, Google Cloud), analytics tools (Google Analytics, Mixpanel), CRM systems (Salesforce, HubSpot), email services (SendGrid, Mailchimp), and many others. We'll work with you to identify which integrations are needed for your project and implement them securely using APIs and webhooks. If you have specific tools in mind, let us know during the discovery phase.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-15" className="">
            <AccordionTrigger className="text-left text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
              What is your policy on data privacy and GDPR compliance?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 pt-2 sm:gap-4 sm:pt-3 md:gap-5 md:pt-4">
              <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                We take data privacy seriously and ensure GDPR compliance in all our projects. We implement privacy-by-design principles, including data minimization, user consent management, right to access and deletion, and secure data processing. All team members are trained on data protection requirements. We can help you implement GDPR-compliant features like privacy policies, cookie consent, data export functionality, and user data deletion. We also sign Data Processing Agreements (DPAs) when required and follow best practices for handling personal data throughout the development process.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-16" className="">
            <AccordionTrigger className="text-left text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
              Do you have a mobile app for accessing the service on the go?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 pt-2 sm:gap-4 sm:pt-3 md:gap-5 md:pt-4">
              <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                We specialize in building mobile applications for our clients, but we don't have our own mobile app for project management. Instead, we use industry-standard project management tools that are accessible via web browsers and mobile-responsive interfaces. You can access project updates, communicate with our team, and track progress through our project management platform on any device. If you need a custom mobile app built for your business, that's exactly what we do—we can develop native iOS, Android, or cross-platform mobile applications tailored to your specific needs.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
