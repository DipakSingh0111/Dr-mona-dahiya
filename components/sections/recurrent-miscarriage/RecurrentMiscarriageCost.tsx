"use client";

import Link from "next/link";
import { FaFlask, FaCheckSquare, FaSyringe, FaCalendarAlt } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

interface CostCard {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const costCards: CostCard[] = [
  {
    icon: <FaFlask className="size-3.5 text-white" />,
    title: "Diagnostic workup",
    description: (
      <span>
        APS panel, both partners&apos; karyotypes and 3D sonography: ₹18,000 to ₹35,000.
      </span>
    ),
  },
  {
    icon: <FaCheckSquare className="size-3.5 text-white" />,
    title: "Hysteroscopic correction, if needed",
    description: (
      <span>
        Day-care septum resection: ₹35,000 to ₹60,000. See{" "}
        <Link
          href="/hysteroscopy"
          className="text-[#f9a8d4] underline hover:text-white transition-colors"
        >
          Laparoscopy &amp; Hysteroscopy
        </Link>
      </span>
    ),
  },
  {
    icon: <FaSyringe className="size-3.5 text-white" />,
    title: "Anticoagulation",
    description: (
      <span>
        Daily heparin injections and luteal support through the first trimester.
      </span>
    ),
  },
  {
    icon: <FaCalendarAlt className="size-3.5 text-white" />,
    title: "IVF with PGT-A, if needed",
    description: (
      <span>
        Per-embryo biopsy and chromosome testing fees.
      </span>
    ),
  },
];

export default function RecurrentMiscarriageCost() {
  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1440px]">
        {/* ================= SECTION: What Affects the Cost of Miscarriage Treatment ================= */}
        <div>
          <Reveal variant="fadeUp">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              Transparency
            </p>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
              What Affects the Cost of Miscarriage Treatment
            </h2>
            <p className="mt-2.5 max-w-3xl text-[14px] leading-relaxed text-slate-300 sm:text-[15px]">
              Most couples start with a full workup costing ₹18,000 to ₹35,000, and treatment depends on what it finds.
            </p>
          </Reveal>

          {/* 4 Cards Grid */}
          <Stagger delay={0.05} className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5">
            {costCards.map((card, idx) => (
              <StaggerItem key={idx}>
                <div className="relative flex h-full flex-col justify-between rounded-2xl border border-[#e83e74]/35 bg-gradient-to-b from-[#141b36] to-[#0a1024] p-5 sm:p-6 shadow-[0_0_24px_rgba(232,62,116,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#e83e74]/65 hover:shadow-[0_0_32px_rgba(232,62,116,0.22)]">
                  <div>
                    {/* Icon Pill + Title */}
                    <div className="flex items-center gap-3">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#e83e74] text-white shadow-[0_2px_8px_rgba(232,62,116,0.4)]">
                        {card.icon}
                      </span>
                      <h3 className="font-serif text-[1rem] font-semibold text-white leading-snug">
                        {card.title}
                      </h3>
                    </div>

                    <div className="mt-4 text-[13px] leading-relaxed text-slate-300 sm:text-[13.5px]">
                      {card.description}
                    </div>
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

