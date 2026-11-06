"use client";

import type { ReactNode } from "react";
import { FaCapsules } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  CostFactorCard,
} from "@/components/ui/treatment";

const costCards: { title: string; description: string; icon?: ReactNode }[] = [
  {
    title: "Workup",
    description:
      "Tests that we may need to do to diagnose you. Ultrasound, scans, blood work etc",
  },
  {
    title: "Medications",
    description: "If you require medications to manage your pain and periods.",
    icon: <FaCapsules className="size-3.5" />,
  },
  {
    title: "Procedure",
    description:
      "If we need to do any surgery on you. Laparoscopy/Hysteroscopy etc.",
  },
  {
    title: "Infertility Procedures",
    description:
      "IUI/IVF may be required. In case of IVF there will be additional charges for Embryo freezing and Frozen Embryo transfer.",
  },
];

export function EndometriosisCase() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Case Studies"
        title="Clinical Case Insight"
      />

      <Reveal variant="fadeUp" delay={0.06} className="mt-6">
        <div className="card-highlight rounded-2xl border border-[#fde2ec] bg-white p-6 shadow-[0_8px_24px_rgba(232,62,116,0.06)] sm:p-7">
          <p className="font-serif text-[14.5px] leading-relaxed font-semibold text-ink sm:text-[16px]">
            She came to us with pain during periods. We diagnosed that she had
            low AMH and Endometriomas. She was told not to undergo surgery due
            to low reserve. We planned her for IVF and froze all embryos and did
            a prepared FET.
          </p>
          <p className="mt-3 text-[12px] text-ink/65">
            *Details have been changed to maintain anonymity of our patient.
            Results vary from patient to patient.
          </p>
        </div>
      </Reveal>
    </TreatmentSection>
  );
}

export function EndometriosisCost() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="How much will it cost me?"
        title={
          <>
            Cost Factors Affecting
            <br className="hidden sm:inline" /> Endometriosis Treatment
          </>
        }
        subtitle="It will depend on whether you need medications/procedures or IVF. Some costs you can expect are mentioned below."
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

export default function EndometriosisCaseAndCost() {
  return (
    <>
      <EndometriosisCase />
      <EndometriosisCost />
    </>
  );
}
