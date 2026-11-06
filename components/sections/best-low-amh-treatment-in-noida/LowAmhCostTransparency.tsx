"use client";

import { FaPills, FaFlask, FaCalendarAlt } from "react-icons/fa";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  CostFactorCard,
} from "@/components/ui/treatment";

const costCards = [
  {
    icon: <FaPills className="size-3.5" />,
    title: "Priming Before your cycle",
    description:
      "Amount you will spend on Dhea, CoQ10 and supplements. Will cost you around 3000 to 6000 rupees.",
  },
  {
    icon: <FaPills className="size-3.5" />,
    title: "Medication For Stimulation",
    description:
      "As Per Your Protocol Whether It Is Low Dose or Micro Dose Flare. Will cost you around 35000 to 55000.",
  },
  {
    icon: <FaFlask className="size-3.5" />,
    title: "Duostim",
    description:
      "2 retrievals done in same cycle with labs charges. It will cost around 1.4 to 1.9 lac.",
  },
  {
    icon: <FaCalendarAlt className="size-3.5" />,
    title: "Freezing Of Your Eggs",
    description: "Vitrification Charges of your Embryos.",
  },
];

export default function LowAmhCostTransparency() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="How Much Does Low Amh Treatment Cost"
        title="What Affects the Cost of Low AMH Treatment"
        subtitle="When you have low amh you may require less amount of drugs for your treatment plan. Here are few parameters which affect the cost of low amh treatment. After your visit to us we will give you a rough estimate."
      />

      <Stagger
        delay={0.05}
        className="mt-8 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4"
      >
        {costCards.map((card) => (
          <StaggerItem key={card.title} className="h-full">
            <CostFactorCard {...card} />
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}
