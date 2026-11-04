import type { Metadata } from "next";

import LahHero from "@/components/sections/best-laser-assisted-hatching-doctor-in-noida/LahHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import LahIndicationsAndChecklist from "@/components/sections/best-laser-assisted-hatching-doctor-in-noida/LahIndicationsAndChecklist";
import LahProtocolAndWhy from "@/components/sections/best-laser-assisted-hatching-doctor-in-noida/LahProtocolAndWhy";
import LahReviews from "@/components/sections/best-laser-assisted-hatching-doctor-in-noida/LahReviews";
import IvfSuccessClinics from "@/components/sections/ivf-stories/IvfSuccessClinics";
import LahCostAndFaq from "@/components/sections/best-laser-assisted-hatching-doctor-in-noida/LahCostAndFaq";
import LahRelatedTreatments from "@/components/sections/best-laser-assisted-hatching-doctor-in-noida/LahRelatedTreatments";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Laser-Assisted Hatching (LAH) in Noida, Delhi & Ghaziabad | Dr. Mona Dahiya",
  description:
    "Laser-assisted hatching with Dr. Mona Dahiya — non-contact diode laser to help embryos hatch, for age 37+, RIF, FET cycles and thick zona. Clinics across Delhi NCR.",
};

export default function LaserAssistedHatchingPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
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
