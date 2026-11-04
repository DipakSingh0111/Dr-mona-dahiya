"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  RelatedTreatmentCompactCard
} from "@/components/ui/treatment";
const relatedTreatments = [
  { title: "Frozen Embryo Transfer", href: "/treatments" },
  { title: "ICSI Treatment", href: "/treatments" },
  { title: "IUI Treatment", href: "/iui-stories" },
  { title: "Low AMH", href: "/best-low-amh-treatment-in-noida" },
  { title: "PCOS Treatment", href: "/best-pcos-pcod-treatment-centre-in-noida" },
  { title: "Endometriosis", href: "/endometriosis-fertility-treatment" },
  { title: "Fallopian Tube Blockage", href: "/fallopian-tube-blockage-treatment" },
  { title: "Male Infertility", href: "/male-infertility-treatment" },
  { title: "Low Sperm Count", href: "/low-sperm-count-oligospermia" },
  { title: "Azoospermia", href: "/azoospermia-treatment" },
  { title: "Sperm DNA Fragmentation", href: "/sperm-dna-fragmentation-test" },
  { title: "Recurrent Implantation Failure", href: "/recurrent-implantation-failure-rif" },
];

export default function IvfRelatedTreatments() {
  return (
    <TreatmentSection>
        <TreatmentSectionHeader
          eyebrow="Treatments"
          title="Related Fertility Treatments"
        />

        <Stagger
          delay={0.03}
          className="mt-7 grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3"
        >
          {relatedTreatments.map((item) => (
            <StaggerItem key={item.title}>
            <RelatedTreatmentCompactCard {...item} />
          </StaggerItem>
          ))}
        </Stagger>
      </TreatmentSection>
  );
}
