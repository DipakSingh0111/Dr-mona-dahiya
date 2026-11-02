"use client";

import { FaCheck, FaPills } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  CostFactorCard
} from "@/components/ui/treatment";
const costCards = [
  {
    icon: <FaCheck className="size-4 text-white sm:size-[18px]" />,
    title: "Work-up",
    description: "Hormones, scans and genetic tests.",
  },
  {
    icon: <FaPills className="size-4 text-white sm:size-[18px]" />,
    title: "Retrieval procedure",
    description: "TESA, PESA or Micro-TESE, with anaesthesia.",
  },
  {
    icon: <FaCheck className="size-4 text-white sm:size-[18px]" />,
    title: "Laboratory sperm processing and freezing",
    description: "Search, preparation and cryopreservation.",
  },
  {
    icon: <FaCheck className="size-4 text-white sm:size-[18px]" />,
    title: "ICSI cycle",
    description: "Partner stimulation, ICSI and embryo transfer.",
  },
];

export default function AzoospermiaCost() {
  return (
    <TreatmentSection>
        <TreatmentSectionHeader
          eyebrow="Transparency"
          title="Cost Factors Breakdown"
          subtitle="Cost depends on the pathway: medicines, a retrieval procedure and ICSI are billed separately. A staged estimate is given after the work-up."
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
