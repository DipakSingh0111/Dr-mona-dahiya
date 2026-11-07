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
    title: "If you are over 37 years of age",
    description:
      "The zona gets thicker and less flexible as you get older, so the embryo needs assistance to hatch.",
  },
  {
    number: "2",
    title: "Failed implantations",
    description: (
      <>
        You have had failed transfers with previous good-quality embryos. Read
        more on{" "}
        <Link
          href="/recurrent-implantation-failure-rif"
          className="font-semibold text-blue underline transition-colors hover:text-rose"
        >
          Recurrent Implantation Failure
        </Link>
        .
      </>
    ),
  },
  {
    number: "3",
    title: "After frozen embryo transfer",
    description:
      "The chemicals used during the freezing process can make the shell stiff.",
  },
  {
    number: "4",
    title: "Elevated FSH or low AMH",
    description:
      "May alter the structure of the zona pellucida and make it thicker.",
  },
  {
    number: "5",
    title: "Thick zona pellucida (over 15 to 18 µm)",
    description:
      "The zona can be measured under the microscope by your embryologist.",
  },
  {
    number: "6",
    title: "If doing preimplantation genetic testing (PGT)",
    description:
      "The laser can make an opening in a Day 3 or Day 5 embryo so that the blastomeres can herniate out for biopsy.",
  },
];

const checklist: { title?: string; text: ReactNode }[] = [
  {
    title: "Zona measurement",
    text: "thickness of the zona is measured in micrometres from different axes using a phase-contrast microscope.",
  },
  {
    title: "Embryo development",
    text: "the embryo should have a healthy cell number, with intact cells and no multinucleated cells on Day 3 or Day 5.",
  },
  {
    title: "Endometrium thickness",
    text: "a trilaminar endometrium over 8 mm, synced to the hatching of the embryo, which occurs earlier than normal.",
  },
  {
    title: "Uterine cavity",
    text: (
      <>
        no fluid collection or pathology inside the uterine cavity, which can be
        diagnosed with{" "}
        <Link
          href="/hysteroscopy-treatment"
          className="font-semibold text-blue underline transition-colors hover:text-rose"
        >
          Diagnostic Hysteroscopy
        </Link>
        .
      </>
    ),
  },
  {
    text: (
      <span className="font-semibold text-ink">
        Infection screening of both male and female partners, as mandated by the
        Indian ART Act.
      </span>
    ),
  },
];

export function LahIndications() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="About the procedure"
        title="Who Needs Laser Assisted Hatching?"
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
    </TreatmentSection>
  );
}

export function LahChecklist() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Prior to laser assisted hatching"
        title="Diagnostic Work-up Before Laser Assisted Hatching"
        subtitle="Laser assisted hatching should only be considered after checking the following:"
      />

      <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:gap-3.5">
        {checklist.map((item, idx) => (
          <Reveal key={idx} variant="fadeUp" delay={idx * 0.04}>
            {item.title ? (
              <ChecklistRow title={item.title} text={item.text} />
            ) : (
              <ChecklistRow>{item.text}</ChecklistRow>
            )}
          </Reveal>
        ))}
      </div>
    </TreatmentSection>
  );
}

export default function LahIndicationsAndChecklist() {
  return (
    <>
      <LahIndications />
      <LahChecklist />
    </>
  );
}
