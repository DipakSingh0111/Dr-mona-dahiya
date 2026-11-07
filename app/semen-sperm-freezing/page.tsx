import type { Metadata } from "next";

import SpermFreezingHero from "@/components/sections/semen-sperm-freezing/SpermFreezingHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import {
  SpermFreezingIndications,
  SpermFreezingChecklist,
} from "@/components/sections/semen-sperm-freezing/SpermFreezingIndicationsAndChecklist";
import {
  SpermFreezingProtocol,
  SpermFreezingWhy,
} from "@/components/sections/semen-sperm-freezing/SpermFreezingProtocolAndWhy";
import {
  SpermFreezingCase,
  SpermFreezingCost,
} from "@/components/sections/semen-sperm-freezing/SpermFreezingCaseAndCost";
import SpermFreezingFaq from "@/components/sections/semen-sperm-freezing/SpermFreezingFaq";
import SpermFreezingRelatedTreatments from "@/components/sections/semen-sperm-freezing/SpermFreezingRelatedTreatments";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Semen & Sperm Freezing in Delhi, Noida & Ghaziabad | Dr. Mona Dahiya",
  description:
    "A semen sample can be frozen so you have a backup for any medical reason, work requirement or personal requirement under Dr. Mona Dahiya in Delhi, Noida & Ghaziabad.",
};

export default function SpermFreezingPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      {/* 1. Hero + Counter Bar (Pink) */}
      <SpermFreezingHero />

      {/* 2. Medical Council Registration Numbers (White) */}
      <SectionReveal>
        <MedicalRegistration
          councilNames={{ UPMC: "UP State Medical Council" }}
          councilRegLabels={{
            DMC: "Registration Number with DMC",
            MCI: "Registration Number with MCI",
            UPMC: "Registration Number with UPMC",
          }}
        />
      </SectionReveal>

      {/* 3. Indications: When Should You Freeze Semen/Sperm? (Pink) */}
      <SectionReveal delay={0.04}>
        <SpermFreezingIndications />
      </SectionReveal>

      {/* 4. What tests do you need to get done? (White) */}
      <SectionReveal delay={0.04}>
        <SpermFreezingChecklist />
      </SectionReveal>

      {/* 5. Step-by-Step Treatment Protocol (Pink) */}
      <SectionReveal delay={0.04}>
        <SpermFreezingProtocol />
      </SectionReveal>

      {/* 6. What makes us different? (White) */}
      <SectionReveal delay={0.04}>
        <SpermFreezingWhy />
      </SectionReveal>

      {/* 7. Clinical Case Insight (Pink) */}
      <SectionReveal delay={0.04}>
        <SpermFreezingCase />
      </SectionReveal>

      {/* 8. How Much Does Semen/Sperm Freezing Cost? (White) */}
      <SectionReveal delay={0.04}>
        <SpermFreezingCost />
      </SectionReveal>

      {/* 9. Frequently Asked Questions about Semen & Sperm Freezing (Pink) */}
      <SectionReveal delay={0.04}>
        <SpermFreezingFaq />
      </SectionReveal>

      {/* 10. Related treatments (White) */}
      <SectionReveal delay={0.04}>
        <SpermFreezingRelatedTreatments />
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
          showAddresses={false}
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
