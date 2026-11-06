"use client";

import { Fragment } from "react";
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
      <ol className="inline-flex max-w-full flex-wrap items-center gap-1.5 rounded-full border border-rose/25 bg-white px-3 py-1.5 shadow-sm backdrop-blur-md sm:gap-2 sm:px-3.5 sm:py-2">
        <li>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-full px-1.5 py-0.5 text-[12px] font-medium text-ink/70 transition-colors hover:bg-white hover:text-rose sm:text-[13px]"
          >
            <FaHome className="size-3 shrink-0 sm:size-3.5" />
            Home
          </Link>
        </li>

        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;

          return (
            <Fragment key={idx}>
              <li aria-hidden className="text-ink/35">
                <FaChevronRight className="size-2.5 sm:size-3" />
              </li>
              <li>
                {isLast ? (
                  <span className="inline-flex items-center rounded-full bg-rose/20 px-2.5 py-0.5 text-[12px] font-semibold text-rose ring-1 ring-rose/35 sm:px-3 sm:text-[13px]">
                    {item.label}
                  </span>
                ) : item.href ? (
                  <Link
                    href={item.href}
                    className="inline-flex items-center rounded-full px-1.5 py-0.5 text-[12px] font-medium text-ink/70 transition-colors hover:bg-white hover:text-rose sm:text-[13px]"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="inline-flex items-center rounded-full px-1.5 py-0.5 text-[12px] font-medium text-ink/70 sm:text-[13px]">
                    {item.label}
                  </span>
                )}
              </li>
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
