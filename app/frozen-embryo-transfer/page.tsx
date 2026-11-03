import type { Metadata } from "next";

import FetHero from "@/components/sections/frozen-embryo-transfer/FetHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import FetIndicationsAndChecklist from "@/components/sections/frozen-embryo-transfer/FetIndicationsAndChecklist";
import FetProtocolWhyAndCase from "@/components/sections/frozen-embryo-transfer/FetProtocolWhyAndCase";
import FetCostAndFaq from "@/components/sections/frozen-embryo-transfer/FetCostAndFaq";
import FetRelatedTreatments from "@/components/sections/frozen-embryo-transfer/FetRelatedTreatments";
import ClinicsAppointmentCards from "@/components/sections/ClinicsAppointmentCards";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Advanced Frozen Embryo Transfer (FET) in Delhi, Noida & Ghaziabad | Dr. Mona Dahiya",
  description:
    "Frozen embryo transfer with Dr. Mona Dahiya (25+ years). Vitrification, individualised lining protocols, FET cost factors and clinics in Delhi NCR.",
};

export default function FrozenEmbryoTransferPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#061532]">
      <FetHero />

      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <FetIndicationsAndChecklist />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <FetProtocolWhyAndCase />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <FetCostAndFaq />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <FetRelatedTreatments />
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

      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
