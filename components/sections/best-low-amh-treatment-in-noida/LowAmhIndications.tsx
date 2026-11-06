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
    title: "Amh < 1.1 ng/ml",
    description: "Antral Follicle Count of 5-6 or less.",
  },
  {
    number: "2",
    title: "Female > 36 yrs of age",
    description:
      "Due to natural attrition of follicles require low stress protocol for retrieval of eggs.",
  },
  {
    number: "3",
    title: "Low Response in IVF Cycles",
    description: "Fewer than 3 eggs with maximum dose medications.",
  },
  {
    number: "4",
    title: "Premature Ovarian Failure",
    description: "Diminished reserve < 35 yrs of age.",
  },
  {
    number: "5",
    title: "Endometrioma / Surgery done",
    description:
      "Loss of follicle bank due to removal of endometriomas from bilateral ovaries.",
  },
];

export default function LowAmhIndications() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Low Amh Causes"
        title="Indications: Who Needs Specialised Low AMH Care?"
        subtitle="Diminished Ovarian Reserve (DOR) is diagnosed with following signs"
      />

      <Stagger
        delay={0.06}
        className="mt-7 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
      >
        {indications.map((item) => (
          <StaggerItem key={item.number} className="h-full">
            <NumberedCard {...item} />
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}
