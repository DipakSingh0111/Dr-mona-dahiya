"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const indications = [
  {
    number: "1",
    title: "No sperm on repeated semen analysis",
    description: "Confirmed on at least two samples after centrifugation.",
  },
  {
    number: "2",
    title: "Previous infection, surgery or injury",
    description: "Mumps orchitis, hernia repair, trauma or torsion.",
  },
  {
    number: "3",
    title: "Absent or blocked vas deferens",
    description: "Congenital absence or obstruction of the ducts.",
  },
  {
    number: "4",
    title: "Hormonal imbalance",
    description: "Low FSH and LH or pituitary problems.",
  },
  {
    number: "5",
    title: "Genetic conditions",
    description: "Karyotype or Y-chromosome microdeletions.",
  },
];

export default function AzoospermiaIndications() {
  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1440px]">
        <Reveal variant="fadeUp">
          <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
            Clinical breakdown
          </p>
          <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
            Indications: Who Needs an Azoospermia
            <br className="hidden sm:inline" /> Evaluation?
          </h2>
          <p className="mt-2 text-[14px] text-slate-300 sm:text-[15px]">
            Common reasons Dr. Mona Dahiya recommends azoospermia care.
          </p>
        </Reveal>

        <Stagger
          delay={0.06}
          className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5"
        >
          {indications.map((item) => (
            <StaggerItem key={item.number}>
              <div className="relative flex h-full flex-col rounded-2xl border border-[#e83e74]/40 bg-gradient-to-b from-[#141b36] to-[#0a1024] p-5 shadow-[0_0_24px_rgba(232,62,116,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#e83e74]/70 sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#e83e74] text-[15px] font-bold text-white shadow-[0_2px_8px_rgba(232,62,116,0.4)]">
                    {item.number}
                  </span>
                  <h3 className="font-serif text-[1.05rem] font-semibold text-white sm:text-[1.12rem]">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-3.5 text-[13px] leading-relaxed text-slate-300 sm:text-[14px]">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
