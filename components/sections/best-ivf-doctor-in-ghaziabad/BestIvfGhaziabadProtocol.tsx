"use client";

import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  NumberedCard,
} from "@/components/ui/treatment";

const steps = [
  {
    number: "1",
    title: "Work up",
    description:
      "Blood tests in both partners, Ultrasound of uterus and old file review.",
  },
  {
    number: "2",
    title: "Stimulation",
    description:
      "Medicines are given based on your ovarian reserve. Scans and blood tests are performed periodically.",
  },
  {
    number: "3",
    title: "Egg collection and Sperm sample",
    description:
      "Eggs are collected under USG guidance in a quick procedure. Sperm sample is processed on the same day.",
  },
  {
    number: "4",
    title: "Fertilization",
    description:
      "Eggs and sperm are combined. We either do ICSI or conventional fertilization. Embryos are cultured till blastocyst stage.",
  },
  {
    number: "5",
    title: "Embryo transfer",
    description:
      "The best embryo is selected and transferred into your uterus or we can freeze and transfer later if needed.",
  },
  {
    number: "6",
    title: "Follow up",
    description:
      "We will give you support medications and do a pregnancy test to decide next course of action.",
  },
];

export default function BestIvfGhaziabadProtocol() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Treatment Procedure"
        title="Our protocol of IVF treatment in Ghaziabad"
      />

      <Stagger
        delay={0.05}
        className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
      >
        {steps.map((item) => (
          <StaggerItem key={item.number}>
            <NumberedCard {...item} />
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}
