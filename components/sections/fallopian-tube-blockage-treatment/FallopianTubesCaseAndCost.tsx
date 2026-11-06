"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  CostFactorCard
} from "@/components/ui/treatment";
interface CostCard {
  title: string;
  description: string;
}

const costCards: CostCard[] = [
  {
    title: "Tubal patency test",
    description: "X-ray or ultrasound dye study.",
  },
  {
    title: "Laparoscopy",
    description: "If diagnostic or operative laparoscopy is needed.",
  },
  {
    title: "Treatment route",
    description: "Tubal cannulation or proceeding straight to IVF.",
  },
  {
    title: "Follow-up scans",
    description: "Monitoring early pregnancy for ectopic exclusion.",
  },
];

export default function FallopianTubesCaseAndCost() {
  return (
    <TreatmentSection>
        {/* ================= SECTION 1: Clinical Case Insight ================= */}
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="From the clinic"
          title="Clinical Case Insight"
        />

          <Reveal variant="fadeUp" delay={0.06} className="mt-6">
            <div className="card-highlight rounded-2xl border border-[#fde2ec] bg-white p-6 sm:p-7 shadow-[0_8px_24px_rgba(232,62,116,0.06)]">
              <p className="text-[14px] leading-relaxed font-medium text-ink sm:text-[15.5px]">
                A patient with a year of unexplained delay was found to have a blocked tube on one side and a hydrosalpinx on the other. After the damaged tube was dealt with surgically, she proceeded to IVF with a better outlook.
              </p>
              <p className="mt-3 text-[12px] text-ink/65">
                Details changed to protect patient privacy. Individual results vary.
              </p>
            </div>
          </Reveal>
        </div>

        {/* ================= SECTION 2: Cost Factors Breakdown ================= */}
        <div>
          <TreatmentSectionHeader
          eyebrow="Transparency"
          title="Cost Factors Breakdown"
          subtitle="Costs depend on whether tubal testing, laparoscopy or IVF is needed. A written estimate is shared before any procedure."
        />

          {/* 4 Cards Grid */}
          <Stagger delay={0.05} className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5">
            {costCards.map((card, idx) => (
              <StaggerItem key={idx}>
              <CostFactorCard {...card} />
            </StaggerItem>
            ))}
          </Stagger>
        </div>
      </TreatmentSection>
  );
}

