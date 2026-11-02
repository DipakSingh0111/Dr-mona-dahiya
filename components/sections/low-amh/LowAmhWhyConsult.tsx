"use client";

import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const reasons = [
  {
    title: "Own-Egg First Philosophy & Embryo Banking",
    description:
      "Care focuses on biological options first. Tailored mild stimulation and banking across cycles preserve up to 90%+ cumulative pregnancy potential before donor eggs are considered.",
  },
  {
    title: "DuoStim & Growth Hormone (hGH) Priming",
    description:
      "Double stimulation in one cycle (follicular and luteal) can yield 30% to 40% more mature oocytes. Growth hormone priming supports follicle response when reserve is low.",
  },
  {
    title: "Advanced Benchtop Tri-Gas Incubation for Fragile Oocytes",
    description:
      "Mini incubators with a tri-gas mix (5% O₂) give every retrieved egg the best culture environment, boosting Day 5 blastocyst conversion by about 10% to 15%.",
  },
];

export default function LowAmhWhyConsult() {
  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 right-[10%] h-[240px] w-[240px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(232,62,116,0.22) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1440px]">
        <Reveal variant="fadeUp">
          <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
            Expertise & authority
          </p>
          <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
            Why Consult Dr. Mona Dahiya for Low AMH?
          </h2>
        </Reveal>

        <Stagger className="mt-7 flex flex-col gap-4" stagger={0.08}>
          {reasons.map((item) => (
            <StaggerItem key={item.title}>
              <div className="group flex flex-col gap-4 rounded-2xl border border-[#e83e74]/25 bg-[#0a1f45]/80 p-5 transition-all duration-300 hover:border-[#e83e74]/45 sm:flex-row sm:items-start sm:p-6">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#e83e74] to-[#c53658] text-white shadow-[0_4px_14px_rgba(232,62,116,0.35)]">
                  <FaCheck className="size-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-[15.5px] font-bold text-white transition-colors group-hover:text-[#f9a8d4] sm:text-[16.5px]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-white/70 sm:text-[14px]">
                    {item.description}
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
