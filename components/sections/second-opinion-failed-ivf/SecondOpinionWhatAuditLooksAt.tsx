"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  CostFactorCard,
} from "@/components/ui/treatment";

type AuditGroup = {
  groupTitle: string;
  cards: {
    title: string;
    description: ReactNode;
  }[];
};

const groups: AuditGroup[] = [
  {
    groupTitle: "Assess Embryo and Sperm",
    cards: [
      {
        title: "What stage did your embryos reach?",
        description:
          "Did your embryos stop dividing on day 3 or make it to day 5 blastocyst stage?",
      },
      {
        title: "Sperm DNA Fragmentation Index",
        description: (
          <>
            Get a test done here. Click{" "}
            <Link
              href="/sperm-dna-fragmentation-test"
              className="font-medium text-blue underline underline-offset-2 transition-colors hover:text-rose"
            >
              Sperm DNA Fragmentation Test
            </Link>
            .
          </>
        ),
      },
      {
        title: "Were your embryos aneuploidy checked?",
        description: "If you did a PGT-A tell us the results.",
      },
      {
        title: "MII rate and irregular eggs",
        description:
          "What was your MII rate and did you notice any irregular eggs?",
      },
    ],
  },
  {
    groupTitle: "Uterus and Endometrium",
    cards: [
      {
        title: "Uterine cavity assessment",
        description: (
          <>
            Through 3D sonography/
            <Link
              href="/hysteroscopy-treatment"
              className="font-medium text-blue underline underline-offset-2 transition-colors hover:text-rose"
            >
              Hysteroscopy
            </Link>{" "}
            if you have any minor defects like septum.
          </>
        ),
      },
      {
        title: "Do you have chronic endometritis?",
        description: "Tested by doing a biopsy CD 138.",
      },
      {
        title: "Is your window of implantation closed?",
        description: (
          <>
            Do you need to do an{" "}
            <Link
              href="/endometrial-receptivity-analysis-era-test-in-noida"
              className="font-medium text-blue underline underline-offset-2 transition-colors hover:text-rose"
            >
              ERA test
            </Link>
            ?
          </>
        ),
      },
      {
        title: "Endometrial thickness is < 7 mm?",
        description: (
          <>
            Consider doing{" "}
            <Link
              href="/platelet-rich-plasma-prp-ivf-treatment-in-noida"
              className="font-medium text-blue underline underline-offset-2 transition-colors hover:text-rose"
            >
              PRP Therapy
            </Link>
            .
          </>
        ),
      },
    ],
  },
  {
    groupTitle: "Hormonal Imbalance",
    cards: [
      {
        title: "Any progesterone elevation on day of trigger?",
        description: "Serum progesterone >1.5 ng/ml.",
      },
      {
        title: "Which IVF protocol were you put on?",
        description: "Antagonist/ Flare/ DuoStim.",
      },
      {
        title: "Trigger and luteal support",
        description:
          "Did you use appropriate trigger? And were you given sufficient luteal phase support?",
      },
      {
        title: "Thyroid or prolactin imbalances",
        description: "Any thyroid or prolactin imbalances?",
      },
    ],
  },
];

export default function SecondOpinionWhatAuditLooksAt() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Root-cause framework"
        title="What a Failed IVF Audit Looks At"
        subtitle="During your audit we will assess:"
      />

      <div className="mt-8 space-y-10 sm:space-y-12">
        {groups.map((grp) => (
          <div key={grp.groupTitle}>
            <h3 className="font-serif border-b border-rose/20 pb-2.5 text-[1.15rem] font-semibold text-ink sm:text-[1.25rem]">
              {grp.groupTitle}
            </h3>

            <Stagger
              delay={0.05}
              className="mt-5 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
            >
              {grp.cards.map((card) => (
                <StaggerItem key={card.title} className="h-full">
                  <CostFactorCard {...card} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        ))}
      </div>
    </TreatmentSection>
  );
}
