"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  NumberedCard
} from "@/components/ui/treatment";
const indications: { number: string; title: string; description: ReactNode }[] =
  [
    {
      number: "1",
      title: "Refractory thin endometrium (under 7 mm)",
      description:
        "A lining that stays below 7 mm despite maximum estradiol, sildenafil or pentoxifylline.",
    },
    {
      number: "2",
      title: "Recurrent implantation failure",
      description: (
        <>
          Several good blastocysts that did not implant. See{" "}
          <Link
            href="/recurrent-implantation-failure-rif"
            className="font-medium text-blue underline underline-offset-2 hover:text-white"
          >
            Recurrent Implantation Failure
          </Link>
          .
        </>
      ),
    },
    {
      number: "3",
      title: "Scanty periods after Asherman's syndrome",
      description:
        "Damaged basal lining after curettage, adhesion surgery or genital tuberculosis.",
    },
    {
      number: "4",
      title: "Poor ovarian response or POI",
      description: (
        <>
          AMH below 0.5 ng/mL and AFC below 3, seeking ovarian rejuvenation. See{" "}
          <Link
            href="/best-low-amh-treatment-in-noida"
            className="font-medium text-blue underline underline-offset-2 hover:text-white"
          >
            Low AMH Treatment
          </Link>
          .
        </>
      ),
    },
  ];

const checklist = [
  "Endometrial Doppler: transvaginal scan of blood flow under the lining (PI and RI) and the trilaminar pattern.",
  "Chronic endometritis screen: CD138 biopsy to rule out inflammation before growth factors are placed.",
  "Blood count and clotting: platelets of at least 1,50,000/µL with normal PT/INR and APTT.",
  "Hormones: baseline estradiol (E2) and progesterone (P4).",
  "Infection screening (HIV I & II, HBsAg, HCV, VDRL), as required under the Indian ART Act.",
];

export default function PrpIndicationsAndChecklist() {
  return (
    <TreatmentSection>
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="Clinical indications"
          title="Indications: Who Needs PRP Therapy in IVF?"
        />

          <Stagger
            delay={0.05}
            className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5"
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
          title="Diagnostic Checklist: Pre-PRP Evaluation"
          subtitle="These checks confirm PRP is safe and likely to help before any instillation."
        />

          <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
            {checklist.map((item, idx) => (
              <Reveal key={item} variant="fadeUp" delay={idx * 0.04}>
                <div className="flex items-center gap-3.5 rounded-xl border border-[#fde2ec] bg-white px-4 py-3.5 backdrop-blur-md transition-all duration-200 hover:border-blue/50 hover:bg-[#fff0f5] sm:px-5 sm:py-4">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-blue/20 text-blue ring-1 ring-blue/40 sm:size-6">
                    <FaCheck className="size-2.5 sm:size-3" />
                  </span>
                  <p className="text-[13.5px] leading-relaxed text-black sm:text-[14.5px]">
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </TreatmentSection>
  );
}
