"use client";

import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

interface IndicationCard {
  number: string;
  title: string;
  description: string;
}

const indications: IndicationCard[] = [
  {
    number: "1",
    title: "Multiple failed transfers",
    description: "Transfers of good-quality embryos that did not implant.",
  },
  {
    number: "2",
    title: "Poor embryo development",
    description: "Few embryos reaching blastocyst stage.",
  },
  {
    number: "3",
    title: "Suspected uterine factor",
    description: "Polyps, septum, adhesions or a thin lining.",
  },
  {
    number: "4",
    title: "Advanced maternal age",
    description: "Where chromosomal abnormalities in embryos are more likely.",
  },
  {
    number: "5",
    title: "Unexplained failure",
    description: "No clear cause after a standard work-up.",
  },
];

const checklistItems: string[] = [
  "Review of previous stimulation, embryo grading and transfer technique",
  "Hysteroscopy and 3D ultrasound for the cavity",
  "Screen for chronic endometritis, thyroid and metabolic factors",
  "Clotting and immune screen only where clinically justified",
  "Semen and sperm DNA fragmentation assessment",
];

export default function RifWhatAndIndications() {
  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1440px]">
        {/* ================= SECTION 1: What Is Recurrent Implantation Failure (RIF)? ================= */}
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <Reveal variant="fadeUp">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              Understanding the condition
            </p>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
              What Is Recurrent Implantation Failure (RIF)?
            </h2>
          </Reveal>

          {/* Single large card from screenshot */}
          <Reveal variant="fadeUp" delay={0.06} className="mt-6">
            <div className="rounded-2xl border border-[#e83e74]/35 bg-gradient-to-r from-[#141b36] via-[#0e223d] to-[#0a1024] p-6 sm:p-7 shadow-[0_0_24px_rgba(232,62,116,0.12)]">
              <div className="flex items-center gap-3">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-[#e83e74] text-white shadow-[0_2px_8px_rgba(232,62,116,0.4)]">
                  <FaCheck className="size-3" />
                </span>
                <h3 className="font-serif text-[1.05rem] font-semibold text-white sm:text-[1.12rem]">
                  Recurrent Implantation Failure (RIF)
                </h3>
              </div>
              <p className="mt-4 text-[13.5px] leading-relaxed text-slate-200 sm:text-[14.5px]">
                Recurrent Implantation Failure (RIF) is the failure to achieve pregnancy after transferring ≥2 top-grade blastocysts, affecting 10% to 15% of IVF patients. Roughly 50% of cases stem from embryonic chromosomal abnormalities—where PGT-A screening restores implantation rates to 65%–70%—while 25% to 30% involve a displaced implantation window (identified via ERA) or silent uterine issues like chronic endometritis and thin linings (&lt;7 mm).
              </p>
            </div>
          </Reveal>
        </div>

        {/* ================= SECTION 2: Indications: Who Needs a RIF Evaluation? ================= */}
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <Reveal variant="fadeUp">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              Clinical breakdown
            </p>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
              Indications: Who Needs a RIF Evaluation?
            </h2>
            <p className="mt-2 text-[14px] text-slate-300 sm:text-[15px]">
              Common reasons Dr. Mona Dahiya recommends recurrent implantation failure care.
            </p>
          </Reveal>

          {/* Row 1: 3 Cards */}
          <Stagger delay={0.05} className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
            {indications.slice(0, 3).map((item, idx) => (
              <StaggerItem key={idx}>
                <div className="relative flex h-full flex-col rounded-2xl border border-[#e83e74]/35 bg-gradient-to-b from-[#141b36] to-[#0a1024] p-5 sm:p-6 shadow-[0_0_24px_rgba(232,62,116,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#e83e74]/65 hover:shadow-[0_0_32px_rgba(232,62,116,0.22)]">
                  <div className="flex items-start gap-3.5">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#e83e74] text-[15px] font-bold text-white shadow-[0_2px_8px_rgba(232,62,116,0.4)]">
                      {item.number}
                    </span>
                    <h3 className="font-serif text-[1.05rem] font-semibold text-white leading-snug sm:text-[1.12rem] pt-0.5">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-3.5 text-[13px] leading-relaxed text-slate-300 sm:text-[13.5px]">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          {/* Row 2: 2 Cards (centered or 2-col max-w-4xl) */}
          <Stagger delay={0.05} className="mt-4 sm:mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 sm:gap-5 max-w-4xl">
            {indications.slice(3, 5).map((item, idx) => (
              <StaggerItem key={idx}>
                <div className="relative flex h-full flex-col rounded-2xl border border-[#e83e74]/35 bg-gradient-to-b from-[#141b36] to-[#0a1024] p-5 sm:p-6 shadow-[0_0_24px_rgba(232,62,116,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#e83e74]/65 hover:shadow-[0_0_32px_rgba(232,62,116,0.22)]">
                  <div className="flex items-start gap-3.5">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#e83e74] text-[15px] font-bold text-white shadow-[0_2px_8px_rgba(232,62,116,0.4)]">
                      {item.number}
                    </span>
                    <h3 className="font-serif text-[1.05rem] font-semibold text-white leading-snug sm:text-[1.12rem] pt-0.5">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-3.5 text-[13px] leading-relaxed text-slate-300 sm:text-[13.5px]">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* ================= SECTION 3: Diagnostic Checklist ================= */}
        <div>
          <Reveal variant="fadeUp">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              Before treatment
            </p>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
              Diagnostic Checklist
            </h2>
            <p className="mt-2 text-[14px] text-slate-300 sm:text-[15px]">
              These tests help confirm the diagnosis and choose the right plan. Not every patient needs every test.
            </p>
          </Reveal>

          {/* 2-column or grid checklist bars */}
          <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-7 sm:grid-cols-2 sm:gap-3.5">
            {checklistItems.map((item, idx) => (
              <Reveal key={idx} variant="fadeUp" delay={idx * 0.04}>
                <div className="flex h-full items-center gap-3.5 rounded-xl border border-white/10 bg-[#091a3c]/70 px-4 py-3.5 backdrop-blur-md transition-all duration-200 hover:border-[#0047ca]/50 hover:bg-[#0c224e]/80 sm:px-5 sm:py-4">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-[#14b8a6] text-white shadow-[0_2px_8px_rgba(20,184,166,0.4)]">
                    <FaCheck className="size-3" />
                  </span>
                  <p className="text-[13px] leading-relaxed text-slate-200 sm:text-[13.5px]">
                    {item}
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

