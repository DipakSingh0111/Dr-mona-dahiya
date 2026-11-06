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
      className="card-highlight group relative flex h-full flex-col justify-between rounded-2xl border border-[#fde2ec] bg-white p-5 shadow-[0_10px_30px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f8b4cb] hover:shadow-[0_18px_40px_rgba(232,62,116,0.12)] sm:p-6"
    >
      <div>
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-serif text-[1.05rem] leading-snug font-semibold text-black transition-colors group-hover:text-rose">
            {title}
          </h3>
          <span className="flex size-6 shrink-0 items-center justify-center rounded-full text-black transition-all group-hover:translate-x-0.5 group-hover:text-rose">
            <FaArrowRight className="size-3" />
          </span>
        </div>
        {subtitle ? (
          <p className="mt-3 text-[13px] leading-relaxed text-black sm:text-[13.5px]">
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
      className="group relative flex items-center justify-between rounded-xl border border-[#fde2ec] bg-white p-4 shadow-[0_8px_24px_rgba(232,62,116,0.05)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#f8b4cb] hover:shadow-[0_14px_32px_rgba(232,62,116,0.1)]"
    >
      <div>
        <h3 className="font-serif text-[1rem] font-semibold text-black transition-colors group-hover:text-rose sm:text-[1.08rem]">
          {title}
        </h3>
        <p className="mt-0.5 text-[12px] text-black group-hover:text-black">
          {label}
        </p>
      </div>
      <span className="flex size-7 shrink-0 items-center justify-center rounded-full text-rose transition-transform duration-200 group-hover:translate-x-1">
        <FaArrowRight className="size-3" />
      </span>
    </Link>
  );
}
