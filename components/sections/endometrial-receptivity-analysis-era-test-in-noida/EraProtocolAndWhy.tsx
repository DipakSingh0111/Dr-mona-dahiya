"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  ProtocolCard,
  WhyPointRow
} from "@/components/ui/treatment";
const protocols = [
  {
    number: "1",
    title: "Mock cycle preparation (days 1–14)",
    bullets: [
      "Estradiol valerate 6 to 8 mg daily",
      "Scan confirms a lining of 7.5 mm or more",
    ],
  },
  {
    number: "2",
    title: "Progesterone start (day 15)",
    bullets: ["Started at an exact, recorded hour"],
  },
  {
    number: "3",
    title: "Endometrial biopsy (exactly 120 hours later)",
    bullets: [
      "A thin Pipelle catheter takes a small sample, no anaesthesia",
      "Sample placed straight into RNA-preserving buffer",
    ],
  },
  {
    number: "4",
    title: "NGS laboratory analysis",
    bullets: ["RNA tested against 248 implantation genes"],
  },
  {
    number: "5",
    title: "Personalised embryo transfer (pET)",
    bullets: [
      "Receptive: transfer at about 120 hours of progesterone",
      "Pre-receptive: longer exposure, such as 132 to 144 hours",
      "Post-receptive: shorter exposure, such as 96 to 108 hours",
    ],
  },
];

const whyPoints = [
  {
    title: "Used only when indicated",
    desc: "ERA is advised for suspected displaced windows, not as a routine test for first-time IVF.",
  },
  {
    title: "Hour-specific timing",
    desc: "Progesterone is tracked to the hour so your transfer matches the mock cycle exactly.",
  },
  {
    title: "Complete receptivity check",
    desc: "CD138 testing is done alongside to rule out false readings from inflammation.",
  },
];

export default function EraProtocolAndWhy() {
  return (
    <TreatmentSection>
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="How it works"
          title="Step-by-Step ERA Protocol"
        />

          <Stagger
            delay={0.05}
            className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
          >
            {protocols.map((item) => (
              <StaggerItem key={item.number}>
              <ProtocolCard {...item} />
            </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div>
          <TreatmentSectionHeader
          eyebrow="Expertise & authority"
          title="Why Consult Dr. Mona Dahiya for ERA Testing?"
        />

          <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
            {whyPoints.map((point, idx) => (
              <Reveal key={point.title} variant="fadeUp" delay={idx * 0.05}>
              <WhyPointRow {...point} />
            </Reveal>
            ))}
          </div>
        </div>
      </TreatmentSection>
  );
}
