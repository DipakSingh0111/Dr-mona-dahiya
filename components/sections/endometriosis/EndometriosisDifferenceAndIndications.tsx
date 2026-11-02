"use client";

import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

interface ComparisonCard {
  title: string;
  description: string;
}

const comparisons: ComparisonCard[] = [
  {
    title: "Endometriosis",
    description:
      "Tissue similar to the womb lining grows outside the uterus, on the ovaries, fallopian tubes or pelvic lining. It causes painful periods, scarring and ovarian cysts (endometriomas). It affects about 1 in 10 women of reproductive age, and 30–50% of women with endometriosis face difficulty conceiving.",
  },
  {
    title: "Adenomyosis",
    description:
      "Womb-lining tissue grows into the muscular wall of the uterus, which thickens and enlarges it. It causes heavy, painful periods and can lower embryo implantation and raise miscarriage risk. It is more common after 35 and often occurs together with endometriosis.",
  },
];

interface IndicationItem {
  number: string;
  title: string;
  description: string;
}

const indications: IndicationItem[] = [
  {
    number: "1",
    title: "Painful periods or pelvic pain",
    description: "Pain that disrupts daily life or is getting worse.",
  },
  {
    number: "2",
    title: "Trying to conceive without success",
    description: "Especially after a year or more of attempts.",
  },
  {
    number: "3",
    title: "Ovarian endometrioma",
    description: "Cysts that can affect ovarian reserve and need a considered plan.",
  },
  {
    number: "4",
    title: "Enlarged, tender uterus",
    description: "A pattern that may point to adenomyosis.",
  },
  {
    number: "5",
    title: "Failed IUI or IVF",
    description: "When implantation or egg quality is the concern.",
  },
];

export default function EndometriosisDifferenceAndIndications() {
  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1440px]">
        {/* ================= SECTION 1: Understanding the conditions ================= */}
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <Reveal variant="fadeUp">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              Understanding the conditions
            </p>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
              What Are Endometriosis
              <br className="hidden sm:inline" /> and Adenomyosis?
            </h2>
            <p className="mt-2 text-[14px] text-slate-300 sm:text-[15px]">
              Two related conditions in which womb-lining-like tissue grows where it should not, often affecting fertility.
            </p>
          </Reveal>

          {/* 2 Big Comparison Cards */}
          <Stagger delay={0.05} className="mt-7 grid grid-cols-1 gap-5 lg:grid-cols-2">
            {comparisons.map((card, idx) => (
              <StaggerItem key={idx}>
                <div className="relative flex h-full flex-col justify-between rounded-2xl border border-[#e83e74]/35 bg-gradient-to-b from-[#141b36] to-[#0a1024] p-6 sm:p-7 shadow-[0_0_24px_rgba(232,62,116,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#e83e74]/65 hover:shadow-[0_0_32px_rgba(232,62,116,0.22)]">
                  <div>
                    {/* Pink checkmark pill + Title */}
                    <div className="flex items-center gap-3">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#e83e74] text-white shadow-[0_2px_8px_rgba(232,62,116,0.4)]">
                        <FaCheck className="size-3.5" />
                      </span>
                      <h3 className="font-serif text-[1.12rem] font-semibold text-white sm:text-[1.2rem]">
                        {card.title}
                      </h3>
                    </div>

                    <p className="mt-4 text-[13.5px] leading-relaxed text-slate-300 sm:text-[14px]">
                      {card.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* ================= SECTION 2: Indications ================= */}
        <div>
          <Reveal variant="fadeUp">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              Clinical breakdown
            </p>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
              Indications: Who Needs Endometriosis
              <br className="hidden sm:inline" /> or Adenomyosis Fertility Care?
            </h2>
            <p className="mt-2 text-[14px] text-slate-300 sm:text-[15px]">
              Common reasons Dr. Mona Dahiya recommends endometriosis &amp; adenomyosis care.
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
      </div>
    </section>
  );
}

