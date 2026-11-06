"use client";

import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  CostFactorCard,
} from "@/components/ui/treatment";

const costCards = [
  {
    title: "Workup",
    description:
      "Medicines, Scans and Karyotyping/Micro Deletion.",
  },
  {
    title: "Procedure to Extract Sperm",
    description:
      "If surgery is required we will perform TESA/PESA or Micro TESE with anesthesia.",
  },
  {
    title: "Lab Processing of sperm and freezing",
    description: "Looking for sperms and processing them if found.",
  },
  {
    title: "IVF/ICSI Procedure",
    description:
      "IVF Procedure on your partner along with ICSI and Embryo Transfer.",
  },
];

export default function AzoospermiaCost() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="How much does Azoospermia treatment cost?"
        title="Cost Factors Breakdown"
        subtitle="There are multiple cost components when it comes to azoospermia treatment. These can be medicines and/or surgeries along with ICSI procedure. We will help you estimate your costs once we are done diagnosing you."
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
    </TreatmentSection>
  );
}
