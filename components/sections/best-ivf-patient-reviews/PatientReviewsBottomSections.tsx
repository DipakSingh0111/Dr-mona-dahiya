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
            ? "border-[#e83e74]/50 bg-[#0b1f48] shadow-[0_8px_24px_rgba(0,0,0,0.25)] ring-1 ring-[#e83e74]/20"
            : "border-white/10 bg-[#0b1f48]/70 hover:border-white/20 hover:bg-[#0b1f48]"
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
              isOpen ? "text-[#e83e74]" : "text-white group-hover:text-[#e83e74]"
            }`}
          >
            {faq.item.question}
          </h3>
          <span
            className={`flex size-7 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isOpen
                ? "rotate-180 border-[#e83e74] bg-[#e83e74] text-white shadow-sm"
                : "border-white/15 bg-white/5 text-white/70 group-hover:border-white/30 group-hover:text-white"
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
            <div className="border-t border-white/10 px-5 pt-3.5 pb-5 text-[13px] leading-relaxed text-white/75">
              {faq.item.answer}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col bg-[#061532] text-white">
      <ClinicsAppointmentCards
        eyebrow="Visit Dr. Mona"
        title="Book a consultation at a clinic near you"
        subtitle="Dr. Mona sees patients in Noida, Ghaziabad and Delhi, and offers online consultation."
      />

      <section className="px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
        <div className="mx-auto w-full max-w-[1440px]">
          <Reveal className="mb-6">
            <span className="text-[12px] font-semibold tracking-wider text-[#e83e74] uppercase">
              Keep reading
            </span>
            <h2 className="font-serif mt-1 text-[2.2rem] leading-[1.18] font-normal tracking-tight text-white sm:text-[2.6rem] lg:text-[2.9rem]">
              Related pages
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPages.map((page) => (
              <Link
                key={page.title}
                href={page.href}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0b1f48]/75 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#e83e74]/50 hover:bg-[#0b1f48]"
              >
                <div>
                  <h3 className="font-bold text-[15px] text-white transition-colors group-hover:text-[#e83e74]">
                    {page.title}
                  </h3>
                  <p className="mt-1 text-[12.5px] text-white/70">
                    {page.description}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-end">
                  <span className="text-[#e83e74] text-[13px] opacity-75 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
        <div className="mx-auto w-full max-w-[1440px]">
          <Reveal className="mb-6">
            <span className="text-[12px] font-semibold tracking-wider text-[#e83e74] uppercase">
              FAQ
            </span>
            <h2 className="font-serif mt-1 text-[2.2rem] leading-[1.18] font-normal tracking-tight text-white sm:text-[2.6rem] lg:text-[2.9rem]">
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
