import type { Metadata } from "next";

import LowAmhHero from "@/components/sections/best-low-amh-treatment-in-noida/LowAmhHero";
import LowAmhMedicalRegistration from "@/components/sections/best-low-amh-treatment-in-noida/LowAmhMedicalRegistration";
import LowAmhIndications from "@/components/sections/best-low-amh-treatment-in-noida/LowAmhIndications";
import LowAmhDiagnosticAndProtocol from "@/components/sections/best-low-amh-treatment-in-noida/LowAmhDiagnosticAndProtocol";
import LowAmhWhyConsult from "@/components/sections/best-low-amh-treatment-in-noida/LowAmhWhyConsult";
import LowAmhPatientReviews from "@/components/sections/best-low-amh-treatment-in-noida/LowAmhPatientReviews";
import IvfSuccessClinics from "@/components/sections/ivf-stories/IvfSuccessClinics";
import LowAmhCostTransparency from "@/components/sections/best-low-amh-treatment-in-noida/LowAmhCostTransparency";
import LowAmhFaq from "@/components/sections/best-low-amh-treatment-in-noida/LowAmhFaq";
import LowAmhRelatedTreatments from "@/components/sections/best-low-amh-treatment-in-noida/LowAmhRelatedTreatments";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Low AMH Treatment in Noida, Delhi & Ghaziabad | Dr. Mona Dahiya",
  description:
    "Specialised low AMH and diminished ovarian reserve care with DuoStim, DHEA priming and own-egg protocols by Dr. Mona Dahiya across Delhi NCR.",
};

export default function LowAmhPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
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
          subtitle="Book an in-clinic consultation with Dr. Mona Dahiya in Noida, Ghaziabad or Delhi, or an online review of your reports. Direct line: +91 92679 82924."
          appendContacts={false}
          consultationDuration=""
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
