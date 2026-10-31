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
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 text-white sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="relative mx-auto w-full max-w-[1440px]">
        {/* Section Header */}
        <Reveal className="mb-6 sm:mb-8">
          <span className="text-[12px] font-bold tracking-[0.14em] text-[#ff7fa9] uppercase sm:text-[13px]">
            Expertise &amp; authority
          </span>

          <h2 className="font-serif mt-2 text-[2.1rem] leading-[1.18] font-normal tracking-tight text-white sm:text-[2.65rem] lg:text-[2.9rem]">
            Why Trust Dr. Mona Dahiya with Complex IVF?
          </h2>
        </Reveal>

        {/* 3 Horizontal Checklist Cards matching Screenshot */}
        <Stagger className="flex flex-col gap-3.5 sm:gap-4" stagger={0.06}>
          {reasons.map((item) => (
            <StaggerItem key={item.title} variant="fadeUp">
              <div className="group flex flex-col gap-3 rounded-[22px] border border-white/12 bg-gradient-to-r from-[#0a2048]/85 to-[#071838]/85 p-5 shadow-[0_10px_28px_rgba(0,10,35,0.35)] backdrop-blur-md transition-all duration-300 hover:border-[#e83e74]/50 hover:bg-[#0c2452]/90 hover:shadow-[0_14px_36px_rgba(232,62,116,0.15)] sm:flex-row sm:items-center sm:gap-4.5 sm:p-5.5">
                {/* Pink checkmark badge matching screenshot */}
                <div className="flex size-10 shrink-0 items-center justify-center rounded-[14px] bg-gradient-to-br from-[#ff6b9d] via-[#e83e74] to-[#c53658] text-white shadow-[0_4px_14px_rgba(232,62,116,0.35)] ring-1 ring-white/20">
                  <FaCheck className="size-4" />
                </div>

                <div className="flex-1">
                  <h3 className="font-serif text-[16px] font-normal tracking-tight text-white transition-colors group-hover:text-[#ff8fb3] sm:text-[17px]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-slate-300 sm:text-[13.5px]">
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
