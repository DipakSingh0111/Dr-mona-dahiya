"use client";

import Image from "next/image";
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
        className="mt-7 grid auto-rows-fr grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
      >
        {protocols.map((item) => (
          <StaggerItem key={item.number} className="h-full min-h-[240px] sm:min-h-[260px]">
            <ProtocolCard {...item} />
          </StaggerItem>
        ))}
        <StaggerItem className="h-full min-h-[240px] sm:min-h-[260px]">
          <div className="card-highlight relative h-full min-h-[240px] overflow-hidden rounded-2xl border border-[#fde2ec] bg-white shadow-[0_10px_30px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f8b4cb] hover:shadow-[0_18px_40px_rgba(232,62,116,0.12)] sm:min-h-[260px]">
            <Image
              src="/shared-gallery/best ivf doctor in delhi.jpeg"
              alt="IVF Lab Micromanipulation and Embryo Culture"
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
