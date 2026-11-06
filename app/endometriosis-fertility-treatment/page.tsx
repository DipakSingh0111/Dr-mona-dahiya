import type { Metadata } from "next";

import EndometriosisHero from "@/components/sections/endometriosis-fertility-treatment/EndometriosisHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import {
  EndometriosisAbout,
  EndometriosisIndications,
} from "@/components/sections/endometriosis-fertility-treatment/EndometriosisDifferenceAndIndications";
import {
  EndometriosisChecklist,
  EndometriosisProtocol,
  EndometriosisWhy,
} from "@/components/sections/endometriosis-fertility-treatment/EndometriosisProtocolAndWhy";
import {
  EndometriosisCase,
  EndometriosisCost,
} from "@/components/sections/endometriosis-fertility-treatment/EndometriosisCaseAndCost";
import EndometriosisFaq from "@/components/sections/endometriosis-fertility-treatment/EndometriosisFaq";
import EndometriosisRelatedTreatments from "@/components/sections/endometriosis-fertility-treatment/EndometriosisRelatedTreatments";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Endometriosis & Adenomyosis Fertility Treatment in Delhi, Noida & Ghaziabad | Dr. Mona Dahiya",
  description:
    "Suffering from painful periods and wanting to get pregnant. Dr. Mona Dahiya will help you understand what your options are by looking at your age, egg reserve and pain.",
};

export default function EndometriosisPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      {/* 1. Hero + Counter Bar (Pink) */}
      <EndometriosisHero />

      {/* 2. Medical Registration Councils (White) */}
      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      {/* 3. About the Disease: What Are Endometriosis and Adenomyosis? (Pink) */}
      <SectionReveal delay={0.04}>
        <EndometriosisAbout />
      </SectionReveal>

      {/* 4. Indications: Who Needs Endometriosis or Adenomyosis Fertility Care? (White) */}
      <SectionReveal delay={0.04}>
        <EndometriosisIndications />
      </SectionReveal>

      {/* 5. Diagnosis: Diagnostic Checklist (Pink) */}
      <SectionReveal delay={0.04}>
        <EndometriosisChecklist />
      </SectionReveal>

      {/* 6. Procedure: Step-by-Step Treatment Protocol (White) */}
      <SectionReveal delay={0.04}>
        <EndometriosisProtocol />
      </SectionReveal>

      {/* 7. Why Choose Us: Why Consult Dr. Mona Dahiya for Endometriosis & Adenomyosis? (Pink) */}
      <SectionReveal delay={0.04}>
        <EndometriosisWhy />
      </SectionReveal>

      {/* 8. Case Studies: Clinical Case Insight (White) */}
      <SectionReveal delay={0.04}>
        <EndometriosisCase />
      </SectionReveal>

      {/* 9. How much will it cost me?: Cost Factors Affecting Endometriosis Treatment (Pink) */}
      <SectionReveal delay={0.04}>
        <EndometriosisCost />
      </SectionReveal>

      {/* 10. FAQ: Frequently Asked Questions about Endometriosis & Adenomyosis (White) */}
      <SectionReveal delay={0.04}>
        <EndometriosisFaq />
      </SectionReveal>

      {/* 11. Related care: Related treatments (Pink) */}
      <SectionReveal delay={0.04}>
        <EndometriosisRelatedTreatments />
      </SectionReveal>

      {/* 12. Next step: Book an In-Clinic or Online Consultation (White) */}
      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Next step"
          title={
            <>
              Book an In-Clinic or
              <br />
              Online Consultation
            </>
          }
          subtitle="Book an in-clinic consultation with Dr. Mona Dahiya in South Delhi, Noida or Ghaziabad, or schedule an online consultation to review your cycle history."
          appendContacts={false}
          consultationDuration=""
          defaultClinic="Delhi"
          sectionBg="bg-white"
        />
      </SectionReveal>

      {/* 13. Take your first step towards parenthood CTA */}
      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
