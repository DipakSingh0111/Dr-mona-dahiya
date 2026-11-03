import type { Metadata } from "next";

import SurgicalSpermRetrievalHero from "@/components/sections/surgical-sperm-retrieval-tesa-pesa/SurgicalSpermRetrievalHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import SurgicalSpermRetrievalTechniques from "@/components/sections/surgical-sperm-retrieval-tesa-pesa/SurgicalSpermRetrievalTechniques";
import SurgicalSpermRetrievalIndicationsAndChecklist from "@/components/sections/surgical-sperm-retrieval-tesa-pesa/SurgicalSpermRetrievalIndicationsAndChecklist";
import SurgicalSpermRetrievalProtocolWhyAndCase from "@/components/sections/surgical-sperm-retrieval-tesa-pesa/SurgicalSpermRetrievalProtocolWhyAndCase";
import SurgicalSpermRetrievalCostAndFaq from "@/components/sections/surgical-sperm-retrieval-tesa-pesa/SurgicalSpermRetrievalCostAndFaq";
import SurgicalSpermRetrievalRelatedTreatments from "@/components/sections/surgical-sperm-retrieval-tesa-pesa/SurgicalSpermRetrievalRelatedTreatments";
import ClinicsAppointmentCards from "@/components/sections/ClinicsAppointmentCards";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Surgical Sperm Retrieval (TESA, PESA & Micro-TESE) in Delhi, Noida & Ghaziabad | Dr. Mona Dahiya",
  description:
    "PESA, TESA and Micro-TESE with Dr. Mona Dahiya — surgical sperm retrieval for azoospermia, timed with ICSI across Delhi, Noida and Ghaziabad.",
};

export default function SurgicalSpermRetrievalPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#061532]">
      <SurgicalSpermRetrievalHero />

      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <SurgicalSpermRetrievalTechniques />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <SurgicalSpermRetrievalIndicationsAndChecklist />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <SurgicalSpermRetrievalProtocolWhyAndCase />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <SurgicalSpermRetrievalCostAndFaq />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <SurgicalSpermRetrievalRelatedTreatments />
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
          appendContacts={false}
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
