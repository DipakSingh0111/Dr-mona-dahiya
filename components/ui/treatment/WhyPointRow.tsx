"use client";

import type { ReactNode } from "react";
import { FaCheck } from "react-icons/fa";

export type WhyPointItem = {
  title: string;
  desc: ReactNode;
};

export function WhyPointRow({ title, desc }: WhyPointItem) {
  return (
    <div className="flex items-start gap-3.5 rounded-xl border border-white/10 bg-[#091a3c]/70 px-4 py-3.5 backdrop-blur-md transition-all duration-200 hover:border-[#0047ca]/50 hover:bg-[#0c224e]/80 sm:px-5 sm:py-4">
      <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg bg-[#e83e74] text-white shadow-[0_2px_8px_rgba(232,62,116,0.4)]">
        <FaCheck className="size-3" />
      </span>
      <div>
        <h3 className="font-serif text-[1rem] font-semibold text-white sm:text-[1.05rem]">
          {title}
        </h3>
        <p className="mt-1 text-[13px] leading-relaxed text-slate-300 sm:text-[13.5px]">
          {desc}
        </p>
      </div>
    </div>
  );
}
