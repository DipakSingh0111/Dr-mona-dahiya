"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  NumberedCard,
  ChecklistRow,
} from "@/components/ui/treatment";

const indications: { number: string; title: string; description: ReactNode }[] =
  [
    {
      number: "1",
      title: "For Intercourse",
      description:
        "To know the perfect 24-36 hours when you can get pregnant by having normal intercourse.",
    },
    {
      number: "2",
      title: "While on ovulation drugs",
      description:
        "To monitor if drugs are working or not. Helps to avoid twin pregnancy as well. You can read more about letrozole/clomiphene/injections.",
    },
    {
      number: "3",
      title: "IUI",
      description: (
        <>
          IUI is done 36 hours after triggering the follicle with hcg injection.
          Read about{" "}
          <Link
            href="/best-iui-doctor-in-noida"
            className="font-medium text-blue underline underline-offset-2 transition-colors hover:text-rose"
          >
            IUI
          </Link>{" "}
          here.
        </>
      ),
    },
    {
      number: "4",
      title: "PCOS",
      description: (
        <>
          Follicles may grow slowly or stop growing. Follicular scan will tell
          you if your follicle is arrested or has developed into a LUF
          (luteinized unruptured follicle). Read more about{" "}
          <Link
            href="/best-pcos-pcod-treatment-centre-in-noida"
            className="font-medium text-blue underline underline-offset-2 transition-colors hover:text-rose"
          >
            PCOS
          </Link>{" "}
          here.
        </>
      ),
    },
    {
      number: "5",
      title: "Luteal phase defects/endometrium too thin",
      description:
        "Will help to see if your endometrium is growing in proportion to your follicle.",
    },
  ];

const checklist = [
  "Size of dominant follicle. We measure the mean diameter and it increases by 1.5-2mm each day.",
  "Thickness of endometrium. We measure overall thickness of endometrium and see if it has a trilaminar (3 line) appearance.",
  "Blood supply to follicle. Using color doppler we assess how much area around the follicle is being supplied with blood. Over 75% area suggests the follicle is matured.",
  "If you have ovulated. A ruptured follicle will have irregular border and free fluid in Pouch of Douglas.",
];

export default function FollicularIndicationsAndChecklist() {
  return (
    <>
      <TreatmentSection>
        <TreatmentSectionHeader
          eyebrow="What is Follicular Scan Used For?"
          title="Indications: Who Needs Follicular Tracking?"
        />

        <Stagger
          delay={0.05}
          className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          {indications.map((item) => (
            <StaggerItem key={item.number} className="h-full">
              <NumberedCard {...item} />
            </StaggerItem>
          ))}
        </Stagger>
      </TreatmentSection>

      <TreatmentSection>
        <TreatmentSectionHeader
          eyebrow="Things we look at during a Follicular Scan"
          title="What Is Checked at Every Scan?"
          subtitle="Each scan takes 5-10 minutes and we look at the following things"
        />

        <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
          {checklist.map((text, idx) => (
            <Reveal key={text} variant="fadeUp" delay={idx * 0.04}>
              <ChecklistRow>
                <span>{text}</span>
              </ChecklistRow>
            </Reveal>
          ))}
        </div>
      </TreatmentSection>
    </>
  );
}
