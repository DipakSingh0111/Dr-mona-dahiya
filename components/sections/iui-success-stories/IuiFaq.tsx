"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

interface FaqItem {
  question: string;
  answer: ReactNode;
}

const faqList: FaqItem[] = [
  {
    question: "Are these stories from real patients?",
    answer:
      "Yes. They are reviews written by Dr. Mona Dahiya's patients, shared in their own words. Individual results vary.",
  },
  {
    question: "How many IUI attempts before IVF?",
    answer:
      "Usually 3 to 4 well-timed cycles are tried before considering IVF, depending on age and reports.",
  },
  {
    question: "Is IUI painful?",
    answer:
      "Most women feel mild cramping similar to a Pap smear. The procedure takes a few minutes and no anaesthesia is needed.",
  },
  {
    question: "When is IUI done?",
    answer:
      "Around ovulation, timed by serial follicular ultrasound and, when needed, an hCG trigger — typically 36 hours after the trigger.",
  },
  {
    question: "Do I need tests before IUI?",
    answer:
      "Yes. Tubal patency (HSG or similar), semen analysis, ovarian reserve and basic infection screening are reviewed first.",
  },
  {
    question: "Can IUI work with low sperm count?",
    answer:
      "It can help mild male factor when the post-wash motile count is above about 5 to 10 million. Severe male factor usually needs IVF/ICSI.",
  },
  {
    question: "Should I rest after IUI?",
    answer:
      "Brief rest at the clinic is enough. Bed rest at home does not improve pregnancy rates; normal light activity is fine.",
  },
  {
    question: "How much does IUI cost?",
    answer:
      "Cost varies with medicines and monitoring. A personalised estimate is given after your consultation and baseline tests.",
  },
  {
    question: "Where can I consult Dr. Mona Dahiya?",
    answer:
      "At 3 clinics: Noida (Sector 49), Ghaziabad (Raj Nagar) and Delhi (Lajpat Nagar IV), Monday to Saturday, 10:00 AM to 5:00 PM.",
  },
  {
    question: "Can I share my reports online first?",
    answer: (
      <>
        Yes. A 30-minute online consultation costs ₹1,000 in India or US$25
        abroad. See{" "}
        <Link
          href="/online-consultation"
          className="font-semibold text-[#e83e74] underline decoration-[#e83e74]/40 underline-offset-2 hover:text-[#c53658]"
        >
          Online Consultation
        </Link>
        .
      </>
    ),
  },
];

export default function IuiFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const leftCol = faqList.slice(0, 5);
  const rightCol = faqList.slice(5, 10);

  const renderFaqCard = (item: FaqItem, index: number) => {
    const isOpen = openIndex === index;
    return (
      <div
        key={index}
        className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
          isOpen
            ? "border-[#e83e74]/45 bg-white shadow-[0_10px_28px_rgba(232,62,116,0.1)]"
            : "border-slate-200/90 bg-white hover:border-[#e83e74]/30"
        }`}
      >
        <button
          type="button"
          onClick={() =>
            setOpenIndex((prev) => (prev === index ? null : index))
          }
          aria-expanded={isOpen}
          className="flex w-full cursor-pointer items-center justify-between gap-3 p-5 text-left"
        >
          <h3
            className={`text-[15px] font-bold transition-colors ${
              isOpen ? "text-[#e83e74]" : "text-[#0f2438]"
            }`}
          >
            {item.question}
          </h3>
          <span
            className={`flex size-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
              isOpen
                ? "rotate-180 border-[#e83e74] bg-[#e83e74] text-white"
                : "border-slate-200 bg-slate-50 text-slate-500"
            }`}
          >
            <FaChevronDown className="size-3" />
          </span>
        </button>
        <div
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <p className="border-t border-slate-100 px-5 pt-3 pb-5 text-[13.5px] leading-relaxed text-[#64748b]">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fff8fb] via-[#f8fafc] to-white px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
      <div className="relative mx-auto w-full max-w-[1440px]">
        <div className="max-w-3xl">
          <span className="text-[12px] font-semibold tracking-wider text-[#e83e74] uppercase">
            Patient questions
          </span>
          <h2 className="font-serif mt-1 text-[2rem] leading-[1.18] font-normal tracking-tight text-[#0f2438] sm:text-[2.4rem] lg:text-[2.65rem]">
            Frequently Asked Questions:
            <br />
            IUI Success Stories
          </h2>
        </div>

        <div className="mt-7 grid grid-cols-1 items-start gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            {leftCol.map((item, idx) => renderFaqCard(item, idx))}
          </div>
          <div className="flex flex-col gap-4">
            {rightCol.map((item, idx) => renderFaqCard(item, idx + 5))}
          </div>
        </div>
      </div>
    </section>
  );
}
