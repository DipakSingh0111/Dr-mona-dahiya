"use client";

import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

interface IndicationItem {
  number: string;
  title: string;
  description: string;
}

const indications: IndicationItem[] = [
  {
    number: "1",
    title: "Abnormal semen report",
    description: "Low concentration, motility or abnormal morphology.",
  },
  {
    number: "2",
    title: "Varicocele",
    description: "Enlarged scrotal veins that may lower sperm quality.",
  },
  {
    number: "3",
    title: "Hormonal or medical causes",
    description: "Thyroid disorder, diabetes or low testosterone.",
  },
  {
    number: "4",
    title: "Lifestyle exposure",
    description: "Smoking, alcohol, obesity, heat or certain medicines.",
  },
  {
    number: "5",
    title: "Failed IUI cycles",
    description: "When sperm quality limits success.",
  },
];

interface ChecklistItem {
  text: string;
}

const checklist: ChecklistItem[] = [
  { text: "Two semen analyses a few weeks apart" },
  { text: "Hormone profile including FSH, LH, testosterone and prolactin" },
  { text: "Scrotal ultrasound with Doppler" },
  { text: "Sperm DNA fragmentation where indicated" },
];

export default function LowSpermIndicationsAndChecklist() {
  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1440px]">
        {/* ================= SECTION 1: Indications: Who Needs Evaluation ================= */}
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <Reveal variant="fadeUp">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              Clinical breakdown
            </p>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
              Indications: Who Needs
              <br className="hidden sm:inline" /> Evaluation for Low Sperm Count?
            </h2>
            <p className="mt-2 text-[14px] text-slate-300 sm:text-[15px]">
              Common reasons Dr. Mona Dahiya recommends low sperm count &amp; motility care.
            </p>
          </Reveal>

          {/* 5 Cards Grid */}
          <Stagger delay={0.05} className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
            {indications.map((item, idx) => (
              <StaggerItem key={idx}>
                <div className="relative flex h-full flex-col justify-between rounded-2xl border border-[#e83e74]/35 bg-gradient-to-b from-[#141b36] to-[#0a1024] p-5 sm:p-6 shadow-[0_0_24px_rgba(232,62,116,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#e83e74]/65 hover:shadow-[0_0_32px_rgba(232,62,116,0.22)]">
                  <div>
                    {/* Header: Number pill + Title */}
                    <div className="flex items-start gap-3">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#e83e74] text-[15px] font-bold text-white shadow-[0_2px_8px_rgba(232,62,116,0.4)]">
                        {item.number}
                      </span>
                      <h3 className="font-serif text-[1.05rem] font-semibold text-white sm:text-[1.12rem] leading-snug pt-0.5">
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

        {/* ================= SECTION 2: Diagnostic Checklist (2x2 Grid) ================= */}
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

          {/* 2-Column Checklist Cards */}
          <div className="mt-6 grid grid-cols-1 gap-3.5 sm:mt-7 sm:grid-cols-2 sm:gap-4">
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

