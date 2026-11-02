import type { Metadata } from "next";

import PgtHero from "@/components/sections/pgt-treatment/PgtHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import PgtWhatAndModalities from "@/components/sections/pgt-treatment/PgtWhatAndModalities";
import PgtIndicationsAndChecklist from "@/components/sections/pgt-treatment/PgtIndicationsAndChecklist";
import PgtProtocolAndWhy from "@/components/sections/pgt-treatment/PgtProtocolAndWhy";
import PgtCostAndClinics from "@/components/sections/pgt-treatment/PgtCostAndClinics";
import PgtFaq from "@/components/sections/pgt-treatment/PgtFaq";
import PgtRelatedTreatments from "@/components/sections/pgt-treatment/PgtRelatedTreatments";
import PgtConsultation from "@/components/sections/pgt-treatment/PgtConsultation";
import AboutParenthoodCta from "@/components/sections/about/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Preimplantation Genetic Testing (PGT) in Noida, Ghaziabad & Delhi | Dr. Mona Dahiya",
  description:
    "Preimplantation Genetic Testing (PGT-A, PGT-M, PGT-SR) with NGS genomic analysis by Dr. Mona Dahiya. Screen blastocysts to maximize IVF success and reduce miscarriage risk.",
};

export default function PgtPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <PgtHero />

      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <PgtWhatAndModalities />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <PgtIndicationsAndChecklist />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <PgtProtocolAndWhy />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <PgtCostAndClinics />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <PgtFaq />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <PgtRelatedTreatments />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <PgtConsultation />
      </SectionReveal>

      <AboutParenthoodCta />
    </main>
  );
}

