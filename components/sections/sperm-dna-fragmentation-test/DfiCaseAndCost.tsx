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
    title: "DFI laboratory test",
    description: "The assay itself, usually a single sample.",
  },
  {
    iconType: "pills",
    title: "Consultation and review",
    description: "Doctor consultation and result counselling.",
  },
  {
    iconType: "check",
    title: "Treatment of the cause",
    description: "Medicines, antioxidants or varicocele care when advised.",
  },
  {
    iconType: "check",
    title: "Retest and ART planning",
    description: "Repeat DFI and any ICSI or sperm retrieval that follows.",
  },
];

export default function DfiCaseAndCost() {
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
                A couple with unexplained infertility and a DFI of 38% began a structured three-month programme of lifestyle correction and antioxidant support. A repeat test showed the DFI had fallen to 22%, and they proceeded to treatment with better odds.
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
          subtitle="The test is usually a one-time laboratory charge. Treatment cost depends on whether medicines, surgery or ART are needed."
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

