"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  CostFactorCard,
} from "@/components/ui/treatment";

const checkIcon = (
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
);

const pillIcon = (
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
);

const costCards = [
  {
    title: "Includes Semen Analysis",
    description:
      "This would include all the tests you would have to take beforehand.",
    icon: checkIcon,
  },
  {
    title: "Process To Freeze",
    description: "This is the cost involved in freezing the sample.",
    icon: pillIcon,
  },
  {
    title: "Storage Charges",
    description: "Depends on how long you want your sample to be stored.",
    icon: checkIcon,
  },
  {
    title: "Thawing & Use",
    description:
      "This would be done when you need to use your frozen sample for IUI or ICSI.",
    icon: checkIcon,
  },
];

export function SpermFreezingCase() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="From the clinic"
        title="Clinical Case Insight"
      />
      <Reveal variant="fadeUp" delay={0.06} className="mt-6">
        <div className="card-highlight rounded-2xl border border-[#fde2ec] border-l-4 border-l-rose bg-white p-6 shadow-[0_8px_24px_rgba(232,62,116,0.06)] sm:p-7">
          <p className="font-serif text-[14.5px] leading-relaxed font-semibold text-ink sm:text-[16px]">
            A young man was advised chemotherapy and had two samples frozen the
            same week. Years later, his stored sperm was thawed and used in an
            ICSI cycle with his partner.
          </p>
          <p className="mt-3 text-[12px] text-ink/65">
            Details changed to protect patient privacy. Individual results vary.
          </p>
        </div>
      </Reveal>
    </TreatmentSection>
  );
}

export function SpermFreezingCost() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Transparency"
        title={
          <>
            How Much Does
            <br className="hidden sm:inline" /> Semen/Sperm Freezing Cost?
          </>
        }
        subtitle="We break down the cost so you know what you're spending on each step."
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

export default function SpermFreezingCaseAndCost() {
  return (
    <>
      <SpermFreezingCase />
      <SpermFreezingCost />
    </>
  );
}
