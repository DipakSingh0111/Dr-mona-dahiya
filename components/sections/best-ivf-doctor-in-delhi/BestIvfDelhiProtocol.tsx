"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const protocols = [
  {
    number: "1",
    title: "Evaluation before treatment",
    bullets: [
      "Both partners tests.",
      "Scan the uterus.",
      "Review old reports.",
    ],
  },
  {
    number: "2",
    title: "Stimulation and Follicular Monitoring",
    bullets: [
      "Drugs based on your reserve.",
      "Scan and bloods done as per schedule.",
    ],
  },
  {
    number: "3",
    title: "Pickup of Eggs and Collection of Sperm",
    bullets: [
      "Pick up is a simple procedure under USG guidance.",
      "Sperm is collected on the same day.",
    ],
  },
  {
    number: "4",
    title: "Fertilization and Embryo Culture",
    bullets: [
      "Eggs are fertilized using ICSI/Conventional method and cultured to blastocyst.",
    ],
  },
  {
    number: "5",
    title: "Embryo Selection and Transfer",
    bullets: [
      "Best Embryo is transferred.",
      "Others can be frozen for future transfers if needed.",
    ],
  },
  {
    number: "6",
    title: "After transfer",
    bullets: [
      "Drug support, Pregnancy test and further counseling.",
    ],
  },
];

export default function BestIvfDelhiProtocol() {
  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1440px]">
        <Reveal variant="fadeUp">
          <p className="text-[12px] font-semibold tracking-wide text-[#e83e74] sm:text-[13px]">
            How it works
          </p>
          <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
            Step wise Protocol for IVF treatment in Delhi
          </h2>
        </Reveal>

        <Stagger
          className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
          stagger={0.06}
        >
          {protocols.map((item) => (
            <StaggerItem key={item.number} className="h-full">
              <div className="relative flex h-full flex-col rounded-2xl border border-[#e83e74]/30 bg-gradient-to-b from-[#141b36] to-[#0a1024] p-5 shadow-[0_0_24px_rgba(232,62,116,0.1)] transition-all duration-300 hover:-translate-y-1 hover:border-[#e83e74]/60 hover:shadow-[0_0_32px_rgba(232,62,116,0.2)] sm:p-6">
                <div className="flex items-start gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#e83e74] text-[15px] font-bold text-white shadow-[0_2px_8px_rgba(232,62,116,0.4)]">
                    {item.number}
                  </span>
                  <h3 className="font-serif pt-0.5 text-[1.05rem] leading-snug font-semibold text-white sm:text-[1.12rem]">
                    {item.title}
                  </h3>
                </div>
                <div className="mt-4 flex flex-col gap-2.5 pl-2 sm:pl-3">
                  {item.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className="flex items-start gap-2.5 text-[13px] leading-relaxed text-slate-300 sm:text-[13.5px]"
                    >
                      <span className="pt-0.5 text-[14px] leading-none text-[#e83e74] select-none">
                        ↳
                      </span>
                      <p className="flex-1">{bullet}</p>
                    </div>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
