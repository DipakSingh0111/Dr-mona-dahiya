"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  RelatedTreatmentCard,
} from "@/components/ui/treatment";

const tubalRelatedRow1 = [
  {
    title: "Endometriosis & Adenomyosis Fertility Treatment",
    subtitle: "Pain relief and fertility planning together",
    href: "/endometriosis-fertility-treatment",
  },
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
];

const tubalRelatedRow2 = {
  title: "Recurrent Implantation Failure (RIF)",
  subtitle: "A structured second look after failed transfers",
  href: "/recurrent-implantation-failure-rif",
};

export default function FallopianTubesRelatedTreatments() {
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
        {tubalRelatedRow1.map((item) => (
          <StaggerItem key={item.href}>
            <RelatedTreatmentCard {...item} />
          </StaggerItem>
        ))}
      </Stagger>

      <div className="mt-4 grid grid-cols-1 sm:mt-5 sm:grid-cols-2 lg:grid-cols-3">
        <Reveal variant="fadeUp" delay={0.1}>
          <RelatedTreatmentCard {...tubalRelatedRow2} />
        </Reveal>
      </div>
    </TreatmentSection>
  );
}
