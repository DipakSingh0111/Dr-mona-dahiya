import type { Metadata } from "next";

import SurgicalSpermRetrievalHero from "@/components/sections/surgical-sperm-retrieval/SurgicalSpermRetrievalHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import SurgicalSpermRetrievalTechniques from "@/components/sections/surgical-sperm-retrieval/SurgicalSpermRetrievalTechniques";
import SurgicalSpermRetrievalIndicationsAndChecklist from "@/components/sections/surgical-sperm-retrieval/SurgicalSpermRetrievalIndicationsAndChecklist";
import SurgicalSpermRetrievalProtocolWhyAndCase from "@/components/sections/surgical-sperm-retrieval/SurgicalSpermRetrievalProtocolWhyAndCase";
import SurgicalSpermRetrievalCostAndFaq from "@/components/sections/surgical-sperm-retrieval/SurgicalSpermRetrievalCostAndFaq";
import SurgicalSpermRetrievalRelatedTreatments from "@/components/sections/surgical-sperm-retrieval/SurgicalSpermRetrievalRelatedTreatments";
import AboutConsultation from "@/components/sections/about/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about/AboutParenthoodCta";

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
