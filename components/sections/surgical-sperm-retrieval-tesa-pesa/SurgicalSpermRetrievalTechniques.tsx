"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  CostFactorCard
} from "@/components/ui/treatment";
const techniques = [
  {
    title: "PESA",
    description:
      "Percutaneous Epididymal Sperm Aspiration. A fine needle draws sperm from the epididymis under local anaesthesia. Used mainly for obstructive azoospermia.",
  },
  {
    title: "TESA",
    description:
      "Testicular Sperm Aspiration. A needle takes sperm-bearing tissue directly from the testis. Suits obstructive cases, failed PESA or high sperm DNA fragmentation.",
  },
  {
    title: "Micro-TESE",
    description:
      "Microsurgical Testicular Sperm Extraction. Under an operating microscope, the surgeon finds and takes only the sperm-producing tubules. The gold standard for non-obstructive azoospermia.",
  },
];

export default function SurgicalSpermRetrievalTechniques() {
  return (
    <TreatmentSection>
        <TreatmentSectionHeader
          eyebrow="Retrieval techniques"
          title="PESA, TESA and Micro-TESE at a Glance"
          subtitle="Three ways to collect sperm directly, chosen by the cause of azoospermia."
        />

        <Stagger
          delay={0.05}
          className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          {techniques.map((item) => (
            <StaggerItem key={item.title}>
              <CostFactorCard title={item.title} description={item.description} />
            </StaggerItem>
          ))}
        </Stagger>
      </TreatmentSection>
  );
}
