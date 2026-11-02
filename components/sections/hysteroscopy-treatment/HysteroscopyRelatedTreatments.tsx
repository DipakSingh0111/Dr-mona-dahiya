"use client";

import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  RelatedTreatmentCard,
} from "@/components/ui/treatment";

const relatedTreatments = [
  {
    title: "Recurrent Implantation Failure (RIF)",
    subtitle: "A structured second look after failed transfers.",
    href: "/recurrent-implantation-failure-rif",
  },
  {
    title: "Frozen Embryo Transfer (FET)",
    subtitle: "Vitrified embryos, prepared lining, timed transfer.",
    href: "/frozen-embryo-transfer",
  },
  {
    title: "Endometriosis & Adenomyosis Fertility Treatment",
    subtitle: "Pain relief and fertility planning together.",
    href: "/endometriosis-fertility-treatment",
  },
  {
    title: "Fallopian Tube Blockage",
    subtitle: "Testing, repair options and IVF planning.",
    href: "/fallopian-tube-blockage-treatment",
  },
];

export default function HysteroscopyRelatedTreatments() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Related care"
        title="Related treatments"
      />
      <Stagger
        delay={0.05}
        className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-2"
      >
        {relatedTreatments.map((item) => (
          <StaggerItem key={item.title}>
            <RelatedTreatmentCard {...item} />
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}
