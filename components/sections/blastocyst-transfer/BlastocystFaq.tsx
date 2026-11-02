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
    question: "Is a Day-5 transfer always better than a Day-3 transfer?",
    answerContent: (
      <div className="space-y-3">
        <p>
          Not always. Blastocysts implant at higher rates (65% to 70% per embryo) because weaker embryos stop growing between Days 3 and 5. With only 1 or 2 embryos on Day 3, an earlier transfer may be safer than risking arrest in the lab.
        </p>
      </div>
    ),
  },
  {
    question: "Why do some embryos not reach the blastocyst stage?",
    answerContent: (
      <div className="space-y-3">
        <p>
          Up to Day 3, growth runs on the egg&apos;s own reserves. On Day 4 the embryo&apos;s own genes switch on, so 3 problems show up: high sperm DNA fragmentation, chromosomal errors in the egg, and weak mitochondria. Typically 30% to 50% of embryos reach Day 5.
        </p>
      </div>
    ),
  },
  {
    question: "Is bed rest needed after a blastocyst transfer?",
    answerContent: (
      <div className="space-y-3">
        <p>
          No. Studies show bed rest does not improve implantation. Rest for 15 minutes at the clinic, then return to normal, non-strenuous activity the same day.
        </p>
      </div>
    ),
  },
  {
    question: "Where can I have blastocyst transfer with Dr. Mona Dahiya?",
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
    question: "How many blastocysts should be transferred?",
    answerContent: (
      <div className="space-y-3">
        <p>
          Usually 1. A single good blastocyst gives a similar pregnancy chance to 2 Day-3 embryos while keeping the twin risk near 1% to 2%. Spare blastocysts are frozen.
        </p>
      </div>
    ),
  },
];

const rightFaqs: FAQItem[] = [
  {
    question: "Can blastocysts be frozen and used later?",
    answerContent: (
      <div className="space-y-3">
        <p>
          Yes. Vitrified blastocysts survive warming over 95% of the time, and a frozen transfer lets the lining recover after stimulation. See{" "}
          <span className="text-[#f9a8d4] underline">Frozen Embryo Transfer</span>.
        </p>
      </div>
    ),
  },
  {
    question: "Does blastocyst transfer cost more?",
    answerContent: (
      <div className="space-y-3">
        <p>
          A little. Extended culture adds ₹15,000 to ₹25,000 to the IVF cycle, which is usually offset by needing fewer transfers.
        </p>
      </div>
    ),
  },
  {
    question: "When is the pregnancy test after blastocyst transfer?",
    answerContent: (
      <div className="space-y-3">
        <p>
          A blood Beta-hCG test 12 to 14 days after transfer. Home urine tests before Day 10 often give false results.
        </p>
      </div>
    ),
  },
  {
    question: "Is blastocyst transfer painful?",
    answerContent: (
      <div className="space-y-3">
        <p>
          No. It feels like a routine pelvic exam, takes about 5 to 10 minutes and needs no anaesthesia.
        </p>
      </div>
    ),
  },
];

export default function BlastocystFaq() {
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
            Top FAQs About Blastocyst Transfer in Delhi NCR
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

