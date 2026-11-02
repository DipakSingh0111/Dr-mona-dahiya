"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader
} from "@/components/ui/treatment";
const indications = [
  {
    number: "1",
    title: "Diminished ovarian reserve",
    description:
      "AMH below 1.1 ng/mL with antral follicle count under 5 to 6.",
  },
  {
    number: "2",
    title: "Age 35 or over",
    description:
      "Natural follicle loss, needing protocols that put less stress on the eggs.",
  },
  {
    number: "3",
    title: "Previous poor response",
    description:
      "Earlier IVF cycles giving 3 or fewer eggs despite maximum doses.",
  },
  {
    number: "4",
    title: "Premature ovarian insufficiency",
    description: "Early decline in reserve before 35.",
  },
  {
    number: "5",
    title: "After ovarian surgery",
    description:
      "Reduced reserve after removal of endometriomas from both ovaries.",
  },
];

export default function LowAmhIndications() {
  return (
    <TreatmentSection>
        <TreatmentSectionHeader
          eyebrow="Clinical breakdown"
          title={<>Indications: Who Needs Specialised
            <br className="hidden sm:inline" /> Low AMH Care?</>}
        />

        <Stagger
          delay={0.06}
          className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5"
        >
          {indications.map((item) => (
            <StaggerItem key={item.number}>
              <div className="relative flex h-full flex-col rounded-2xl border border-[#e83e74]/40 bg-gradient-to-b from-[#141b36] to-[#0a1024] p-5 shadow-[0_0_24px_rgba(232,62,116,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#e83e74]/70 hover:shadow-[0_0_32px_rgba(232,62,116,0.22)] sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#e83e74] text-[15px] font-bold text-white shadow-[0_2px_8px_rgba(232,62,116,0.4)]">
                    {item.number}
                  </span>
                  <h3 className="font-serif text-[1.05rem] font-semibold text-white sm:text-[1.15rem]">
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
      </TreatmentSection>
  );
}
