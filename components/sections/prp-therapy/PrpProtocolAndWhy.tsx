"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const protocols: { number: string; title: string; description: ReactNode }[] = [
  {
    number: "1",
    title: "Blood collection",
    description:
      "20 to 30 mL of your blood drawn into sterile ACD-A tubes",
  },
  {
    number: "2",
    title: "Double-spin centrifugation",
    description:
      "Soft spin (1,200 rpm, 10 minutes) separates red cells. Hard spin (3,000 rpm, 10 minutes) concentrates platelets 4 to 6 times, giving 1.5 to 2.0 mL of PRP.",
  },
  {
    number: "3",
    title: "Intrauterine instillation",
    description:
      "Lining prepared with estradiol valerate 6 to 8 mg daily. 0.5 to 1.0 mL of PRP placed in the uterus through a soft transfer catheter. A second dose 48 hours later if the lining is still under 7 mm.",
  },
  {
    number: "4",
    title: "Ovarian injection",
    description:
      "Ultrasound-guided 17G needle places 1 to 2 mL of PRP in each ovary under sedation.",
  },
  {
    number: "5",
    title: "Monitoring and embryo transfer",
    description: (
      <>
        Scan after 48 to 72 hours. Once the lining is 7.5 mm or more and trilaminar,
        progesterone starts for{" "}
        <Link
          href="/frozen-embryo-transfer"
          className="font-medium text-[#93c5fd] underline underline-offset-2 hover:text-white"
        >
          Frozen Embryo Transfer
        </Link>
        .
      </>
    ),
  },
];

const whyPoints = [
  {
    title: "Controlled preparation standards",
    desc: "Closed, double-spin centrifugation gives a reliable platelet yield without white-cell contamination that could inflame the lining.",
  },
  {
    title: "Precise timing",
    desc: "PRP is built into a hormonally timed frozen transfer cycle, never given as an unmonitored one-off.",
  },
  {
    title: "Complete lining care",
    desc: "Diagnostic hysteroscopy first clears adhesions, so PRP works on a clean cavity.",
  },
];

export default function PrpProtocolAndWhy() {
  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <Reveal variant="fadeUp">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              How it works
            </p>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
              Step-by-Step PRP Protocol
            </h2>
          </Reveal>

          <Stagger
            delay={0.05}
            className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
          >
            {protocols.map((item) => (
              <StaggerItem key={item.number}>
                <div className="relative flex h-full flex-col rounded-2xl border border-[#e83e74]/30 bg-gradient-to-b from-[#141b36] to-[#0a1024] p-5 shadow-[0_0_24px_rgba(232,62,116,0.1)] transition-all duration-300 hover:-translate-y-1 hover:border-[#e83e74]/60 hover:shadow-[0_0_32px_rgba(232,62,116,0.2)] sm:p-6">
                  <div className="flex items-start gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#e83e74] text-[15px] font-bold text-white shadow-[0_2px_8px_rgba(232,62,116,0.4)]">
                      {item.number}
                    </span>
                    <h3 className="font-serif pt-0.5 text-[1.05rem] leading-snug font-semibold text-white sm:text-[1.12rem]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-[13px] leading-relaxed text-slate-300 sm:text-[13.5px]">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div>
          <Reveal variant="fadeUp">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              Expertise &amp; Authority
            </p>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
              Why Consult Dr. Mona Dahiya for PRP Treatment?
            </h2>
          </Reveal>

          <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
            {whyPoints.map((point, idx) => (
              <Reveal key={point.title} variant="fadeUp" delay={idx * 0.05}>
                <div className="flex items-start gap-3.5 rounded-xl border border-white/10 bg-[#091a3c]/70 px-4 py-3.5 backdrop-blur-md transition-all duration-200 hover:border-[#0047ca]/50 hover:bg-[#0c224e]/80 sm:px-5 sm:py-4">
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg bg-[#e83e74] text-white shadow-[0_2px_8px_rgba(232,62,116,0.4)]">
                    <FaCheck className="size-3" />
                  </span>
                  <div>
                    <h3 className="font-serif text-[1rem] font-semibold text-white sm:text-[1.05rem]">
                      {point.title}
                    </h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-slate-300 sm:text-[13.5px]">
                      {point.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
