"use client";

import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  ProtocolCard,
} from "@/components/ui/treatment";

const protocols = [
  {
    number: "1",
    title: "Evaluation before treatment",
    bullets: ["Both partners tests. Scan the uterus. Review old reports"],
  },
  {
    number: "2",
    title: "Stimulation and Follicular Monitoring",
    bullets: [
      "Drugs based on your reserve. Scan and bloods done as per schedule",
    ],
  },
  {
    number: "3",
    title: "Pickup of Eggs and Collection of Sperm",
    bullets: [
      "Pick up is a simple procedure under USG guidance. Sperm is collected on the same day",
    ],
  },
  {
    number: "4",
    title: "Fertilization and Embryo Culture",
    bullets: [
      "Eggs are fertilized using ICSI/Conventional method and cultured to blastocyst",
    ],
  },
  {
    number: "5",
    title: "Embryo Selection and Transfer",
    bullets: [
      "Best Embryo is transferred. Others can be frozen for future transfers if needed",
    ],
  },
  {
    number: "6",
    title: "After transfer",
    bullets: ["Drug support, Pregnancy test and further counseling"],
  },
];

export default function BestIvfDelhiProtocol() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="How it works"
        title="Step wise Protocol for IVF treatment in Delhi"
      />

      <Stagger
        delay={0.05}
        className="mt-7 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
      >
        {protocols.map((item) => (
          <StaggerItem key={item.number} className="h-full">
            <ProtocolCard {...item} />
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}
