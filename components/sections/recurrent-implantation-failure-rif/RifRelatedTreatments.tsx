"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  RelatedTreatmentCard,
} from "@/components/ui/treatment";

const rifRelatedRow1 = [
  {
    title: "Diagnostic & Operative Hysteroscopy",
    subtitle: "See inside the uterus, treat in the same sitting",
    href: "/hysteroscopy-treatment",
  },
  {
    title: "Frozen Embryo Transfer (FET)",
    subtitle: "Vitrified embryos, prepared lining, timed transfer",
    href: "/treatments",
  },
  {
    title: "Sperm DNA Fragmentation Index (DFI)",
    subtitle: "Look beyond the routine semen report",
    href: "/sperm-dna-fragmentation-test",
  },
];

const rifRelatedRow2 = {
  title: "Embryo Freezing & Banking",
  subtitle: "Bank your best embryos for later",
  href: "/treatments",
};

export default function RifRelatedTreatments() {
  return (
    <TreatmentSection>
        {/* Eyebrow & Title */}
        <TreatmentSectionHeader
          eyebrow="Related care"
          title="Related treatments"
        />

        {/* Top Row: 3 Cards Grid */}
        <Stagger delay={0.05} className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
          {rifRelatedRow1.map((item, idx) => (
            <StaggerItem key={idx}>
            <RelatedTreatmentCard {...item} />
          </StaggerItem>
          ))}
        </Stagger>

        {/* Bottom Row: 1 Card matching exact 3+1 grid layout on desktop */}
        <div className="mt-4 grid grid-cols-1 sm:mt-5 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal variant="fadeUp" delay={0.1}>
            <RelatedTreatmentCard {...rifRelatedRow2} />
          </Reveal>
        </div>
      </TreatmentSection>
  );
}

