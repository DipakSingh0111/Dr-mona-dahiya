"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export type RelatedTreatmentItem = {
  title: string;
  subtitle?: string;
  href: string;
};

/** Detailed related card (title + subtitle + rose border). */
export function RelatedTreatmentCard({
  title,
  subtitle,
  href,
}: RelatedTreatmentItem) {
  return (
    <Link
      href={href}
      className="group relative flex h-full flex-col justify-between rounded-2xl border border-[#e83e74]/35 bg-gradient-to-b from-[#141b36] to-[#0a1024] p-5 shadow-[0_0_24px_rgba(232,62,116,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#e83e74]/65 hover:shadow-[0_0_32px_rgba(232,62,116,0.22)] sm:p-6"
    >
      <div>
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-serif text-[1.05rem] leading-snug font-semibold text-white transition-colors group-hover:text-[#f9a8d4]">
            {title}
          </h3>
          <span className="flex size-6 shrink-0 items-center justify-center rounded-full text-slate-400 transition-all group-hover:translate-x-0.5 group-hover:text-[#e83e74]">
            <FaArrowRight className="size-3" />
          </span>
        </div>
        {subtitle ? (
          <p className="mt-3 text-[13px] leading-relaxed text-slate-300 sm:text-[13.5px]">
            {subtitle}
          </p>
        ) : null}
      </div>
    </Link>
  );
}

/** Compact related card used in dense treatment grids. */
export function RelatedTreatmentCompactCard({
  title,
  href,
  label = "Treatment page",
}: RelatedTreatmentItem & { label?: string }) {
  return (
    <Link
      href={href}
      className="group relative flex items-center justify-between rounded-xl border border-white/10 bg-[#091a3c]/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0047ca]/60 hover:bg-[#0c224e]/85"
    >
      <div>
        <h3 className="font-serif text-[1rem] font-semibold text-white transition-colors group-hover:text-sky-300 sm:text-[1.08rem]">
          {title}
        </h3>
        <p className="mt-0.5 text-[12px] text-slate-400 group-hover:text-slate-300">
          {label}
        </p>
      </div>
      <span className="flex size-7 shrink-0 items-center justify-center rounded-full text-[#e83e74] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#f9a8d4]">
        <FaArrowRight className="size-3" />
      </span>
    </Link>
  );
}
