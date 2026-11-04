"use client";

import { Reveal } from "@/components/ui/Reveal";

export default function AzoospermiaCaseInsight() {
  return (
    <section className="relative overflow-hidden bg-pink py-8 sm:py-10 lg:py-12">
      <div className="page-container relative">
        <Reveal variant="fadeUp">
          <p className="text-[12px] font-bold tracking-[0.14em] text-rose uppercase sm:text-[13px]">
            From the clinic
          </p>
          <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-ink sm:text-[2.2rem] lg:text-[2.45rem]">
            Clinical Case Insight
          </h2>
        </Reveal>

        <Reveal variant="fadeUp" delay={0.06} className="mt-6">
          <div className="rounded-2xl border border-[#fde2ec] border-l-4 border-l-[var(--rose)] bg-white p-5 shadow-[0_8px_24px_rgba(232,62,116,0.06)] sm:p-7">
            <p className="text-[14.5px] leading-relaxed font-semibold text-ink sm:text-[16px]">
              A man with zero sperm on two semen tests and normal hormones was
              found to have an obstruction. Sperm was retrieved by a minor
              procedure and used for ICSI, leading to a successful embryo
              transfer.
            </p>
            <p className="mt-3 text-[12.5px] leading-relaxed text-ink/65 sm:text-[13px]">
              Details changed to protect patient privacy. Individual results
              vary.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
