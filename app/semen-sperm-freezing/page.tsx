import type { Metadata } from "next";

import SpermFreezingHero from "@/components/sections/semen-sperm-freezing/SpermFreezingHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import SpermFreezingIndicationsAndChecklist from "@/components/sections/semen-sperm-freezing/SpermFreezingIndicationsAndChecklist";
import SpermFreezingProtocolAndWhy from "@/components/sections/semen-sperm-freezing/SpermFreezingProtocolAndWhy";
import SpermFreezingCaseAndCost from "@/components/sections/semen-sperm-freezing/SpermFreezingCaseAndCost";
import SpermFreezingFaq from "@/components/sections/semen-sperm-freezing/SpermFreezingFaq";
import SpermFreezingRelatedTreatments from "@/components/sections/semen-sperm-freezing/SpermFreezingRelatedTreatments";
import ClinicsAppointmentCards from "@/components/sections/ClinicsAppointmentCards";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Semen & Sperm Freezing (Cryopreservation) in Delhi, Noida & Ghaziabad | Dr. Mona Dahiya",
  description:
    "Freezing a semen sample lets you keep fertility options open. Dr. Mona Dahiya guides collection, liquid nitrogen storage at -196°C, and future use in IUI or ICSI.",
};

export default function SpermFreezingPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <SpermFreezingHero />

      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <SpermFreezingIndicationsAndChecklist />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <SpermFreezingProtocolAndWhy />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <SpermFreezingCaseAndCost />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <SpermFreezingFaq />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <SpermFreezingRelatedTreatments />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <ClinicsAppointmentCards
          eyebrow="Visit Dr. Mona"
          title="Book a Consultation at Our Clinics"
          subtitle="Dr. Mona sees patients in Noida, Ghaziabad and Delhi, and offers online consultations."
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Next step"
          title="Book an In-Clinic or Online Consultation"
          subtitle="Book an in-clinic consultation with Dr. Mona Dahiya in South Delhi, Noida or Ghaziabad, or schedule an online consultation to review your cycle history."
        />
      </SectionReveal>

      <AboutParenthoodCta />
    </main>
  );
}

