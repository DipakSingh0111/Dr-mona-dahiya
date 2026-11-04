import type { Metadata } from "next";

import EndometriosisHero from "@/components/sections/endometriosis-fertility-treatment/EndometriosisHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import EndometriosisDifferenceAndIndications from "@/components/sections/endometriosis-fertility-treatment/EndometriosisDifferenceAndIndications";
import EndometriosisProtocolAndWhy from "@/components/sections/endometriosis-fertility-treatment/EndometriosisProtocolAndWhy";
import EndometriosisCaseAndCost from "@/components/sections/endometriosis-fertility-treatment/EndometriosisCaseAndCost";
import IvfSuccessClinics from "@/components/sections/ivf-stories/IvfSuccessClinics";
import EndometriosisFaq from "@/components/sections/endometriosis-fertility-treatment/EndometriosisFaq";
import EndometriosisRelatedTreatments from "@/components/sections/endometriosis-fertility-treatment/EndometriosisRelatedTreatments";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Endometriosis & Adenomyosis Fertility Treatment in Delhi, Noida & Ghaziabad | Dr. Mona Dahiya",
  description:
    "Pain relief and fertility care for endometriosis and adenomyosis: staging, ovarian reserve protection, downregulation protocols, and IVF by Dr. Mona Dahiya.",
};

export default function EndometriosisPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      {/* 1. Hero */}
      <EndometriosisHero />

      {/* 2. Medical Registration Councils */}
      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      {/* 3. Understanding the conditions & Indications */}
      <SectionReveal delay={0.04}>
        <EndometriosisDifferenceAndIndications />
      </SectionReveal>

      {/* 4. Diagnostic Checklist, Protocol & Why Consult Dr. Mona */}
      <SectionReveal delay={0.04}>
        <EndometriosisProtocolAndWhy />
      </SectionReveal>

      {/* 5. Clinical Case Insight & Cost Factors Breakdown */}
      <SectionReveal delay={0.04}>
        <EndometriosisCaseAndCost />
      </SectionReveal>

      {/* 6. Book a Consultation at Our Clinics */}
      <SectionReveal delay={0.04}>
        <IvfSuccessClinics />
      </SectionReveal>

      {/* 7. Frequently Asked Questions about Endometriosis & Adenomyosis */}
      <SectionReveal delay={0.04}>
        <EndometriosisFaq />
      </SectionReveal>

      {/* 8. Related Treatments */}
      <SectionReveal delay={0.04}>
        <EndometriosisRelatedTreatments />
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

