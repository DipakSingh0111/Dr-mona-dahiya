"use client";

import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const reasons = [
  {
    title: "25+ years of practice",
    desc: "MBBS Gold Medalist (Lady Hardinge), MD Gold Medalist (Maulana Azad Medical College), DNB and Singapore General Hospital ART fellow.",
  },
  {
    title: "Modern laboratory",
    desc: "Clean-room air filtration, benchtop incubators and high-recovery vitrification.",
  },
  {
    title: "Direct physician care",
    desc: "Consultations, stimulation planning, scans and embryo transfers are managed by Dr. Dahiya herself.",
  },
];

export default function WhyTrustComplexIVF() {
  return (
    <section className="relative overflow-hidden bg-pink py-8 text-ink sm:py-10 lg:py-12">
      <div className="page-container relative">
        <Reveal className="mb-6 sm:mb-8">
          <span className="text-[12px] font-bold tracking-[0.14em] text-[#ff7fa9] uppercase sm:text-[13px]">
            Expertise &amp; authority
          </span>

          <h2 className="font-serif mt-2 text-[2.1rem] leading-[1.18] font-normal tracking-tight text-black sm:text-[2.65rem] lg:text-[2.9rem]">
            Why Trust Dr. Mona Dahiya with Complex IVF?
          </h2>
        </Reveal>

        <Stagger className="flex flex-col gap-3.5 sm:gap-4" stagger={0.06}>
          {reasons.map((item) => (
            <StaggerItem key={item.title} variant="fadeUp">
              <div className="group flex flex-col gap-3 rounded-[22px] border border-[#fde2ec] bg-white p-5 shadow-[0_8px_24px_rgba(232,62,116,0.06)] transition-all duration-300 hover:border-rose/45 hover:shadow-[0_14px_36px_rgba(232,62,116,0.12)] sm:flex-row sm:items-center sm:gap-4.5 sm:p-5.5">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-[14px] bg-gradient-to-br from-[#ff6b9d] via-[var(--rose)] to-[var(--rose)] text-white shadow-[0_4px_14px_rgba(232,62,116,0.35)] ring-1 ring-white/20">
                  <FaCheck className="size-4" />
                </div>

                <div className="flex-1">
                  <h3 className="font-serif text-[16px] font-normal tracking-tight text-black transition-colors group-hover:text-rose sm:text-[17px]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-black sm:text-[13.5px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
