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

const indications: { number: string; title: string; description: ReactNode }[] = [
  {
    number: "1",
    title: "Elective Single Embryo Transfer (eSET)",
    description:
      "To ensure the best chances of one baby, avoiding multiple pregnancies (twins or triplets).",
  },
  {
    number: "2",
    title: "Failure of Day 3 Embryo Transfer",
    description: (
      <>
        If your Day 2/Day 3 embryos appear normal but do not implant. Read about{" "}
        <Link
          href="/recurrent-implantation-failure-rif"
          className="font-semibold text-blue underline transition-colors hover:text-rose"
        >
          Implantation Failure
        </Link>
        .
      </>
    ),
  },
  {
    number: "3",
    title: "Need for Embryo Testing (PGT-A/PGT-M)",
    description:
      "The blastocyst must be expanded enough for us to biopsy 4–6 outer layer cells, leaving the inner layer cells (baby) intact.",
  },
  {
    number: "4",
    title: "You have 4 or more good quality embryos on Day 3",
    description:
      "By extending embryo culture to Day 5, we know which embryos can go on to develop further.",
  },
  {
    number: "5",
    title: "Day 5 Embryo for Frozen Embryo Transfer",
    description: (
      <>
        Ensuring that the uterine lining is in its window of receptivity. Read
        about{" "}
        <Link
          href="/frozen-embryo-transfer"
          className="font-semibold text-blue underline transition-colors hover:text-rose"
        >
          Frozen Embryo Transfer
        </Link>
        .
      </>
    ),
  },
];

const checklistItems: { title: string; text: ReactNode }[] = [
  {
    title: "Day 3 embryo",
    text: "Ensure that there are at least 6–8 equal cells with minimal (<10%) fragmentation.",
  },
  {
    title: "Endometrium",
    text: "Must measure between 7.5–11 mm, trilaminar, and show good vascularity on TVS.",
  },
  {
    title: "Blood progesterone levels in fresh cycles",
    text: "Must be <1.0–1.5 ng/ml before trigger day to prevent desynchrony of the endometrium.",
  },
  {
    title: "Mock transfer",
    text: "To ensure that there is an easy route through the cervix and prevent any bleeding or contact with the fundus of the uterus on transfer day.",
  },
  {
    title: "Polyps, adhesions or chronic endometritis",
    text: (
      <>
        Can be ruled out with Sonohysterogram/
        <Link
          href="/hysteroscopy-treatment"
          className="font-semibold text-blue underline transition-colors hover:text-rose"
        >
          Hysteroscopy
        </Link>
        .
      </>
    ),
  },
];

export function BlastocystIndications() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="What is Day 5/6 Transfer?"
        title={
          <>
            Who should undergo
            <br className="hidden sm:inline" /> a Day 5/6 Transfer?
          </>
        }
      />

      <Stagger
        delay={0.04}
        className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
      >
        {indications.map((item) => (
          <StaggerItem key={item.number}>
            <NumberedCard {...item} />
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}

export function BlastocystChecklist() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="What to expect before treatment"
        title="Day 5 Blastocyst Transfer Diagnostic Checklist"
        subtitle="We will ensure that the embryo is capable of extended culture, the endometrium is prepared and we can perform a smooth transfer."
      />

      <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:gap-3.5">
        {checklistItems.map((item, idx) => (
          <Reveal key={item.title} variant="fadeUp" delay={idx * 0.04}>
            <ChecklistRow title={item.title} text={item.text} />
          </Reveal>
        ))}
      </div>
    </TreatmentSection>
  );
}

export default function BlastocystIndicationsAndChecklist() {
  return (
    <>
      <BlastocystIndications />
      <BlastocystChecklist />
    </>
  );
}
