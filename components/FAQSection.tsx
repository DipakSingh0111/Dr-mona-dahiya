"use client";

import { useState } from "react";
import siteData from "@/data/site.json";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

interface FaqItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

function FaqCard({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`rounded-[18px] border transition-[border-color,box-shadow,background-color] duration-300 ease-out sm:rounded-[20px] ${
        isOpen
          ? "border-[#fbcfe0] bg-white shadow-[0_8px_24px_rgba(230,53,110,0.08)] ring-1 ring-[#fecdd3]/40"
          : "border-slate-100 bg-white shadow-[0_2px_8px_rgba(15,23,42,0.03)] hover:border-slate-200 hover:shadow-[0_6px_18px_rgba(15,23,42,0.06)]"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="group flex w-full cursor-pointer items-center justify-between gap-3 p-4 text-left select-none sm:p-[18px]"
      >
        <div className="flex min-w-0 items-center gap-3 sm:gap-3.5">
          <span
            className={`flex size-[34px] shrink-0 items-center justify-center rounded-full font-serif text-[13px] font-bold transition-colors duration-300 sm:size-[38px] sm:text-[14px] ${
              isOpen
                ? "bg-[#ffe4ee] text-[#e11d68]"
                : "bg-[#fff0f5] text-[#e11d68] group-hover:bg-[#ffe4ee]"
            }`}
          >
            {item.number}
          </span>

          <h3 className="font-serif text-[14.5px] leading-snug font-bold tracking-tight text-[#0f2038] sm:text-[15.5px]">
            {item.question}
          </h3>
        </div>

        {/* Plus → minus via smooth rotation of the vertical bar */}
        <span
          className={`relative flex size-7 shrink-0 items-center justify-center transition-colors duration-300 ${
            isOpen ? "text-[#e11d68]" : "text-[#0f2038] group-hover:text-[#e11d68]"
          }`}
          aria-hidden
        >
          <span className="absolute h-[2px] w-[12px] rounded-full bg-current" />
          <span
            className={`absolute h-[12px] w-[2px] rounded-full bg-current transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isOpen ? "scale-y-0 rotate-90" : "scale-y-100 rotate-0"
            }`}
          />
        </span>
      </button>

      {/* Smooth height accordion */}
      <div
        className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div
            className={`border-t border-[#fde8ef] px-[18px] pt-3 pb-[18px] text-[13px] leading-relaxed text-gray-500 transition-opacity duration-300 sm:text-[13.5px] ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="max-w-[540px] pl-0 sm:pl-[46px]">{item.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const { titlePrefix, titleHighlight, subtitle, leftFaqs, rightFaqs } =
    siteData.faq;

  const [openIds, setOpenIds] = useState<string[]>(["faq-01"]);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="relative isolate overflow-hidden bg-white px-3 py-6 sm:px-4 sm:py-7 lg:pr-8 lg:pl-3 lg:py-8 xl:pl-4">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[420px] w-[120%] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse 65% 50% at 50% 25%, rgba(255,224,236,0.55) 0%, rgba(255,242,248,0.25) 45%, rgba(255,255,255,0) 75%)",
        }}
      />

      <div className="mx-auto w-full max-w-[1400px]">
        <Reveal>
          <header className="mb-7 text-center sm:mb-9">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-[#0f2438] sm:text-4xl md:text-5xl lg:text-[52px]">
              <span>{titlePrefix} </span>
              <span className="text-[#e11d68]">{titleHighlight}</span>
            </h2>
            <p className="mx-auto mt-3.5 max-w-xl text-sm font-normal text-gray-500 sm:text-base">
              {subtitle}
            </p>
          </header>
        </Reveal>

        <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-2 lg:gap-6">
          <Stagger className="flex flex-col gap-3.5 sm:gap-4" stagger={0.08}>
            {leftFaqs.map((item) => (
              <StaggerItem key={item.id} variant="slideLeft">
                <FaqCard
                  item={item}
                  isOpen={openIds.includes(item.id)}
                  onToggle={() => toggleFaq(item.id)}
                />
              </StaggerItem>
            ))}
          </Stagger>

          <Stagger
            className="flex flex-col gap-3.5 sm:gap-4"
            stagger={0.08}
            delay={0.05}
          >
            {rightFaqs.map((item) => (
              <StaggerItem key={item.id} variant="slideRight">
                <FaqCard
                  item={item}
                  isOpen={openIds.includes(item.id)}
                  onToggle={() => toggleFaq(item.id)}
                />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
