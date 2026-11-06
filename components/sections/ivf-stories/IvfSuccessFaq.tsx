"use client";

import { useState } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { Reveal } from "@/components/ui/Reveal";
import siteData from "@/data/site.json";

interface FaqItemData {
  q: string;
  a: string;
  linkText?: string;
  linkHref?: string;
  textAfter?: string;
}

const linkClass =
  "font-semibold text-rose underline decoration-rose/40 underline-offset-2 hover:text-rose-dark transition-colors";

export default function IvfSuccessFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { eyebrow, title, items } = siteData.ivfStoriesPage.faq;

  const leftCol = items.slice(0, 5);
  const rightCol = items.slice(5, 10);

  const renderFaqCard = (item: FaqItemData, index: number) => {
    const isOpen = openIndex === index;
    return (
      <div
        key={index}
        className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
          isOpen
            ? "border-rose/45 bg-white shadow-[0_10px_28px_rgba(232,62,116,0.1)]"
            : "border-[#fde2ec] bg-white hover:border-rose/30"
        }`}
      >
        <button
          type="button"
          onClick={() =>
            setOpenIndex((prev) => (prev === index ? null : index))
          }
          aria-expanded={isOpen}
          className="flex w-full cursor-pointer items-center justify-between gap-3 p-5 text-left"
        >
          <h3
            className={`text-[15px] font-bold transition-colors ${
              isOpen ? "text-rose" : "text-ink"
            }`}
          >
            {item.q}
          </h3>
          <span
            className={`flex size-7 shrink-0 items-center justify-center rounded-full border transition-transform duration-300 ${
              isOpen
                ? "rotate-180 border-rose bg-rose text-white"
                : "border-slate-200 bg-slate-50 text-ink"
            }`}
          >
            <FaChevronDown className="size-3" />
          </span>
        </button>
        <div
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-slate-100 px-5 pt-3 pb-5 text-[13.5px] leading-relaxed text-slate-600">
              {item.a}
              {item.linkText && item.linkHref && (
                <Link href={item.linkHref} className={linkClass}>
                  {item.linkText}
                </Link>
              )}
              {item.textAfter && item.textAfter}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative overflow-hidden bg-pink py-8 sm:py-10 lg:py-12 border-t border-[#fde2ec]">
      <div className="page-container relative">
        <Reveal className="mb-7 sm:mb-9">
          <p className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
            {eyebrow}
          </p>
          <h2 className="font-serif mt-1 text-[1.85rem] leading-tight font-bold tracking-tight text-ink sm:text-[2.2rem] lg:text-[2.45rem]">
            {title}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2 md:gap-4.5">
          <div className="flex flex-col gap-3.5 md:gap-4.5">
            {leftCol.map((item, i) => renderFaqCard(item, i))}
          </div>
          <div className="flex flex-col gap-3.5 md:gap-4.5">
            {rightCol.map((item, i) => renderFaqCard(item, i + 5))}
          </div>
        </div>
      </div>
    </section>
  );
}
