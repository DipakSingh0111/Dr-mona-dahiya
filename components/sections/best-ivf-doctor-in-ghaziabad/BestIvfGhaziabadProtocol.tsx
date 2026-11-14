"use client";

import Image from "next/image";
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
        className="mt-7 grid auto-rows-fr grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
      >
        {steps.map((item) => (
          <StaggerItem
            key={item.number}
            className="h-full min-h-[240px] sm:min-h-[260px]"
          >
            <NumberedCard {...item} />
          </StaggerItem>
        ))}
        <StaggerItem className="h-full min-h-[240px] sm:min-h-[260px]">
          <div className="card-highlight relative h-full min-h-[240px] overflow-hidden rounded-2xl border border-[#fde2ec] bg-white shadow-[0_10px_30px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f8b4cb] hover:shadow-[0_18px_40px_rgba(232,62,116,0.12)] sm:min-h-[260px]">
            <Image
              src="/shared-gallery/best ivf doctor in ghaziabad.jpeg"
              alt="ICSI Fertilization and IVF Treatment in Ghaziabad"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-center"
            />
          </div>
        </StaggerItem>
      </Stagger>
    </TreatmentSection>
  );
}
