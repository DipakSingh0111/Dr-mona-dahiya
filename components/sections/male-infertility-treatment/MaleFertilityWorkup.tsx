"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  NumberedCard
} from "@/components/ui/treatment";
interface WorkupItem {
  number: string;
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
  suffix?: string;
}

const workupItems: WorkupItem[] = [
  {
    number: "1",
    title: "Low count, motility or shape (OATS)",
    description:
      "Count under 16 million/mL, motility under 30% or normal forms under 4%. See ",
    linkText: "Low Sperm Count & Motility",
    linkHref: "/treatments",
    suffix: ".",
  },
  {
    number: "2",
    title: "High DNA fragmentation (DFI over 25%)",
    description:
      "Linked to unexplained infertility and repeated pregnancy loss. See ",
    linkText: "Sperm DNA Fragmentation Test",
    linkHref: "/treatments",
    suffix: ".",
  },
  {
    number: "3",
    title: "Azoospermia (zero sperm count)",
    description:
      "Obstructive and non-obstructive cases, with surgical retrieval. See ",
    linkText: "Azoospermia Treatment",
    linkHref: "/treatments",
    suffix: ".",
  },
  {
    number: "4",
    title: "Varicocele",
    description:
      "Swollen scrotal veins that overheat the testes and damage sperm production.",
  },
  {
    number: "5",
    title: "Sexual or ejaculatory problems",
    description:
      "Retrograde ejaculation, anejaculation or erectile difficulty that prevents timed intercourse.",
  },
];

export default function MaleFertilityWorkup() {
  return (
    <TreatmentSection>
        {/* Eyebrow & Title */}
        <TreatmentSectionHeader
          eyebrow="Who needs a workup"
          title={<>Who Needs a Dedicated
            <br className="hidden sm:inline" /> Male Fertility Workup?</>}
        />

        {/* Cards Grid */}
        <Stagger delay={0.06} className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
          {workupItems.map((item, idx) => (
            <StaggerItem key={idx}>
              <NumberedCard {...item} />
            </StaggerItem>
          ))}
        </Stagger>
      </TreatmentSection>
  );
}

