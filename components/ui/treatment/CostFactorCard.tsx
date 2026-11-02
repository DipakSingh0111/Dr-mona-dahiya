"use client";

import type { ReactNode } from "react";
import { FaCheck } from "react-icons/fa";

export type CostFactorItem = {
  title: string;
  description: ReactNode;
  icon?: ReactNode;
};

export function CostFactorCard({ title, description, icon }: CostFactorItem) {
  return (
    <div className="relative flex h-full flex-col justify-between rounded-2xl border border-[#e83e74]/35 bg-gradient-to-b from-[#141b36] to-[#0a1024] p-5 shadow-[0_0_24px_rgba(232,62,116,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#e83e74]/65 hover:shadow-[0_0_32px_rgba(232,62,116,0.22)] sm:p-6">
      <div>
        <div className="flex items-center gap-3">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#e83e74] text-white shadow-[0_2px_8px_rgba(232,62,116,0.4)]">
            {icon ?? <FaCheck className="size-3.5" />}
          </span>
          <h3 className="font-serif text-[1.05rem] leading-snug font-semibold text-white">
            {title}
          </h3>
        </div>
        <p className="mt-4 text-[13px] leading-relaxed text-slate-300 sm:text-[13.5px]">
          {description}
        </p>
      </div>
    </div>
  );
}
