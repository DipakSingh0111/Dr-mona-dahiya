"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  CostFactorCard,
} from "@/components/ui/treatment";

const costCards = [
  {
    title: "Lab Cost for sperm DNA fragmentation",
    description: "Sperm DNA fragmentation index test.",
  },
  {
    title: "Doctor's consult",
    description: "We will educate you on what your DFI levels mean.",
  },
  {
    title: "In case you require treatment",
    description: "Can be treated with medicines or surgery.",
  },
  {
    title: "What if I don't see improvement",
    description: "Retest you and perform ICSI using best sperms.",
  },
];

export default function DfiCaseAndCost() {
  return (
    <>
      <TreatmentSection>
        <div>
        <TreatmentSectionHeader
          eyebrow="Case Study"
          title="Clinical Case Insight"
        />

        <Reveal variant="fadeUp" delay={0.06} className="mt-6">
          <div className="card-highlight rounded-2xl border border-[#fde2ec] bg-white p-6 sm:p-7 shadow-[0_8px_24px_rgba(232,62,116,0.06)]">
            <p className="text-[14px] leading-relaxed font-medium text-ink sm:text-[15.5px]">
              Couple who was trying to conceive for sometime. Male partner had
              DFI levels of 38%. He was advised to take precautions and
              antioxidants for 3 months. After 3 months his DFI came down to
              22%. They continued with treatment.
            </p>
            <p className="mt-3 text-[12px] text-ink/65">
              Information may have been changed.
            </p>
          </div>
        </Reveal>
      </div>
      </TreatmentSection>

      <TreatmentSection>
        <div>
        <TreatmentSectionHeader
          eyebrow="Cost"
          title="Cost Factors Breakdown"
          subtitle="This will be done only once. Based on your condition you may require more treatment."
        />

        <Stagger
          delay={0.05}
          className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5"
        >
          {costCards.map((card) => (
            <StaggerItem key={card.title}>
              <CostFactorCard {...card} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
      </TreatmentSection>
    </>
  );
}
