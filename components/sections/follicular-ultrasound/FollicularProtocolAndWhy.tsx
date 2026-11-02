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
    title: "Baseline scan (cycle days 2–3)",
    bullets: [
      "Ovaries quiet, no cysts, antral follicle count recorded",
      "Lining baseline under 4 to 5 mm",
    ],
  },
  {
    number: "2",
    title: "Early growth scan (days 8–9)",
    bullets: [
      "First response check after Letrozole or clomiphene",
      "Lead follicle usually 10 to 12 mm",
    ],
  },
  {
    number: "3",
    title: "Mid-cycle scans (days 10–12)",
    bullets: [
      "Every 48 hours as the follicle reaches 14 to 16 mm",
      "Lining checked for a triple line of 7 mm or more",
    ],
  },
  {
    number: "4",
    title: "Peak and trigger (days 12–14)",
    bullets: [
      "Lead follicle 18 to 22 mm with a vascular ring",
      "hCG trigger (5,000 to 10,000 IU) given",
    ],
  },
  {
    number: "5",
    title: "Ovulation confirmation (24–48 hours after trigger)",
    bullets: [
      "Scan confirms follicle collapse and corpus luteum",
      "Timed intercourse or IUI scheduled",
    ],
  },
];

const whyPoints = [
  {
    title: "Specialist-read scans",
    desc: "Scans are done and read by Dr. Dahiya or senior reproductive sonographers, with no reporting delays.",
  },
  {
    title: "Preventing multiples",
    desc: "If 3 or more follicles develop, the cycle is cancelled or converted to IVF to avoid risky multiple pregnancies.",
  },
  {
    title: "Smooth next steps",
    desc: "If ovulation still fails after 3 cycles, you move to the next treatment without repeating basic tests.",
  },
];

export default function FollicularProtocolAndWhy() {
  return (
    <TreatmentSection>
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="How it works"
          title="Step-by-Step Follicular Monitoring Protocol"
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
          title="Why Choose Dr. Mona Dahiya for Follicular Monitoring?"
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
