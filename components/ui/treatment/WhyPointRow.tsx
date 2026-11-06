"use client";

import type { ReactNode } from "react";
import { FaCheck } from "react-icons/fa";

export type WhyPointItem = {
  title: string;
  desc: ReactNode;
};

export function WhyPointRow({ title, desc }: WhyPointItem) {
  return (
    <div className="flex items-start gap-3.5 rounded-xl border border-[#fde2ec] bg-white px-4 py-3.5 shadow-[0_8px_24px_rgba(232,62,116,0.05)] transition-all duration-200 hover:border-[#f8b4cb] hover:shadow-[0_12px_28px_rgba(232,62,116,0.1)] sm:px-5 sm:py-4">
      <span className="signature-tick mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg text-white">
        <FaCheck className="size-3" />
      </span>
      <div className="min-w-0 flex-1">
        <h3 className="font-serif text-[1rem] font-semibold text-black sm:text-[1.05rem]">
          {title}
        </h3>
        <div className="mt-1 text-[13px] leading-relaxed text-black sm:text-[13.5px]">
          {desc}
        </div>
      </div>
    </div>
  );
}
