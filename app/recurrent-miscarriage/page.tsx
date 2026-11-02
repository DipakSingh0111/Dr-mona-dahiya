import type { Metadata } from "next";

import RecurrentMiscarriageHero from "@/components/sections/recurrent-miscarriage/RecurrentMiscarriageHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import RecurrentMiscarriageIndicationsAndChecklist from "@/components/sections/recurrent-miscarriage/RecurrentMiscarriageIndicationsAndChecklist";
import RecurrentMiscarriageProtocolAndWhy from "@/components/sections/recurrent-miscarriage/RecurrentMiscarriageProtocolAndWhy";
import RecurrentMiscarriageCost from "@/components/sections/recurrent-miscarriage/RecurrentMiscarriageCost";
import IvfSuccessClinics from "@/components/sections/ivf-success-stories/IvfSuccessClinics";
import RecurrentMiscarriageFaq from "@/components/sections/recurrent-miscarriage/RecurrentMiscarriageFaq";
import RecurrentMiscarriageRelatedTreatments from "@/components/sections/recurrent-miscarriage/RecurrentMiscarriageRelatedTreatments";
import AboutConsultation from "@/components/sections/about/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Recurrent Pregnancy Loss (RPL) & Miscarriage Treatment in Noida, Ghaziabad & Delhi | Dr. Mona Dahiya",
  description:
    "Systematic 5-pillar investigation and evidence-based treatments for recurrent miscarriages by Dr. Mona Dahiya (25+ years experience) across Noida, Ghaziabad and Delhi.",
};

export default function RecurrentMiscarriagePage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#061532]">
      {/* 1. Hero */}
      <RecurrentMiscarriageHero />

      {/* 2. Medical Registration Councils */}
      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      {/* 3. Indications & 5-Pillar Diagnostic Checklist */}
      <SectionReveal delay={0.04}>
        <RecurrentMiscarriageIndicationsAndChecklist />
      </SectionReveal>

      {/* 4. Treatment Protocol, Why Consult & Patient Reviews */}
      <SectionReveal delay={0.04}>
        <RecurrentMiscarriageProtocolAndWhy />
      </SectionReveal>

      {/* 5. Book a Consultation at Our Clinics */}
      <SectionReveal delay={0.04}>
        <IvfSuccessClinics />
      </SectionReveal>

      {/* 6. What Affects the Cost of Miscarriage Treatment */}
      <SectionReveal delay={0.04}>
        <RecurrentMiscarriageCost />
      </SectionReveal>

      {/* 7. Frequently Asked Questions (Smooth Accordion) */}
      <SectionReveal delay={0.04}>
        <RecurrentMiscarriageFaq />
      </SectionReveal>

      {/* 8. Related Fertility Treatments (12 Cards Grid) */}
      <SectionReveal delay={0.04}>
        <RecurrentMiscarriageRelatedTreatments />
      </SectionReveal>

      {/* 9. Book an In-Clinic or Online Consultation Form */}
      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Next step"
          title="Book an In-Clinic or Online Consultation"
          subtitle="Book an in-clinic consultation with Dr. Mona Dahiya in South Delhi, Noida or Ghaziabad, or schedule an online consultation to review your cycle history."
        />
      </SectionReveal>

      {/* 10. Parenthood CTA */}
      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}

