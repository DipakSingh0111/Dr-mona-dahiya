import type { Metadata } from "next";

import TermsHero from "@/components/sections/terms-of-service/TermsHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import TermsAuthority from "@/components/sections/terms-of-service/TermsAuthority";
import TermsScopeAndResponsibilities from "@/components/sections/terms-of-service/TermsScopeAndResponsibilities";
import TermsGovernanceAndIp from "@/components/sections/terms-of-service/TermsGovernanceAndIp";
import TermsFaq from "@/components/sections/terms-of-service/TermsFaq";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Terms of Service & Patient Clinical Engagement Agreement | Dr. Mona Dahiya",
  description:
    "Legal, clinical and operational terms for consultations and ART treatment with Dr. Mona Dahiya in Delhi, Noida and Ghaziabad.",
};

export default function TermsOfServicePage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      <TermsHero />

      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <TermsAuthority />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <TermsScopeAndResponsibilities />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <TermsGovernanceAndIp />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <TermsFaq />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Next step"
          title="Questions About Our Clinical Policies?"
          subtitle="For formal enquiries about clinical policies or to book an evaluation, contact the administrative desk on +91 92679 82924 or info@drmonadahiya.com."
          appendContacts={false}
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
