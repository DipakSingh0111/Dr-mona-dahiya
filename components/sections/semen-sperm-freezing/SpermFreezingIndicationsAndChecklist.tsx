"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  NumberedCard,
  ChecklistRow,
} from "@/components/ui/treatment";

const indications = [
  {
    number: "1",
    title: "If you are planning on starting chemotherapy/radiation therapy",
    description: "Sperm quality gets affected after chemo/radiation therapy.",
  },
  {
    number: "2",
    title: "Planning on getting a vasectomy or testicular surgery",
    description: "In case you want to preserve your options.",
  },
  {
    number: "3",
    title: "Plan B on Day of Egg Retrieval",
    description:
      "You can have a backup sample frozen in case you face any issues during sample collection.",
  },
  {
    number: "4",
    title: "Irregular/Declining sperm quality",
    description: "Bank your good samples for later use.",
  },
  {
    number: "5",
    title: "Delaying due to Work/Personal requirements",
    description:
      "Due to job postings, you might not be able to visit often. You can store your sample and have your baby later on.",
  },
];

const checklistItems = [
  "Semen report",
  "Blood workup as necessary for freezing",
  "Paperwork and ID to be carried",
  "Abstinence period of minimum 2 days and maximum 5 days",
];

export function SpermFreezingIndications() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Clinical Pointers"
        title={
          <>
            Indications: When Should
            <br className="hidden sm:inline" /> You Freeze Semen/Sperm?
          </>
        }
        subtitle="Following are some of the indications when we recommend that our patients get their semen/sperm frozen."
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

export function SpermFreezingChecklist() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Pre treatment"
        title="What tests do you need to get done?"
        subtitle="Diagnosis is made by the following investigations. Each patient is different, so you might not require all of these."
      />
      <div className="mt-6 grid grid-cols-1 gap-3.5 sm:mt-7 sm:grid-cols-2 sm:gap-4">
        {checklistItems.map((item, idx) => (
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

export default function SpermFreezingIndicationsAndChecklist() {
  return (
    <>
      <SpermFreezingIndications />
      <SpermFreezingChecklist />
    </>
  );
}
