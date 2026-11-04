import type { Metadata } from "next";

import DfiHero from "@/components/sections/sperm-dna-fragmentation-test/DfiHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import DfiIndicationsAndChecklist from "@/components/sections/sperm-dna-fragmentation-test/DfiIndicationsAndChecklist";
import DfiProtocolAndWhy from "@/components/sections/sperm-dna-fragmentation-test/DfiProtocolAndWhy";
import DfiCaseAndCost from "@/components/sections/sperm-dna-fragmentation-test/DfiCaseAndCost";
import IvfSuccessClinics from "@/components/sections/ivf-stories/IvfSuccessClinics";
import DfiFaq from "@/components/sections/sperm-dna-fragmentation-test/DfiFaq";
import DfiRelatedTreatments from "@/components/sections/sperm-dna-fragmentation-test/DfiRelatedTreatments";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Sperm DNA Fragmentation Index (DFI) Testing in Delhi, Noida & Ghaziabad | Dr. Mona Dahiya",
  description:
    "Sperm DNA fragmentation testing (DFI), interpretation of Halosperm assay results, varicocele treatment, antioxidant therapy, and ICSI by Dr. Mona Dahiya.",
};

export default function SpermDfiPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      {/* 1. DFI Hero */}
      <DfiHero />

      {/* 2. Medical Registration Councils */}
      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      {/* 3. Indications & Diagnostic Checklist */}
      <SectionReveal delay={0.04}>
        <DfiIndicationsAndChecklist />
      </SectionReveal>

      {/* 4. Step-by-Step Protocol & Why Consult Dr. Mona */}
      <SectionReveal delay={0.04}>
        <DfiProtocolAndWhy />
      </SectionReveal>

      {/* 5. Clinical Case Insight & Cost Factors Breakdown */}
      <SectionReveal delay={0.04}>
        <DfiCaseAndCost />
      </SectionReveal>

      {/* 6. Book a Consultation at Our Clinics */}
      <SectionReveal delay={0.04}>
        <IvfSuccessClinics />
      </SectionReveal>

      {/* 7. Frequently Asked Questions about Sperm DNA Fragmentation */}
      <SectionReveal delay={0.04}>
        <DfiFaq />
      </SectionReveal>

      {/* 8. Related Treatments */}
      <SectionReveal delay={0.04}>
        <DfiRelatedTreatments />
      </SectionReveal>

      {/* 9. Book an In-Clinic or Online Consultation Form */}
      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Next step"
          title="Book an In-Clinic or Online Consultation"
          subtitle="Book an in-clinic consultation with Dr. Mona Dahiya in South Delhi, Noida or Ghaziabad, or schedule an online consultation to review your cycle history."
          appendContacts={false}
        />
      </SectionReveal>

      {/* 10. Take your first step towards parenthood CTA */}
      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}

