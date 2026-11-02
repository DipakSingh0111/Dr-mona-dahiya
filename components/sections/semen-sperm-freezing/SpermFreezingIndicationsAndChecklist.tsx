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
    title: "Before cancer treatment",
    description: "Chemotherapy or radiotherapy can damage sperm.",
  },
  {
    number: "2",
    title: "Before vasectomy or testicular surgery",
    description: "To preserve future options.",
  },
  {
    number: "3",
    title: "Backup on egg-retrieval day",
    description: "When collection stress is a concern.",
  },
  {
    number: "4",
    title: "Fluctuating or declining sperm quality",
    description: "To bank better samples.",
  },
  {
    number: "5",
    title: "Work or personal delay",
    description: "Frequent travel, military postings or planned delay.",
  },
];

const checklistItems = [
  "Semen analysis",
  "Infectious disease screening (as required for storage)",
  "Consent and identification formalities",
  "Abstinence guidance of 2 to 5 days",
];

export default function SpermFreezingIndicationsAndChecklist() {
  return (
    <TreatmentSection>
      <div className="mb-14 sm:mb-16 lg:mb-20">
        <TreatmentSectionHeader
          eyebrow="Clinical breakdown"
          title="Indications: Who Needs Semen or Sperm Freezing?"
          subtitle="Common reasons Dr. Mona Dahiya recommends semen & sperm freezing care."
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
      </div>

      <div>
        <TreatmentSectionHeader
          eyebrow="Before treatment"
          title="Diagnostic Checklist"
          subtitle="These tests help confirm the diagnosis and choose the right plan. Not every patient needs every test."
        />
        <div className="mt-6 grid grid-cols-1 gap-3.5 sm:mt-7 sm:grid-cols-2 sm:gap-4">
          {checklistItems.map((item, idx) => (
            <Reveal key={item} variant="fadeUp" delay={idx * 0.04}>
              <ChecklistRow>{item}</ChecklistRow>
            </Reveal>
          ))}
        </div>
      </div>
    </TreatmentSection>
  );
}
