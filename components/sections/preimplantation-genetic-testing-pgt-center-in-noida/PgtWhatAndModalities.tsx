"use client";

import { FaDna, FaMicroscope, FaExchangeAlt } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function PgtWhatAndModalities() {
  const modalities = [
    {
      title: "PGT-A (Aneuploidy Screening)",
      desc: "Screens all 23 pairs of human chromosomes for numerical abnormalities (trisomy, monosomy, or polyploidy), such as Trisomy 21 (Down syndrome), Trisomy 18 (Edwards syndrome), or Turner syndrome.",
      icon: FaDna,
      color: "from-rose to-[#f43f5e]",
      iconBg: "bg-rose/10 text-rose",
      border: "hover:border-rose/50",
    },
    {
      title: "PGT-M (Monogenic/Single-Gene Defects)",
      desc: "Detects known inherited single-gene conditions carried by either or both parents, such as Thalassemia, Cystic Fibrosis, Sickle Cell Anemia, Spinal Muscular Atrophy (SMA), and Huntington's disease.",
      icon: FaMicroscope,
      color: "from-blue to-[var(--blue)]",
      iconBg: "bg-blue/10 text-blue",
      border: "hover:border-blue/50",
    },
    {
      title: "PGT-SR (Structural Rearrangements)",
      desc: "Specifically designed for couples where one partner carries a balanced translocation, Robertsonian translocation, or chromosomal inversion, which typically cause recurrent early miscarriages.",
      icon: FaExchangeAlt,
      color: "from-[#8b5cf6] to-[#a855f7]",
      iconBg: "bg-[#8b5cf6]/10 text-[#8b5cf6]",
      border: "hover:border-[#8b5cf6]/50",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="relative mx-auto w-full max-w-[1440px]">
        {/* Top: Understanding PGT */}
        <Reveal className="mb-6 sm:mb-8">
          <p className="text-[12px] font-bold tracking-[0.14em] text-rose uppercase sm:text-[13px]">
            Understanding PGT
          </p>
          <h2 className="font-serif mt-1 text-[1.65rem] leading-[1.2] font-normal tracking-tight text-slate-900 sm:text-[2.1rem] lg:text-[2.35rem]">
            What is Preimplantation Genetic Testing (PGT)?
          </h2>
        </Reveal>

        <Reveal variant="fadeUp">
          <div className="rounded-[22px] border border-slate-200/90 bg-gradient-to-br from-slate-50/70 via-white to-blue/10 p-6 shadow-[0_4px_20px_rgba(0,20,60,0.04)] sm:p-8">
            <p className="text-[14.5px] leading-relaxed text-slate-700 sm:text-[15.5px]">
              Preimplantation Genetic Testing (PGT) bridges assisted reproduction and molecular genetics. During an IVF or ICSI cycle, embryos are cultured in benchtop incubators to the advanced blastocyst stage (Day 5 or 6). At this window, skilled embryologists extract a micro-biopsy of 4 to 6 cells from the trophectoderm (the cell layer destined to form the placenta), leaving the inner cell mass (which develops into the baby) untouched.
            </p>
            <p className="mt-4 text-[14.5px] leading-relaxed text-slate-700 sm:text-[15.5px]">
              These biopsied cells undergo genomic analysis via Next-Generation Sequencing (NGS) to rule out chromosomal aneuploidies, single-gene mutations, or structural chromosomal rearrangements prior to transfer.
            </p>
          </div>
        </Reveal>

        {/* Bottom: The Three Clinical Modalities of PGT */}
        <div className="mt-12 sm:mt-16">
          <Reveal className="mb-6 sm:mb-8">
            <p className="text-[12px] font-bold tracking-[0.14em] text-rose uppercase sm:text-[13px]">
              Types of PGT
            </p>
            <h2 className="font-serif mt-1 text-[1.65rem] leading-[1.2] font-normal tracking-tight text-slate-900 sm:text-[2.1rem] lg:text-[2.35rem]">
              The Three Clinical Modalities of PGT
            </h2>
          </Reveal>

          <Stagger
            stagger={0.06}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {modalities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={idx}>
                  <div
                    className={`group flex h-full flex-col justify-start rounded-[18px] border border-slate-200/90 bg-white p-5 shadow-[0_4px_18px_rgba(0,20,60,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,30,80,0.08)] ${item.border}`}
                  >
                    <div
                      className={`inline-flex size-10 shrink-0 items-center justify-center rounded-xl ${item.iconBg}`}
                    >
                      <Icon className="size-5" />
                    </div>
                    <h3 className="mt-3.5 text-[15px] font-bold text-slate-900 group-hover:text-blue transition-colors sm:text-[16px]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-black">
                      {item.desc}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

