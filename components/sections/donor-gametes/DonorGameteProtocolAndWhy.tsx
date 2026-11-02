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
    title: "Indication and regulatory filings",
    bullets: [
      "Clinical need confirmed; ART bank verification",
      "Informed consent and counselling completed",
    ],
  },
  {
    number: "2",
    title: "Donor matching",
    bullets: [
      "Height, complexion, blood group and education matched through ART bank registries",
    ],
  },
  {
    number: "3",
    title: "Recipient lining preparation (days 1–14)",
    bullets: [
      "Estradiol valerate 6 to 8 mg daily",
      "Scan on day 10 to 12 confirms a lining of 8 mm or more",
    ],
  },
  {
    number: "4",
    title: "Egg retrieval and ICSI",
    bullets: [
      "Donor eggs collected and taken to the cleanroom lab",
      "Mature eggs fertilised with partner sperm by ICSI",
    ],
  },
  {
    number: "5",
    title: "Blastocyst culture and freezing",
    bullets: ["Embryos grown to Day 5 in tri-gas incubators"],
  },
  {
    number: "6",
    title: "Frozen transfer and support",
    bullets: [
      "Progesterone started; ultrasound-guided transfer",
      "Blood Beta-hCG 14 days later",
    ],
  },
];

const whyPoints = [
  {
    title: "Own eggs first",
    desc: "DuoStim, micro-dose flare and PRP are explored before donor eggs are suggested.",
  },
  {
    title: "Strict legal compliance",
    desc: "Only registered ART banks are used, with no direct payment between donor and recipient, as the ART Act requires.",
  },
  {
    title: "Cleanroom lab quality",
    desc: "Fertilisation rates above 80% and strong blastocyst development in benchtop incubators.",
  },
];

export default function DonorGameteProtocolAndWhy() {
  return (
    <TreatmentSection>
      <div className="mb-14 sm:mb-16 lg:mb-20">
        <TreatmentSectionHeader
          eyebrow="How it works"
          title="Step-by-Step Donor Gamete Protocol"
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
          title="Why Trust Dr. Mona Dahiya for Donor Gamete IVF?"
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
