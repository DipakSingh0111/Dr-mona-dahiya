import type { Metadata } from "next";

import PgtHero from "@/components/sections/preimplantation-genetic-testing-pgt-center-in-noida/PgtHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import PgtWhatAndModalities from "@/components/sections/preimplantation-genetic-testing-pgt-center-in-noida/PgtWhatAndModalities";
import PgtIndicationsAndChecklist from "@/components/sections/preimplantation-genetic-testing-pgt-center-in-noida/PgtIndicationsAndChecklist";
import PgtProtocolAndWhy from "@/components/sections/preimplantation-genetic-testing-pgt-center-in-noida/PgtProtocolAndWhy";
import PgtCostAndClinics from "@/components/sections/preimplantation-genetic-testing-pgt-center-in-noida/PgtCostAndClinics";
import PgtFaq from "@/components/sections/preimplantation-genetic-testing-pgt-center-in-noida/PgtFaq";
import PgtRelatedTreatments from "@/components/sections/preimplantation-genetic-testing-pgt-center-in-noida/PgtRelatedTreatments";
import PgtConsultation from "@/components/sections/preimplantation-genetic-testing-pgt-center-in-noida/PgtConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Preimplantation Genetic Testing (PGT) in Noida, Ghaziabad & Delhi | Dr. Mona Dahiya",
  description:
    "Preimplantation Genetic Testing (PGT-A, PGT-M, PGT-SR) with NGS genomic analysis by Dr. Mona Dahiya. Screen blastocysts to maximize IVF success and reduce miscarriage risk.",
};

export default function PgtPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
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
