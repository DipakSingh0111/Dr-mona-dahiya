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
    title: "Medications required",
    description: "This depends on your age, body weight and Ovarian Reserve.",
  },
  {
    icon: <FaFlask className="size-4 text-white sm:size-5" />,
    title: "Lab procedures required",
    description:
      "We will do ICSI, sperm selection or Genetic testing if your case demands.",
  },
  {
    icon: <FaCheck className="size-4 text-white sm:size-5" />,
    title: "Freezing and storage of Embryos",
    description: "We vitrify extra good grade embryos and store it for you.",
  },
  {
    icon: <FaCalendarAlt className="size-4 text-white sm:size-5" />,
    title: "Frozen Embryo Transfers",
    description:
      "Cost of preparing your lining, thawing the embryo and monitoring for each transfer.",
  },
];

export default function BestIvfDoctorCost() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Transparency"
        title="Factors that affect cost of IVF"
        subtitle="IVF cost with Dr. Mona Dahiya is between Rs. 1.5 Lakhs to Rs. 2.5 Lakhs. This varies according to your medication requirement, Lab procedure required and number of transfers needed. We will provide you with a detailed quotation after your visit."
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
