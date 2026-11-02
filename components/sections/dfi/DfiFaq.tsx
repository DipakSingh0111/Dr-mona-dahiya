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
    question: "What is a good DFI value?",
    answer:
      "Below 15% is generally considered good. Between 15% and 25% is borderline, and above 25 to 30% is high.",
  },
  {
    question: "Can DFI be improved?",
    answer:
      "Often yes. Treating infection or varicocele, stopping smoking, avoiding heat and a course of antioxidants may help, and the test is repeated after about three months.",
  },
];

const rightFaqs: FAQItem[] = [
  {
    question: "Does a high DFI mean I cannot have a baby?",
    answer:
      "No. It lowers the chance of natural conception and can raise miscarriage risk, but there are effective treatment routes.",
  },
  {
    question: "How do I prepare for the test?",
    answer:
      "Abstain for the period your doctor advises, usually 2 to 5 days, and tell us about any recent fever or medicines.",
  },
];

export default function DfiFaq() {
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
            Frequently Asked Questions
            <br className="hidden sm:inline" /> about Sperm DNA Fragmentation
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
                      <div className="border-t border-white/10 px-4 pt-3.5 pb-4.5 sm:px-5 sm:pb-5 text-[13px] leading-relaxed text-slate-300 sm:text-[13.5px]">
                        <p>{faq.answer}</p>
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
                      <div className="border-t border-white/10 px-4 pt-3.5 pb-4.5 sm:px-5 sm:pb-5 text-[13px] leading-relaxed text-slate-300 sm:text-[13.5px]">
                        <p>{faq.answer}</p>
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

