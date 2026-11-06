"use client";

import { FaVial, FaSnowflake, FaCalendarAlt, FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  CostFactorCard,
} from "@/components/ui/treatment";

const costCards = [
  {
    title: "Semen analysis and screening",
    description: "Initial tests.",
    icon: <FaCheck className="size-3.5" />,
  },
  {
    title: "Freezing process",
    description: "Processing and vials.",
    icon: <FaVial className="size-3.5" />,
  },
  {
    title: "Annual storage",
    description: "Charge for the storage period.",
    icon: <FaCalendarAlt className="size-3.5" />,
  },
  {
    title: "Thawing and use",
    description: "Preparation for IUI or ICSI later.",
    icon: <FaSnowflake className="size-3.5" />,
  },
];

export default function SpermFreezingCaseAndCost() {
  return (
    <TreatmentSection>
      <div className="mb-14 sm:mb-16 lg:mb-20">
        <TreatmentSectionHeader
          eyebrow="From the clinic"
          title="Clinical Case Insight"
        />
        <Reveal variant="fadeUp" delay={0.06} className="mt-6">
          <div className="card-highlight rounded-2xl border border-[#fde2ec] bg-white p-6 shadow-[0_8px_24px_rgba(232,62,116,0.06)] sm:p-7">
            <p className="text-[14px] leading-relaxed font-medium text-ink sm:text-[15.5px]">
              A young man was advised chemotherapy and had two samples frozen the same week. Years later, his stored sperm was thawed and used in an ICSI cycle with his partner.
            </p>
            <p className="mt-3 text-[12px] text-ink/65">
              Details changed to protect patient privacy. Individual results vary.
            </p>
          </div>
        </Reveal>
      </div>

      <div>
        <TreatmentSectionHeader
          eyebrow="Transparency"
          title="Cost Factors Breakdown"
          subtitle="Cost includes the collection, the freezing process and storage by year. We explain the numbers before you begin."
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
      </div>
    </TreatmentSection>
  );
}
