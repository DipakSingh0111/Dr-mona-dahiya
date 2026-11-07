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
      title: "Endometrium < 7mm not responding to treatment",
      description:
        "Lining thickness is less than 7 mm with max dose of Estradiol, Sildenafil, Pentoxifylline.",
    },
    {
      number: "2",
      title: "Implantation failure",
      description: (
        <>
          Multiple good quality blastocysts failed to implant. Learn more about{" "}
          <Link
            href="/recurrent-implantation-failure-rif"
            className="font-medium text-blue underline underline-offset-2 transition-colors hover:text-rose"
          >
            Recurrent Implantation Failure
          </Link>
        </>
      ),
    },
    {
      number: "3",
      title: "Light periods after Ashermans Syndrome",
      description:
        "Basal layer damage due to D&C / Ashermans surgery / Genital TB.",
    },
    {
      number: "4",
      title: "Diminished Ovarian Reserve / POI",
      description: (
        <>
          Have low AMH (&lt;0.5 ng/ml) and AFC (&lt;3) looking for ovarian
          augmentation. Learn more about{" "}
          <Link
            href="/best-low-amh-treatment-in-noida"
            className="font-medium text-blue underline underline-offset-2 transition-colors hover:text-rose"
          >
            Low AMH
          </Link>
        </>
      ),
    },
  ];

const checklist = [
  "Doppler of Endometrium – Blood flow below the lining and trilaminar pattern seen on trans vaginal ultrasound (PI and RI)",
  "Chronic endometritis – CD138 should be negative",
  "Platelets >1.5 Lakh with normal PT INR and APTT",
  "Estradiol and Progesterone level",
  "HIV 1&2, Hep B, Hep C, VDRL as mandated by Indian ART Act",
];

export default function PrpIndicationsAndChecklist() {
  return (
    <>
      <TreatmentSection>
        <TreatmentSectionHeader
          eyebrow="PRP Indications in IVF"
          title="Indications: Who Needs PRP Therapy in IVF?"
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
          eyebrow="Checklist"
          title="Diagnostic Checklist: Pre-PRP Evaluation"
          subtitle="Do these tests prior to PRP."
        />

        <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
          {checklist.map((item, idx) => (
            <Reveal key={item} variant="fadeUp" delay={idx * 0.04}>
              <ChecklistRow>
                <span>{item}</span>
              </ChecklistRow>
            </Reveal>
          ))}
        </div>
      </TreatmentSection>
    </>
  );
}
