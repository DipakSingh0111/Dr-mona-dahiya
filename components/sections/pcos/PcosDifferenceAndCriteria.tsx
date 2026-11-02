"use client";

import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

interface ComparisonCard {
  title: string;
  description: string;
}

const comparisons: ComparisonCard[] = [
  {
    title: "What is PCOS?",
    description:
      "Polycystic Ovary Syndrome is a hormonal and metabolic disorder. It is diagnosed when two of three signs are present: irregular or absent ovulation, raised androgens, and polycystic ovaries on scan. It often comes with insulin resistance and raises long-term risk of type 2 diabetes and heart disease, so it needs structured medical care alongside lifestyle changes.",
  },
  {
    title: "What is PCOD?",
    description:
      "Polycystic Ovarian Disease (or Disorder) is the term widely used in India for ovaries that release immature or partly mature eggs, which collect as many small follicles. It is usually milder and closely linked to weight, diet and stress. Many women still ovulate and conceive, often with diet, exercise and simple ovulation support.",
  },
];

interface CriteriaItem {
  number: string;
  title: string;
  description: string;
}

const criteria: CriteriaItem[] = [
  {
    number: "1",
    title: "Irregular or absent ovulation",
    description: "Cycles longer than 35 days, or no periods at all.",
  },
  {
    number: "2",
    title: "Raised androgens",
    description:
      "High free testosterone, excess hair growth, acne or hair thinning.",
  },
  {
    number: "3",
    title: "Polycystic ovaries on scan",
    description:
      "20 or more small follicles (2 to 9 mm) per ovary with dense stroma.",
  },
  {
    number: "4",
    title: "Insulin resistance",
    description:
      "Dark skin patches (acanthosis nigricans), high fasting insulin and altered glucose-insulin ratios.",
  },
  {
    number: "5",
    title: "Infertility from anovulation",
    description: "Follicles that do not mature and release an egg on their own.",
  },
];

export default function PcosDifferenceAndCriteria() {
  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1440px]">
        {/* ================= SECTION 1: Understanding the difference ================= */}
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <Reveal variant="fadeUp">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              Understanding the difference
            </p>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
              What Is PCOS and What Is PCOD?
            </h2>
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

        {/* ================= SECTION 2: Indications: Rotterdam Criteria ================= */}
        <div>
          <Reveal variant="fadeUp">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              Clinical breakdown
            </p>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
              Indications: PCOS Diagnostic
              <br className="hidden sm:inline" /> Criteria (Rotterdam)
            </h2>
          </Reveal>

          {/* 5 Cards Grid */}
          <Stagger delay={0.05} className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
            {criteria.map((item, idx) => (
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

