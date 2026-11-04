"use client";

import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  CostFactorCard,
} from "@/components/ui/treatment";

const collectCards = [
  {
    title: "Personal identifiers",
    description:
      "Name, government photo ID (Aadhaar, passport or voter ID, as the ART Act requires), age, address, email and phone number.",
  },
  {
    title: "Clinical health records",
    description:
      "Menstrual history, past treatment records, embryology records, semen reports, surgery notes and scans.",
  },
  {
    title: "Biological and genetic data",
    description:
      "Karyotype results, PGT summaries and infection markers (HIV, HBsAg, HCV, VDRL).",
  },
  {
    title: "Payment details",
    description:
      "Transaction records for services. Card and bank details are processed by secure, PCI-DSS compliant payment gateways and are not stored on our servers.",
  },
];

export default function PrivacyCollect() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Section 1"
        title="Information We Collect"
        subtitle="We collect only what is needed to provide reproductive care and meet legal requirements."
      />

      <Stagger
        delay={0.05}
        className="mt-7 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4"
      >
        {collectCards.map((card) => (
          <StaggerItem key={card.title} className="h-full">
            <CostFactorCard {...card} />
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}
