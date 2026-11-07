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
      title: "Recurrent implantation failure",
      description: (
        <>
          If you have had 2 or more failed IVF embryo transfer cycles with good
          quality blastocysts. Learn more about{" "}
          <Link
            href="/recurrent-implantation-failure-rif"
            className="font-medium text-blue underline underline-offset-2 transition-colors hover:text-rose"
          >
            recurrent implantation failure
          </Link>{" "}
          here
        </>
      ),
    },
    {
      number: "2",
      title: "Failed euploid transfers",
      description: "If you have failed transfers of Euploid Embryos",
    },
    {
      number: "3",
      title: "Limited embryos",
      description:
        "If you only have one blastocyst to transfer due to diminished ovarian reserve or older age and want to optimise your chance of pregnancy.",
    },
    {
      number: "4",
      title: "Suspected displaced window",
      description:
        "In case your window is suspected to be shifted due to adenomyosis, uterine anomalies or hormonal derangement that require higher dose of progesterone.",
    },
  ];

const checklist = [
  "We use a mock HRT cycle with increasing doses of estradiol valerate to replicate your future transfer cycle",
  "Endometrial lining thickness of 7.5mm or more should be seen before starting progesterone",
  "Start progesterone at a specific time and biopsy your uterus at 5 days post progesterone (P+5) also known as 120 hours",
  "Test for Chronic Endometritis at the time of ERA biopsy as presence of inflammatory cells can give us incorrect results.",
  "Screening for HIV, Hepatitis B surface antigen, Hepatitis C and VDRL as per the guidelines laid out by ART Act.",
];

export default function EraIndicationsAndChecklist() {
  return (
    <>
      <TreatmentSection>
        <TreatmentSectionHeader
          eyebrow="Who should get ERA test?"
          title="Indications: Who Needs an ERA Test?"
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
          eyebrow="What we look for prior to ERA test"
          title="Diagnostic Checklist: Mock Cycle Requirements"
          subtitle="You will need to go through a mock cycle which resembles your future transfer cycle to get an accurate result."
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
