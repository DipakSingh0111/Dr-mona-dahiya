"use client";

import { Reveal } from "@/components/ui/Reveal";

export default function AzoospermiaCaseInsight() {
  return (
    <section className="relative overflow-hidden bg-[#3b1530] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1440px]">
        <Reveal variant="fadeUp">
          <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
            From the clinic
          </p>
          <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
            Clinical Case Insight
          </h2>
        </Reveal>

        <Reveal variant="fadeUp" delay={0.06} className="mt-6">
          <div className="rounded-2xl border border-[#e83e74]/35 border-l-4 border-l-[#e83e74] bg-[#1a0f1c]/90 p-5 shadow-[0_0_28px_rgba(232,62,116,0.12)] sm:p-7">
            <p className="text-[14.5px] leading-relaxed font-semibold text-white sm:text-[16px]">
              A man with zero sperm on two semen tests and normal hormones was
              found to have an obstruction. Sperm was retrieved by a minor
              procedure and used for ICSI, leading to a successful embryo
              transfer.
            </p>
            <p className="mt-3 text-[12.5px] leading-relaxed text-slate-400 sm:text-[13px]">
              Details changed to protect patient privacy. Individual results
              vary.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
