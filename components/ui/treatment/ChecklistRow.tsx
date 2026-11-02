"use client";

import type { ReactNode } from "react";
import { FaCheck } from "react-icons/fa";

export function ChecklistRow({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full items-center gap-3.5 rounded-xl border border-white/10 bg-[#091a3c]/70 px-4 py-3.5 backdrop-blur-md transition-all duration-200 hover:border-[#0047ca]/50 hover:bg-[#0c224e]/80 sm:px-5 sm:py-4">
      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-300 ring-1 ring-teal-400/40 sm:size-6">
        <FaCheck className="size-2.5 sm:size-3" />
      </span>
      <p className="text-[13.5px] leading-relaxed text-slate-200 sm:text-[14.5px]">
        {children}
      </p>
    </div>
  );
}
