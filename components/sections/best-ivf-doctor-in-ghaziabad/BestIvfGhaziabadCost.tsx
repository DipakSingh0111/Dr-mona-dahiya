"use client";

import { FaPills, FaFlask, FaCheck, FaCalendarAlt } from "react-icons/fa";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  CostFactorCard,
} from "@/components/ui/treatment";

const costCards = [
  {
    icon: <FaPills className="size-4 text-white sm:size-5" />,
    title: "Stimulation Medications",
    description: "Depends on age, body weight and ovarian reserve.",
  },
  {
    icon: <FaFlask className="size-4 text-white sm:size-5" />,
    title: "Lab Procedures",
    description:
      "ICSI, sperm washing and genetic testing may be required based on your case.",
  },
  {
    icon: <FaCheck className="size-4 text-white sm:size-5" />,
    title: "Freezing of Embryos",
    description: "Your spare embryos are frozen and stored for a year.",
  },
  {
    icon: <FaCalendarAlt className="size-4 text-white sm:size-5" />,
    title: "Transfer of Frozen Embryos",
    description: "Preparing your lining and thawing of embryo.",
  },
];

export default function BestIvfGhaziabadCost() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Transparency"
        title="Cost of IVF in Ghaziabad"
        subtitle="IVF cost with Dr Mona Dahiya is around 1.5 lakhs - 2.5 lakhs per cycle. This depends on your medication requirement, lab procedure and number of transfers you may require. An estimated price will be shared with you after consultation."
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
