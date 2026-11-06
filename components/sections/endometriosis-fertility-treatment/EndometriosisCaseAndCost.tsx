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
    title: "Investigations",
    description: "Scans, MRI where needed and hormone tests.",
  },
  {
    iconType: "pills",
    title: "Medical therapy",
    description: "Hormonal medicines and pain management.",
  },
  {
    iconType: "check",
    title: "Surgery",
    description: "Laparoscopy or hysteroscopy, when advised.",
  },
  {
    iconType: "check",
    title: "Assisted reproduction",
    description: "IUI or IVF with embryo freezing and frozen transfer.",
  },
];

export default function EndometriosisCaseAndCost() {
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
                A woman with painful periods, an endometrioma and a falling AMH was counselled against repeated surgery. A short, planned IVF cycle with freeze-all and a prepared frozen transfer was chosen to protect her remaining reserve.
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
          subtitle="Cost varies with whether medicines, surgery or IVF is needed. A phased estimate is shared after investigations."
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

