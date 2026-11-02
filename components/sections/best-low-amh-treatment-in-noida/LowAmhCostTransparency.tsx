"use client";

import { FaPills, FaFlask, FaCalendarAlt } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  CostFactorCard
} from "@/components/ui/treatment";
const costCards = [
  {
    icon: <FaPills className="size-4 text-white sm:size-5" />,
    title: "Pre-cycle priming",
    description: "DHEA, CoQ10 and supplements: ₹3,000 to ₹6,000.",
  },
  {
    icon: <FaPills className="size-4 text-white sm:size-5" />,
    title: "Stimulation medicines",
    description:
      "Tailored low-dose or micro-flare protocols: ₹35,000 to ₹55,000.",
  },
  {
    icon: <FaFlask className="size-4 text-white sm:size-5" />,
    title: "DuoStim (two retrievals)",
    description:
      "Two retrievals in one cycle with combined lab culture: ₹1,40,000 to ₹1,90,000.",
  },
  {
    icon: <FaCalendarAlt className="size-4 text-white sm:size-5" />,
    title: "Freezing and storage",
    description: "Embryo vitrification fees per banking cycle.",
  },
];

export default function LowAmhCostTransparency() {
  return (
    <TreatmentSection>
        <TreatmentSectionHeader
          eyebrow="Transparency"
          title={<>What Affects the Cost of Low AMH
            <br className="hidden sm:inline" /> Treatment</>}
          subtitle="Low AMH plans often use lower medicine doses. The main costs are below, and your estimate is itemised after consultation."
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
