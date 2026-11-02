"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  WhyPointRow
} from "@/components/ui/treatment";
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
    <TreatmentSection>
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="How it works"
          title="Step-by-Step PRP Protocol"
        />

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
          <TreatmentSectionHeader
          eyebrow="Expertise & Authority"
          title="Why Consult Dr. Mona Dahiya for PRP Treatment?"
        />

          <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
            {whyPoints.map((point, idx) => (
              <Reveal key={point.title} variant="fadeUp" delay={idx * 0.05}>
              <WhyPointRow {...point} />
            </Reveal>
            ))}
          </div>
        </div>
      </TreatmentSection>
  );
}
