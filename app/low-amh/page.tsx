import type { Metadata } from "next";

import LowAmhHero from "@/components/sections/low-amh/LowAmhHero";
import LowAmhMedicalRegistration from "@/components/sections/low-amh/LowAmhMedicalRegistration";
import LowAmhIndications from "@/components/sections/low-amh/LowAmhIndications";
import LowAmhDiagnosticAndProtocol from "@/components/sections/low-amh/LowAmhDiagnosticAndProtocol";
import LowAmhWhyConsult from "@/components/sections/low-amh/LowAmhWhyConsult";
import LowAmhPatientReviews from "@/components/sections/low-amh/LowAmhPatientReviews";
import IvfSuccessClinics from "@/components/sections/ivf-success-stories/IvfSuccessClinics";
import LowAmhCostTransparency from "@/components/sections/low-amh/LowAmhCostTransparency";
import LowAmhFaq from "@/components/sections/low-amh/LowAmhFaq";
import LowAmhRelatedTreatments from "@/components/sections/low-amh/LowAmhRelatedTreatments";
import AboutConsultation from "@/components/sections/about/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Low AMH Treatment in Noida, Delhi & Ghaziabad | Dr. Mona Dahiya",
  description:
    "Specialised low AMH and diminished ovarian reserve care with DuoStim, DHEA priming and own-egg protocols by Dr. Mona Dahiya across Delhi NCR.",
};

export default function LowAmhPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#061532]">
      <LowAmhHero />

      <SectionReveal>
        <LowAmhMedicalRegistration />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <LowAmhIndications />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <LowAmhDiagnosticAndProtocol />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <LowAmhWhyConsult />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <LowAmhPatientReviews />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IvfSuccessClinics />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <LowAmhCostTransparency />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <LowAmhFaq />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <LowAmhRelatedTreatments />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Next step"
          title="Book an In-Clinic or Online Consultation"
          subtitle="Book an in-clinic consultation with Dr. Mona Dahiya in Noida, Ghaziabad or Delhi, or a video review of your reports. Direct line:"
          appendContacts={true}
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
