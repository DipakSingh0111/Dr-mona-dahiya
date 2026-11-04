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
      title: "Timed natural intercourse",
      description:
        "Couples who want to confirm their exact 24 to 36-hour fertile window.",
    },
    {
      number: "2",
      title: "Ovulation induction",
      description:
        "Women on Letrozole, clomiphene or low-dose injections, so doses can be adjusted and twins avoided.",
    },
    {
      number: "3",
      title: "IUI timing",
      description: (
        <>
          Insemination 36 hours after trigger. See{" "}
          <Link
            href="/best-iui-doctor-in-noida"
            className="font-medium text-blue underline underline-offset-2 hover:text-white"
          >
            IUI Treatment
          </Link>
          .
        </>
      ),
    },
    {
      number: "4",
      title: "PCOS",
      description: (
        <>
          Spotting slow growth, follicle arrest or luteinised unruptured follicle (LUF).
          See{" "}
          <Link
            href="/best-pcos-pcod-treatment-centre-in-noida"
            className="font-medium text-blue underline underline-offset-2 hover:text-white"
          >
            PCOS Treatment
          </Link>
          .
        </>
      ),
    },
    {
      number: "5",
      title: "Luteal phase problems and thin lining",
      description: "Checking the follicle and lining grow in step.",
    },
  ];

const checklist = [
  {
    title: "Lead follicle size",
    text: "average diameter, growing 1.5 to 2 mm a day.",
  },
  {
    title: "Endometrial thickness and pattern",
    text: "total thickness and the trilaminar (triple-line) appearance.",
  },
  {
    title: "Follicle blood flow",
    text: "colour Doppler, with 75% or more ring coverage suggesting maturity.",
  },
  {
    title: "Signs of ovulation",
    text: "a collapsed follicle, irregular edges and fluid in the pouch of Douglas.",
  },
];

export default function FollicularIndicationsAndChecklist() {
  return (
    <TreatmentSection>
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="Clinical breakdown"
          title="Indications: Who Needs Follicular Tracking?"
        />

          <Stagger
            delay={0.05}
            className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
          >
            {indications.map((item) => (
              <StaggerItem key={item.number}>
              <NumberedCard {...item} />
            </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div>
          <TreatmentSectionHeader
          eyebrow="Before treatment"
          title="What Is Checked at Every Scan?"
          subtitle="Each 5 to 10-minute scan records 4 things."
        />

          <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
            {checklist.map((item, idx) => (
              <Reveal key={item.title} variant="fadeUp" delay={idx * 0.04}>
                <ChecklistRow>
                  <strong className="font-semibold text-black">{item.title}:</strong>{" "}
                  {item.text}
                </ChecklistRow>
              </Reveal>
            ))}
          </div>
        </div>
      </TreatmentSection>
  );
}
