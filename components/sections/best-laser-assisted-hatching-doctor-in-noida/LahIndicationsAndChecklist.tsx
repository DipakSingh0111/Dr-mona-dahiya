"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  NumberedCard
} from "@/components/ui/treatment";
const indications: { number: string; title: string; description: ReactNode }[] =
  [
    {
      number: "1",
      title: "Age 37 or over",
      description:
        "The shell naturally thickens, hardens and loses elasticity with age, making hatching harder.",
    },
    {
      number: "2",
      title: "Recurrent implantation failure",
      description: (
        <>
          Several failed transfers despite good-grade embryos. See{" "}
          <Link
            href="/recurrent-implantation-failure-rif"
            className="font-medium text-[#93c5fd] underline underline-offset-2 hover:text-white"
          >
            Recurrent Implantation Failure Treatment
          </Link>
          .
        </>
      ),
    },
    {
      number: "3",
      title: "Frozen-thawed embryo transfers",
      description:
        "Freezing agents and rapid cooling can harden the shell.",
    },
    {
      number: "4",
      title: "Raised FSH or borderline AMH",
      description:
        "Linked with changes that thicken the egg's outer layer.",
    },
    {
      number: "5",
      title: "Visibly thick zona (15 to 18 μm or more)",
      description:
        "Confirmed by the embryologist under the microscope.",
    },
    {
      number: "6",
      title: "Genetic testing (PGT)",
      description:
        "A small opening on Day 3 or Day 5 lets outer cells herniate for a safe biopsy.",
    },
  ];

const checklist: { text: ReactNode }[] = [
  {
    text: "Zona measurement: phase-contrast microscopy measures shell thickness in micrometres across several axes.",
  },
  {
    text: "Embryo staging: cell count, intact cells and no multinucleation on Day 3 or Day 5.",
  },
  {
    text: "Lining check: an 8 mm or thicker trilaminar lining, timed to the faster hatching window.",
  },
  {
    text: (
      <>
        Cavity clearance: no fluid, polyps or hidden inflammation, using Diagnostic
        Hysteroscopy.
      </>
    ),
  },
  {
    text: "Infection screening for both partners, as required under the Indian ART Act.",
  },
];

export default function LahIndicationsAndChecklist() {
  return (
    <TreatmentSection>
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="Clinical breakdown"
          title="Indications: Who Needs Laser-Assisted Hatching?"
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
          title="Diagnostic Checklist: Pre-LAH Workup"
          subtitle="LAH is only added when these checks show a clear reason for it."
        />

          <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
            {checklist.map((item, idx) => (
              <Reveal key={idx} variant="fadeUp" delay={idx * 0.04}>
                <div className="flex items-center gap-3.5 rounded-xl border border-white/10 bg-[#091a3c]/70 px-4 py-3.5 backdrop-blur-md transition-all duration-200 hover:border-[#0047ca]/50 hover:bg-[#0c224e]/80 sm:px-5 sm:py-4">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-300 ring-1 ring-teal-400/40 sm:size-6">
                    <FaCheck className="size-2.5 sm:size-3" />
                  </span>
                  <p className="text-[13.5px] leading-relaxed text-slate-200 sm:text-[14.5px]">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </TreatmentSection>
  );
}
