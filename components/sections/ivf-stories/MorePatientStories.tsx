"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const stories = [
  {
    title: "Low AMH Success Stories",
    subtitle: "Own-egg pregnancies with low ovarian reserve",
    href: "/low-amh-stories",
  },
  {
    title: "PCOS & PCOD Success Stories",
    subtitle: "Safe ovulation and OHSS-free IVF",
    href: "/success-stories#pcos",
  },
  {
    title: "IUI Success Stories",
    subtitle: "Gentle, first-line treatment within 2 to 3 cycles",
    href: "/iui-stories",
  },
  {
    title: "All Success Stories",
    subtitle: "The full overview",
    href: "/success-stories",
  },
];

export default function MorePatientStories() {
  return (
    <section className="relative overflow-hidden bg-slate-50/70 py-6 sm:py-7 lg:py-8">
      <div className="page-container relative">
        <Reveal className="mb-6 sm:mb-8">
          <span className="text-[12px] font-bold tracking-[0.14em] text-rose uppercase sm:text-[13px]">
            Browse by diagnosis
          </span>

          <h2 className="font-display mt-2 text-[2rem] leading-[1.18] font-bold tracking-tight text-black sm:text-[2.5rem] lg:text-[2.75rem]">
            More Patient Stories
          </h2>
        </Reveal>

        <Stagger
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
          stagger={0.06}
        >
          {stories.map((item) => (
            <StaggerItem key={item.title} variant="scaleIn" className="h-full">
              <Link
                href={item.href}
                className="group relative flex h-full flex-col justify-between rounded-[22px] border border-slate-200/90 bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-rose/50 hover:shadow-lg sm:p-6"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display text-[15px] font-bold text-black transition-colors group-hover:text-blue sm:text-[16px]">
                      {item.title}
                    </h3>
                    <FaArrowRight className="mt-1 size-3.5 shrink-0 text-rose transition-transform duration-300 group-hover:translate-x-1" />
                  </div>

                  <p className="mt-2 text-[12.5px] leading-relaxed text-black sm:text-[13px]">
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
