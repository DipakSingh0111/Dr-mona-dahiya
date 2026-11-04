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
    question: "How does Dr. Mona Dahiya help after failed IVF?",
    answer:
      "With a root-cause review instead of repeating the same protocol: PGT-A, uterine imaging (3D SIS or hysteroscopy), CD138, sperm DNA fragmentation and ERA.",
  },
  {
    question: "How many embryos are transferred?",
    answer:
      "Usually 1. Elective single blastocyst transfer keeps success high and twin pregnancies below 5%.",
  },
  {
    question: "What is the IVF success rate?",
    answer:
      "The clinic reports IVF success rates above 90%; your chances depend on age, egg reserve and diagnosis.",
  },
  {
    question: "Are frozen transfers as successful as fresh?",
    answer:
      "Yes. Vitrified embryos survive warming over 95% of the time and often do as well or better.",
  },
  {
    question: "Can blocked tubes affect IVF?",
    answer: (
      <>
        A fluid-filled tube (hydrosalpinx) can halve implantation rates, so it
        is usually removed or clipped before transfer.
      </>
    ),
  },
  {
    question: "What is PGT-A?",
    answer:
      "Genetic screening of blastocysts for chromosome errors before transfer. Sex selection is illegal and never offered.",
  },
  {
    question: "How much does IVF cost?",
    answer: (
      <>
        ₹1.5 lakh to ₹2.5 lakh for most complete cycles, with EMI options. See{" "}
        <Link
          href="/ivf-cost-emi"
          className="text-cyan-400 underline decoration-cyan-400/50 underline-offset-2 hover:text-cyan-300"
        >
          IVF Cost & EMI
        </Link>
        .
      </>
    ),
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
          href="/ivf-consultation-online"
          className="text-cyan-400 underline decoration-cyan-400/50 underline-offset-2 hover:text-cyan-300"
        >
          Online Consultation
        </Link>
        .
      </>
    ),
  },
];

export default function IvfSuccessFaq() {

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const leftCol = faqList.slice(0, 5);
  const rightCol = faqList.slice(5, 10);

  const renderFaqCard = (item: FaqItem, index: number) => {
    const isOpen = openIndex === index;
    return (
      <div
        key={index}
        className={`group flex flex-col justify-start rounded-2xl border transition-all duration-300 ${
          isOpen
            ? "border-rose/40 bg-white shadow-[0_8px_24px_rgba(232,62,116,0.1)]"
            : "border-[#fde2ec] bg-white hover:border-[#fbcfe0] hover:bg-pink"
        }`}
      >
        <button
          type="button"
          onClick={() => toggleIndex(index)}
          className="flex w-full items-center justify-between gap-3 p-5 text-left transition-colors cursor-pointer"
          aria-expanded={isOpen}
        >
          <h3
            className={`text-[15px] font-bold transition-colors ${
              isOpen ? "text-rose" : "text-black group-hover:text-rose"
            }`}
          >
            {item.question}
          </h3>
          <div
            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
              isOpen
                ? "border-rose bg-rose text-white rotate-180"
                : "border-[#fde2ec] bg-white/5 text-black group-hover:border-[#fbcfe0] group-hover:text-rose"
            }`}
          >
            <FaChevronDown className="h-3 w-3" />
          </div>
        </button>

        <div
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
            isOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <p className="border-t border-white/5 px-5 pb-5 pt-3 text-[13.5px] leading-relaxed text-black">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative overflow-hidden bg-pink px-4 py-6 text-ink sm:px-6 sm:py-7 lg:px-8 lg:py-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 right-0 h-80 w-80 rounded-full bg-blue/15 blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-[1440px]">
        <div className="max-w-3xl">
          <span className="text-[12px] font-semibold tracking-wider text-rose uppercase">
            Patient questions
          </span>
          <h2 className="font-serif mt-1 text-[2.2rem] leading-[1.18] font-normal tracking-tight text-black sm:text-[2.6rem] lg:text-[2.9rem]">
            Frequently Asked Questions:
            <br />
            IVF Success Stories
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
