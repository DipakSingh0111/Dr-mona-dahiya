"use client";

import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  RelatedTreatmentCard,
} from "@/components/ui/treatment";

const treatments = [
  {
    title: "Oncofertility (Cancer Fertility Preservation)",
    subtitle: "Protect the chance of a family before treatment begins.",
    href: "/oncofertility-cancer-fertility-preservation",
  },
  {
    title: "Embryo Freezing & Banking",
    subtitle: "Bank your best embryos for later.",
    href: "/embryo-cryopreservation",
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

export default function SpermFreezingRelatedTreatments() {
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
        {treatments.map((item) => (
          <StaggerItem key={item.title}>
            <RelatedTreatmentCard {...item} />
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}
