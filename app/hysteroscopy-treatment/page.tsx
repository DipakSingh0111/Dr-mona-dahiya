import type { Metadata } from "next";

import HysteroscopyHero from "@/components/sections/hysteroscopy-treatment/HysteroscopyHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import HysteroscopyIndicationsAndChecklist from "@/components/sections/hysteroscopy-treatment/HysteroscopyIndicationsAndChecklist";
import HysteroscopyProtocolWhyAndCase from "@/components/sections/hysteroscopy-treatment/HysteroscopyProtocolWhyAndCase";
import HysteroscopyCostAndFaq from "@/components/sections/hysteroscopy-treatment/HysteroscopyCostAndFaq";
import HysteroscopyRelatedTreatments from "@/components/sections/hysteroscopy-treatment/HysteroscopyRelatedTreatments";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Diagnostic & Operative Hysteroscopy in Delhi, Noida & Ghaziabad | Dr. Mona Dahiya",
  description:
    "Using a small telescope Dr. Mona Dahiya can inspect your uterine cavity and correct any defects in the same sitting if required. Day-care hysteroscopy across Delhi, Noida & Ghaziabad.",
};

export default function HysteroscopyPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      <HysteroscopyHero />

      <SectionReveal>
        <MedicalRegistration
          councilRegLabels={{
            DMC: "DMC registration number",
            MCI: "MCI registration number",
            UPMC: "UPMC registration number",
          }}
        />
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

      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
