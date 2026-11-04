"use client";

import { FaPills, FaCheck, FaFlask, FaCalendarAlt } from "react-icons/fa";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  CostFactorCard,
} from "@/components/ui/treatment";

const costCards = [
  {
    icon: <FaPills className="size-4 text-white sm:size-5" />,
    title: "Injections",
    description:
      "The cost of injectable drugs will vary from ₹45,000 to ₹70,000.",
  },
  {
    icon: <FaCheck className="size-4 text-white sm:size-5" />,
    title: "Egg Retrieval",
    description:
      "Cost of collection, day care and IV sedation. Will cost between ₹35,000 and ₹50,000.",
  },
  {
    icon: <FaFlask className="size-4 text-white sm:size-5" />,
    title: "Freezing of Eggs",
    description:
      "Preparing your eggs for storage will cost between ₹25,000 and ₹35,000.",
  },
  {
    icon: <FaCalendarAlt className="size-4 text-white sm:size-5" />,
    title: "Storage Charges",
    description:
      "Your eggs will be stored at our facility for ₹15,000 to ₹25,000 a year.",
  },
];

export default function EggFreezingCost() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Know your cost"
        title="Factors that influence egg freezing cost"
        subtitle="On average, a complete cycle of egg freezing will cost between ₹1,25,000 and ₹1,80,000. This does not include your future thaw and ICSI cycle. You will be given an accurate quote after your consultation."
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
