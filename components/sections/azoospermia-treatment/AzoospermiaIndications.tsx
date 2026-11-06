"use client";

import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  NumberedCard,
} from "@/components/ui/treatment";

const indications = [
  {
    number: "1",
    title: "Zero sperms on semen analysis",
    description:
      "If sperm count is found to be zero on 2 separate samples (after centrifugation).",
  },
  {
    number: "2",
    title: "Past history of infection/surgery/injury",
    description:
      "Due to Mumps or previous surgeries/injuries to testis or vas deferens.",
  },
  {
    number: "3",
    title: "No or blocked vas deferens",
    description: "Vas deferens may not be present or blocked.",
  },
  {
    number: "4",
    title: "Imbalance in hormone levels",
    description:
      "If the levels of FSH/LH are abnormal due to hormonal deficiency.",
  },
  {
    number: "5",
    title: "Genetics",
    description: "Karyotyping or presence of Micro deletion.",
  },
];

export default function AzoospermiaIndications() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="About Azoospermia"
        title={
          <>
            Indications: Who Needs an Azoospermia
            <br className="hidden sm:inline" /> Evaluation?
          </>
        }
        subtitle="Patients with the following need to see an Azoospermia expert."
      />

      <Stagger
        delay={0.05}
        className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5"
      >
        {indications.map((item) => (
          <StaggerItem key={item.number}>
            <NumberedCard {...item} />
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}
