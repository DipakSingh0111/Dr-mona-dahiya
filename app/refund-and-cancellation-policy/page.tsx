import type { Metadata } from "next";

import RefundPolicyHero from "@/components/sections/refund-and-cancellation-policy/RefundPolicyHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import RefundPolicySections from "@/components/sections/refund-and-cancellation-policy/RefundPolicySections";
import RefundPolicyFaq from "@/components/sections/refund-and-cancellation-policy/RefundPolicyFaq";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Clinical Fee, Cancellation & Refund Policy | Dr. Mona Dahiya",
  description:
    "Clinical fee, cancellation and refund policy for consultations, diagnostic tests, fertility medicines and ART cycles with Dr. Mona Dahiya in Noida, Ghaziabad and Delhi.",
};

export default function RefundAndCancellationPolicyPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      <RefundPolicyHero />

      <SectionReveal>
        <MedicalRegistration
          eyebrow="Registered medical practitioner"
          title="Medical Registration"
          subtitle="Dr. Mona Dahiya is registered with the following medical councils."
          councilRegLabels={{
            DMC: "DMC registration number",
            MCI: "MCI registration number",
            UPMC: "UPMC registration number",
          }}
        />
      </SectionReveal>

      <RefundPolicySections />

      <SectionReveal delay={0.04}>
        <RefundPolicyFaq />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Next step"
          title={
            <>
              Need an Itemised
              <br />
              Estimate or Billing Help?
            </>
          }
          subtitle={
            <>
              For itemised estimates, fee breakdowns or billing reconciliation,
              contact the billing desk on{" "}
              <a
                href="tel:+919267982924"
                className="font-medium text-blue hover:text-rose"
              >
                +91 92679 82924
              </a>{" "}
              or{" "}
              <a
                href="mailto:info@drmonadahiya.com"
                className="font-medium text-blue hover:text-rose"
              >
                info@drmonadahiya.com
              </a>
              .
            </>
          }
          appendContacts={false}
          consultationDuration="30 minutes"
          defaultClinic="Noida"
          sectionBg="bg-white"
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
