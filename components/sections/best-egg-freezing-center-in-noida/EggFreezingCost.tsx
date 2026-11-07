"use client";

import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  CostFactorCard,
} from "@/components/ui/treatment";

const costCards = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-4 text-white"
        aria-hidden
      >
        <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
        <path d="m8.5 8.5 7 7" />
      </svg>
    ),
    title: "Injections",
    description:
      "The cost of injectable drugs will vary from ₹45,000 to ₹70,000.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-4 text-white"
        aria-hidden
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    ),
    title: "Egg Retrieval",
    description:
      "Cost of collection, day care and IV sedation. Will cost between ₹35,000 and ₹50,000.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-4 text-white"
        aria-hidden
      >
        <path d="M10 2v7.31" />
        <path d="M14 9.3V1.99" />
        <path d="M8.5 2h7" />
        <path d="M14 9.3a6.5 6.5 0 1 1-4 0" />
        <path d="M5.52 16h12.96" />
      </svg>
    ),
    title: "Freezing of Eggs",
    description:
      "Preparing your eggs for storage will cost between ₹25,000 and ₹35,000.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-4 text-white"
        aria-hidden
      >
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
        <line x1="16" x2="16" y1="2" y2="6" />
        <line x1="8" x2="8" y1="2" y2="6" />
        <line x1="3" x2="21" y1="10" y2="10" />
      </svg>
    ),
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
        className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4"
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
