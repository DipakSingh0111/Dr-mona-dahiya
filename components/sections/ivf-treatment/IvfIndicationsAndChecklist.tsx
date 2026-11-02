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
interface IndicationItem {
  number: string;
  title: string;
  description: ReactNode;
}

const indications: IndicationItem[] = [
  {
    number: "1",
    title: "Tubal factor obstruction",
    description: (
      <>
        Blocked or damaged tubes that stop egg and sperm from meeting. See also{" "}
        <Link
          href="/fallopian-tube-blockage-treatment"
          className="font-medium text-[#93c5fd] underline underline-offset-2 hover:text-white"
        >
          Fallopian Tube Blockage Treatment
        </Link>
        .
      </>
    ),
  },
  {
    number: "2",
    title: "Diminished ovarian reserve (low AMH)",
    description:
      "AMH below about 1.1 ng/mL or a low antral follicle count, where IVF timing and protocol choice matter most.",
  },
  {
    number: "3",
    title: "Moderate to severe endometriosis",
    description: (
      <>
        Including chocolate cysts that affect egg quality and pelvic anatomy. See{" "}
        <Link
          href="/endometriosis-fertility-treatment"
          className="font-medium text-[#93c5fd] underline underline-offset-2 hover:text-white"
        >
          Endometriosis Fertility Treatment
        </Link>
        .
      </>
    ),
  },
  {
    number: "4",
    title: "Anovulatory disorders and resistant PCOS",
    description:
      "When ovulation induction or IUI has not worked, or OHSS risk needs a carefully controlled IVF plan.",
  },
  {
    number: "5",
    title: "Unexplained infertility and failed IUI",
    description:
      "After 3 to 4 well-timed IUI cycles without success, or when age and reserve favour moving to IVF sooner.",
  },
  {
    number: "6",
    title: "Male subfertility",
    description: (
      <>
        Low sperm concentration, motility or morphology that benefits from ICSI. See{" "}
        <Link
          href="/low-sperm-count-oligospermia"
          className="font-medium text-[#93c5fd] underline underline-offset-2 hover:text-white"
        >
          Low Sperm Count &amp; Motility
        </Link>
        .
      </>
    ),
  },
];

const checklist = [
  "Ovarian follicular mapping (3D transvaginal scan)",
  "Semen profile (includes Sperm DNA Fragmentation Test when indicated)",
  "Uterine cavity (3D saline infusion and Hysteroscopy when needed)",
  "Hormones (AMH, TSH, free T4, prolactin, LH, estradiol)",
  "Mandatory ART serology (HIV I & II, HbsAg, anti-HCV, VDRL)",
];

export default function IvfIndicationsAndChecklist() {
  return (
    <TreatmentSection>
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="Clinical breakdown"
          title="Indications: Who Needs IVF Treatment?"
          subtitle="Common reasons Dr. Mona Dahiya recommends IVF."
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
          title="Diagnostic Checklist: Pre-IVF Evaluation"
          subtitle="These tests confirm the cause and shape your stimulation plan. Not every couple needs every test."
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
