"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  RelatedTreatmentCompactCard
} from "@/components/ui/treatment";
interface RelatedTreatmentItem {
  title: string;
  subtitle: string;
  href: string;
}

const treatments: RelatedTreatmentItem[] = [
  {
    title: "Frozen Embryo Transfer",
    subtitle: "Treatment page",
    href: "/treatments",
  },
  {
    title: "Sperm DNA Fragmentation",
    subtitle: "Treatment page",
    href: "/sperm-dna-fragmentation-test",
  },
  {
    title: "Hysteroscopy",
    subtitle: "Treatment page",
    href: "/hysteroscopy-treatment",
  },
  {
    title: "Endometriosis",
    subtitle: "Treatment page",
    href: "/endometriosis-fertility-treatment",
  },
  {
    title: "Fallopian Tube Blockage",
    subtitle: "Treatment page",
    href: "/fallopian-tube-blockage-treatment",
  },
  {
    title: "Recurrent Implantation Failure",
    subtitle: "Treatment page",
    href: "/recurrent-implantation-failure-rif",
  },
  {
    title: "Azoospermia",
    subtitle: "Treatment page",
    href: "/azoospermia-treatment",
  },
  {
    title: "Low Sperm Count",
    subtitle: "Treatment page",
    href: "/low-sperm-count-oligospermia",
  },
  {
    title: "Surgical Sperm Retrieval",
    subtitle: "Treatment page",
    href: "/surgical-sperm-retrieval-tesa-pesa",
  },
  {
    title: "Sperm Freezing",
    subtitle: "Treatment page",
    href: "/treatments",
  },
  {
    title: "Embryo Freezing",
    subtitle: "Treatment page",
    href: "/treatments",
  },
  {
    title: "Oncofertility",
    subtitle: "Treatment page",
    href: "/treatments",
  },
];

export default function RecurrentMiscarriageRelatedTreatments() {
  return (
    <TreatmentSection>
        {/* Eyebrow & Title */}
        <TreatmentSectionHeader
          eyebrow="Treatments"
          title="Related Fertility Treatments"
        />

        {/* 12 Cards Grid (3 columns on lg, 2 on sm, 1 on mobile) */}
        <Stagger delay={0.03} className="mt-7 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
          {treatments.map((item, idx) => (
            <StaggerItem key={idx}>
            <RelatedTreatmentCompactCard title={item.title} href={item.href} />
          </StaggerItem>
          ))}
        </Stagger>
      </TreatmentSection>
  );
}

