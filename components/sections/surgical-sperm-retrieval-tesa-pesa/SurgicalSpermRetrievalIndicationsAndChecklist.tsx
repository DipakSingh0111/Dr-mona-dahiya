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
    title: "Obstructive",
    description:
      "Sperm are formed in your body. But they don't come in your ejaculate because they are blocked somewhere.",
  },
  {
    number: "2",
    title: "Non Obstructive",
    description:
      "Body produces very little sperm or none at all. Hence we use a microscope to search for sperm.",
  },
  {
    number: "3",
    title: "No ejaculation",
    description:
      "If you have a retrograde ejaculation or spinal cord paralysis you won't be able to ejaculate.",
  },
  {
    number: "4",
    title: "Vasectomy Failed",
    description: "If you have done vasectomy and dont want it reversed.",
  },
  {
    number: "5",
    title: "Sperm quality is poor",
    description: "At times taking sperm out of testis may give us good quality DNA.",
  },
];

const checklist = [
  "Semen analysis and hormones",
  "Ultrasound Scrotum",
  "Karyotype & Y micro deletion",
  "Checkup for anesthesia and blood workup",
];

export default function SurgicalSpermRetrievalIndicationsAndChecklist() {
  return (
    <TreatmentSection>
      <div className="mb-14 sm:mb-16 lg:mb-20">
        <TreatmentSectionHeader
          eyebrow="Reasons"
          title="Indications: Who Needs Surgical Sperm Retrieval?"
          subtitle="Why would you need surgical sperm extraction."
        />

        <Stagger
          delay={0.05}
          className="mt-7 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          {indications.map((item) => (
            <StaggerItem key={item.number} className="h-full">
              <NumberedCard {...item} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <div>
        <TreatmentSectionHeader
          eyebrow="Diagnosis"
          title="Diagnostic Checklist"
          subtitle="Following tests will be done to you before doing testicular or epididymal sperm aspiration. Not everyone will require all tests."
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
