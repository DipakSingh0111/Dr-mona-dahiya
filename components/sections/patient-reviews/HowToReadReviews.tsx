"use client";

import { Reveal } from "@/components/ui/Reveal";

export default function HowToReadReviews() {
  return (
    <section className="relative overflow-hidden bg-[#061532] border-t border-white/10 px-4 py-6 text-white sm:px-6 sm:py-7 lg:px-8 lg:py-8">
      <div className="relative mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <span className="text-[12px] font-semibold tracking-wider text-[#e83e74] uppercase">
              How to read this page
            </span>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.18] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
              Patient reviews, grouped by theme
            </h2>
          </Reveal>

          <Reveal delay={0.06} className="lg:col-span-7">
            <p className="text-[14px] leading-relaxed text-white/70 sm:text-[15px]">
              Patients often mention several things at once, so a review can
              appear under more than one theme. Reviews describe individual
              experiences. Results depend on age, diagnosis and test results,
              and no clinic can guarantee a pregnancy.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
