"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  CostFactorCard
} from "@/components/ui/treatment";
interface CostCard {
  iconType: "check" | "pills";
  title: string;
  description: string;
}

const costCards: CostCard[] = [
  {
    iconType: "check",
    title: "Evaluation",
    description: "Repeat semen tests, scans and hormones.",
  },
  {
    iconType: "pills",
    title: "Treatment of the cause",
    description: "Medicines or varicocele surgery.",
  },
  {
    iconType: "check",
    title: "IUI cycles",
    description: "Medicines, monitoring and sperm preparation.",
  },
  {
    iconType: "check",
    title: "IVF or ICSI",
    description: "Stimulation, ICSI and embryo transfer.",
  },
];

export default function LowSpermCaseAndCost() {
  return (
    <TreatmentSection>
        {/* ================= SECTION 1: Clinical Case Insight ================= */}
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="From the clinic"
          title="Clinical Case Insight"
        />

          <Reveal variant="fadeUp" delay={0.06} className="mt-6">
            <div className="rounded-2xl border border-[#e83e74]/35 bg-gradient-to-r from-[#141b36] via-[#0e223d] to-[#0a1024] p-6 sm:p-7 shadow-[0_0_24px_rgba(232,62,116,0.12)]">
              <p className="text-[14px] leading-relaxed font-medium text-slate-100 sm:text-[15.5px]">
                A man with a low count and poor motility had a varicocele and an unhealthy lifestyle. After correction and three months of follow-up, his semen quality improved enough to move from planned ICSI to a trial of IUI.
              </p>
              <p className="mt-3 text-[12px] text-slate-400">
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
          subtitle="Cost depends on whether treatment is medical, surgical or assisted reproduction. We explain the likely route before you commit."
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

