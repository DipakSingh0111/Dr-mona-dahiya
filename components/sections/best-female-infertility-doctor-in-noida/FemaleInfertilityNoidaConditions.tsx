"use client";

import Link from "next/link";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
} from "@/components/ui/treatment";

const conditions = [
  {
    number: "1",
    title: "PCOS and irregular ovulation",
    description: (
      <>
        Letrozole-based ovulation induction and OHSS-safe protocols. See{" "}
        <Link
          href="/best-pcos-pcod-treatment-centre-in-noida"
          className="font-medium text-blue underline underline-offset-2 hover:text-white"
        >
          PCOS Treatment
        </Link>
        .
      </>
    ),
  },
  {
    number: "2",
    title: "Low ovarian reserve (low AMH)",
    description: (
      <>
        DuoStim and micro-flare protocols focused on own-egg success. See{" "}
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
  {
    number: "3",
    title: "Blocked tubes and hydrosalpinx",
    description: (
      <>
        Assessment, tubal cannulation or laparoscopic clipping. See{" "}
        <Link
          href="/fallopian-tube-blockage-treatment"
          className="font-medium text-blue underline underline-offset-2 hover:text-white"
        >
          Fallopian Tube Blockage
        </Link>
        .
      </>
    ),
  },
  {
    number: "4",
    title: "Endometriosis and adenomyosis",
    description: (
      <>
        Egg-sparing embryo banking with targeted suppression before a frozen
        transfer. See{" "}
        <Link
          href="/endometriosis-fertility-treatment"
          className="font-medium text-blue underline underline-offset-2 hover:text-white"
        >
          Endometriosis
        </Link>
        .
      </>
    ),
  },
  {
    number: "5",
    title: "Uterine problems",
    description: (
      <>
        Hysteroscopy for septa, polyps or adhesions. See{" "}
        <Link
          href="/best-laparoscopic-surgeon-in-noida"
          className="font-medium text-blue underline underline-offset-2 hover:text-white"
        >
          Laparoscopy &amp; Hysteroscopy
        </Link>
        .
      </>
    ),
  },
];

export default function FemaleInfertilityNoidaConditions() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Conditions treated"
        title="Female Fertility Conditions Treated in Noida"
      />

      <Stagger
        delay={0.04}
        className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5"
      >
        {conditions.map((item) => (
          <StaggerItem key={item.number} className="h-full">
            <div className="flex h-full flex-col rounded-2xl border border-rose/25 bg-white p-5 shadow-[0_0_20px_rgba(232,62,116,0.08)] backdrop-blur-md transition-all duration-300 hover:border-rose/45 hover:bg-[#fff0f5] sm:p-6">
              <div className="flex items-center gap-3">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-rose text-[13px] font-bold text-white shadow-[0_2px_10px_rgba(232,62,116,0.35)]">
                  {item.number}
                </span>
                <h3 className="text-[15px] font-bold text-black sm:text-[16px]">
                  {item.title}
                </h3>
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-black sm:text-[13.5px]">
                {item.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}
