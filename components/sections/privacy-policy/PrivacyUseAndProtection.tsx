"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  ChecklistRow,
  CostFactorCard,
} from "@/components/ui/treatment";

const useItems = [
  "Diagnosis, stimulation planning, laboratory procedures and surgical treatment.",
  "Legal documentation, registry submissions and reports required by the National ART and Surrogacy Board (Ministry of Health and Family Welfare).",
  "Appointment reminders, scan schedules, lab reports and digital prescriptions.",
  "Internal clinical audits to maintain laboratory quality standards.",
];

const protectionCards = [
  {
    title: "Encryption",
    description:
      "Digital records, communications and images are stored using industry-standard AES 256-bit encryption.",
  },
  {
    title: "Access controls",
    description:
      "Records can be opened only by authorised clinical staff directly involved in your care.",
  },
  {
    title: "No sale of data",
    description:
      "We never sell, rent or share your personal or medical data with marketing agencies or lead brokers.",
  },
];

export default function PrivacyUseAndProtection() {
  return (
    <TreatmentSection>
      <div className="mb-14 sm:mb-16 lg:mb-20">
        <TreatmentSectionHeader
          eyebrow="Section 2"
          title="How We Use Your Information"
          subtitle="Your data is used only for your care and for legal obligations."
        />

        <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
          {useItems.map((item, idx) => (
            <Reveal key={item} variant="fadeUp" delay={idx * 0.04}>
              <ChecklistRow>{item}</ChecklistRow>
            </Reveal>
          ))}
        </div>
      </div>

      <div>
        <TreatmentSectionHeader
          eyebrow="Section 3"
          title="Data Protection & Electronic Health Records"
        />

        <Stagger
          delay={0.05}
          className="mt-7 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          {protectionCards.map((card) => (
            <StaggerItem key={card.title} className="h-full">
              <CostFactorCard {...card} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </TreatmentSection>
  );
}
