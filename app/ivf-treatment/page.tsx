import type { Metadata } from "next";

import IvfHero from "@/components/sections/ivf-treatment/IvfHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import IvfIndicationsAndChecklist from "@/components/sections/ivf-treatment/IvfIndicationsAndChecklist";
import IvfProtocolAndWhy from "@/components/sections/ivf-treatment/IvfProtocolAndWhy";
import IvfReviews from "@/components/sections/ivf-treatment/IvfReviews";
import IvfSuccessClinics from "@/components/sections/ivf-stories/IvfSuccessClinics";
import IvfCostAndFaq from "@/components/sections/ivf-treatment/IvfCostAndFaq";
import IvfRelatedTreatments from "@/components/sections/ivf-treatment/IvfRelatedTreatments";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Advanced IVF Treatment in Delhi, Noida & Ghaziabad | Dr. Mona Dahiya",
  description:
    "IVF treatment with Dr. Mona Dahiya (25+ years). Indications, protocol, cost factors, clinics in Delhi NCR, and clear counselling at every step.",
};

export default function IvfTreatmentPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      <IvfHero />

      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IvfIndicationsAndChecklist />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IvfProtocolAndWhy />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IvfReviews />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IvfSuccessClinics />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IvfCostAndFaq />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IvfRelatedTreatments />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Next step"
          title="Book an In-Clinic or Online Consultation"
          subtitle="Book an in-clinic consultation with Dr. Mona Dahiya in South Delhi, Noida or Ghaziabad, or schedule an online consultation to review your cycle history."
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
