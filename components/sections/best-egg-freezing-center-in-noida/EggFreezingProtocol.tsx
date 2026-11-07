"use client";

import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  ProtocolCard,
} from "@/components/ui/treatment";

const steps = [
  {
    number: "1",
    title: "Ultrasound and Blood Test (Day 1–3 of Cycle)",
    bullets: [
      "Ultrasound to count the number of antral follicles",
      "Decide which antagonist protocol to use",
    ],
  },
  {
    number: "2",
    title: "Start Injecting (Day 3 to 11 of Cycle)",
    bullets: [
      "Start daily injections of rFSH/hMG to induce multiple follicles to grow",
      "Ultrasound and blood test every alternate day to monitor the growth of follicles and estrogen levels",
    ],
  },
  {
    number: "3",
    title: "Give Trigger Shot (Day 11 or 12)",
    bullets: [
      "Give the trigger injection (Dual Trigger – GnRH Agonist and a small dose of hCG) when the majority of follicles are between 17–19 mm in size",
    ],
  },
  {
    number: "4",
    title: "Egg Collection (Day 13 or 14)",
    bullets: [
      "Collect the eggs after giving IV sedation. The whole process takes approx. 15 mins and no incision is made",
      "The fluid collected is sent directly to our embryo lab",
    ],
  },
  {
    number: "5",
    title: "Identify Mature Eggs",
    bullets: [
      "The eggs are stripped of surrounding cells. Only mature eggs are selected for freezing",
    ],
  },
  {
    number: "6",
    title: "Freeze the Eggs",
    bullets: [
      "The eggs are vitrified using Cryotop straws and stored in liquid nitrogen at −196°C",
      "They are then stored in our tanks",
    ],
  },
];

export default function EggFreezingProtocol() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Procedure"
        title="Step-by-Step Egg Freezing Protocol"
      />

      <Stagger
        delay={0.05}
        className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
      >
        {steps.map((item) => (
          <StaggerItem key={item.number}>
            <ProtocolCard {...item} />
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}
