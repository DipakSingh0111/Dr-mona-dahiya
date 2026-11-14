"use client";

import Image from "next/image";
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
        className="mt-7 grid auto-rows-fr grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
      >
        {steps.map((item) => (
          <StaggerItem
            key={item.number}
            className="h-full min-h-[240px] sm:min-h-[260px]"
          >
            <ProtocolCard {...item} />
          </StaggerItem>
        ))}
        <StaggerItem className="h-full min-h-[240px] sm:min-h-[260px]">
          <div className="card-highlight relative h-full min-h-[240px] overflow-hidden rounded-2xl border border-[#fde2ec] bg-white shadow-[0_10px_30px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f8b4cb] hover:shadow-[0_18px_40px_rgba(232,62,116,0.12)] sm:min-h-[260px]">
            <Image
              src="/shared-gallery/egg freezing.jpeg"
              alt="Egg Freezing Vitrification and Liquid Nitrogen Cryopreservation"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-center"
            />
          </div>
        </StaggerItem>
      </Stagger>
    </TreatmentSection>
  );
}
