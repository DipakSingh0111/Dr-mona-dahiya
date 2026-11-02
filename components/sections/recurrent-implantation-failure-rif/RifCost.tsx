"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  CostFactorCard
} from "@/components/ui/treatment";
interface CostCard {
  isPillIcon?: boolean;
  title: string;
  description: string;
}

const costCards: CostCard[] = [
  {
    title: "Work-up",
    description: "Hysteroscopy, scans and blood tests.",
  },
  {
    isPillIcon: true,
    title: "Genetic testing",
    description: "PGT-A, only if indicated.",
  },
  {
    title: "Prepared frozen transfer",
    description: "Medicines, monitoring and embryo warming.",
  },
  {
    title: "Optional add-ons",
    description: "Used only with a clear reason.",
  },
];

export default function RifCost() {
  return (
    <TreatmentSection>
        {/* ================= SECTION: Cost Factors Breakdown ================= */}
        <div>
          <TreatmentSectionHeader
          eyebrow="Transparency"
          title="Cost Factors Breakdown"
          subtitle="The cost depends on the investigations and the tests you choose to add. We prioritise the tests most likely to change the plan."
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

