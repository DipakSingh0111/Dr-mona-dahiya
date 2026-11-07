"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  ProtocolCard,
  WhyPointRow,
} from "@/components/ui/treatment";

const protocols = [
  {
    number: "1",
    title: "Baseline scan (Day 2-3 of cycle)",
    bullets: [
      "Quiescent ovaries without any cysts. Note down AFC",
      "Note down endometrial thickness (should be less than 4-5mm)",
    ],
  },
  {
    number: "2",
    title: "First response scan (Day 8-9 of cycle)",
    bullets: [
      "After starting with letrozole/clomiphene see if there is any response.",
      "Follicle should be 10-12 mm at this stage.",
    ],
  },
  {
    number: "3",
    title: "Continue scanning every 2 days (Day 10-12)",
    bullets: [
      "Until follicle reaches 14-16mm in diameter",
      "Endometrium should be trilaminar of at least 7mm.",
    ],
  },
  {
    number: "4",
    title: "Final follicular scan (Day 12-14)",
    bullets: [
      "Once follicle reaches 18-22 mm and has good ring around it",
      "give HCG injection 5000-10000 IU",
    ],
  },
  {
    number: "5",
    title: "Confirm ovulation (Day 24-48 hours post trigger)",
    bullets: [
      "Ultrasound to confirm if ovulation has occurred or not. Do intercourse/IUI",
    ],
  },
];

const whyPoints = [
  {
    title: "Readings by specialists",
    desc: "Dr. Dahiya herself performs the scans and readings.",
  },
  {
    title: "Avoid twin/triplet pregnancy",
    desc: "If your body reacts to medications and develops more than 3 follicles we either cancel the cycle or convert to IVF.",
  },
  {
    title: "Next step without waiting",
    desc: "If you don't ovulate even after doing follicular monitoring for 3 months. We proceed to next step without wasting your time.",
  },
];

export default function FollicularProtocolAndWhy() {
  return (
    <>
      <TreatmentSection>
        <TreatmentSectionHeader
          eyebrow="Protocol for Follicular Monitoring"
          title="Step-by-Step Follicular Monitoring Protocol"
        />

        <Stagger
          delay={0.05}
          className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          {protocols.map((item) => (
            <StaggerItem key={item.number} className="h-full">
              <ProtocolCard {...item} />
            </StaggerItem>
          ))}
        </Stagger>
      </TreatmentSection>

      <TreatmentSection>
        <TreatmentSectionHeader
          eyebrow="Benefits of choosing us for Follicular Monitoring"
          title="Why Choose Dr. Mona Dahiya for Follicular Monitoring?"
        />

        <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
          {whyPoints.map((point, idx) => (
            <Reveal key={point.title} variant="fadeUp" delay={idx * 0.05}>
              <WhyPointRow {...point} />
            </Reveal>
          ))}
        </div>
      </TreatmentSection>
    </>
  );
}
