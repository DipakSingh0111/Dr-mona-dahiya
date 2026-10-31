"use client";

import Link from "next/link";
import siteData from "@/data/site.json";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function IvfFaqsReviews() {
  const { reviews } = siteData.ivfFaqsPage;

  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-6 text-white sm:px-6 sm:py-7 lg:px-8 lg:py-8">
      <div className="relative mx-auto w-full max-w-[1440px]">
        <Reveal className="mb-7 sm:mb-9">
          <p className="text-[12px] font-semibold tracking-wide text-[#e83e74] sm:text-[13px]">
            {reviews.eyebrow}
          </p>
          <h2 className="font-serif mt-2 text-[1.75rem] leading-tight font-normal tracking-tight sm:text-[2.2rem] lg:text-[2.45rem]">
            {reviews.title}
          </h2>
          <p className="mt-2 text-[13.5px] text-white/60 sm:text-[14.5px]">
            {reviews.subtitle}
          </p>
        </Reveal>

        <Stagger
          className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5"
          stagger={0.08}
        >
          {reviews.items.map((item) => (
            <StaggerItem key={item.name} className="h-full">
              <article className="flex h-full flex-col rounded-[22px] border border-white/10 bg-[#0a1f45]/70 p-5 shadow-[0_10px_28px_rgba(0,10,40,0.3)] sm:p-6">
                <h3 className="text-[15.5px] font-bold tracking-tight sm:text-[16px]">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-white/70">
                  {item.body}
                </p>
                <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#e83e74] text-[13px] font-bold text-white">
                    {item.initial}
                  </span>
                  <div>
                    <p className="text-[13.5px] font-bold">{item.name}</p>
                    <p className="text-[12px] text-white/50">{item.source}</p>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-8">
          <Link
            href={reviews.cta.href}
            className="inline-flex items-center rounded-full border border-white/35 px-6 py-2.5 text-[13.5px] font-semibold text-white transition-all duration-200 hover:border-[#e83e74] hover:bg-[#e83e74] hover:shadow-lg hover:shadow-[#e83e74]/30 active:scale-98"
          >
            {reviews.cta.label}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
