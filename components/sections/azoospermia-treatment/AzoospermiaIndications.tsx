"use client";

import Image from "next/image";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  NumberedCard,
} from "@/components/ui/treatment";

const indications = [
  {
    number: "1",
    title: "Zero sperms on semen analysis",
    description:
      "If sperm count is found to be zero on 2 separate samples (after centrifugation).",
  },
  {
    number: "2",
    title: "Past history of infection/surgery/injury",
    description:
      "Due to Mumps or previous surgeries/injuries to testis or vas deferens.",
  },
  {
    number: "3",
    title: "No or blocked vas deferens",
    description: "Vas deferens may not be present or blocked.",
  },
  {
    number: "4",
    title: "Imbalance in hormone levels",
    description:
      "If the levels of FSH/LH are abnormal due to hormonal deficiency.",
  },
  {
    number: "5",
    title: "Genetics",
    description: "Karyotyping or presence of Micro deletion.",
  },
];

export default function AzoospermiaIndications() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="About Azoospermia"
        title={
          <>
            Indications: Who Needs an Azoospermia
            <br className="hidden sm:inline" /> Evaluation?
          </>
        }
        subtitle="Patients with the following need to see an Azoospermia expert."
      />

      <Stagger
        delay={0.05}
        className="mt-7 grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5"
      >
        {indications.map((item) => (
          <StaggerItem key={item.number} className="h-full">
            <NumberedCard {...item} />
          </StaggerItem>
        ))}

        <StaggerItem className="h-full">
          <div className="card-highlight relative flex h-full min-h-[210px] w-full items-center justify-center overflow-hidden rounded-2xl border border-[#fde2ec] bg-white p-1.5 shadow-[0_10px_30px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f8b4cb] hover:shadow-[0_18px_40px_rgba(232,62,116,0.12)] sm:min-h-[225px] sm:p-2">
            <div className="relative h-full min-h-[195px] w-full sm:min-h-[210px]">
              <Image
                src="/shared-gallery/azoospermia.jpeg"
                alt="Comparison of Normal, Oligospermia and Azoospermia"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-contain object-center"
              />
            </div>
          </div>
        </StaggerItem>
      </Stagger>
    </TreatmentSection>
  );
}
