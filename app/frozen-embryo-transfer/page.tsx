import type { Metadata } from "next";

import FetHero from "@/components/sections/frozen-embryo-transfer/FetHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import {
  FetIndications,
  FetChecklist,
} from "@/components/sections/frozen-embryo-transfer/FetIndicationsAndChecklist";
import {
  FetProtocol,
  FetWhy,
  FetCase,
} from "@/components/sections/frozen-embryo-transfer/FetProtocolWhyAndCase";
import {
  FetCost,
  FetFaq,
} from "@/components/sections/frozen-embryo-transfer/FetCostAndFaq";
import FetRelatedTreatments from "@/components/sections/frozen-embryo-transfer/FetRelatedTreatments";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Advanced Frozen Embryo Transfer (FET) in Delhi, Noida & Ghaziabad | Dr. Mona Dahiya",
  description:
    "Dr. Mona Dahiya has more than 25 years of experience providing the frozen embryo transfer procedure using vitrified embryos. Your endometrium and menstrual cycle are tailored to you.",
};

export default function FrozenEmbryoTransferPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      {/* 1. Hero + Counter Bar (Pink) */}
      <FetHero />

      {/* 2. Medical Registration Councils (White) */}
      <SectionReveal>
        <MedicalRegistration
          councilRegLabels={{
            DMC: "Registration Number",
            MCI: "Registration Number",
            UPMC: "Registration Number",
          }}
        />
      </SectionReveal>

      {/* 3. Who Should Undergo Frozen Embryo Transfer (Pink) */}
      <SectionReveal delay={0.04}>
        <FetIndications />
      </SectionReveal>

      {/* 4. Diagnosis Tests (White) */}
      <SectionReveal delay={0.04}>
        <FetChecklist />
      </SectionReveal>

      {/* 5. Step-by-Step Treatment Protocol (Pink) */}
      <SectionReveal delay={0.04}>
        <FetProtocol />
      </SectionReveal>

      {/* 6. Why Choose Dr. Mona Dahiya For Frozen Embryo Transfer (White) */}
      <SectionReveal delay={0.04}>
        <FetWhy />
      </SectionReveal>

      {/* 7. Patient Experience (Pink) */}
      <SectionReveal delay={0.04}>
        <FetCase />
      </SectionReveal>

      {/* 8. Factors Affecting Cost Of Frozen Embryo Transfer (White) */}
      <SectionReveal delay={0.04}>
        <FetCost />
      </SectionReveal>

      {/* 9. Frequently Asked Questions about Frozen Embryo Transfer (Pink) */}
      <SectionReveal delay={0.04}>
        <FetFaq />
      </SectionReveal>

      {/* 10. Related treatments (White) */}
      <SectionReveal delay={0.04}>
        <FetRelatedTreatments />
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
