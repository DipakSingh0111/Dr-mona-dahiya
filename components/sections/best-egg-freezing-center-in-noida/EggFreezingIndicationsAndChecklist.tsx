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
      title: "Elective (social) fertility preservation",
      description: "For women in their late 20s to mid-30s.",
    },
    {
      number: "2",
      title: "Family history of early menopause",
      description: "Premature ovarian insufficiency.",
    },
    {
      number: "3",
      title: "Severe or progressive endometriosis",
      description: "Recurring chocolate cysts.",
    },
    {
      number: "4",
      title: "Before chemotherapy or radiation",
      description: (
        <>
          Includes care through an{" "}
          <Link
            href="/treatments"
            className="font-medium text-[#93c5fd] underline underline-offset-2 hover:text-white"
          >
            Oncofertility Program
          </Link>
          .
        </>
      ),
    },
    {
      number: "5",
      title: "Preference not to freeze embryos",
      description: "For couples who prefer storing unfertilized eggs.",
    },
  ];

const checklist = [
  "Ovarian reserve: serum AMH and a transvaginal antral follicle count.",
  "Hormones on Day 2 or 3: FSH, LH, estradiol, TSH, and prolactin.",
  "Pelvic ultrasound: checks ovaries for accessibility and rules out cysts.",
  "Viral screening (HIV I & II, HBsAg, HCV, VDRL).",
];

export default function EggFreezingIndicationsAndChecklist() {
  return (
    <TreatmentSection>
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="Clinical breakdown"
          title="Indications: Who Should Consider Egg Freezing?"
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
          title="Diagnostic Checklist: Pre-Freezing Assessment"
          subtitle="These tests predict how many eggs one cycle is likely to give, so you can plan realistically."
        />

          <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
            {checklist.map((item, idx) => (
              <Reveal key={item} variant="fadeUp" delay={idx * 0.04}>
                <div className="flex items-center gap-3.5 rounded-xl border border-white/10 bg-[#091a3c]/70 px-4 py-3.5 backdrop-blur-md transition-all duration-200 hover:border-[#0047ca]/50 hover:bg-[#0c224e]/80 sm:px-5 sm:py-4">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-300 ring-1 ring-teal-400/40 sm:size-6">
                    <FaCheck className="size-2.5 sm:size-3" />
                  </span>
                  <p className="text-[13.5px] leading-relaxed text-slate-200 sm:text-[14.5px]">
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
