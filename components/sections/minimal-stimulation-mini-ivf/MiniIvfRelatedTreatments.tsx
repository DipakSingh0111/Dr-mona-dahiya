"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  RelatedTreatmentCompactCard
} from "@/components/ui/treatment";
const relatedTreatments = [
  { title: "Frozen Embryo Transfer", href: "/frozen-embryo-transfer" },
  { title: "Sperm DNA Fragmentation", href: "/sperm-dna-fragmentation-test" },
  { title: "Hysteroscopy", href: "/treatments" },
  { title: "Endometriosis", href: "/endometriosis-fertility-treatment" },
  { title: "Fallopian Tube Blockage", href: "/fallopian-tube-blockage-treatment" },
  { title: "Recurrent Implantation Failure", href: "/recurrent-implantation-failure-rif" },
  { title: "Azoospermia", href: "/azoospermia-treatment" },
  { title: "Low Sperm Count", href: "/low-sperm-count-oligospermia" },
  { title: "Surgical Sperm Retrieval", href: "/azoospermia-treatment" },
  { title: "Sperm Freezing", href: "/treatments" },
  { title: "Embryo Freezing", href: "/treatments" },
  { title: "Oncofertility", href: "/treatments" },
];

export default function MiniIvfRelatedTreatments() {
  return (
    <TreatmentSection>
        <TreatmentSectionHeader
          eyebrow="Treatments"
          title="Related Fertility Treatments"
        />

        <Stagger
          delay={0.03}
          className="mt-7 grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3"
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
