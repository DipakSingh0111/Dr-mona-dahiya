"use client";

import { FaPills, FaFlask, FaCalendarAlt } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const costCards = [
  {
    icon: <FaPills className="size-4 text-white sm:size-5" />,
    title: "Pre-cycle priming",
    description: "DHEA, CoQ10 and supplements: ₹3,000 to ₹6,000.",
  },
  {
    icon: <FaPills className="size-4 text-white sm:size-5" />,
    title: "Stimulation medicines",
    description:
      "Tailored low-dose or micro-flare protocols: ₹35,000 to ₹55,000.",
  },
  {
    icon: <FaFlask className="size-4 text-white sm:size-5" />,
    title: "DuoStim (two retrievals)",
    description:
      "Two retrievals in one cycle with combined lab culture: ₹1,40,000 to ₹1,90,000.",
  },
  {
    icon: <FaCalendarAlt className="size-4 text-white sm:size-5" />,
    title: "Freezing and storage",
    description: "Embryo vitrification fees per banking cycle.",
  },
];

export default function LowAmhCostTransparency() {
  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1440px]">
        <Reveal variant="fadeUp">
          <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
            Transparency
          </p>
          <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
            What Affects the Cost of Low AMH
            <br className="hidden sm:inline" /> Treatment
          </h2>
          <p className="mt-2.5 max-w-3xl text-[14px] leading-relaxed text-slate-300 sm:text-[15px]">
            Low AMH plans often use lower medicine doses. The main costs are
            below, and your estimate is itemised after consultation.
          </p>
        </Reveal>

        <Stagger
          delay={0.05}
          className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5"
        >
          {costCards.map((card) => (
            <StaggerItem key={card.title}>
              <div className="relative flex h-full flex-col rounded-2xl border border-[#e83e74]/35 bg-gradient-to-b from-[#141b36] to-[#0a1024] p-5 shadow-[0_0_24px_rgba(232,62,116,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#e83e74]/65 hover:shadow-[0_0_32px_rgba(232,62,116,0.22)] sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#e83e74] shadow-[0_2px_8px_rgba(232,62,116,0.4)]">
                    {card.icon}
                  </span>
                  <h3 className="font-serif text-[1.05rem] leading-snug font-semibold text-white">
                    {card.title}
                  </h3>
                </div>
                <p className="mt-4 text-[13px] leading-relaxed text-slate-300 sm:text-[13.5px]">
                  {card.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
