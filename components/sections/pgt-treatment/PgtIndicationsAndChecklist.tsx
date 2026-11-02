"use client";

import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function PgtIndicationsAndChecklist() {
  const indications = [
    {
      num: "1",
      title: "Advanced Maternal Age (≥35 Years)",
      desc: "As maternal age rises, oocyte chromosomal segregation errors increase significantly; over 50% to 70% of blastocysts at age 38+ can be aneuploid despite excellent physical morphology.",
      color: "from-[#e83e74] to-[#f43f5e]",
      border: "hover:border-[#e83e74]/50",
    },
    {
      num: "2",
      title: "Recurrent Implantation Failure (RIF)",
      desc: (
        <>
          Couples who have endured two or more unsuccessful IVF cycles with seemingly high-grade embryos. See{" "}
          <Link
            href="/recurrent-implantation-failure"
            className="font-medium text-[#0047ca] underline underline-offset-2 hover:text-[#00369e]"
          >
            Recurrent Implantation Failure
          </Link>
          .
        </>
      ),
      color: "from-[#0047ca] to-[#0284c7]",
      border: "hover:border-[#0047ca]/50",
    },
    {
      num: "3",
      title: "Recurrent Pregnancy Loss (RPL)",
      desc: (
        <>
          Women with a history of two or more consecutive miscarriages, where unnoticed embryonic chromosomal anomalies are the leading etiology. See{" "}
          <Link
            href="/recurrent-miscarriage"
            className="font-medium text-[#0047ca] underline underline-offset-2 hover:text-[#00369e]"
          >
            Recurrent Miscarriage
          </Link>
          .
        </>
      ),
      color: "from-[#8b5cf6] to-[#a855f7]",
      border: "hover:border-[#8b5cf6]/50",
    },
    {
      num: "4",
      title: "Severe Male Factor Infertility",
      desc: (
        <>
          Elevated sperm DNA fragmentation index (DFI above 25%) or severe oligoasthenoteratozoospermia, which increases paternal aneuploidy contribution. See{" "}
          <Link
            href="/sperm-dna-fragmentation"
            className="font-medium text-[#0047ca] underline underline-offset-2 hover:text-[#00369e]"
          >
            Sperm DNA Fragmentation
          </Link>
          .
        </>
      ),
      color: "from-[#0d9488] to-[#14b8a6]",
      border: "hover:border-[#0d9488]/50",
    },
    {
      num: "5",
      title: "Carriers of Inherited Genetic Disorders",
      desc: "Monogenic single-gene inheritance risks identified through pre-conceptional genetic carrier screening.",
      color: "from-[#ea580c] to-[#f97316]",
      border: "hover:border-[#ea580c]/50",
    },
    {
      num: "6",
      title: "Known Balanced Translocations",
      desc: "Chromosomal inversions or translocations diagnosed via parental karyotyping.",
      color: "from-[#0284c7] to-[#0047ca]",
      border: "hover:border-[#0284c7]/50",
    },
    {
      num: "7",
      title: "Desire for Elective Single Embryo Transfer (eSET)",
      desc: "Maximizing singleton pregnancy rates while eliminating the twin/triplet medical risks of multi-embryo transfers.",
      color: "from-[#e83e74] to-[#f43f5e]",
      border: "hover:border-[#e83e74]/50",
    },
  ];

  const checklistItems = [
    {
      title: "High-Resolution Parental Karyotyping",
      desc: "Peripheral blood tests for both partners to detect structural chromosomal rearrangements, balanced translocations, or mosaicism.",
    },
    {
      title: "Couples Expanded Genetic Carrier Screening (Next-Gen Sequencing)",
      desc: "Identifies autosomal recessive and X-linked genetic variants (essential for custom PGT-M probe design).",
    },
    {
      title: "Ovarian Reserve Assessment",
      desc: "Serum Anti-Müllerian Hormone (AMH) and Baseline Antral Follicle Count (AFC) to calculate expected blastocyst conversion numbers.",
    },
    {
      title: "Advanced Semen Analysis & Sperm DFI",
      desc: "Morphological examination and Sperm DNA Fragmentation Index testing.",
    },
    {
      title: "Uterine Cavity Evaluation",
      desc: "3D Saline Infusion Sonohysterography (SIS) or diagnostic hysteroscopy to ensure an optimal uterine environment for future thawed euploid transfer.",
    },
    {
      title: "PGT-M Feasibility & Pre-Clinical Workup (For Single-Gene Cases)",
      desc: "Custom molecular probe and genetic primer design using parental and family DNA samples (takes 3 to 6 weeks prior to IVF stimulation).",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50/70 px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="relative mx-auto w-full max-w-[1440px]">
        {/* Top: Indications */}
        <Reveal className="mb-6 sm:mb-8">
          <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
            Clinical breakdown
          </p>
          <h2 className="font-serif mt-1 text-[1.65rem] leading-[1.2] font-normal tracking-tight text-slate-900 sm:text-[2.1rem] lg:text-[2.35rem]">
            Indications: Who Needs PGT Testing?
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
            PGT transforms unpredictable IVF outcomes into targeted, evidence-based transfers. Dr. Mona Dahiya recommends PGT evaluation for couples facing:
          </p>
        </Reveal>

        <Stagger
          stagger={0.06}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {indications.map((item, idx) => (
            <StaggerItem key={idx}>
              <div
                className={`group flex h-full flex-col justify-start rounded-[18px] border border-slate-200/90 bg-white p-5 shadow-[0_4px_18px_rgba(0,20,60,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,30,80,0.08)] ${item.border}`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex size-8 shrink-0 items-center justify-center rounded-lg text-[13px] font-bold text-white shadow-sm bg-gradient-to-r ${item.color}`}
                  >
                    {item.num}
                  </span>
                  <h3 className="text-[15px] font-bold text-slate-900 group-hover:text-[#0047ca] transition-colors sm:text-[16px]">
                    {item.title}
                  </h3>
                </div>
                <div className="mt-3 text-[13.5px] leading-relaxed text-slate-600">
                  {item.desc}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Bottom: Diagnostic Checklist */}
        <div className="mt-12 sm:mt-16">
          <Reveal className="mb-6 sm:mb-8">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              Before treatment
            </p>
            <h2 className="font-serif mt-1 text-[1.65rem] leading-[1.2] font-normal tracking-tight text-slate-900 sm:text-[2.1rem] lg:text-[2.35rem]">
              Diagnostic Checklist: Tests Required Before Starting PGT
            </h2>
            <p className="mt-2 text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
              Before embarking on an IVF-PGT cycle, Dr. Mona Dahiya prescribes a targeted, step-by-step diagnostic workup:
            </p>
          </Reveal>

          <Stagger stagger={0.06} className="space-y-3.5 sm:space-y-4">
            {checklistItems.map((item, idx) => (
              <StaggerItem key={idx}>
                <div className="flex items-start gap-3.5 rounded-[16px] border border-slate-200/90 bg-white p-4.5 sm:p-5 shadow-[0_4px_14px_rgba(0,20,60,0.03)] transition-all duration-300 hover:border-[#0047ca]/40 hover:shadow-[0_8px_22px_rgba(0,71,202,0.07)]">
                  <FaCheckCircle className="mt-1 size-5 shrink-0 text-[#0d9488]" />
                  <div>
                    <h3 className="text-[14.5px] font-bold text-slate-900 sm:text-[15.5px]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-slate-600 sm:text-[13.5px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

