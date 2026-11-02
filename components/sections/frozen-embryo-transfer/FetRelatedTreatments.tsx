"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  RelatedTreatmentCard
} from "@/components/ui/treatment";
const relatedTreatments = [
  {
    title: "Embryo Freezing & Banking",
    subtitle: "Bank your best embryos for later.",
    href: "/embryo-cryopreservation",
  },
  {
    title: "Recurrent Implantation Failure (RIF)",
    subtitle: "A structured second look after failed transfers.",
    href: "/recurrent-implantation-failure-rif",
  },
  {
    title: "Diagnostic & Operative Hysteroscopy",
    subtitle: "See inside the uterus, treat in the same sitting.",
    href: "/hysteroscopy-treatment",
  },
  {
    title: "Endometriosis & Adenomyosis Fertility Treatment",
    subtitle: "Pain relief and fertility planning together.",
    href: "/endometriosis-fertility-treatment",
  },
];

export default function FetRelatedTreatments() {
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
