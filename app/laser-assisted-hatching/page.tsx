import type { Metadata } from "next";

import LahHero from "@/components/sections/lah-treatment/LahHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import LahIndicationsAndChecklist from "@/components/sections/lah-treatment/LahIndicationsAndChecklist";
import LahProtocolAndWhy from "@/components/sections/lah-treatment/LahProtocolAndWhy";
import LahReviews from "@/components/sections/lah-treatment/LahReviews";
import IvfSuccessClinics from "@/components/sections/ivf-success-stories/IvfSuccessClinics";
import LahCostAndFaq from "@/components/sections/lah-treatment/LahCostAndFaq";
import LahRelatedTreatments from "@/components/sections/lah-treatment/LahRelatedTreatments";
import AboutConsultation from "@/components/sections/about/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Laser-Assisted Hatching (LAH) in Noida, Delhi & Ghaziabad | Dr. Mona Dahiya",
  description:
    "Laser-assisted hatching with Dr. Mona Dahiya — non-contact diode laser to help embryos hatch, for age 37+, RIF, FET cycles and thick zona. Clinics across Delhi NCR.",
};

export default function LaserAssistedHatchingPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#061532]">
      <LahHero />

      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <LahIndicationsAndChecklist />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <LahProtocolAndWhy />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <LahReviews />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IvfSuccessClinics />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <LahCostAndFaq />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <LahRelatedTreatments />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Next step"
          title="Book an In-Clinic or Online Consultation"
          subtitle="Book an in-clinic consultation with Dr. Mona Dahiya in Noida, Ghaziabad or Delhi, or schedule an online consultation to review your reports. Direct line: +91 92679 82924."
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
