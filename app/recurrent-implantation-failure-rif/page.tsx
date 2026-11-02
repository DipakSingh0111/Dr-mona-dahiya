import type { Metadata } from "next";

import RifHero from "@/components/sections/recurrent-implantation-failure-rif/RifHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import RifWhatAndIndications from "@/components/sections/recurrent-implantation-failure-rif/RifWhatAndIndications";
import RifProtocolWhyAndCase from "@/components/sections/recurrent-implantation-failure-rif/RifProtocolWhyAndCase";
import IvfSuccessClinics from "@/components/sections/ivf-stories/IvfSuccessClinics";
import RifCost from "@/components/sections/recurrent-implantation-failure-rif/RifCost";
import RifFaq from "@/components/sections/recurrent-implantation-failure-rif/RifFaq";
import RifRelatedTreatments from "@/components/sections/recurrent-implantation-failure-rif/RifRelatedTreatments";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Recurrent Implantation Failure (RIF) Treatment in Delhi, Noida & Ghaziabad | Dr. Mona Dahiya",
  description:
    "A structured second look after failed transfers: ERA timing, PGT-A embryo selection, hysteroscopy, thin lining protocols by Dr. Mona Dahiya.",
};

export default function RifPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#061532]">
      {/* 1. Hero */}
      <RifHero />

      {/* 2. Medical Registration Councils */}
      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      {/* 3. What is RIF & Indications & Diagnostic Checklist */}
      <SectionReveal delay={0.04}>
        <RifWhatAndIndications />
      </SectionReveal>

      {/* 4. Treatment Protocol, Why Consult Dr. Mona & Clinical Case Insight */}
      <SectionReveal delay={0.04}>
        <RifProtocolWhyAndCase />
      </SectionReveal>

      {/* 5. Book a Consultation at Our Clinics */}
      <SectionReveal delay={0.04}>
        <IvfSuccessClinics />
      </SectionReveal>

      {/* 6. Cost Factors Breakdown */}
      <SectionReveal delay={0.04}>
        <RifCost />
      </SectionReveal>

      {/* 7. Frequently Asked Questions (Smooth Accordion) */}
      <SectionReveal delay={0.04}>
        <RifFaq />
      </SectionReveal>

      {/* 8. Related Treatments (3 + 1 exact layout) */}
      <SectionReveal delay={0.04}>
        <RifRelatedTreatments />
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

