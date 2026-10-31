"use client";

import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const items = [
  {
    title: "Careful case selection",
    description:
      "IUI is advised only when tubes are open and sperm counts support a realistic chance.",
  },
  {
    title: "Precise timing",
    description:
      "Serial ultrasound scans, not home LH strips, time the insemination.",
  },
  {
    title: "Standardised sperm preparation",
    description:
      "Density-gradient washing isolates motile sperm and prevents cramping.",
  },
];

export default function IuiWhyTrust() {
  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-6 text-white sm:px-6 sm:py-7 lg:px-8 lg:py-8">
      <div className="relative mx-auto w-full max-w-[1440px]">
        <Reveal>
          <span className="text-[12px] font-semibold tracking-wider text-[#e83e74] uppercase">
            Expertise & authority
          </span>
          <h2 className="font-serif mt-1 text-[1.75rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
            Why Trust Dr. Mona Dahiya with IUI?
          </h2>
        </Reveal>

        <Stagger className="mt-7 flex flex-col gap-3.5 sm:gap-4" stagger={0.08}>
          {items.map((item) => (
            <StaggerItem key={item.title}>
              <article className="flex w-full items-center gap-4 rounded-[18px] border border-[#e83e74]/25 bg-[#0a1f45]/80 px-4 py-4 transition-colors hover:border-[#e83e74]/45 sm:gap-5 sm:px-5 sm:py-5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-[14px] bg-gradient-to-br from-[#e83e74] to-[#c53658] text-white shadow-[0_8px_20px_rgba(232,62,116,0.35)]">
                  <FaCheck className="size-4" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-[15px] font-bold text-white sm:text-[16px]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-white/65 sm:text-[13.5px]">
                    {item.description}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
