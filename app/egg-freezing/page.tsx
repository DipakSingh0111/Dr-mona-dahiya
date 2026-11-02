import type { Metadata } from "next";

import EggFreezingHero from "@/components/sections/egg-freezing/EggFreezingHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import EggFreezingIndicationsAndChecklist from "@/components/sections/egg-freezing/EggFreezingIndicationsAndChecklist";
import EggFreezingProtocolAndWhy from "@/components/sections/egg-freezing/EggFreezingProtocolAndWhy";
import EggFreezingReviews from "@/components/sections/egg-freezing/EggFreezingReviews";
import IvfSuccessClinics from "@/components/sections/ivf-success-stories/IvfSuccessClinics";
import EggFreezingCostAndFaq from "@/components/sections/egg-freezing/EggFreezingCostAndFaq";
import EggFreezingRelatedTreatments from "@/components/sections/egg-freezing/EggFreezingRelatedTreatments";
import AboutConsultation from "@/components/sections/about/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Best Egg Freezing (Oocyte Cryopreservation) Center in Noida & Delhi NCR | Dr. Mona Dahiya",
  description:
    "Egg freezing with Dr. Mona Dahiya — ultra-rapid vitrification, 95%+ post-thaw survival, ART Act compliant storage across Noida, Delhi and Ghaziabad.",
};

export default function EggFreezingPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#061532]">
      <EggFreezingHero />

      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <EggFreezingIndicationsAndChecklist />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <EggFreezingProtocolAndWhy />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <EggFreezingReviews />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IvfSuccessClinics />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <EggFreezingCostAndFaq />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <EggFreezingRelatedTreatments />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Final steps"
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
