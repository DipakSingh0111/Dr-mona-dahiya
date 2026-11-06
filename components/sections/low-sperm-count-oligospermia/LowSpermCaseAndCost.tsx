"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  CostFactorCard,
} from "@/components/ui/treatment";

const costCards = [
  {
    title: "Evaluation",
    description:
      "Semens done repeatedly along with Scans and Hormones.",
  },
  {
    title: "Treatment of the cause",
    description: "If any medication required or Surgery needed.",
  },
  {
    title: "IUI cycles",
    description:
      "If going for IUI Medications and monitoring and processing of sperm.",
  },
  {
    title: "IVF or ICSI",
    description:
      "If doing IVF and ICSI Stimulation and ICSI procedure and Transfer.",
  },
];

export default function LowSpermCaseAndCost() {
  return (
    <TreatmentSection>
      <div className="mb-14 sm:mb-16 lg:mb-20">
        <TreatmentSectionHeader
          eyebrow="Articles from our Clinic"
          title="Clinical Case Insight"
        />

        <Reveal variant="fadeUp" delay={0.06} className="mt-6">
          <div className="card-highlight rounded-2xl border border-[#fde2ec] bg-white p-6 sm:p-7 shadow-[0_8px_24px_rgba(232,62,116,0.06)]">
            <p className="text-[14px] leading-relaxed font-medium text-ink sm:text-[15.5px]">
              A patient came to us with low count and motility. Had varicocele
              and was living an unhealthy lifestyle. We corrected his varicocele
              and lifestyle and after 3 months we did a successful IUI Procedure.
            </p>
            <p className="mt-3 text-[12px] text-ink/65">
              * Names have been changed to protect patients identity
            </p>
          </div>
        </Reveal>
      </div>

      <div>
        <TreatmentSectionHeader
          eyebrow="Prices we offer"
          title="Cost Factors Breakdown"
          subtitle="Different Prices depend upon medical management, surgery and Assisted Reproduction Technique."
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
  );
}
