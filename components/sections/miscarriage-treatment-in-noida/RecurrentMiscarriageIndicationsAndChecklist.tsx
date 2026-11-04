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
      title: "2 or more miscarriages",
      description: "If you have lost a pregnancy before 20 weeks twice.",
    },
    {
      number: "2",
      title: "Loss of heartbeat after early scan",
      description: "Blighted ovum or loss of heart beat in subsequent scan.",
    },
    {
      number: "3",
      title: "Over 35 years of age",
      description:
        "Recurrent miscarriages due to chromosomal abnormality of fetus.",
    },
    {
      number: "4",
      title: "Failures of implantation with early miscarriages",
      description: (
        <>
          Biochemical pregnancies or early pregnancy losses. Read more on{" "}
          <Link
            href="/recurrent-implantation-failure-rif"
            className="font-medium text-blue underline underline-offset-2 hover:text-blue-dark"
          >
            Recurrent Implantation Failures
          </Link>
          .
        </>
      ),
    },
    {
      number: "5",
      title:
        "Previous history of clotting disorder or Autoimmune disease",
      description:
        "Systemic lupus erythematosus or previous Deep Vein Thrombosis.",
    },
  ];

const checklist: ReactNode[] = [
  <>
    Both partners are sent for <strong>Karyotyping</strong> to see if there is a
    Balanced or Robertsonian Translocation.
  </>,
  <>
    Uterine evaluation: <strong>3D Saline Sonogram</strong> or{" "}
    <Link
      href="/hysteroscopy-treatment"
      className="font-medium text-blue underline underline-offset-2 hover:text-blue-dark"
    >
      Diagnostic Hysteroscopy
    </Link>{" "}
    to identify any Septum, Fibroid, Polyp or Adhesions.
  </>,
  <>
    Blood work for Clotting:{" "}
    <strong>
      Antiphospholipid profile, Lupus Anticoagulant, Anti-cardiolipin Antibody,
      Anti-Beta2 glycoprotein-1, Protein C &amp; S Deficiency, Factor V Leiden.
    </strong>
  </>,
  <>
    Profile for Thyroid and Diabetes:{" "}
    <strong>
      TSH, Anti-TPO antibodies, HbA1c, Prolactin and Progesterone levels in
      luteal phase.
    </strong>
  </>,
  <>
    Send partner for a{" "}
    <Link
      href="/sperm-dna-fragmentation-test"
      className="font-medium text-blue underline underline-offset-2 hover:text-blue-dark"
    >
      Sperm DNA Fragmentation Test
    </Link>{" "}
    to evaluate contribution from male.
  </>,
];

export default function RecurrentMiscarriageIndicationsAndChecklist() {
  return (
    <TreatmentSection>
      <div className="mb-14 sm:mb-16 lg:mb-20">
        <TreatmentSectionHeader
          eyebrow="Know more about this condition"
          title="Causes of Recurrent Miscarriage : When do you need an evaluation?"
        />

        <Stagger
          delay={0.05}
          className="mt-7 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          {indications.map((item) => (
            <StaggerItem key={item.number} className="h-full">
              <NumberedCard {...item} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <div>
        <TreatmentSectionHeader
          eyebrow="Evaluation"
          title="Tests we perform : 5 Pillar Investigation for Recurrent Miscarriage"
          subtitle="We investigate under 5 heads to rule out all correctable causes of miscarriage."
        />

        <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
          {checklist.map((item, idx) => (
            <Reveal key={idx} variant="fadeUp" delay={idx * 0.04}>
              <ChecklistRow>{item}</ChecklistRow>
            </Reveal>
          ))}
        </div>
      </div>
    </TreatmentSection>
  );
}
