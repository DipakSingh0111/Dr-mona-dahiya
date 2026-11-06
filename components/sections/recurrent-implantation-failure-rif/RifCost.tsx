"use client";

import { FaCheck, FaPills } from "react-icons/fa";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  CostFactorCard,
} from "@/components/ui/treatment";

const costCards = [
  {
    icon: <FaCheck className="size-3.5 text-white" />,
    title: "Basic Workup",
    description: "Hysteroscopy, usg and blood work",
  },
  {
    icon: <FaPills className="size-3.5 text-white" />,
    title: "Genetic Tests",
    description: "PGT-A if indicated",
  },
  {
    icon: <FaCheck className="size-3.5 text-white" />,
    title: "Frozen Transfer",
    description: "Drugs and preparation for frozen transfer",
  },
  {
    icon: <FaCheck className="size-3.5 text-white" />,
    title: "Addons",
    description: "If indicated",
  },
];

export default function RifCost() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Break Up Of Cost For Recurrent Implantation Failure (RIF)"
        title="Cost Factors Breakdown"
        subtitle="Cost will depend on the tests and addons that you opt for. We will recommend what can help you in your case."
      />

      <Stagger
        delay={0.05}
        className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4"
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
