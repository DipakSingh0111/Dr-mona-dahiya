"use client";

import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  CostFactorCard,
} from "@/components/ui/treatment";

const techniques = [
  {
    title: "PESA",
    description:
      "Percutaneous Epididymal Sperm Aspiration. As we use a needle to get sperm out of epididymis. Local anaesthesia is used for this procedure. Its used when there is an obstruction in sperm pathway.",
  },
  {
    title: "TESA",
    description:
      "Testicular Sperm Aspiration. Here we insert a needle in testis to extract tissue. It contains sperm as well. This can be used if there is an obstruction. If PESA does not give result. Or sperm DNA fragmentation is high.",
  },
  {
    title: "Micro TESE",
    description:
      "Microscopic Testicular Sperm Extraction. Under a microscope we identify spermatic tubules and take out the tubules. Used for Non Obstructive azoospermia patients.",
  },
];

export default function SurgicalSpermRetrievalTechniques() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="How to extract sperm"
        title="PESA, TESA and Micro-TESE at a Glance"
        subtitle="These methods are used to retrieve sperm from your body."
      />

      <Stagger
        delay={0.05}
        className="mt-7 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
      >
        {techniques.map((item) => (
          <StaggerItem key={item.title} className="h-full">
            <CostFactorCard title={item.title} description={item.description} />
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}
