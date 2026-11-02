"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

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
            href="/recurrent-implantation-failure"
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
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <Reveal variant="fadeUp">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              Clinical breakdown
            </p>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
              Indications: Who Needs Laser-Assisted Hatching?
            </h2>
          </Reveal>

          <Stagger
            delay={0.05}
            className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
          >
            {indications.map((item) => (
              <StaggerItem key={item.number}>
                <div className="relative flex h-full flex-col justify-between rounded-2xl border border-[#e83e74]/35 bg-gradient-to-b from-[#141b36] to-[#0a1024] p-5 shadow-[0_0_24px_rgba(232,62,116,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#e83e74]/65 hover:shadow-[0_0_32px_rgba(232,62,116,0.22)] sm:p-6">
                  <div>
                    <div className="flex items-start gap-3">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#e83e74] text-[15px] font-bold text-white shadow-[0_2px_8px_rgba(232,62,116,0.4)]">
                        {item.number}
                      </span>
                      <h3 className="font-serif pt-0.5 text-[1.05rem] leading-snug font-semibold text-white sm:text-[1.12rem]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-3.5 text-[13px] leading-relaxed text-slate-300 sm:text-[13.5px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div>
          <Reveal variant="fadeUp">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              Before treatment
            </p>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
              Diagnostic Checklist: Pre-LAH Workup
            </h2>
            <p className="mt-2 text-[14px] text-slate-300 sm:text-[15px]">
              LAH is only added when these checks show a clear reason for it.
            </p>
          </Reveal>

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
      </div>
    </section>
  );
}
