"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  RelatedTreatmentCard
} from "@/components/ui/treatment";
const relatedTreatments = [
  {
    title: "Azoospermia (Zero Sperm Count)",
    subtitle: "Zero sperm in the semen does not always mean zero sperm",
    href: "/azoospermia-treatment",
  },
  {
    title: "Low Sperm Count & Motility (OATS)",
    subtitle: "Improve what can be improved, then pick the right ART",
    href: "/low-sperm-count-oligospermia",
  },
  {
    title: "Semen & Sperm Freezing",
    subtitle: "Keep your options open",
    href: "/semen-sperm-freezing",
  },
  {
    title: "Sperm DNA Fragmentation Index (DFI)",
    subtitle: "Look beyond the routine semen report",
    href: "/sperm-dna-fragmentation-test",
  },
];

export default function SurgicalSpermRetrievalRelatedTreatments() {
  return (
    <TreatmentSection>
        <TreatmentSectionHeader
          eyebrow="Related care"
          title="Related treatments"
        />

        <Stagger
          delay={0.05}
          className="mt-7 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          {relatedTreatments.map((item) => (
            <StaggerItem key={item.title} className="h-full">
              <RelatedTreatmentCard {...item} />
            </StaggerItem>
          ))}
        </Stagger>
      </TreatmentSection>
  );
}
