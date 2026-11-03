"use client";

import { useState, type ReactNode } from "react";
import { FaChevronDown } from "react-icons/fa";

export type FaqItem = {
  question: string;
  answer: ReactNode;
};

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
      className={`overflow-hidden rounded-2xl border bg-[#091a3c]/70 backdrop-blur-md transition-[border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isOpen
          ? "border-[#e83e74]/45 shadow-[0_0_24px_rgba(232,62,116,0.12)]"
          : "border-white/10 hover:border-[#0047ca]/50"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left sm:p-5.5"
      >
        <span className="font-serif text-[1rem] font-semibold text-white sm:text-[1.05rem]">
          {item.question}
        </span>
        <span
          className={`flex size-7 shrink-0 items-center justify-center rounded-full bg-white/5 text-slate-300 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isOpen ? "rotate-180 text-[#e83e74]" : ""
          }`}
        >
          <FaChevronDown className="size-3" />
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-white/5 px-5 pt-3 pb-5 text-[13px] leading-relaxed text-slate-300 sm:px-5.5 sm:text-[13.5px]">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Single-open smooth FAQ accordion. Pass one column or split left/right. */
export function FaqAccordion({
  items,
  leftItems,
  rightItems,
}: {
  items?: FaqItem[];
  leftItems?: FaqItem[];
  rightItems?: FaqItem[];
}) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  if (leftItems || rightItems) {
    return (
      <div className="mt-8 grid grid-cols-1 items-start gap-3.5 lg:grid-cols-2 lg:gap-5">
        <div className="flex flex-col gap-3 sm:gap-3.5">
          {(leftItems ?? []).map((faq, idx) => {
            const id = `left-${idx}`;
            return (
              <FaqCard
                key={id}
                item={faq}
                isOpen={openId === id}
                onToggle={() => toggle(id)}
              />
            );
          })}
        </div>
        <div className="flex flex-col gap-3 sm:gap-3.5">
          {(rightItems ?? []).map((faq, idx) => {
            const id = `right-${idx}`;
            return (
              <FaqCard
                key={id}
                item={faq}
                isOpen={openId === id}
                onToggle={() => toggle(id)}
              />
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8 flex flex-col gap-3 sm:gap-3.5">
      {(items ?? []).map((faq, idx) => {
        const id = `faq-${idx}`;
        return (
          <FaqCard
            key={id}
            item={faq}
            isOpen={openId === id}
            onToggle={() => toggle(id)}
          />
        );
      })}
    </div>
  );
}
