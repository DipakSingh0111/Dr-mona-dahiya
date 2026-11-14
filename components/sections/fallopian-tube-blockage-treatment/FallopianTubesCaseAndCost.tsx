"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  CostFactorCard,
} from "@/components/ui/treatment";

const costCards = [
  {
    title: "Testing your tubes",
    description: "We will perform an HSG or Sonosalpingography on you.",
  },
  {
    title: "Laparoscopy",
    description:
      "If you require a laparoscopy (day care) to diagnose or treat your tubes.",
  },
  {
    title: "Further treatment",
    description:
      "If you decide to treat your tubes or go for IVF.",
  },
  {
    title: "Scans once pregnant",
    description:
      "Will perform scans if you get pregnant to ensure everything is fine.",
  },
];

export default function FallopianTubesCaseAndCost() {
  return (
    <>
      <TreatmentSection>
        <div>
        <TreatmentSectionHeader
          eyebrow="Blocked fallopian tube patient"
          title="Clinical Case Insight"
        />

        <Reveal variant="fadeUp" delay={0.06} className="mt-6">
          <div className="card-highlight rounded-2xl border border-[#fde2ec] bg-white p-6 sm:p-7 shadow-[0_8px_24px_rgba(232,62,116,0.06)]">
            <p className="text-[14px] leading-relaxed font-medium text-ink sm:text-[15.5px]">
              Patient came to us after trying to get pregnant for 1 year. After
              testing her tubes we found she had 1 blocked tube and a
              hydrosalpinx. We performed surgery on her tube and went ahead with
              IVF.
            </p>
            <p className="mt-3 text-[12px] text-ink/65">
              Information has been changed to keep the patient anonymous.
              Outcomes may vary.
            </p>
          </div>
        </Reveal>
      </div>
      </TreatmentSection>

      <TreatmentSection>
        <div>
        <TreatmentSectionHeader
          eyebrow="Costs"
          title="Cost Factors Breakdown"
          subtitle="This is what it will cost you to come to us for blocked tubes."
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
