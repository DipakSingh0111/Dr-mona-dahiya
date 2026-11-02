"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Reveal } from "@/components/ui/Reveal";

interface FAQItem {
  question: string;
  answer: string;
}

const leftFaqs: FAQItem[] = [
  {
    question: "Can a woman with severe PCOS get pregnant naturally?",
    answer:
      "Yes. Many women with PCOS have plenty of eggs that are simply not released. Treating insulin resistance and using Letrozole to restore ovulation lets many conceive without IVF.",
  },
  {
    question: "What is OHSS and how is it prevented in PCOS?",
    answer:
      "OHSS is when overstimulated ovaries cause fluid to shift into the abdomen and chest. It is prevented with 4 measures: antagonist protocols, low doses, a GnRH agonist trigger instead of hCG and a freeze-all strategy.",
  },
  {
    question: "Why is Letrozole preferred over clomiphene for PCOS?",
    answer:
      "Letrozole gives higher ovulation and live-birth rates in PCOS, does not thin the lining or dry cervical mucus, and carries a lower twin risk.",
  },
  {
    question: "Where can I consult Dr. Mona Dahiya for PCOS?",
    answer:
      "3 clinics: Noida (3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301), Ghaziabad (2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002) and Delhi (Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024).",
  },
  {
    question: "Is PCOS the same as PCOD?",
    answer:
      "They overlap. PCOD usually describes polycystic ovaries with irregular cycles; PCOS is the full syndrome with hormonal and metabolic features. Fertility treatment is similar.",
  },
];

const rightFaqs: FAQItem[] = [
  {
    question: "How much does PCOS fertility treatment cost?",
    answer:
      "Ovulation induction ₹4,000 to ₹8,000 a cycle, IUI ₹12,000 to ₹18,000, and an OHSS-safe IVF cycle ₹1,25,000 to ₹1,75,000.",
  },
  {
    question: "Does weight loss help PCOS fertility?",
    answer:
      "Yes. Losing 5% to 10% of body weight often restores regular ovulation and improves response to medicines.",
  },
  {
    question: "How many Letrozole cycles should I try?",
    answer:
      "Usually 3 to 6 monitored cycles. If ovulation happens but pregnancy does not, IUI or IVF is the next step.",
  },
  {
    question: "Is metformin necessary for PCOS?",
    answer:
      "Not for everyone. It helps women with insulin resistance (high HOMA-IR) and is often combined with inositol for 4 to 8 weeks before treatment.",
  },
];

export default function PcosFaq() {
  const [openLeft, setOpenLeft] = useState<number | null>(null);
  const [openRight, setOpenRight] = useState<number | null>(null);

  const toggleLeft = (idx: number) => {
    setOpenLeft(openLeft === idx ? null : idx);
  };

  const toggleRight = (idx: number) => {
    setOpenRight(openRight === idx ? null : idx);
  };

  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1440px]">
        {/* Eyebrow & Title */}
        <Reveal variant="fadeUp">
          <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
            Patient questions
          </p>
          <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
            Top FAQs About PCOS and
            <br className="hidden sm:inline" /> PCOD Fertility Treatment
          </h2>
        </Reveal>

        {/* 2 Column FAQ Grid */}
        <div className="mt-8 grid grid-cols-1 items-start gap-4 lg:grid-cols-2 lg:gap-5">
          {/* Left Column */}
          <div className="flex flex-col gap-3 sm:gap-3.5">
            {leftFaqs.map((faq, idx) => {
              const isOpen = openLeft === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-white/10 bg-[#091a3c]/70 transition-colors duration-200 hover:border-[#0047ca]/50 hover:bg-[#0c224e]/80 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleLeft(idx)}
                    className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left sm:px-5 sm:py-4 transition-colors"
                  >
                    <span className="font-medium text-[13.5px] leading-snug text-white sm:text-[14.5px]">
                      {faq.question}
                    </span>
                    <FaChevronDown
                      className={`size-3 shrink-0 text-slate-400 transition-transform duration-300 ease-in-out ${
                        isOpen ? "rotate-180 text-[#f9a8d4]" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-white/10 px-4 pt-3 pb-4 sm:px-5 sm:pb-4.5">
                        <p className="text-[13px] leading-relaxed text-slate-300 sm:text-[13.5px]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-3 sm:gap-3.5">
            {rightFaqs.map((faq, idx) => {
              const isOpen = openRight === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-white/10 bg-[#091a3c]/70 transition-colors duration-200 hover:border-[#0047ca]/50 hover:bg-[#0c224e]/80 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleRight(idx)}
                    className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left sm:px-5 sm:py-4 transition-colors"
                  >
                    <span className="font-medium text-[13.5px] leading-snug text-white sm:text-[14.5px]">
                      {faq.question}
                    </span>
                    <FaChevronDown
                      className={`size-3 shrink-0 text-slate-400 transition-transform duration-300 ease-in-out ${
                        isOpen ? "rotate-180 text-[#f9a8d4]" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-white/10 px-4 pt-3 pb-4 sm:px-5 sm:pb-4.5">
                        <p className="text-[13px] leading-relaxed text-slate-300 sm:text-[13.5px]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
