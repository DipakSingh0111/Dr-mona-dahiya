import type { Metadata } from "next";

import DfiHero from "@/components/sections/sperm-dna-fragmentation-test/DfiHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import DfiIndicationsAndChecklist from "@/components/sections/sperm-dna-fragmentation-test/DfiIndicationsAndChecklist";
import DfiProtocolAndWhy from "@/components/sections/sperm-dna-fragmentation-test/DfiProtocolAndWhy";
import DfiCaseAndCost from "@/components/sections/sperm-dna-fragmentation-test/DfiCaseAndCost";
import DfiFaq from "@/components/sections/sperm-dna-fragmentation-test/DfiFaq";
import DfiRelatedTreatments from "@/components/sections/sperm-dna-fragmentation-test/DfiRelatedTreatments";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Sperm DNA Fragmentation Index (DFI) Testing in Delhi, Noida & Ghaziabad | Dr. Mona Dahiya",
  description:
    "Sperm DNA Fragmentation Index (DFI) testing in Delhi NCR: indications, diagnostic checklist, treatment protocol, and consultation with Dr. Mona Dahiya.",
};

export default function SpermDfiPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      <DfiHero />

      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <DfiIndicationsAndChecklist />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <DfiProtocolAndWhy />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <DfiCaseAndCost />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <DfiFaq />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <DfiRelatedTreatments />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Next step"
          title="Book an In-Clinic or Online Consultation"
          subtitle="Book an in-clinic consultation with Dr. Mona Dahiya in South Delhi, Noida or Ghaziabad, or schedule an online consultation to review your cycle history."
          appendContacts={false}
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
