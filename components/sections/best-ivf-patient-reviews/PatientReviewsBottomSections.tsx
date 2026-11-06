"use client";

import { useState } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { Reveal } from "@/components/ui/Reveal";
import ClinicsAppointmentCards from "@/components/sections/ClinicsAppointmentCards";

const relatedPages = [
  {
    title: "IVF stories",
    description: "Longer patient stories.",
    href: "/ivf-stories",
  },
  {
    title: "IUI stories",
    description: "Patient stories about IUI.",
    href: "/success-stories#iui",
  },
  {
    title: "IVF treatment",
    description: "How IVF works, step by step.",
    href: "/treatments",
  },
  {
    title: "About Dr. Mona Dahiya",
    description: "Her background and training.",
    href: "/about-mona-dahiya",
  },
  {
    title: "Online consultation",
    description: "Meet Dr. Mona by video.",
    href: "/ivf-consultation-online",
  },
];

const reviewsFaq = [
  {
    question: "How are the reviews grouped?",
    answer:
      "They all fall under those topics that were mentioned. There can be multiple categories that they fall under. They are just helpful for you to find what you're looking for.",
  },
  {
    question: "Is the wording of the reviews changed?",
    answer:
      "No. The title and review will be the same as it appears on Google or our current review page. We will display Google reviews the way they are copied from Google.",
  },
  {
    question: "Will my result be the same as in these reviews?",
    answer:
      "That depends on you. Everyone has a different story and it's all about you. No one can say that you'll get pregnant. Dr. Mona will go over your tests and tell you what she thinks.",
  },
  {
    question: "Can I have my first consultation online?",
    answer:
      "Yes. You can select either an in-clinic appointment or online when you book.",
  },
];

export default function PatientReviewsBottomSections() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const leftFaqs = [
    { item: reviewsFaq[0], idx: 0 },
    { item: reviewsFaq[2], idx: 2 },
  ];
  const rightFaqs = [
    { item: reviewsFaq[1], idx: 1 },
    { item: reviewsFaq[3], idx: 3 },
  ];

  const renderFaqCard = (faq: { item: (typeof reviewsFaq)[0]; idx: number }) => {
    const isOpen = openIndex === faq.idx;
    return (
      <div
        key={faq.idx}
        className={`group flex flex-col justify-start rounded-2xl border transition-[border-color,background-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen
            ? "border-rose/40 bg-white shadow-[0_8px_24px_rgba(232,62,116,0.1)] ring-1 ring-rose/20"
            : "border-[#fde2ec] bg-white hover:border-[#fbcfe0] hover:bg-pink"
        }`}
      >
        <button
          type="button"
          onClick={() => toggleFaq(faq.idx)}
          className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left select-none"
          aria-expanded={isOpen}
        >
          <h3
            className={`text-[14.5px] font-bold transition-colors duration-300 ${
              isOpen ? "text-rose" : "text-black group-hover:text-rose"
            }`}
          >
            {faq.item.question}
          </h3>
          <span
            className={`flex size-7 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isOpen
                ? "rotate-180 border-rose bg-rose text-white shadow-sm"
                : "border-[#fde2ec] bg-white/5 text-black group-hover:border-[#fbcfe0] group-hover:text-rose"
            }`}
          >
            <FaChevronDown className="size-2.5 transition-transform" />
          </span>
        </button>

        <div
          className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-[#fde2ec] px-5 pt-3.5 pb-5 text-[13px] leading-relaxed text-black">
              {faq.item.answer}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col text-ink">
      <ClinicsAppointmentCards
        eyebrow="Visit Dr. Mona"
        title="Book a consultation at a clinic near you"
        subtitle="Dr. Mona sees patients in Noida, Ghaziabad and Delhi, and offers online consultation."
        sectionBg="bg-pink"
      />

      <section className="bg-white border-y border-[#fde2ec]/70 py-8 sm:py-10 lg:py-12 text-ink">
        <div className="page-container relative">
          <Reveal className="mb-6">
            <span className="text-[12px] font-semibold tracking-wider text-rose uppercase">
              Keep reading
            </span>
            <h2 className="font-serif mt-1 text-[2.2rem] leading-[1.18] font-normal tracking-tight text-ink sm:text-[2.6rem] lg:text-[2.9rem]">
              Related pages
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPages.map((page) => (
              <Link
                key={page.title}
                href={page.href}
                className="group relative flex flex-col justify-between rounded-2xl border border-[#fde2ec] bg-pink p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-rose/50 hover:bg-white"
              >
                <div>
                  <h3 className="font-bold text-[15px] text-ink transition-colors group-hover:text-rose">
                    {page.title}
                  </h3>
                  <p className="mt-1 text-[12.5px] text-slate-600">
                    {page.description}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-end">
                  <span className="text-rose text-[13px] opacity-75 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-pink py-8 sm:py-10 lg:py-12 text-ink">
        <div className="page-container relative">
          <Reveal className="mb-6">
            <span className="text-[12px] font-semibold tracking-wider text-rose uppercase">
              FAQ
            </span>
            <h2 className="font-serif mt-1 text-[2.2rem] leading-[1.18] font-normal tracking-tight text-ink sm:text-[2.6rem] lg:text-[2.9rem]">
              Review Info
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-4">
              {leftFaqs.map(renderFaqCard)}
            </div>
            <div className="flex flex-col gap-4">
              {rightFaqs.map(renderFaqCard)}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
