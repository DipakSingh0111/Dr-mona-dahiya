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
    title: "Failed IVF or recurrent implantation failure",
    description: "To check the cavity before another transfer.",
  },
  {
    number: "2",
    title: "Suspected polyps or fibroids",
    description: "Growths inside the cavity that can block implantation.",
  },
  {
    number: "3",
    title: "Uterine septum or congenital anomaly",
    description: "Seen on scan and confirmed by direct view.",
  },
  {
    number: "4",
    title: "Intrauterine adhesions",
    description: "Scarring after infection, surgery or curettage.",
  },
  {
    number: "5",
    title: "Abnormal bleeding or recurrent miscarriage",
    description: "To find the cause inside the cavity.",
  },
];

const checklist = [
  "Pelvic ultrasound, ideally 3D, to map the cavity",
  "Review of previous scans, surgeries and procedures",
  "Pre-procedure blood tests and anaesthesia fitness check",
  "Infection screening and cycle timing (usually after the period)",
];

export default function HysteroscopyIndicationsAndChecklist() {
  return (
    <TreatmentSection>
      <div className="mb-14 sm:mb-16 lg:mb-20">
        <TreatmentSectionHeader
          eyebrow="Clinical breakdown"
          title="Indications: Who Needs Hysteroscopy?"
          subtitle="Common reasons Dr. Mona Dahiya recommends hysteroscopy care."
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
