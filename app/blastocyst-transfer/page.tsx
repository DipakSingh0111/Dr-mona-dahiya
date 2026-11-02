import type { Metadata } from "next";

import BlastocystHero from "@/components/sections/blastocyst-transfer/BlastocystHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import BlastocystIndicationsAndChecklist from "@/components/sections/blastocyst-transfer/BlastocystIndicationsAndChecklist";
import BlastocystProtocolAndWhy from "@/components/sections/blastocyst-transfer/BlastocystProtocolAndWhy";
import BlastocystReviewsAndCost from "@/components/sections/blastocyst-transfer/BlastocystReviewsAndCost";
import IvfSuccessClinics from "@/components/sections/ivf-stories/IvfSuccessClinics";
import BlastocystFaq from "@/components/sections/blastocyst-transfer/BlastocystFaq";
import RecurrentMiscarriageRelatedTreatments from "@/components/sections/miscarriage-treatment-in-noida/RecurrentMiscarriageRelatedTreatments";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Advanced Day-5 Blastocyst Transfer in Delhi, Noida & Ghaziabad | Dr. Mona Dahiya",
  description:
    "Extended Day-5 and Day-6 blastocyst culture and ultrasound-guided transfer in benchtop cleanroom incubators with high single-embryo implantation by Dr. Mona Dahiya.",
};

export default function BlastocystTransferPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* 1. Hero (Gradient Blue Header) */}
      <BlastocystHero />

      {/* 2. Medical Registration Councils */}
      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      {/* 3. Indications (Home Page Multi-Color Themes) & Diagnostic Checklist */}
      <SectionReveal delay={0.04}>
        <BlastocystIndicationsAndChecklist />
      </SectionReveal>

      {/* 4. Step-by-Step Culture & Transfer Protocol & Why Consult Dr. Mona */}
      <SectionReveal delay={0.04}>
        <BlastocystProtocolAndWhy />
      </SectionReveal>

      {/* 5. Patient Reviews & What Affects the Cost of Blastocyst Transfer */}
      <SectionReveal delay={0.04}>
        <BlastocystReviewsAndCost />
      </SectionReveal>

      {/* 6. Book a Consultation at Our Clinics */}
      <SectionReveal delay={0.04}>
        <IvfSuccessClinics />
      </SectionReveal>

      {/* 7. Top FAQs About Blastocyst Transfer (Smooth Accordion) */}
      <SectionReveal delay={0.04}>
        <BlastocystFaq />
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

