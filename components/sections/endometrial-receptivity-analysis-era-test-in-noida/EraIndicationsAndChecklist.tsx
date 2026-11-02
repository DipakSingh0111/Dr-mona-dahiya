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
const indications: { number: string; title: string; description: ReactNode }[] =
  [
    {
      number: "1",
      title: "Recurrent implantation failure",
      description: (
        <>
          2 or more failed transfers of good blastocysts. See{" "}
          <Link
            href="/recurrent-implantation-failure-rif"
            className="font-medium text-[#93c5fd] underline underline-offset-2 hover:text-white"
          >
            Recurrent Implantation Failure
          </Link>
          .
        </>
      ),
    },
    {
      number: "2",
      title: "Failed euploid transfers",
      description:
        "Unexplained failure after transferring PGT-A tested, chromosomally normal embryos.",
    },
    {
      number: "3",
      title: "Limited embryos",
      description:
        "Low reserve or older age with only 1 blastocyst, where timing must be right first time.",
    },
    {
      number: "4",
      title: "Suspected displaced window",
      description:
        "Severe adenomyosis, uterine variations or metabolic changes that may shift progesterone needs.",
    },
  ];

const checklist = [
  {
    title: "Mock HRT cycle",
    text: "step-up estradiol valerate to copy future transfer conditions.",
  },
  {
    title: "Lining check",
    text: "a trilaminar lining of 7.5 mm or more before progesterone starts.",
  },
  {
    title: "Progesterone timing",
    text: "started at a recorded hour and tracked to the biopsy at P+5 (120 hours).",
  },
  {
    title: "Chronic endometritis screen",
    text: "CD138 testing at the same time, so inflammation does not distort results.",
  },
  {
    title: "Infection screening (HIV, HBsAg, HCV, VDRL)",
    text: "as required under the Indian ART Act.",
  },
];

export default function EraIndicationsAndChecklist() {
  return (
    <TreatmentSection>
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="Clinical breakdown"
          title="Indications: Who Needs an ERA Test?"
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
          title="Diagnostic Checklist: Mock Cycle Requirements"
          subtitle="The mock cycle must copy your future transfer cycle exactly, or the result will not apply."
        />

          <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
            {checklist.map((item, idx) => (
              <Reveal key={item.title} variant="fadeUp" delay={idx * 0.04}>
                <ChecklistRow>
                  <strong className="font-semibold text-white">{item.title}:</strong>{" "}
                  {item.text}
                </ChecklistRow>
              </Reveal>
            ))}
          </div>
        </div>
      </TreatmentSection>
  );
}
