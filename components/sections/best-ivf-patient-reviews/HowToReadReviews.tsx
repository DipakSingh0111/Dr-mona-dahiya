"use client";

import { Reveal } from "@/components/ui/Reveal";

export default function HowToReadReviews() {
  return (
    <section className="relative overflow-hidden bg-pink border-t border-[#fde2ec] px-4 py-6 text-ink sm:px-6 sm:py-7 lg:px-8 lg:py-8">
      <div className="relative mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <span className="text-[12px] font-semibold tracking-wider text-rose uppercase">
              How to navigate this page
            </span>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.18] font-normal tracking-tight text-black sm:text-[2.2rem] lg:text-[2.45rem]">
              Patient Reviews Categorized
            </h2>
          </Reveal>

          <Reveal delay={0.06} className="lg:col-span-7">
            <p className="text-[14px] leading-relaxed text-black sm:text-[15.5px]">
              Some patients will talk about multiple topics in their review. So
              they may fall under different categories. They all represent what
              one person experienced. There is no guaranteed pregnancy.
              It&apos;s dependent on your age and diagnosis and tests.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
