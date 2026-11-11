"use client";

import { FaCalendarAlt, FaCheck } from "react-icons/fa";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  CostFactorCard,
  type CostFactorItem,
} from "@/components/ui/treatment";

const options: CostFactorItem[] = [
  {
    icon: <FaCalendarAlt className="size-3.5" />,
    title: "Visit Clinic to Consult Dr Mona",
    description: "For 30-45 minutes of consultation.",
  },
  {
    icon: <FaCheck className="size-3.5" />,
    title: "Video Call with Dr Mona",
    description:
      "For 30-45 minutes of consultation. If you are from outstation/ foreign country it's $25.",
  },
];

export default function SecondOpinionReviewOptions() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Our Pricing"
        title="Second-Opinion Review Options"
        subtitle="Come in person to us or video call if you are from outstation/ abroad."
      />

      <Stagger
        delay={0.05}
        className="mt-7 grid max-w-4xl grid-cols-1 items-stretch gap-5 sm:grid-cols-2"
      >
        {options.map((item) => (
          <StaggerItem key={item.title} className="h-full">
            <CostFactorCard {...item} />
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}
