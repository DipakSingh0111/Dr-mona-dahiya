"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  ChecklistRow,
  NumberedCard
} from "@/components/ui/treatment";
const indications = [
  {
    number: "1",
    title: "Freeze-all cycles",
    description: "When a fresh transfer is not advisable.",
  },
  {
    number: "2",
    title: "Preimplantation genetic testing",
    description: "Embryos are frozen while results are awaited.",
  },
  {
    number: "3",
    title: "Surplus good-quality embryos",
    description: "Kept for future attempts.",
  },
  {
    number: "4",
    title: "Fertility preservation",
    description: "Before cancer treatment or planned delay.",
  },
  {
    number: "5",
    title: "Sibling planning",
    description: "Store embryos for a second child.",
  },
];

const checklist = [
  "Embryo grade and development stage review",
  "Cycle assessment and uterine readiness",
  "Consent for storage and duration",
  "Infectious disease screening as per norms",
];

export default function EmbryoFreezingIndicationsAndChecklist() {
  return (
    <TreatmentSection>
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="Clinical breakdown"
          title="Indications: Who Needs Embryo Freezing?"
          subtitle="Common reasons Dr. Mona Dahiya recommends embryo freezing &amp; banking care."
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
            {checklist.map((item, idx) => (
              <Reveal key={item} variant="fadeUp" delay={idx * 0.04}>
              <ChecklistRow>{item}</ChecklistRow>
            </Reveal>
            ))}
          </div>
        </div>
      </TreatmentSection>
  );
}
