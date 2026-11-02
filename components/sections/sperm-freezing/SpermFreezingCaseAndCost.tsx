"use client";

import { FaVial, FaSnowflake, FaCalendarAlt, FaCheck, FaQuoteLeft } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function SpermFreezingCaseAndCost() {
  const costCards = [
    {
      title: "Semen analysis and screening",
      desc: "Initial tests.",
      icon: FaCheck,
      color: "from-[#e83e74] to-[#f43f5e]",
      iconBg: "bg-[#e83e74]/10 text-[#e83e74]",
      border: "hover:border-[#e83e74]/50",
    },
    {
      title: "Freezing process",
      desc: "Processing and vials.",
      icon: FaVial,
      color: "from-[#0047ca] to-[#0284c7]",
      iconBg: "bg-[#0047ca]/10 text-[#0047ca]",
      border: "hover:border-[#0047ca]/50",
    },
    {
      title: "Annual storage",
      desc: "Charge for the storage period.",
      icon: FaCalendarAlt,
      color: "from-[#8b5cf6] to-[#a855f7]",
      iconBg: "bg-[#8b5cf6]/10 text-[#8b5cf6]",
      border: "hover:border-[#8b5cf6]/50",
    },
    {
      title: "Thawing and use",
      desc: "Preparation for IUI or ICSI later.",
      icon: FaSnowflake,
      color: "from-[#0d9488] to-[#14b8a6]",
      iconBg: "bg-[#0d9488]/10 text-[#0d9488]",
      border: "hover:border-[#0d9488]/50",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="relative mx-auto w-full max-w-[1440px]">
        {/* Section 1: Clinical Case Insight */}
        <Reveal className="mb-6 sm:mb-8">
          <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
            From the clinic
          </p>
          <h2 className="font-serif mt-1 text-[1.65rem] leading-[1.2] font-normal tracking-tight text-slate-900 sm:text-[2.1rem] lg:text-[2.35rem]">
            Clinical Case Insight
          </h2>
        </Reveal>

        <Reveal variant="scaleIn">
          <div className="relative overflow-hidden rounded-[22px] border border-slate-200/90 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 p-6 shadow-[0_8px_28px_rgba(0,30,80,0.05)] sm:p-8">
            <FaQuoteLeft className="size-8 text-[#0047ca]/20" />
            <p className="mt-3 text-[15px] font-medium leading-relaxed text-slate-800 sm:text-[17px] sm:leading-relaxed">
              &ldquo;A young man was advised chemotherapy and had two samples frozen the same week. Years later, his stored sperm was thawed and used in an ICSI cycle with his partner.&rdquo;
            </p>
            <p className="mt-4 text-[12.5px] text-slate-500 sm:text-[13px]">
              Details changed to protect patient privacy. Individual results vary.
            </p>
          </div>
        </Reveal>

        {/* Section 2: Cost Factors Breakdown */}
        <div className="mt-12 sm:mt-16">
          <Reveal className="mb-6 sm:mb-8">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              Transparency
            </p>
            <h2 className="font-serif mt-1 text-[1.65rem] leading-[1.2] font-normal tracking-tight text-slate-900 sm:text-[2.1rem] lg:text-[2.35rem]">
              Cost Factors Breakdown
            </h2>
            <p className="mt-2 text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
              Cost includes the collection, the freezing process and storage by year. We explain the numbers before you begin.
            </p>
          </Reveal>

          <Stagger
            stagger={0.06}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {costCards.map((c, idx) => {
              const Icon = c.icon;
              return (
                <StaggerItem key={idx}>
                  <div
                    className={`group flex h-full flex-col justify-start rounded-[18px] border border-slate-200/90 bg-white p-5 shadow-[0_4px_16px_rgba(0,20,60,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,30,80,0.08)] ${c.border}`}
                  >
                    <div
                      className={`inline-flex size-10 shrink-0 items-center justify-center rounded-xl ${c.iconBg}`}
                    >
                      <Icon className="size-5" />
                    </div>
                    <h3 className="mt-3.5 text-[15px] font-bold text-slate-900 group-hover:text-[#0047ca] transition-colors sm:text-[16px]">
                      {c.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600 sm:text-[13.5px]">
                      {c.desc}
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

