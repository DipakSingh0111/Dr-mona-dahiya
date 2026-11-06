"use client";

import type { ReactNode } from "react";
import { FaCheck } from "react-icons/fa";

export interface ChecklistRowProps {
  title?: ReactNode;
  text?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export function ChecklistRow({
  title,
  text,
  children,
  className = "",
}: ChecklistRowProps) {
  let heading = title;
  let body = text;

  if (!heading && typeof children === "string") {
    const colonIndex = children.indexOf(":");
    if (colonIndex > 0 && colonIndex < 70) {
      heading = children.slice(0, colonIndex).trim();
      body = children.slice(colonIndex + 1).trim();
    }
  }

  const hasSeparateHeading = Boolean(heading && body);

  return (
    <div
      className={`flex h-full items-start gap-3.5 rounded-xl border border-[#fde2ec] bg-white px-4 py-3.5 shadow-[0_8px_24px_rgba(232,62,116,0.05)] transition-all duration-200 hover:border-[#f8b4cb] hover:shadow-[0_12px_28px_rgba(232,62,116,0.1)] sm:gap-4 sm:px-5 sm:py-4 ${className}`}
    >
      <span className="mt-0.5 flex size-5.5 shrink-0 items-center justify-center rounded-full bg-rose/15 text-rose ring-1 ring-rose/35 sm:size-6">
        <FaCheck className="size-2.5 sm:size-3" />
      </span>

      {hasSeparateHeading ? (
        <div className="min-w-0 flex-1">
          <h3 className="font-bold text-[14.5px] leading-snug text-ink sm:text-[15.5px]">
            {heading}
          </h3>
          <p className="mt-1 text-[13px] leading-relaxed text-slate-600 sm:text-[14px]">
            {body}
          </p>
        </div>
      ) : (
        <div className="min-w-0 flex-1 text-[13.5px] leading-relaxed text-ink sm:text-[14.5px]">
          {children || heading || body}
        </div>
      )}
    </div>
  );
}
