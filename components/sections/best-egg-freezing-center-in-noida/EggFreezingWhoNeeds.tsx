"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  NumberedCard,
} from "@/components/ui/treatment";

const items: { number: string; title: string; description: ReactNode }[] = [
  {
    number: "1",
    title: "Young women wanting to delay pregnancy",
    description:
      "Most women come to us between 28 and 35 years of age wanting to store their better quality eggs for when they decide to start a family. They may be busy completing their degree or career, or have personal reasons.",
  },
  {
    number: "2",
    title: "History of early menopause",
    description:
      "If someone in your family has suffered from early menopause/premature ovarian failure, it is recommended that you consider freezing your eggs.",
  },
  {
    number: "3",
    title: "Advanced Endometriosis",
    description:
      "If you suffer from advanced endometriosis with repeated episodes of chocolate cysts, or have had surgery on your ovary to remove cysts, then you should consider egg freezing.",
  },
  {
    number: "4",
    title: "Chemo or Radiotherapy",
    description: (
      <>
        Certain types of chemo or radiotherapy can damage the eggs. Speak to
        your doctor about starting an{" "}
        <Link
          href="/oncofertility-cancer-fertility-preservation"
          className="font-semibold text-blue underline transition-colors hover:text-rose"
        >
          Oncofertility Program
        </Link>{" "}
        with us prior to your treatment.
      </>
    ),
  },
  {
    number: "5",
    title: "Prefer not to freeze embryos",
    description:
      "If you don't want to store extra embryos during your IVF cycle, you can opt to store your eggs instead.",
  },
];

export default function EggFreezingWhoNeeds() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="What we cover"
        title="Who Needs Egg Freezing?"
      />

      <Stagger
        delay={0.05}
        className="mt-7 grid auto-rows-fr grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
      >
        {items.map((item) => (
          <StaggerItem
            key={item.number}
            className="h-full min-h-[220px] sm:min-h-[240px]"
          >
            <NumberedCard {...item} />
          </StaggerItem>
        ))}
        <StaggerItem className="h-full min-h-[220px] sm:min-h-[240px]">
          <div className="card-highlight relative h-full min-h-[220px] overflow-hidden rounded-2xl border border-[#fde2ec] bg-white shadow-[0_10px_30px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f8b4cb] hover:shadow-[0_18px_40px_rgba(232,62,116,0.12)] sm:min-h-[240px]">
            <Image
              src="/shared-gallery/egg freezing.jpeg"
              alt="Egg Freezing Vitrification and Liquid Nitrogen Cryopreservation"
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
