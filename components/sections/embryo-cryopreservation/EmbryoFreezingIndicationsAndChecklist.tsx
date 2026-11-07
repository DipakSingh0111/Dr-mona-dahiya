"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  ChecklistRow,
  NumberedCard,
} from "@/components/ui/treatment";

const indications = [
  {
    number: "1",
    title: "Freeze-all cycles",
    description: "When a fresh transfer is not recommended.",
  },
  {
    number: "2",
    title: "Preimplantation Genetic Testing",
    description: "When you need to wait for the result, we freeze the embryos.",
  },
  {
    number: "3",
    title: "Store excess healthy quality embryos",
    description: "For future use.",
  },
  {
    number: "4",
    title: "Embryo Freezing for Cancer Patients",
    description: "When you want to delay childbirth.",
  },
  {
    number: "5",
    title: "Plan for a sibling",
    description: "Freeze the remaining embryos to have another child.",
  },
];

const checklist = [
  "Check the quality of the embryos and their stage of development.",
  "Evaluate the current cycle and uterus.",
  "Get the consent form filled to freeze embryos for the desired period.",
  "Standard blood test panel.",
];

export function EmbryoFreezingIndications() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="About Embryo Freezing (Cryopreservation)"
        title={
          <>
            Indications: Who Should
            <br className="hidden sm:inline" /> Get Embryos Frozen?
          </>
        }
        subtitle="Reasons why Dr. Mona Dahiya suggests embryo freezing & embryo banking."
      />

      <Stagger
        delay={0.05}
        className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
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

export function EmbryoFreezingChecklist() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Before Embryo Freezing"
        title="Tests to Be Done Before Embryo Freezing"
        subtitle="Some tests may be required to confirm the diagnosis and to find the correct course of action. Each patient has different requirements."
      />

      <div className="mt-6 grid grid-cols-1 gap-3.5 sm:mt-7 sm:grid-cols-2 sm:gap-4">
        {checklist.map((item, idx) => (
          <Reveal key={item} variant="fadeUp" delay={idx * 0.04}>
            <ChecklistRow>
              <span className="font-semibold text-ink">{item}</span>
            </ChecklistRow>
          </Reveal>
        ))}
      </div>
    </TreatmentSection>
  );
}

export default function EmbryoFreezingIndicationsAndChecklist() {
  return (
    <>
      <EmbryoFreezingIndications />
      <EmbryoFreezingChecklist />
    </>
  );
}
