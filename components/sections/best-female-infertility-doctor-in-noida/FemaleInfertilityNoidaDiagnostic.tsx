"use client";

import type { ReactNode } from "react";
import { FaCheck } from "react-icons/fa";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
} from "@/components/ui/treatment";

const tests: { key: string; content: ReactNode }[] = [
  {
    key: "ovarian",
    content: (
      <>
        <strong className="font-semibold text-ink">
          Ovarian and junctional zone mapping:
        </strong>{" "}
        3D transvaginal scan for antral follicle count.
      </>
    ),
  },
  {
    key: "tubal",
    content: (
      <>
        <strong className="font-semibold text-ink">Tubal patency:</strong> HSG or
        HyCoSy confirming open, working tubes.
      </>
    ),
  },
  {
    key: "hormones",
    content: (
      <>
        <strong className="font-semibold text-ink">Hormones:</strong> AMH, Day
        2/3 FSH, LH, estradiol, TSH and prolactin.
      </>
    ),
  },
  {
    key: "uterine",
    content: (
      <>
        <strong className="font-semibold text-ink">Uterine cavity:</strong> 3D
        saline sonography and diagnostic hysteroscopy for polyps or chronic
        endometritis.
      </>
    ),
  },
  {
    key: "infection",
    content: (
      <>
        Infection screening (HIV I &amp; II, HBsAg, HCV, VDRL), as required under
        the Indian ART Act.
      </>
    ),
  },
];

export default function FemaleInfertilityNoidaDiagnostic() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Before treatment"
        title="Diagnostic Checklist at Our Fertility Clinic in Noida"
        subtitle="These tests find the exact cause, so treatment is targeted from the start."
      />

      <Stagger className="mt-7 flex flex-col gap-3" stagger={0.05}>
        {tests.map((item) => (
          <StaggerItem key={item.key}>
            <div className="flex items-start gap-3 rounded-2xl border border-[#fde2ec] bg-white px-4 py-3.5 backdrop-blur-md sm:px-5 sm:py-4">
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-blue/20 text-blue ring-1 ring-blue/40">
                <FaCheck className="size-2.5" />
              </span>
              <p className="text-[13.5px] leading-relaxed text-ink/80 sm:text-[14px]">
                {item.content}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}
