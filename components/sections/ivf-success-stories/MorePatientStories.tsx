"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const stories = [
  {
    title: "Low AMH Success Stories",
    subtitle: "Own-egg pregnancies with low ovarian reserve",
    href: "/success-stories#low-amh",
  },
  {
    title: "PCOS & PCOD Success Stories",
    subtitle: "Safe ovulation and OHSS-free IVF",
    href: "/success-stories#pcos",
  },
  {
    title: "IUI Success Stories",
    subtitle: "Gentle, first-line treatment within 2 to 3 cycles",
    href: "/success-stories#iui",
  },
  {
    title: "All Success Stories",
    subtitle: "The full overview",
    href: "/success-stories",
  },
];

export default function MorePatientStories() {
  return (
    <section className="relative overflow-hidden bg-slate-50/70 px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
      <div className="relative mx-auto w-full max-w-[1440px]">
        {/* Section Header */}
        <Reveal className="mb-6 sm:mb-8">
          <span className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
            Browse by diagnosis
          </span>

          <h2 className="font-display mt-2 text-[2rem] leading-[1.18] font-bold tracking-tight text-[#0f2438] sm:text-[2.5rem] lg:text-[2.75rem]">
            More Patient Stories
          </h2>
        </Reveal>

        {/* 4 Cards Row */}
        <Stagger
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
          stagger={0.06}
        >
          {stories.map((item) => (
            <StaggerItem key={item.title} variant="scaleIn" className="h-full">
              <Link
                href={item.href}
                className="group relative flex h-full flex-col justify-between rounded-[22px] border border-slate-200/90 bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#e83e74]/50 hover:shadow-lg sm:p-6"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display text-[15px] font-bold text-[#0f2438] transition-colors group-hover:text-[#0047ca] sm:text-[16px]">
                      {item.title}
                    </h3>
                    <FaArrowRight className="mt-1 size-3.5 shrink-0 text-[#e83e74] transition-transform duration-300 group-hover:translate-x-1" />
                  </div>

                  <p className="mt-2 text-[12.5px] leading-relaxed text-slate-500 sm:text-[13px]">
                    {item.subtitle}
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

