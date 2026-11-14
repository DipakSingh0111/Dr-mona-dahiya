"use client";

import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
  /**
   * Inner-page breadcrumbs are rendered globally in BreadcrumbBar right below
   * the navbar. Hero sections keep <Breadcrumb /> for metadata compatibility
   * and render nothing unless `inline` is explicitly true.
   */
  inline?: boolean;
};

export default function Breadcrumb({
  items,
  className = "",
  inline = false,
}: BreadcrumbProps) {
  if (!inline) return null;

  // Guard against duplicate leading "Home" item if a route already starts with Home
  const normalizedItems =
    items.length > 0 && items[0].label.toLowerCase() === "home"
      ? items.slice(1)
      : items;

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-[12px] sm:text-[13px]">
        <li className="shrink-0">
          <Link
            href="/"
            className="font-medium whitespace-nowrap text-ink/75 transition-colors hover:text-rose"
          >
            Home
          </Link>
        </li>

        {normalizedItems.map((item, idx) => {
          const isLast = idx === normalizedItems.length - 1;

          return (
            <li
              key={`${item.label}-${idx}`}
              className={`inline-flex items-center gap-2 ${
                isLast ? "min-w-0 max-w-full" : "shrink-0"
              }`}
            >
              <span aria-hidden className="select-none text-ink/35">
                /
              </span>
              {isLast ? (
                <span className="inline-flex max-w-full items-center rounded-full border border-rose/20 bg-pink px-3 py-0.5 text-[12px] leading-snug font-medium text-rose sm:px-3.5 sm:py-1 sm:text-[13px]">
                  {item.label}
                </span>
              ) : item.href ? (
                <Link
                  href={item.href}
                  className="font-medium whitespace-nowrap text-ink/75 transition-colors hover:text-rose"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="font-medium whitespace-nowrap text-ink/75">
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
