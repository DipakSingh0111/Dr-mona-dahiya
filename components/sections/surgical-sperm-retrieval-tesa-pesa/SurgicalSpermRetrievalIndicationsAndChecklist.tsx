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
    title: "Obstructive azoospermia",
    description: "Sperm is made but cannot reach the semen.",
  },
  {
    number: "2",
    title: "Non-obstructive azoospermia",
    description: "Low or absent production, needing a microsurgical search.",
  },
  {
    number: "3",
    title: "Ejaculation problems",
    description: "Retrograde ejaculation or spinal injury.",
  },
  {
    number: "4",
    title: "Failed vasectomy reversal",
    description: "Or previous vasectomy where reversal is not planned.",
  },
  {
    number: "5",
    title: "Very poor ejaculated sperm",
    description:
      "In selected cases, testicular sperm gives better DNA quality.",
  },
];

const checklist = [
  "Semen analysis and hormone profile",
  "Scrotal ultrasound",
  "Karyotype and Y-microdeletion where indicated",
  "Anaesthesia fitness and infection screening",
];

export default function SurgicalSpermRetrievalIndicationsAndChecklist() {
  return (
    <TreatmentSection>
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="Clinical breakdown"
          title="Indications: Who Needs Surgical Sperm Retrieval?"
          subtitle="Common reasons Dr. Mona Dahiya recommends surgical sperm retrieval care."
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
