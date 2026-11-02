"use client";

import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

interface CostCard {
  isPillIcon?: boolean;
  title: string;
  description: string;
}

const costCards: CostCard[] = [
  {
    title: "Work-up",
    description: "Hysteroscopy, scans and blood tests.",
  },
  {
    isPillIcon: true,
    title: "Genetic testing",
    description: "PGT-A, only if indicated.",
  },
  {
    title: "Prepared frozen transfer",
    description: "Medicines, monitoring and embryo warming.",
  },
  {
    title: "Optional add-ons",
    description: "Used only with a clear reason.",
  },
];

export default function RifCost() {
  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1440px]">
        {/* ================= SECTION: Cost Factors Breakdown ================= */}
        <div>
          <Reveal variant="fadeUp">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              Transparency
            </p>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
              Cost Factors Breakdown
            </h2>
            <p className="mt-2.5 max-w-3xl text-[14px] leading-relaxed text-slate-300 sm:text-[15px]">
              The cost depends on the investigations and the tests you choose to add. We prioritise the tests most likely to change the plan.
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
                        {card.isPillIcon ? (
                          <span className="text-[11px] font-bold leading-none select-none">💊</span>
                        ) : (
                          <FaCheck className="size-3.5" />
                        )}
                      </span>
                      <h3 className="font-serif text-[1.05rem] font-semibold text-white leading-snug">
                        {card.title}
                      </h3>
                    </div>

                    <p className="mt-4 text-[13px] leading-relaxed text-slate-300 sm:text-[13.5px]">
                      {card.description}
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

