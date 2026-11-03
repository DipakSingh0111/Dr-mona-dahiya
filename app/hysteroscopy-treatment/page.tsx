import type { Metadata } from "next";

import HysteroscopyHero from "@/components/sections/hysteroscopy-treatment/HysteroscopyHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import HysteroscopyIndicationsAndChecklist from "@/components/sections/hysteroscopy-treatment/HysteroscopyIndicationsAndChecklist";
import HysteroscopyProtocolWhyAndCase from "@/components/sections/hysteroscopy-treatment/HysteroscopyProtocolWhyAndCase";
import HysteroscopyCostAndFaq from "@/components/sections/hysteroscopy-treatment/HysteroscopyCostAndFaq";
import HysteroscopyRelatedTreatments from "@/components/sections/hysteroscopy-treatment/HysteroscopyRelatedTreatments";
import ClinicsAppointmentCards from "@/components/sections/ClinicsAppointmentCards";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Diagnostic & Operative Hysteroscopy in Delhi, Noida & Ghaziabad | Dr. Mona Dahiya",
  description:
    "Day-care diagnostic and operative hysteroscopy with Dr. Mona Dahiya — see and treat polyps, fibroids, septum or adhesions in the same sitting across Delhi NCR.",
};

export default function HysteroscopyPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#061532]">
      <HysteroscopyHero />

      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <HysteroscopyIndicationsAndChecklist />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <HysteroscopyProtocolWhyAndCase />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <HysteroscopyCostAndFaq />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <HysteroscopyRelatedTreatments />
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
