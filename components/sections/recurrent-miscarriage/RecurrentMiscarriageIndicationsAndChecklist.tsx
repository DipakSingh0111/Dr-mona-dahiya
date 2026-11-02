"use client";

import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

interface IndicationCard {
  number: string;
  title: string;
  description: React.ReactNode;
}

const indications: IndicationCard[] = [
  {
    number: "1",
    title: "2 or more miscarriages",
    description: "Early pregnancy losses before 20 weeks.",
  },
  {
    number: "2",
    title: "Unexplained early loss",
    description: "A blighted ovum or loss of heartbeat after earlier positive scans.",
  },
  {
    number: "3",
    title: "Age over 35 with losses",
    description: "Repeated miscarriages linked to age-related chromosomal errors.",
  },
  {
    number: "4",
    title: "Failed implantation with early losses",
    description: (
      <span>
        Biochemical pregnancies and early losses. See{" "}
        <Link
          href="/recurrent-implantation-failure"
          className="text-[#f9a8d4] underline hover:text-white transition-colors"
        >
          Recurrent Implantation Failure
        </Link>
      </span>
    ),
  },
  {
    number: "5",
    title: "Known autoimmune or clotting history",
    description: "Lupus (SLE) or a past deep vein thrombosis.",
  },
];

interface ChecklistItem {
  text: React.ReactNode;
}

const checklistItems: ChecklistItem[] = [
  {
    text: (
      <span>
        Karyotype of both partners to find balanced or Robertsonian translocations.
      </span>
    ),
  },
  {
    text: (
      <span>
        Uterine imaging: 3D saline sonography or{" "}
        <Link
          href="/hysteroscopy"
          className="text-[#f9a8d4] underline hover:text-white transition-colors"
        >
          Hysteroscopy
        </Link>{" "}
        for septum, fibroids, polyps or adhesions.
      </span>
    ),
  },
  {
    text: (
      <span>
        Antiphospholipid and thrombophilia panel: lupus anticoagulant, anti-cardiolipin, anti-β2-glycoprotein I, protein C and S, and Factor V Leiden.
      </span>
    ),
  },
  {
    text: (
      <span>
        Hormonal and metabolic screen: TSH, anti-TPO, HbA1c, prolactin and luteal progesterone.
      </span>
    ),
  },
  {
    text: (
      <span>
        Partner&apos;s{" "}
        <Link
          href="/sperm-dna-fragmentation"
          className="text-[#f9a8d4] underline hover:text-white transition-colors"
        >
          Sperm DNA Fragmentation Test
        </Link>{" "}
        to check the sperm contribution.
      </span>
    ),
  },
];

export default function RecurrentMiscarriageIndicationsAndChecklist() {
  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1440px]">
        {/* ================= SECTION 1: Indications ================= */}
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <Reveal variant="fadeUp">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              Clinical breakdown
            </p>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
              Indications: Who Needs a
              <br className="hidden sm:inline" /> Recurrent Miscarriage Evaluation?
            </h2>
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

          {/* Row 2: 2 Cards (centered or 2-col) */}
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

        {/* ================= SECTION 2: Diagnostic Checklist: The 5-Pillar Investigation ================= */}
        <div>
          <Reveal variant="fadeUp">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              Before treatment
            </p>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
              Diagnostic Checklist: The 5-Pillar Investigation
            </h2>
            <p className="mt-2 text-[14px] text-slate-300 sm:text-[15px]">
              Five groups of tests look for every treatable cause.
            </p>
          </Reveal>

          {/* Checklist Full-Width Bars */}
          <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:gap-3.5">
            {checklistItems.map((item, idx) => (
              <Reveal key={idx} variant="fadeUp" delay={idx * 0.04}>
                <div className="flex items-center gap-3.5 rounded-xl border border-white/10 bg-[#091a3c]/70 px-4 py-3.5 backdrop-blur-md transition-all duration-200 hover:border-[#0047ca]/50 hover:bg-[#0c224e]/80 sm:px-5 sm:py-4">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-[#14b8a6] text-white shadow-[0_2px_8px_rgba(20,184,166,0.4)]">
                    <FaCheck className="size-3" />
                  </span>
                  <p className="text-[13px] leading-relaxed text-slate-200 sm:text-[14px]">
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

