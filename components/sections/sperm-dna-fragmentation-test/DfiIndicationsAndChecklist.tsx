"use client";

import { Reveal } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  NumberedCard,
  ChecklistRow,
} from "@/components/ui/treatment";

interface IndicationItem {
  number: string;
  title: string;
  description: string;
}

const indications: IndicationItem[] = [
  {
    number: "1",
    title: "Male infertility",
    description:
      "If male and female workup is done and no pregnancy has occurred.",
  },
  {
    number: "2",
    title: "Miscarriage",
    description: "Loss of baby twice or more at initial stages.",
  },
  {
    number: "3",
    title: "Failed IUI/IVF cycle",
    description:
      "Poor fertilization rate or poor quality embryo growth.",
  },
  {
    number: "4",
    title: "Due to habit or exposure",
    description:
      "Could be due to smoking, heat, sitting for long duration, varicocele or infection.",
  },
  {
    number: "5",
    title: "Due to age",
    description: "With increase in age men tend to have higher DFI levels.",
  },
];

const diagnosticItems = [
  "Semen report",
  "Blood work-up and Scrotal USG",
  "Sperm DNA fragmentation index test done after abstinence of 2-5 days.",
  "In case you have had any recent history of fever or any medication or habit of smoking and drinking.",
];

export default function DfiIndicationsAndChecklist() {
  return (
    <TreatmentSection>
      <div className="mb-14 sm:mb-16 lg:mb-20">
        <TreatmentSectionHeader
          eyebrow="Clinical indications"
          title={
            <>
              Indications: Who Needs a Sperm DNA Fragmentation Test?
            </>
          }
          subtitle="Here are few points where you should consider getting yourself tested."
        />

        <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
          {indications.map((item) => (
            <NumberedCard key={item.number} {...item} />
          ))}
        </div>
      </div>

      <div>
        <TreatmentSectionHeader
          eyebrow="What tests are needed before treatment"
          title="Diagnostic Checklist"
          subtitle="Below tests can be performed before starting treatment. It may vary from patient to patient."
        />

        <div className="mt-6 grid grid-cols-1 gap-3.5 sm:mt-7 sm:grid-cols-2 sm:gap-4">
          {diagnosticItems.map((text, idx) => (
            <Reveal key={text} variant="fadeUp" delay={idx * 0.04}>
              <ChecklistRow>{text}</ChecklistRow>
            </Reveal>
          ))}
        </div>
      </div>
    </TreatmentSection>
  );
}
