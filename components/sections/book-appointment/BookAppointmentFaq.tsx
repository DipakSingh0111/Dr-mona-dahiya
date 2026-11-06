"use client";

import { useState } from "react";
import siteData from "@/data/site.json";
import { Reveal } from "@/components/ui/Reveal";
import { FaChevronDown } from "react-icons/fa";

export default function BookAppointmentFaq() {
  const { faq } = siteData.bookAppointmentPage;
  // Ek sath sirf ek hi question open rahega
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  const renderFaqCard = (item: { q: string; a: string }, idx: number) => {
    const isOpen = openIdx === idx;
    return (
      <div
        key={idx}
        className={`w-full overflow-hidden rounded-[20px] border bg-white transition-[border-color,box-shadow] duration-300 ${
          isOpen
            ? "border-rose/40 shadow-[0_8px_24px_rgba(232,62,116,0.08)] ring-1 ring-rose/20"
            : "border-rose/20 shadow-[0_4px_16px_rgba(232,62,116,0.04)] hover:border-rose/35"
        }`}
      >
        <button
          type="button"
          onClick={() => toggle(idx)}
          aria-expanded={isOpen}
          className="flex w-full items-start justify-between gap-4 p-5 text-left select-none sm:p-6"
        >
          <span className="font-serif text-[15px] font-semibold text-ink sm:text-[16px]">
            {item.q}
          </span>
          <span
            className={`mt-1 flex size-6 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
              isOpen
                ? "rotate-180 bg-rose text-white"
                : "bg-rose/10 text-rose"
            }`}
          >
            <FaChevronDown className="size-2.5" />
          </span>
        </button>

        {/* Smooth CSS Grid Accordion Transition */}
        <div
          className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div
              className={`border-t border-ink/5 px-5 pt-3 pb-5 transition-opacity duration-300 sm:px-6 sm:pb-6 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-[13.5px] leading-relaxed text-ink/75 sm:text-[14px]">
                {item.a}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const leftCol = faq.items
    .map((item, idx) => ({ item, idx }))
    .filter((x) => x.idx % 2 === 0);

  const rightCol = faq.items
    .map((item, idx) => ({ item, idx }))
    .filter((x) => x.idx % 2 !== 0);

  return (
    <section id="faq" className="relative overflow-hidden bg-pink py-10 sm:py-12 lg:py-16">
      <div className="page-container relative">
        <Reveal variant="fadeUp" className="text-center">
          <span className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
            {faq.eyebrow}
          </span>
          <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-ink sm:text-[2.2rem] lg:text-[2.45rem]">
            {faq.title}
          </h2>
        </Reveal>

        {/* 2 independent columns: prevents empty vertical gap when one question opens */}
        <div className="mt-8 grid grid-cols-1 items-start gap-4 md:grid-cols-2 md:gap-5 lg:mt-10">
          <div className="flex flex-col gap-4 md:gap-5">
            {leftCol.map(({ item, idx }) => renderFaqCard(item, idx))}
          </div>

          <div className="flex flex-col gap-4 md:gap-5">
            {rightCol.map(({ item, idx }) => renderFaqCard(item, idx))}
          </div>
        </div>
      </div>
    </section>
  );
}
