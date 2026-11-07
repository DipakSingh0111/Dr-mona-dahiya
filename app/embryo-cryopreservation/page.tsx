import type { Metadata } from "next";

import EmbryoFreezingHero from "@/components/sections/embryo-cryopreservation/EmbryoFreezingHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import {
  EmbryoFreezingIndications,
  EmbryoFreezingChecklist,
} from "@/components/sections/embryo-cryopreservation/EmbryoFreezingIndicationsAndChecklist";
import {
  EmbryoFreezingProtocol,
  EmbryoFreezingWhy,
  EmbryoFreezingCase,
} from "@/components/sections/embryo-cryopreservation/EmbryoFreezingProtocolWhyAndCase";
import {
  EmbryoFreezingCost,
  EmbryoFreezingFaq,
} from "@/components/sections/embryo-cryopreservation/EmbryoFreezingCostAndFaq";
import EmbryoFreezingRelatedTreatments from "@/components/sections/embryo-cryopreservation/EmbryoFreezingRelatedTreatments";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Embryo Freezing (Cryopreservation) in Delhi, Noida & Ghaziabad | Dr. Mona Dahiya",
  description:
    "Store healthy embryos obtained from your IVF cycle using ultra-rapid vitrification and proper storage guidelines under Dr. Mona Dahiya across Delhi, Noida & Ghaziabad.",
};

export default function EmbryoFreezingPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      {/* 1. Hero + Counter Bar (Pink) */}
      <EmbryoFreezingHero />

      {/* 2. Medical Council Registration Numbers (White) */}
      <SectionReveal>
        <MedicalRegistration
          councilRegLabels={{
            DMC: "DMC Registration No.",
            MCI: "MCI Registration No.",
            UPMC: "UPMC Registration No.",
          }}
        />
      </SectionReveal>

      {/* 3. Indications: Who Should Get Embryos Frozen? (Pink) */}
      <SectionReveal delay={0.04}>
        <EmbryoFreezingIndications />
      </SectionReveal>

      {/* 4. Tests to Be Done Before Embryo Freezing (White) */}
      <SectionReveal delay={0.04}>
        <EmbryoFreezingChecklist />
      </SectionReveal>

      {/* 5. Step-by-Step Treatment Protocol (Pink) */}
      <SectionReveal delay={0.04}>
        <EmbryoFreezingProtocol />
      </SectionReveal>

      {/* 6. Why Choose Dr. Mona Dahiya For Embryo Freezing? (White) */}
      <SectionReveal delay={0.04}>
        <EmbryoFreezingWhy />
      </SectionReveal>

      {/* 7. Clinical Case Insight (Pink) */}
      <SectionReveal delay={0.04}>
        <EmbryoFreezingCase />
      </SectionReveal>

      {/* 8. Embryo Freezing Cost Details (White) */}
      <SectionReveal delay={0.04}>
        <EmbryoFreezingCost />
      </SectionReveal>

      {/* 9. Frequently Asked Questions about Embryo Freezing & Banking (Pink) */}
      <SectionReveal delay={0.04}>
        <EmbryoFreezingFaq />
      </SectionReveal>

      {/* 10. Related treatments (White) */}
      <SectionReveal delay={0.04}>
        <EmbryoFreezingRelatedTreatments />
      </SectionReveal>

      {/* 11. Book an In-Clinic or Online Consultation (Pink) */}
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
          sectionBg="bg-pink"
        />
      </SectionReveal>

      {/* 12. Parenthood CTA */}
      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
