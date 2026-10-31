"use client";

import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const checklist = [
  {
    title: "Own-egg priority",
    description:
      "Personalised stimulation (DuoStim, micro-dose flare, PRP) is tried before donor eggs are suggested.",
  },
  {
    title: "DuoStim expertise",
    description:
      "Luteal-phase stimulation captures a second wave of follicles within the same cycle.",
  },
  {
    title: "Careful embryo culture",
    description:
      "Benchtop incubators give every retrieved egg the best chance.",
  },
];

export default function WhyConsultLowAmh() {
  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-6 text-white sm:px-6 sm:py-7 lg:px-8 lg:py-8">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 right-[10%] h-[240px] w-[240px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(232,62,116,0.22) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1440px]">
        <Reveal>
          <span className="text-[12px] font-semibold tracking-wider text-[#e83e74] uppercase">
            Expertise & authority
          </span>
          <h2 className="font-serif mt-1 text-[1.55rem] leading-[1.2] font-normal tracking-tight whitespace-nowrap text-white sm:text-[1.85rem] lg:text-[2.15rem] xl:text-[2.35rem]">
            Why Consult Dr. Mona Dahiya for Low AMH?
          </h2>
        </Reveal>

        <Stagger className="mt-7 flex flex-col gap-4" stagger={0.08}>
          {checklist.map((item, index) => (
            <StaggerItem key={index}>
              <div className="group flex flex-col gap-4 rounded-2xl border border-[#e83e74]/25 bg-[#0a1f45]/80 p-5 transition-all duration-300 hover:border-[#e83e74]/45 sm:flex-row sm:items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#e83e74] to-[#c53658] text-white shadow-[0_4px_14px_rgba(232,62,116,0.35)]">
                  <FaCheck className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-[15.5px] font-bold text-white transition-colors group-hover:text-[#f9a8d4]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-white/70">
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
