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
    question: "How many IUI cycles should we try before IVF?",
    answerContent: (
      <div className="space-y-3">
        <p>
          3 to 4 well-timed cycles. After that, cumulative success plateaus, and Dr. Dahiya usually advises IVF or ICSI to address egg quality or fertilisation problems.
        </p>
      </div>
    ),
  },
  {
    question: "Is IUI painful?",
    answerContent: (
      <div className="space-y-3">
        <p>
          No. It feels like a routine Pap smear. A fine, flexible catheter passes through the cervix in under 5 minutes, with no anaesthesia and no surgical instruments.
        </p>
      </div>
    ),
  },
  {
    question: "What sperm count is needed for IUI?",
    answerContent: (
      <div className="space-y-3">
        <p>
          A post-wash total motile sperm count (TMSC) of at least 5 to 10 million. Below 5 million motile sperm, ICSI gives much better results.
        </p>
      </div>
    ),
  },
  {
    question: "Where does Dr. Mona Dahiya offer IUI?",
    answerContent: (
      <div className="space-y-2">
        <p>3 centres:</p>
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
    question: "What is the success rate of IUI?",
    answerContent: (
      <div className="space-y-3">
        <p>
          15% to 20% per cycle in suitable couples, with 3 to 4 cycles giving a cumulative chance of roughly 40% to 50%. Age, open tubes and sperm quality matter most.
        </p>
      </div>
    ),
  },
];

const rightFaqs: FAQItem[] = [
  {
    question: "How much does IUI cost?",
    answerContent: (
      <div className="space-y-3">
        <p>
          ₹12,000 to ₹18,000 per completed cycle on average: procedure ₹5,000 to ₹7,000, sperm washing ₹3,000 to ₹4,000, scans ₹3,000 to ₹5,000 and medicines ₹1,500 to ₹3,000.
        </p>
      </div>
    ),
  },
  {
    question: "When can I take a pregnancy test after IUI?",
    answerContent: (
      <div className="space-y-3">
        <p>
          14 days after insemination. A blood Beta-hCG test is done on Day 28 of the cycle, and a home urine test too early can give a false result.
        </p>
      </div>
    ),
  },
  {
    question: "Can I resume normal activity after IUI?",
    answerContent: (
      <div className="space-y-3">
        <p>
          Yes. Rest for 15 minutes at the clinic, then carry on with your day. Avoid heavy lifting and strenuous exercise for the 2 weeks until the test.
        </p>
      </div>
    ),
  },
  {
    question: "What is the risk of twins with IUI?",
    answerContent: (
      <div className="space-y-3">
        <p>
          Below 5% with careful monitoring, because the aim is 1 or 2 dominant follicles. If 3 or more follicles develop, the cycle is converted or cancelled to protect you.
        </p>
      </div>
    ),
  },
];

export default function IuiTreatmentFaq() {
  const [openLeft, setOpenLeft] = useState<number | null>(null);
  const [openRight, setOpenRight] = useState<number | null>(null);

  const toggleLeft = (idx: number) => {
    setOpenLeft(openLeft === idx ? null : idx);
  };

  const toggleRight = (idx: number) => {
    setOpenRight(openRight === idx ? null : idx);
  };

  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
      <div className="mx-auto w-full max-w-[1440px]">
        {/* Section Header */}
        <Reveal variant="fadeUp">
          <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
            Patient questions
          </p>
          <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
            Top FAQs About IUI Treatment in Delhi NCR
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

