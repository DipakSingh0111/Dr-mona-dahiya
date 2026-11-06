"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  RelatedTreatmentCard,
} from "@/components/ui/treatment";

const relatedRow1 = [
  {
    title: "Sperm DNA Fragmentation Index (DFI)",
    subtitle: "Look beyond the routine semen report",
    href: "/sperm-dna-fragmentation-test",
  },
  {
    title: "Azoospermia (Zero Sperm Count)",
    subtitle: "Zero sperm in the semen does not always mean zero sperm.",
    href: "/azoospermia-treatment",
  },
  {
    title: "Semen & Sperm Freezing",
    subtitle: "Keep your options open",
    href: "/semen-sperm-freezing",
  },
];

const relatedRow2 = {
  title: "Surgical Sperm Retrieval (TESA/PESA/Micro-TESE)",
  subtitle: "Getting sperm directly from the testis or epididymis",
  href: "/surgical-sperm-retrieval-tesa-pesa",
};

export default function LowSpermRelatedTreatments() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Related care"
        title="Related treatments"
      />

      <Stagger
        delay={0.05}
        className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5"
      >
        {relatedRow1.map((item) => (
          <StaggerItem key={item.href}>
            <RelatedTreatmentCard {...item} />
          </StaggerItem>
        ))}
      </Stagger>

      <div className="mt-4 grid grid-cols-1 sm:mt-5 sm:grid-cols-2 lg:grid-cols-3">
        <Reveal variant="fadeUp" delay={0.1}>
          <RelatedTreatmentCard {...relatedRow2} />
        </Reveal>
      </div>
    </TreatmentSection>
  );
}
