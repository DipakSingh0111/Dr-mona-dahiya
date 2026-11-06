"use client";

import { Reveal } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  NumberedCard,
  ChecklistRow,
} from "@/components/ui/treatment";

const indications = [
  {
    number: "1",
    title: "Abnormal Semen Analysis Report",
    description:
      "Low count/motility/morphology",
  },
  {
    number: "2",
    title: "Varicocele-Induced Sperm Decline",
    description:
      "Increased scrotal veins that may reduce sperm count and quality.",
  },
  {
    number: "3",
    title: "Hormonal issues or other diseases",
    description: "Hypothyroidism, Diabetes, Low testosterone",
  },
  {
    number: "4",
    title: "Habits/Lifestyle factors",
    description:
      "That reduce count and quality. Smoking, drinking, overweight etc.",
  },
  {
    number: "5",
    title: "IUI failure",
    description:
      "If IUI failure occurred due to Sperm count and motility.",
  },
];

const diagnosticItems = [
  "Two Semens Reports 4-6 weeks apart",
  "Ultrasound Scrotum with Doppler study",
  "Hormones: FSH, LH, Testosterone and Prolactin",
  "Sperm DFI",
];

export default function LowSpermIndicationsAndChecklist() {
  return (
    <TreatmentSection>
      <div className="mb-14 sm:mb-16 lg:mb-20">
        <TreatmentSectionHeader
          eyebrow="Causes for low sperm count?"
          title={
            <>
              Indications: Who Needs Evaluation for Low Sperm Count?
            </>
          }
          subtitle="Find out why Dr. Mona Dahiya suggests treatment for Low Sperm count & Motility"
        />

        <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
          {indications.map((item) => (
            <NumberedCard key={item.number} {...item} />
          ))}
        </div>
      </div>

      <div>
        <TreatmentSectionHeader
          eyebrow="Semen Analysis Workup"
          title="Diagnostic Checklist for Low Sperm Count & Motility"
          subtitle="Following tests are performed to make sure the condition exists and we decide further course of action. These are not required for every patient"
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
