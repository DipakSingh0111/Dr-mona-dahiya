"use client";

import type { ReactNode } from "react";
import { FaCheck } from "react-icons/fa";

export function ChecklistRow({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full items-center gap-3.5 rounded-xl border border-[#fde2ec] bg-white px-4 py-3.5 shadow-[0_8px_24px_rgba(232,62,116,0.05)] transition-all duration-200 hover:border-[#f8b4cb] hover:shadow-[0_12px_28px_rgba(232,62,116,0.1)] sm:px-5 sm:py-4">
      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#fff0f5] text-rose ring-1 ring-[#fbcfe0] sm:size-6">
        <FaCheck className="size-2.5 sm:size-3" />
      </span>
      <p className="text-[13.5px] leading-relaxed text-black sm:text-[14.5px]">
        {children}
      </p>
    </div>
  );
}
