"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Reveal } from "@/components/ui/Reveal";

interface FAQItem {
  question: string;
  answerContent: React.ReactNode;
}

const leftFaqs: FAQItem[] = [
  {
    question: "What is the most common cause of recurrent miscarriage?",
    answerContent: (
      <div className="space-y-3">
        <p>
          Chromosomal errors in the embryo cause over 50% of early losses. Other treatable causes include antiphospholipid syndrome, a uterine septum, cervical weakness and untreated thyroid problems.
        </p>
      </div>
    ),
  },
  {
    question: "Can IVF with PGT-A prevent future miscarriages?",
    answerContent: (
      <div className="space-y-3">
        <p>
          It can reduce them. PGT-A tests blastocysts before transfer, and transferring only chromosomally normal embryos lowers early miscarriage risk, especially over 35.
        </p>
      </div>
    ),
  },
  {
    question: "How does blood clotting cause pregnancy loss?",
    answerContent: (
      <div className="space-y-3">
        <p>
          Disorders like antiphospholipid syndrome form tiny clots in placental vessels, cutting off oxygen and nutrients. Treatment is low-dose aspirin plus daily heparin injections.
        </p>
      </div>
    ),
  },
  {
    question: "Where can I consult Dr. Mona Dahiya for recurrent miscarriage?",
    answerContent: (
      <div className="space-y-2">
        <p>3 clinics:</p>
        <p>
          <strong className="text-white">Noida</strong> (3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301)
        </p>
        <p>
          <strong className="text-white">Ghaziabad</strong> (2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002)
        </p>
        <p>
          <strong className="text-white">Delhi</strong> (Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024)
        </p>
      </div>
    ),
  },
  {
    question: "After how many miscarriages should I get tested?",
    answerContent: (
      <div className="space-y-3">
        <p>
          After 2 consecutive losses, or after 1 if you are over 35 or had a loss after 10 weeks.
        </p>
      </div>
    ),
  },
];

const rightFaqs: FAQItem[] = [
  {
    question: "What are my chances of a successful pregnancy after recurrent loss?",
    answerContent: (
      <div className="space-y-3">
        <p>
          Good. With targeted treatment, 70% to 75% of couples go on to a live birth, and even with no cause found, the chance in the next pregnancy is often over 60%.
        </p>
      </div>
    ),
  },
  {
    question: "How much does recurrent miscarriage evaluation cost?",
    answerContent: (
      <div className="space-y-3">
        <p>
          ₹18,000 to ₹35,000 for the full workup, plus ₹35,000 to ₹60,000 for hysteroscopic correction if needed.
        </p>
      </div>
    ),
  },
  {
    question: "How soon can I try again after a miscarriage?",
    answerContent: (
      <div className="space-y-3">
        <p>
          Usually after 1 normal period, once tests are done and any treatment such as aspirin is started.
        </p>
      </div>
    ),
  },
  {
    question: "Is progesterone helpful after recurrent miscarriage?",
    answerContent: (
      <div className="space-y-3">
        <p>
          Yes, in women with early bleeding and a history of losses, progesterone support through the first trimester improves live birth rates.
        </p>
      </div>
    ),
  },
];

export default function RecurrentMiscarriageFaq() {
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
        {/* Section Header */}
        <Reveal variant="fadeUp">
          <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
            Patient questions
          </p>
          <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
            Top FAQs About Recurrent Miscarriage Treatment
          </h2>
        </Reveal>

        {/* 2-Column Accordion */}
        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-3.5">
            {leftFaqs.map((faq, idx) => {
              const isOpen = openLeft === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-[#091a3c]/70 backdrop-blur-md transition-all duration-300 hover:border-[#0047ca]/50 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleLeft(idx)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:text-white"
                  >
                    <span className="font-serif text-[1rem] font-semibold text-white sm:text-[1.05rem]">
                      {faq.question}
                    </span>
                    <span
                      className={`flex size-7 shrink-0 items-center justify-center rounded-full bg-white/5 text-slate-300 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#e83e74]" : ""
                      }`}
                    >
                      <FaChevronDown className="size-3" />
                    </span>
                  </button>

                  {/* Smooth accordion wrapper using CSS Grid */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-white/5 px-5 pt-3 pb-5 text-[13px] leading-relaxed text-slate-300 sm:text-[13.5px]">
                        {faq.answerContent}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-3.5">
            {rightFaqs.map((faq, idx) => {
              const isOpen = openRight === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-[#091a3c]/70 backdrop-blur-md transition-all duration-300 hover:border-[#0047ca]/50 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleRight(idx)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:text-white"
                  >
                    <span className="font-serif text-[1rem] font-semibold text-white sm:text-[1.05rem]">
                      {faq.question}
                    </span>
                    <span
                      className={`flex size-7 shrink-0 items-center justify-center rounded-full bg-white/5 text-slate-300 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#e83e74]" : ""
                      }`}
                    >
                      <FaChevronDown className="size-3" />
                    </span>
                  </button>

                  {/* Smooth accordion wrapper using CSS Grid */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-white/5 px-5 pt-3 pb-5 text-[13px] leading-relaxed text-slate-300 sm:text-[13.5px]">
                        {faq.answerContent}
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

