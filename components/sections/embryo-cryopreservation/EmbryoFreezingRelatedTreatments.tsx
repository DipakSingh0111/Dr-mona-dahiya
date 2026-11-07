"use client";

import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  RelatedTreatmentCard,
} from "@/components/ui/treatment";

const relatedTreatments = [
  {
    title: "Frozen Embryo Transfer (FET)",
    subtitle: "Vitrified embryos, prepared lining, timed transfer",
    href: "/frozen-embryo-transfer",
  },
  {
    title: "Semen & Sperm Freezing",
    subtitle: "Keep your options open",
    href: "/semen-sperm-freezing",
  },
  {
    title: "Oncofertility (Cancer Fertility Preservation)",
    subtitle: "Protect the chance of a family before treatment begins",
    href: "/oncofertility-cancer-fertility-preservation",
  },
  {
    title: "Recurrent Implantation Failure (RIF)",
    subtitle: "A structured second look after failed transfers",
    href: "/recurrent-implantation-failure-rif",
  },
];

export default function EmbryoFreezingRelatedTreatments() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Related care"
        title="Related treatments"
      />

      <Stagger
        delay={0.05}
        className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
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
