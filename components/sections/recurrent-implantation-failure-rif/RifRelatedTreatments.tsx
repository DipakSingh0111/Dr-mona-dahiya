"use client";

import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  RelatedTreatmentCard,
} from "@/components/ui/treatment";

const related = [
  {
    title: "Diagnostic & Operative Hysteroscopy",
    subtitle: "See inside the uterus, treat in the same sitting",
    href: "/hysteroscopy-treatment",
  },
  {
    title: "Frozen Embryo Transfer (FET)",
    subtitle: "Vitrified embryos, prepared lining, timed transfer",
    href: "/frozen-embryo-transfer",
  },
  {
    title: "Sperm DNA Fragmentation Index (DFI)",
    subtitle: "Look beyond the routine semen report",
    href: "/sperm-dna-fragmentation-test",
  },
  {
    title: "Embryo Freezing & Banking",
    subtitle: "Bank your best embryos for later",
    href: "/embryo-cryopreservation",
  },
];

export default function RifRelatedTreatments() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Related care"
        title="Related treatments"
      />

      <Stagger
        delay={0.05}
        className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4"
      >
        {related.map((item) => (
          <StaggerItem key={item.title} className="h-full">
            <RelatedTreatmentCard {...item} />
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}
