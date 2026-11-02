"use client";

import { useState } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { Reveal } from "@/components/ui/Reveal";

interface FAQItem {
  question: string;
  answer: string;
  linkText?: string;
  linkHref?: string;
}

const leftFaqs: FAQItem[] = [
  {
    question: "How long does it take to improve sperm count and motility?",
    answer:
      "At least 3 months. Sperm takes 72 to 74 days to form plus 10 to 14 days to mature, so a repeat semen test is done after about 90 days.",
  },
  {
    question: "Can a man with zero sperm count father a biological child?",
    answer:
      "Often, yes. Sperm is frequently still made in the testes and can be retrieved by PESA, TESA or micro-TESE for ICSI.",
  },
  {
    question: "Does abnormal sperm shape cause birth defects?",
    answer:
      "No. Abnormal shape mainly affects swimming and egg penetration; it is not linked to birth defects.",
  },
  {
    question: "What is a normal sperm count?",
    answer:
      "At least 16 million per mL, with 30% or more progressive motility and 4% or more normal forms (WHO reference values).",
  },
  {
    question: "What is sperm DNA fragmentation?",
    answer:
      "Damage to the sperm's genetic material. A DFI above 25% is linked to poor embryo growth, failed implantation and miscarriage.",
  },
  {
    question: "Can varicocele cause infertility?",
    answer:
      "It can lower count and motility. Repair is considered when it is clinically significant and semen quality is falling.",
  },
];

const rightFaqs: FAQItem[] = [
  {
    question: "Is surgical sperm retrieval painful?",
    answer:
      "It is done under local anaesthesia or short sedation; most men have mild soreness for 2 to 3 days.",
  },
  {
    question: "How much does male fertility testing cost?",
    answer:
      "₹4,000 to ₹9,000 for semen analysis, DFI and a scrotal Doppler scan.",
  },
  {
    question: "Should both partners be tested together?",
    answer:
      "Yes. Male factors are involved in about half of cases, and testing together saves months.",
  },
  {
    question: "Where can I consult Dr. Mona Dahiya?",
    answer:
      "At 3 clinics: Noida (Sector 49), Ghaziabad (Raj Nagar) and Delhi (Lajpat Nagar IV), Monday to Saturday, 10:00 AM to 5:00 PM.",
  },
  {
    question: "Can I share my reports online first?",
    answer:
      "Yes. A 30-minute online consultation costs ₹1,000 in India or US$25 abroad. See ",
    linkText: "Online Consultation",
    linkHref: "#book-consultation",
  },
];

export default function MaleInfertilityFaq() {
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
            Frequently Asked
            <br className="hidden sm:inline" /> Questions: Male Infertility
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
                  className="rounded-xl border border-white/10 bg-[#091a3c]/70 transition-colors duration-200 hover:border-[#0047ca]/50 hover:bg-[#0c224e]/80"
                >
                  <button
                    type="button"
                    onClick={() => toggleLeft(idx)}
                    className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left sm:px-5 sm:py-4"
                  >
                    <span className="font-medium text-[13.5px] leading-snug text-white sm:text-[14.5px]">
                      {faq.question}
                    </span>
                    <FaChevronDown
                      className={`size-3 shrink-0 text-slate-400 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#f9a8d4]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-white/10 px-4 pt-3 pb-4 sm:px-5 sm:pb-4.5">
                      <p className="text-[13px] leading-relaxed text-slate-300 sm:text-[13.5px]">
                        {faq.answer}
                      </p>
                    </div>
                  )}
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
                  className="rounded-xl border border-white/10 bg-[#091a3c]/70 transition-colors duration-200 hover:border-[#0047ca]/50 hover:bg-[#0c224e]/80"
                >
                  <button
                    type="button"
                    onClick={() => toggleRight(idx)}
                    className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left sm:px-5 sm:py-4"
                  >
                    <span className="font-medium text-[13.5px] leading-snug text-white sm:text-[14.5px]">
                      {faq.question}
                    </span>
                    <FaChevronDown
                      className={`size-3 shrink-0 text-slate-400 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#f9a8d4]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-white/10 px-4 pt-3 pb-4 sm:px-5 sm:pb-4.5">
                      <p className="text-[13px] leading-relaxed text-slate-300 sm:text-[13.5px]">
                        {faq.answer}
                        {faq.linkText && faq.linkHref && (
                          <Link
                            href={faq.linkHref}
                            className="font-medium text-emerald-300 underline decoration-emerald-400/50 underline-offset-2 transition-colors hover:text-emerald-200 hover:decoration-emerald-300"
                          >
                            {faq.linkText}
                          </Link>
                        )}
                        {faq.linkText ? "." : ""}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

