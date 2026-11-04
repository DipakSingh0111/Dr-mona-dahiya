import type { Metadata } from "next";

import OncofertilityHero from "@/components/sections/oncofertility-cancer-fertility-preservation/OncofertilityHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import OncofertilityIndicationsAndChecklist from "@/components/sections/oncofertility-cancer-fertility-preservation/OncofertilityIndicationsAndChecklist";
import OncofertilityProtocolAndWhy from "@/components/sections/oncofertility-cancer-fertility-preservation/OncofertilityProtocolAndWhy";
import OncofertilityReviews from "@/components/sections/oncofertility-cancer-fertility-preservation/OncofertilityReviews";
import IvfSuccessClinics from "@/components/sections/ivf-stories/IvfSuccessClinics";
import OncofertilityCostAndFaq from "@/components/sections/oncofertility-cancer-fertility-preservation/OncofertilityCostAndFaq";
import OncofertilityRelatedTreatments from "@/components/sections/oncofertility-cancer-fertility-preservation/OncofertilityRelatedTreatments";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Oncofertility: Fertility Preservation Before Cancer Treatment | Dr. Mona Dahiya",
  description:
    "Emergency oncofertility with Dr. Mona Dahiya — random-start egg, sperm or embryo banking within 24–48 hours across Delhi, Noida and Ghaziabad, coordinated with your oncology team.",
};

export default function OncofertilityPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      <OncofertilityHero />

      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <OncofertilityIndicationsAndChecklist />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <OncofertilityProtocolAndWhy />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <OncofertilityReviews />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IvfSuccessClinics />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <OncofertilityCostAndFaq />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <OncofertilityRelatedTreatments />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Final step"
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
