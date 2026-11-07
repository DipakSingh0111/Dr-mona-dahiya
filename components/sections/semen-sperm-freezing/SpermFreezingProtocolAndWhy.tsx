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
    title: "Visit to Clinic",
    bullets: [
      "Understand why you want to freeze sperm",
      "How many samples we will need to freeze",
    ],
  },
  {
    number: "2",
    title: "Sample Collection",
    bullets: [
      "Will be collected in a private room",
      "Can be multiple samples depending on the situation",
    ],
  },
  {
    number: "3",
    title: "Sample Processing",
    bullets: [
      "The sample is evaluated and a cryoprotective agent is added",
      "Split into separate vials and labelled",
    ],
  },
  {
    number: "4",
    title: "Frozen & Stored",
    bullets: [
      "Vials are stored in a liquid nitrogen tank",
      "Labelled with a unique ID number",
    ],
  },
  {
    number: "5",
    title: "Use Of Frozen Sperm",
    bullets: [
      "Can be thawed and used in IUI, IVF & ICSI",
      "Quality is determined after the sample is thawed",
    ],
  },
];

const whyPoints = [
  {
    title: "Speed is Important",
    desc: "For patients who need their sample to be frozen quickly, we provide same-day consultations so you do not have to delay your treatment plan.",
  },
  {
    title: "Better Survival Rates",
    desc: "By storing your sperm at ultra-low temperatures, we can maintain a higher survival rate, allowing us to have a good sample for you after thawing.",
  },
  {
    title: "Storing For Future Procedures",
    desc: "We know how you want your sample to be used later on, whether it is for IUI or IVF/ICSI. We make sure your sample meets those standards.",
  },
];

export function SpermFreezingProtocol() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="About the treatment"
        title="Step-by-Step Treatment Protocol"
        subtitle="Here is what happens at every step. The final decision is made at your visit."
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
    </TreatmentSection>
  );
}

export function SpermFreezingWhy() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="About The Doctor"
        title="What makes us different?"
      />
      <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
        {whyPoints.map((point, idx) => (
          <Reveal key={point.title} variant="fadeUp" delay={idx * 0.05}>
            <WhyPointRow {...point} />
          </Reveal>
        ))}
      </div>
    </TreatmentSection>
  );
}

export default function SpermFreezingProtocolAndWhy() {
  return (
    <>
      <SpermFreezingProtocol />
      <SpermFreezingWhy />
    </>
  );
}
