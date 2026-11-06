"use client";

import { FaCheck } from "react-icons/fa";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
} from "@/components/ui/treatment";

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
    <TreatmentSection>
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 right-[10%] h-[240px] w-[240px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(232,62,116,0.22) 0%, transparent 70%)",
        }}
      />

      <TreatmentSectionHeader
        eyebrow="Expertise & authority"
        title="Why Consult Dr. Mona Dahiya for Low AMH?"
      />

      <Stagger className="mt-7 flex flex-col gap-4" stagger={0.08}>
        {reasons.map((item) => (
          <StaggerItem key={item.title}>
            <div className="group flex flex-row items-start gap-3.5 rounded-2xl border border-rose/25 bg-white/80 p-5 transition-all duration-300 hover:border-rose/45 sm:gap-4 sm:p-6">
              <div className="signature-tick mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl text-white">
                <FaCheck className="size-4" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-[15.5px] font-bold text-black transition-colors group-hover:text-rose sm:text-[16.5px]">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-black sm:text-[14px]">
                  {item.description}
                </p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}
