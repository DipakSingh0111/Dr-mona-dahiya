"use client";

import type { ReactNode } from "react";
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
        className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
      >
        {items.map((item) => (
          <StaggerItem key={item.number}>
            <NumberedCard {...item} />
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}
