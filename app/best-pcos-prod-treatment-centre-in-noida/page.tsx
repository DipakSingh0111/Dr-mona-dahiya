import type { Metadata } from "next";

import PcosHero from "@/components/sections/best-pcos-prod-treatment-centre-in-noida/PcosHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import PcosDifferenceAndCriteria from "@/components/sections/best-pcos-prod-treatment-centre-in-noida/PcosDifferenceAndCriteria";
import PcosChecklistAndProtocol from "@/components/sections/best-pcos-prod-treatment-centre-in-noida/PcosChecklistAndProtocol";
import PcosCostAndReviews from "@/components/sections/best-pcos-prod-treatment-centre-in-noida/PcosCostAndReviews";
import IvfSuccessClinics from "@/components/sections/ivf-stories/IvfSuccessClinics";
import PcosFaq from "@/components/sections/best-pcos-prod-treatment-centre-in-noida/PcosFaq";
import FemaleRelatedTreatments from "@/components/sections/female-infertility-treatment/FemaleRelatedTreatments";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Comprehensive PCOS/PCOD Fertility Treatment & OHSS-Free IVF Protocols | Dr. Mona Dahiya",
  description:
    "Tailored ovulation induction, Letrozole protocols and OHSS-safe antagonist IVF achieving 65% to 70% pregnancy rates for PCOS & PCOD across Noida, Delhi & Ghaziabad.",
};

export default function PcosTreatmentPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      {/* 1. PCOS Hero */}
      <PcosHero />

      {/* 2. Medical Registration Councils */}
      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      {/* 3. Understanding the Difference (PCOS vs PCOD) & Rotterdam Criteria */}
      <SectionReveal delay={0.04}>
        <PcosDifferenceAndCriteria />
      </SectionReveal>

      {/* 4. Diagnostic Checklist, Step-by-Step Protocol & Why Consult Dr. Mona */}
      <SectionReveal delay={0.04}>
        <PcosChecklistAndProtocol />
      </SectionReveal>

      {/* 5. Cost Factors & What Patients Say About Dr. Mona */}
      <SectionReveal delay={0.04}>
        <PcosCostAndReviews />
      </SectionReveal>

      {/* 6. Book a Consultation at Our Clinics */}
      <SectionReveal delay={0.04}>
        <IvfSuccessClinics />
      </SectionReveal>

      {/* 7. Top FAQs About PCOS and PCOD Fertility Treatment */}
      <SectionReveal delay={0.04}>
        <PcosFaq />
      </SectionReveal>

      {/* 8. Related Fertility Treatments */}
      <SectionReveal delay={0.04}>
        <FemaleRelatedTreatments />
      </SectionReveal>

      {/* 9. Book an In-Clinic or Online Consultation Form */}
      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Next step"
          title="Book an In-Clinic or Online Consultation"
          subtitle="Book an in-clinic consultation with Dr. Mona Dahiya in Noida, Ghaziabad or Delhi, or a video review of your reports. Direct line:"
          appendContacts={true}
        />
      </SectionReveal>

      {/* 9. Take your first step towards parenthood CTA */}
      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}

