"use client";

import { FaCheckCircle } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function SpermFreezingIndicationsAndChecklist() {
  const indications = [
    {
      num: "1",
      title: "Before cancer treatment",
      desc: "Chemotherapy or radiotherapy can damage sperm.",
      accent: "from-[#e83e74] to-[#f43f5e]",
      border: "hover:border-[#e83e74]/50",
      numBg: "bg-gradient-to-r from-[#e83e74] to-[#f43f5e]",
    },
    {
      num: "2",
      title: "Before vasectomy or testicular surgery",
      desc: "To preserve future options.",
      accent: "from-[#0047ca] to-[#0284c7]",
      border: "hover:border-[#0047ca]/50",
      numBg: "bg-gradient-to-r from-[#0047ca] to-[#0284c7]",
    },
    {
      num: "3",
      title: "Backup on egg-retrieval day",
      desc: "When collection stress is a concern.",
      accent: "from-[#8b5cf6] to-[#a855f7]",
      border: "hover:border-[#8b5cf6]/50",
      numBg: "bg-gradient-to-r from-[#8b5cf6] to-[#a855f7]",
    },
    {
      num: "4",
      title: "Fluctuating or declining sperm quality",
      desc: "To bank better samples.",
      accent: "from-[#0d9488] to-[#14b8a6]",
      border: "hover:border-[#0d9488]/50",
      numBg: "bg-gradient-to-r from-[#0d9488] to-[#14b8a6]",
    },
    {
      num: "5",
      title: "Work or personal delay",
      desc: "Frequent travel, military postings or planned delay.",
      accent: "from-[#ea580c] to-[#f97316]",
      border: "hover:border-[#ea580c]/50",
      numBg: "bg-gradient-to-r from-[#ea580c] to-[#f97316]",
    },
  ];

  const checklistItems = [
    "Semen analysis",
    "Infectious disease screening (as required for storage)",
    "Consent and identification formalities",
    "Abstinence guidance of 2 to 5 days",
  ];

  return (
    <section className="relative overflow-hidden bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="relative mx-auto w-full max-w-[1440px]">
        {/* Top Part: Indications */}
        <Reveal className="mb-6 sm:mb-8">
          <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
            Clinical breakdown
          </p>
          <h2 className="font-serif mt-1 text-[1.65rem] leading-[1.2] font-normal tracking-tight text-slate-900 sm:text-[2.1rem] lg:text-[2.35rem]">
            Indications: Who Needs Semen or Sperm Freezing?
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
            Common reasons Dr. Mona Dahiya recommends semen &amp; sperm freezing care.
          </p>
        </Reveal>

        {/* 5 Cards Grid */}
        <Stagger
          stagger={0.06}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {indications.map((item, idx) => (
            <StaggerItem key={idx}>
              <div
                className={`group flex h-full flex-col justify-start rounded-[18px] border border-slate-200/90 bg-gradient-to-br from-slate-50/80 to-white p-5 shadow-[0_4px_18px_rgba(0,20,60,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,30,80,0.08)] ${item.border}`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex size-8 shrink-0 items-center justify-center rounded-lg text-[13px] font-bold text-white shadow-sm ${item.numBg}`}
                  >
                    {item.num}
                  </span>
                  <h3 className="text-[15px] font-bold text-slate-900 group-hover:text-[#0047ca] transition-colors sm:text-[16px]">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-3 text-[13.5px] leading-relaxed text-slate-600">
                  {item.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Bottom Part: Diagnostic Checklist */}
        <div className="mt-12 sm:mt-16">
          <Reveal className="mb-6 sm:mb-8">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              Before treatment
            </p>
            <h2 className="font-serif mt-1 text-[1.65rem] leading-[1.2] font-normal tracking-tight text-slate-900 sm:text-[2.1rem] lg:text-[2.35rem]">
              Diagnostic Checklist
            </h2>
            <p className="mt-2 text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
              These tests help confirm the diagnosis and choose the right plan. Not every patient needs every test.
            </p>
          </Reveal>

          <Stagger
            stagger={0.06}
            className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:gap-4"
          >
            {checklistItems.map((check, idx) => (
              <StaggerItem key={idx}>
                <div className="flex items-center gap-3 rounded-[16px] border border-slate-200/90 bg-gradient-to-br from-slate-50/60 via-white to-slate-50/40 px-5 py-4 shadow-[0_4px_14px_rgba(0,20,60,0.03)] transition-all duration-300 hover:border-[#0047ca]/40 hover:bg-white hover:shadow-[0_8px_22px_rgba(0,71,202,0.08)]">
                  <FaCheckCircle className="size-5 shrink-0 text-[#0d9488]" />
                  <span className="text-[14px] font-semibold text-slate-800 sm:text-[14.5px]">
                    {check}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

