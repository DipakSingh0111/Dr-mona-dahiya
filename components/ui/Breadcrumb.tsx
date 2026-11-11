"use client";

import Link from "next/link";
import { FaHome, FaChevronRight } from "react-icons/fa";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export default function Breadcrumb({
  items,
  className = "mb-4 sm:mb-5",
}: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="inline-flex max-w-full flex-wrap items-center gap-x-1.5 gap-y-1.5 rounded-2xl border border-rose/25 bg-white px-3 py-1.5 shadow-sm backdrop-blur-md sm:gap-2 sm:rounded-full sm:px-3.5 sm:py-2">
        <li className="shrink-0">
          <Link
            href="/"
            className="inline-flex items-center gap-1 rounded-full px-1 py-0.5 text-[11.5px] font-medium whitespace-nowrap text-ink/70 transition-colors hover:bg-white hover:text-rose sm:gap-1.5 sm:px-1.5 sm:text-[13px]"
          >
            <FaHome className="size-3 shrink-0 sm:size-3.5" />
            Home
          </Link>
        </li>

        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;

          return (
            <li
              key={idx}
              className={`inline-flex items-center gap-1.5 sm:gap-2 ${
                isLast ? "min-w-0 max-w-full" : "shrink-0"
              }`}
            >
              <FaChevronRight
                aria-hidden
                className="size-2.5 shrink-0 text-ink/35 sm:size-3"
              />
              {isLast ? (
                <span className="inline-flex max-w-full items-center rounded-xl bg-rose/20 px-2.5 py-0.5 text-[11.5px] leading-snug font-semibold text-rose ring-1 ring-rose/35 sm:rounded-full sm:px-3 sm:text-[13px]">
                  {item.label}
                </span>
              ) : item.href ? (
                <Link
                  href={item.href}
                  className="inline-flex items-center rounded-full px-1 py-0.5 text-[11.5px] font-medium whitespace-nowrap text-ink/70 transition-colors hover:bg-white hover:text-rose sm:px-1.5 sm:text-[13px]"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="inline-flex items-center rounded-full px-1 py-0.5 text-[11.5px] font-medium whitespace-nowrap text-ink/70 sm:px-1.5 sm:text-[13px]">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
