"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  NumberedCard,
  ChecklistRow,
} from "@/components/ui/treatment";

const indications: {
  number: string;
  title: string;
  description: ReactNode;
}[] = [
  {
    number: "1",
    title: "Premature ovarian insufficiency",
    description:
      "Complete follicle loss or surgical or medical menopause before 40.",
  },
  {
    number: "2",
    title: "Severely low reserve",
    description: "AMH under 0.2 ng/mL with repeated failed stimulation.",
  },
  {
    number: "3",
    title: "Non-obstructive azoospermia",
    description: (
      <>
        No sperm found even with micro-TESE. See{" "}
        <Link
          href="/azoospermia-treatment"
          className="font-medium text-[#93c5fd] underline underline-offset-2 hover:text-white"
        >
          Azoospermia Treatment
        </Link>
        .
      </>
    ),
  },
  {
    number: "4",
    title: "Serious inherited conditions",
    description:
      "Where PGT-M is not suitable to prevent a severe genetic disease.",
  },
  {
    number: "5",
    title: "Repeated poor egg or embryo quality",
    description:
      "Consistently abnormal eggs or embryo arrest despite changed protocols.",
  },
];

const checklist = [
  "Sourcing only through government-registered ART banks, as Indian law requires.",
  "Donor screening: HIV, hepatitis B and C, VDRL, CMV, karyotype and thalassaemia screening.",
  "Recipient cavity check: 3D sonohysterography or hysteroscopy.",
  "Mock lining preparation: estrogen trial targeting 8 mm or more with a trilaminar pattern.",
  "Legal and psychological counselling, with informed consent filed as required.",
];

export default function DonorGameteIndicationsAndChecklist() {
  return (
    <TreatmentSection>
      <div className="mb-14 sm:mb-16 lg:mb-20">
        <TreatmentSectionHeader
          eyebrow="Clinical breakdown"
          title="Indications: When Are Donor Gametes Recommended?"
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
          title="Diagnostic Checklist: Donor Screening & Recipient Preparation"
          subtitle="Every step follows the ART (Regulation) Act and National ART Board requirements."
        />
        <div className="mt-6 grid grid-cols-1 gap-3.5 sm:mt-7 sm:gap-4">
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
