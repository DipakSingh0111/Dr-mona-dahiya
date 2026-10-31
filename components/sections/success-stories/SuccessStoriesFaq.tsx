"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { Reveal } from "@/components/ui/Reveal";

interface FaqItem {
  question: string;
  answer: ReactNode;
}

const linkClass =
  "font-semibold text-[#e83e74] underline decoration-[#e83e74]/40 underline-offset-2 hover:text-[#c53658]";

const faqList: FaqItem[] = [
  {
    question: "Are these stories from real patients?",
    answer:
      "Yes. They are reviews written by Dr. Mona Dahiya's patients, shared in their own words. Individual results vary.",
  },
  {
    question: "What is Dr. Mona Dahiya's IVF success rate?",
    answer:
      "The clinic reports IVF success rates above 90%; exact chances depend on age, egg reserve and the cause of infertility.",
  },
  {
    question: "Can I succeed after failed IVF elsewhere?",
    answer: (
      <>
        Many couples do. A root-cause review often finds a fixable reason, such
        as a uterine problem or sperm DNA damage. See{" "}
        <Link href="/online-consultation" className={linkClass}>
          Second Opinion
        </Link>
        .
      </>
    ),
  },
  {
    question: "Is pregnancy possible with low AMH?",
    answer: (
      <>
        Yes. Low AMH means fewer eggs, not poor quality. See{" "}
        <Link href="/low-amh-success-stories" className={linkClass}>
          Low AMH Stories
        </Link>
        .
      </>
    ),
  },
  {
    question: "Do women with PCOS always need IVF?",
    answer: (
      <>
        No. Many conceive with lifestyle change and Letrozole. See{" "}
        <Link href="/success-stories#pcos" className={linkClass}>
          PCOS Stories
        </Link>
        .
      </>
    ),
  },
  {
    question: "How many IUI cycles are usually tried?",
    answer: (
      <>
        3 to 4 well-timed cycles before moving to IVF. See{" "}
        <Link href="/iui-success-stories" className={linkClass}>
          IUI Stories
        </Link>
        .
      </>
    ),
  },
  {
    question: "How long does a typical journey take?",
    answer:
      "From first visit to transfer, an IVF cycle usually takes 4 to 8 weeks, depending on tests and protocol.",
  },
  {
    question: "Can I share my story?",
    answer:
      "Yes. Patients can leave a review on Google or send it to info@drmonadahiya.com.",
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
        <Link href="/online-consultation" className={linkClass}>
          Online Consultation
        </Link>
        .
      </>
    ),
  },
];

export default function SuccessStoriesFaq() {
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
            <div className="border-t border-slate-100 px-5 pt-3 pb-5 text-[13.5px] leading-relaxed text-[#64748b]">
              {item.answer}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fff8fb] via-white to-[#fff5f8] px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
      <div className="relative mx-auto w-full max-w-[1440px]">
        <Reveal className="mb-7 sm:mb-9">
          <p className="text-[12px] font-semibold tracking-wide text-[#e83e74] sm:text-[13px]">
            Patient questions
          </p>
          <h2 className="font-serif mt-2 max-w-3xl text-[1.75rem] leading-tight font-normal tracking-tight text-[#0f2438] sm:text-[2.2rem] lg:text-[2.45rem]">
            Frequently Asked Questions: Success Stories
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
          <div className="flex flex-col gap-3 md:gap-4">
            {leftCol.map((item, i) => renderFaqCard(item, i))}
          </div>
          <div className="flex flex-col gap-3 md:gap-4">
            {rightCol.map((item, i) => renderFaqCard(item, i + 5))}
          </div>
        </div>
      </div>
    </section>
  );
}
