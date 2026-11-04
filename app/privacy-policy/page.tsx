import type { Metadata } from "next";

import PrivacyHero from "@/components/sections/privacy-policy/PrivacyHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import PrivacyCollect from "@/components/sections/privacy-policy/PrivacyCollect";
import PrivacyUseAndProtection from "@/components/sections/privacy-policy/PrivacyUseAndProtection";
import PrivacyLegalAndRights from "@/components/sections/privacy-policy/PrivacyLegalAndRights";
import PrivacyFaq from "@/components/sections/privacy-policy/PrivacyFaq";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy, Patient Data Protection & Legal Disclosures | Dr. Mona Dahiya",
  description:
    "How Dr. Mona Dahiya's clinics protect patient data under the ART Act, Surrogacy Act and DPDP Act, 2023 across Noida, Ghaziabad and Delhi.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      <PrivacyHero />

      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <PrivacyCollect />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <PrivacyUseAndProtection />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <PrivacyLegalAndRights />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <PrivacyFaq />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Next step"
          title="Questions About Your Data or Care?"
          subtitle="For privacy enquiries, record requests or clinical care, call +91 92679 82924 or email info@drmonadahiya.com. Clinics: Noida Sector 49 • Ghaziabad Raj Nagar • South Delhi Lajpat Nagar IV."
          appendContacts={false}
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
