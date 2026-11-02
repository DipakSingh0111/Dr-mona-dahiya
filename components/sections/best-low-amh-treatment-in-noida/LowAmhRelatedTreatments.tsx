"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  RelatedTreatmentCompactCard
} from "@/components/ui/treatment";
const relatedTreatments = [
  { title: "Frozen Embryo Transfer", href: "/treatments" },
  { title: "Sperm DNA Fragmentation", href: "/treatments" },
  { title: "Hysteroscopy", href: "/treatments" },
  { title: "Endometriosis", href: "/treatments" },
  { title: "Fallopian Tube Blockage", href: "/treatments" },
  { title: "Recurrent Implantation Failure", href: "/treatments" },
  { title: "Azoospermia", href: "/treatments" },
  { title: "Low Sperm Count", href: "/treatments" },
  { title: "Surgical Sperm Retrieval", href: "/treatments" },
  { title: "Sperm Freezing", href: "/treatments" },
  { title: "Embryo Freezing", href: "/treatments" },
  { title: "Oncofertility", href: "/treatments" },
];

export default function LowAmhRelatedTreatments() {
  return (
    <TreatmentSection>
        <TreatmentSectionHeader
          eyebrow="Treatments"
          title="Related Fertility Treatments"
        />

        <Stagger
          delay={0.03}
          className="mt-7 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4"
        >
          {relatedTreatments.map((item) => (
            <StaggerItem key={item.title}>
            <RelatedTreatmentCompactCard {...item} />
          </StaggerItem>
          ))}
        </Stagger>
      </TreatmentSection>
  );
}
