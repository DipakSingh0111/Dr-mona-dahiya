"use client";

import Link from "next/link";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
} from "@/components/ui/treatment";

const steps = [
  {
    number: "1",
    title: "History and diagnostic mapping",
    description: "Menstrual history, past surgery and baseline tests",
  },
  {
    number: "2",
    title: "Pathway A: ovulation correction",
    description: (
      <>
        Lifestyle changes and Letrozole, tracked by{" "}
        <Link
          href="/follicular-ultrasound"
          className="font-medium text-blue underline underline-offset-2 hover:text-white"
        >
          Follicular Ultrasound
        </Link>
      </>
    ),
  },
  {
    number: "3",
    title: "Pathway B: insemination",
    description: (
      <>
        <Link
          href="/best-iui-doctor-in-noida"
          className="font-medium text-blue underline underline-offset-2 hover:text-white"
        >
          IUI
        </Link>{" "}
        for 3 to 4 cycles for unexplained or mild cervical factors
      </>
    ),
  },
  {
    number: "4",
    title: "Pathway C: surgical correction",
    description: (
      <>
        Keyhole surgery by{" "}
        <Link
          href="/best-laparoscopic-surgeon-in-noida"
          className="font-medium text-blue underline underline-offset-2 hover:text-white"
        >
          Laparoscopy &amp; Hysteroscopy
        </Link>
      </>
    ),
  },
  {
    number: "5",
    title: "Pathway D: IVF",
    description: (
      <>
        Blocked tubes, severe endometriosis or low reserve treated with{" "}
        <Link
          href="/ivf-treatment"
          className="font-medium text-blue underline underline-offset-2 hover:text-white"
        >
          IVF
        </Link>{" "}
        and blastocyst culture
      </>
    ),
  },
];

export default function FemaleInfertilityNoidaPathway() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="How it works"
        title="Step-by-Step Treatment Pathway"
      />

      <Stagger
        delay={0.04}
        className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5"
      >
        {steps.map((item) => (
          <StaggerItem key={item.number} className="h-full">
            <div className="flex h-full flex-col rounded-2xl border border-rose/25 bg-white p-5 shadow-[0_0_20px_rgba(232,62,116,0.08)] backdrop-blur-md transition-all duration-300 hover:border-rose/45 hover:bg-[#fff0f5] sm:p-6">
              <div className="flex items-center gap-3">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-rose text-[13px] font-bold text-white shadow-[0_2px_10px_rgba(232,62,116,0.35)]">
                  {item.number}
                </span>
                <h3 className="text-[14.5px] font-bold text-black sm:text-[15px]">
                  {item.title}
                </h3>
              </div>
              <p className="mt-3 flex items-start gap-2 text-[13px] leading-relaxed text-black sm:text-[13.5px]">
                <span
                  aria-hidden
                  className="mt-1.5 inline-block size-1.5 shrink-0 rounded-full bg-rose"
                />
                <span>{item.description}</span>
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}
