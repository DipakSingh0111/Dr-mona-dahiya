"use client";

import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import siteData from "@/data/site.json";

export default function ComplexIVFSolutions() {
  const { eyebrow, title, subtitle, items } =
    siteData.ivfStoriesPage.complexSolutions;

  return (
    <section className="relative overflow-hidden bg-white py-8 sm:py-10 lg:py-12 border-t border-slate-100">
      <div className="page-container relative">
        <Reveal className="mb-7 sm:mb-9">
          <p className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
            {eyebrow}
          </p>
          <h2 className="font-serif mt-1 text-[1.85rem] leading-tight font-bold tracking-tight text-ink sm:text-[2.2rem] lg:text-[2.45rem]">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
              {subtitle}
            </p>
          )}
        </Reveal>

        <Stagger
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6"
          stagger={0.07}
        >
          {items.map((item) => (
            <StaggerItem key={item.num} variant="scaleIn" className="h-full">
              <article className="card-highlight group relative flex h-full flex-col justify-start rounded-[24px] border border-[#fde2ec] bg-white p-5 shadow-[0_4px_18px_rgba(232,62,116,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-rose/40 hover:shadow-[0_12px_28px_rgba(232,62,116,0.1)] sm:p-6">
                <div className="flex items-start gap-3">
                  <span className="card-badge flex size-7 shrink-0 items-center justify-center rounded-lg bg-rose text-[12px] font-bold text-white shadow-xs">
                    {item.num}
                  </span>
                  <h3 className="font-serif text-[16px] font-bold leading-snug tracking-tight text-ink sm:text-[17px]">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-3 text-[13px] leading-relaxed text-slate-600 sm:text-[13.5px]">
                  {item.textBefore}
                  {item.linkText && item.linkHref ? (
                    <Link
                      href={item.linkHref}
                      className="font-semibold text-rose underline decoration-rose/40 underline-offset-2 transition-colors hover:text-rose-dark"
                    >
                      {item.linkText}
                    </Link>
                  ) : null}
                  {item.textAfter}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
