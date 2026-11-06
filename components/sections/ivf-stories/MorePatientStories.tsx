"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import siteData from "@/data/site.json";

export default function MorePatientStories() {
  const { eyebrow, title, items } = siteData.ivfStoriesPage.moreStories;

  return (
    <section className="relative overflow-hidden bg-white py-8 sm:py-10 lg:py-12 border-t border-slate-100">
      <div className="page-container relative">
        <Reveal className="mb-6 sm:mb-8">
          <p className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
            {eyebrow}
          </p>
          <h2 className="font-serif mt-1 text-[1.85rem] leading-tight font-bold tracking-tight text-ink sm:text-[2.2rem] lg:text-[2.45rem]">
            {title}
          </h2>
        </Reveal>

        <Stagger
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
          stagger={0.06}
        >
          {items.map((item) => (
            <StaggerItem key={item.title} variant="scaleIn" className="h-full">
              <Link
                href={item.href}
                className="card-highlight group relative flex h-full flex-col justify-between rounded-[22px] border border-[#fde2ec] bg-white p-5 shadow-[0_4px_16px_rgba(232,62,116,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-rose/50 hover:shadow-[0_12px_28px_rgba(232,62,116,0.1)] sm:p-6"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display text-[15px] font-bold text-ink transition-colors group-hover:text-rose sm:text-[16px]">
                      {item.title}
                    </h3>
                    <FaArrowRight className="mt-1 size-3.5 shrink-0 text-rose transition-transform duration-300 group-hover:translate-x-1" />
                  </div>

                  <p className="mt-2 text-[12.5px] leading-relaxed text-slate-600 sm:text-[13px]">
                    {item.desc}
                  </p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
