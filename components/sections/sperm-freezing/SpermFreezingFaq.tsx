"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function SpermFreezingFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "How long can sperm be stored?",
      a: "Properly frozen sperm remains viable for many years, subject to storage rules and consent renewals. Long-term liquid nitrogen storage at -196°C pauses all cellular aging without degrading the genetic material.",
    },
    {
      q: "How many samples should I freeze?",
      a: "Usually more than one. Your doctor will advise based on your count, motility, and whether the stored vials will be used for multiple IUI cycles or future ICSI treatments.",
    },
    {
      q: "Does freezing reduce sperm quality?",
      a: "Some sperm do not survive thawing, so a pre-freeze sample matters. ICSI needs just one sperm per egg, so even if post-thaw recovery is reduced, successful fertilization is consistently achievable.",
    },
    {
      q: "Can I use frozen sperm for IUI?",
      a: "Yes, if the post-thaw quality is adequate. Otherwise IVF or ICSI is advised to maximize the fertilization and pregnancy chances per stored vial.",
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="relative overflow-hidden bg-slate-50/70 px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="relative mx-auto w-full max-w-[1440px]">
        <Reveal className="mb-6 sm:mb-8">
          <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
            Patient questions
          </p>
          <h2 className="font-serif mt-1 text-[1.65rem] leading-[1.2] font-normal tracking-tight text-slate-900 sm:text-[2.1rem] lg:text-[2.35rem]">
            Frequently Asked Questions about Semen &amp; Sperm Freezing
          </h2>
        </Reveal>

        <Stagger stagger={0.06} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <StaggerItem key={idx}>
                <div
                  className={`group rounded-[18px] border transition-all duration-300 ${
                    isOpen
                      ? "border-[#0047ca]/40 bg-white shadow-[0_8px_24px_rgba(0,71,202,0.08)]"
                      : "border-slate-200/90 bg-white hover:border-slate-300 hover:shadow-[0_4px_16px_rgba(0,20,60,0.04)]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="flex w-full items-start justify-between gap-4 p-5 text-left sm:p-6"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[15px] font-bold text-slate-900 group-hover:text-[#0047ca] transition-colors sm:text-[16px]">
                      {faq.q}
                    </span>
                    <span
                      className={`inline-flex size-7 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
                        isOpen
                          ? "rotate-180 bg-[#0047ca] text-white"
                          : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                      }`}
                    >
                      <FaChevronDown className="size-3" />
                    </span>
                  </button>

                  {/* Smooth Grid-Accordion Animation */}
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 pt-0 text-[13.5px] leading-relaxed text-slate-600 sm:px-6 sm:pb-6 sm:text-[14px]">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

