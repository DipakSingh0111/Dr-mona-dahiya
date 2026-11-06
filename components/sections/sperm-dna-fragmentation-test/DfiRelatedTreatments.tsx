"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  RelatedTreatmentCard,
} from "@/components/ui/treatment";

const dfiRelatedRow1 = [
  {
    title: "Low Sperm Count & Motility (OATS)",
    subtitle: "Improve what can be improved, then pick the right ART.",
    href: "/low-sperm-count-oligospermia",
  },
  {
    title: "Azoospermia (Zero Sperm Count)",
    subtitle: "Zero sperm in the semen does not always mean zero sperm.",
    href: "/azoospermia-treatment",
  },
  {
    title: "Surgical Sperm Retrieval (TESA/PESA/Micro-TESE)",
    subtitle: "Getting sperm directly from the testis or epididymis.",
    href: "/surgical-sperm-retrieval-tesa-pesa",
  },
];

const dfiRelatedRow2 = {
  title: "Semen & Sperm Freezing",
  subtitle: "Keep your options open.",
  href: "/semen-sperm-freezing",
};

export default function DfiRelatedTreatments() {
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
        {dfiRelatedRow1.map((item) => (
          <StaggerItem key={item.href}>
            <RelatedTreatmentCard {...item} />
          </StaggerItem>
        ))}
      </Stagger>

      <div className="mt-4 grid grid-cols-1 sm:mt-5 sm:grid-cols-2 lg:grid-cols-3">
        <Reveal variant="fadeUp" delay={0.1}>
          <RelatedTreatmentCard {...dfiRelatedRow2} />
        </Reveal>
      </div>
    </TreatmentSection>
  );
}
