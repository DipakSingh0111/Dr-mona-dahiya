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

const indications: {
  number: string;
  title: string;
  description: ReactNode;
}[] = [
  {
    number: "1",
    title: "Failed ovaries",
    description: "May be no follicles or early menopause due to surgery or drugs.",
  },
  {
    number: "2",
    title: "Severely low reserve",
    description: "Low AMH less than 0.2 and no response after multiple attempts.",
  },
  {
    number: "3",
    title: "No sperm",
    description: (
      <>
        No sperm after micro TESE. More info - Treating{" "}
        <Link
          href="/azoospermia-treatment"
          className="font-medium text-blue underline underline-offset-2 transition-colors hover:text-rose"
        >
          Azoospermia
        </Link>
      </>
    ),
  },
  {
    number: "4",
    title: "Serious inherited conditions",
    description: "Inborn diseases where PGT-M cannot rule out disease.",
  },
  {
    number: "5",
    title: "Repeated poor egg or embryo quality",
    description:
      "Bad quality eggs or arrested embryos time and again despite using different protocols.",
  },
];

const checklist = [
  "Get eggs/sperm from licensed ART banks. As per indian laws you have to buy eggs from ART banks only.",
  "All donors will be tested for HIV, Hepatitis B & C, VDRL, CMV and Karyotyping and Thalassaemia.",
  "Check lining of uterus using 3D Sonohysterogram or Hysteroscopy.",
  "Prepare the lining of uterus with Estrogens. Aim for endometrial thickness more than 8 mm and trilaminar.",
  "Talk to our counsellor about legal and emotional aspects of using donor gametes. Form will be filled and given to you.",
];

export default function DonorGameteIndicationsAndChecklist() {
  return (
    <TreatmentSection>
      <div className="mb-14 sm:mb-16 lg:mb-20">
        <TreatmentSectionHeader
          eyebrow="Donor Egg / Sperm"
          title="Indications: When Are Donor Gametes Recommended?"
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
          eyebrow="Tests Required"
          title="Diagnostic Checklist: Donor Screening & Recipient Preparation"
          subtitle={
            <>
              Things to check before starting treatment.
              <br />
              All guidelines of National board of ART are followed and as per ART
              (Regulation) Act.
            </>
          }
        />
        <div className="mt-6 grid grid-cols-1 gap-3.5 sm:mt-7 sm:gap-4">
          {checklist.map((item, idx) => (
            <Reveal key={item} variant="fadeUp" delay={idx * 0.04}>
              <ChecklistRow>
                <span>{item}</span>
              </ChecklistRow>
            </Reveal>
          ))}
        </div>
      </div>
    </TreatmentSection>
  );
}
