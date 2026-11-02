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
interface IndicationItem {
  number: string;
  title: string;
  description: ReactNode;
}

const indications: IndicationItem[] = [
  {
    number: "1",
    title: "Severe oligoasthenoteratozoospermia (OATS)",
    description: (
      <>
        Count below 5 million/mL, progressive motility below 20%, or normal forms below
        2% (strict Kruger criteria). See{" "}
        <Link
          href="/low-sperm-count-oligospermia"
          className="font-medium text-[#93c5fd] underline underline-offset-2 hover:text-white"
        >
          Low Sperm Count &amp; Motility
        </Link>
        .
      </>
    ),
  },
  {
    number: "2",
    title: "Obstructive and non-obstructive azoospermia",
    description: (
      <>
        Sperm taken from the testis or epididymis through{" "}
        <Link
          href="/surgical-sperm-retrieval-tesa-pesa"
          className="font-medium text-[#93c5fd] underline underline-offset-2 hover:text-white"
        >
          Surgical Sperm Retrieval (TESA/PESA/Micro-TESE)
        </Link>
        .
      </>
    ),
  },
  {
    number: "3",
    title: "High sperm DNA fragmentation (DFI above 25%)",
    description:
      "Chromatin damage where standard IVF leads to fertilisation failure or early embryo arrest.",
  },
  {
    number: "4",
    title: "Total fertilisation failure in a past IVF cycle",
    description: "Mature eggs that did not fertilise with conventional incubation.",
  },
  {
    number: "5",
    title: "Preimplantation genetic testing (PGT-A or PGT-M)",
    description:
      "ICSI is required before embryo biopsy to avoid extra paternal DNA on the egg's outer shell.",
  },
  {
    number: "6",
    title: "Frozen (vitrified) egg cycles",
    description:
      "The shell hardens during freezing and thawing, so sperm cannot penetrate on its own.",
  },
];

const checklist: { text: ReactNode }[] = [
  {
    text: "Computerised semen assessment (CASA): velocity parameters (VAP, VSL, VCL) and total progressive motile fraction.",
  },
  {
    text: (
      <>
        Sperm chromatin dispersion (Halosperm): single- and double-strand breaks, through
        the{" "}
        <Link
          href="/sperm-dna-fragmentation-test"
          className="font-medium text-[#93c5fd] underline underline-offset-2 hover:text-white"
        >
          Sperm DNA Fragmentation Index
        </Link>
        .
      </>
    ),
  },
  {
    text: "Hypoosmotic swelling (HOS) test: finds living but non-moving sperm for injection in TESA samples.",
  },
  {
    text: "Genetic karyotype and Y-microdeletion screen (AZFa, AZFb, AZFc) before any surgical retrieval.",
  },
  {
    text: "Female ovarian and uterine reserve: AMH, antral follicle count and cavity screening to keep the lining in step with the embryo.",
  },
];

export default function IcsiIndicationsAndChecklist() {
  return (
    <TreatmentSection>
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="Clinical breakdown"
          title="Indications: Who Needs ICSI Treatment?"
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
          title="Diagnostic Checklist: Pre-ICSI Laboratory Workup"
          subtitle="ICSI is only advised when the workup shows a clear need. These tests guide the choice."
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
