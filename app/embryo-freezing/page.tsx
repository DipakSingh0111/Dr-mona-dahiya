import type { Metadata } from "next";

import EmbryoFreezingHero from "@/components/sections/embryo-freezing/EmbryoFreezingHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import EmbryoFreezingIndicationsAndChecklist from "@/components/sections/embryo-freezing/EmbryoFreezingIndicationsAndChecklist";
import EmbryoFreezingProtocolWhyAndCase from "@/components/sections/embryo-freezing/EmbryoFreezingProtocolWhyAndCase";
import EmbryoFreezingCostAndFaq from "@/components/sections/embryo-freezing/EmbryoFreezingCostAndFaq";
import EmbryoFreezingRelatedTreatments from "@/components/sections/embryo-freezing/EmbryoFreezingRelatedTreatments";
import AboutConsultation from "@/components/sections/about/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Embryo Freezing (Cryopreservation) in Delhi, Noida & Ghaziabad | Dr. Mona Dahiya",
  description:
    "Embryo freezing & banking with Dr. Mona Dahiya — vitrification, clear storage protocols, and FET planning across Delhi, Noida and Ghaziabad.",
};

export default function EmbryoFreezingPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#061532]">
      <EmbryoFreezingHero />

      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <EmbryoFreezingIndicationsAndChecklist />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <EmbryoFreezingProtocolWhyAndCase />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <EmbryoFreezingCostAndFaq />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <EmbryoFreezingRelatedTreatments />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Next steps"
          title="Book an In-Clinic or Online Consultation"
          subtitle="Book an in-clinic consultation with Dr. Mona Dahiya in South Delhi, Noida or Ghaziabad, or schedule an online consultation to review your cycle history."
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
