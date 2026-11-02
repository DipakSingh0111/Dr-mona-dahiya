import type { Metadata } from "next";

import LowSpermHero from "@/components/sections/low-sperm-count-oligospermia/LowSpermHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import LowSpermIndicationsAndChecklist from "@/components/sections/low-sperm-count-oligospermia/LowSpermIndicationsAndChecklist";
import LowSpermProtocolAndWhy from "@/components/sections/low-sperm-count-oligospermia/LowSpermProtocolAndWhy";
import LowSpermCaseAndCost from "@/components/sections/low-sperm-count-oligospermia/LowSpermCaseAndCost";
import IvfSuccessClinics from "@/components/sections/ivf-stories/IvfSuccessClinics";
import LowSpermFaq from "@/components/sections/low-sperm-count-oligospermia/LowSpermFaq";
import LowSpermRelatedTreatments from "@/components/sections/low-sperm-count-oligospermia/LowSpermRelatedTreatments";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Low Sperm Count & Motility Treatment in Delhi, Noida & Ghaziabad | Dr. Mona Dahiya",
  description:
    "Evidence-based oligospermia and asthenozoospermia treatments: repeat semen analysis, varicocele correction, lifestyle changes, IUI, and precision ICSI by Dr. Mona Dahiya.",
};

export default function LowSpermTreatmentPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#061532]">
      {/* 1. Low Sperm Hero */}
      <LowSpermHero />

      {/* 2. Medical Registration Councils */}
      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      {/* 3. Indications & Diagnostic Checklist */}
      <SectionReveal delay={0.04}>
        <LowSpermIndicationsAndChecklist />
      </SectionReveal>

      {/* 4. Step-by-Step Protocol & Why Consult Dr. Mona */}
      <SectionReveal delay={0.04}>
        <LowSpermProtocolAndWhy />
      </SectionReveal>

      {/* 5. Clinical Case Insight & Cost Factors Breakdown */}
      <SectionReveal delay={0.04}>
        <LowSpermCaseAndCost />
      </SectionReveal>

      {/* 6. Book a Consultation at Our Clinics */}
      <SectionReveal delay={0.04}>
        <IvfSuccessClinics />
      </SectionReveal>

      {/* 7. Top FAQs About Low Sperm Count & Motility */}
      <SectionReveal delay={0.04}>
        <LowSpermFaq />
      </SectionReveal>

      {/* 8. Related Fertility Treatments */}
      <SectionReveal delay={0.04}>
        <LowSpermRelatedTreatments />
      </SectionReveal>

      {/* 9. Book an In-Clinic or Online Consultation Form */}
      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Next step"
          title="Book an In-Clinic or Online Consultation"
          subtitle="Book an in-clinic consultation with Dr. Mona Dahiya in South Delhi, Noida or Ghaziabad, or schedule an online consultation to review your cycle history."
          appendContacts={false}
        />
      </SectionReveal>

      {/* 10. Take your first step towards parenthood CTA */}
      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}

