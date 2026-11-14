"use client";

import type { ReactNode } from "react";
import { FaCheck } from "react-icons/fa";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
} from "@/components/ui/treatment";

const tests = [
  {
    key: "ovarian",
    title: "Ovarian and junctional zone mapping",
    text: "3D transvaginal scan for antral follicle count.",
  },
  {
    key: "tubal",
    title: "Tubal patency",
    text: "HSG or HyCoSy confirming open, working tubes.",
  },
  {
    key: "hormones",
    title: "Hormones",
    text: "AMH, Day 2/3 FSH, LH, estradiol, TSH and prolactin.",
  },
  {
    key: "uterine",
    title: "Uterine cavity",
    text: "3D saline sonography and diagnostic hysteroscopy for polyps or chronic endometritis.",
  },
  {
    key: "infection",
    title: "Infection screening",
    text: "HIV I & II, HBsAg, HCV, VDRL, as required under the Indian ART Act.",
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
            <div className="flex items-start gap-3.5 rounded-2xl border border-[#fde2ec] bg-white px-4 py-3.5 backdrop-blur-md sm:gap-4 sm:px-5 sm:py-4">
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-rose to-rose-dark text-white shadow-[0_4px_12px_rgba(232,62,116,0.3)]">
                <FaCheck className="size-2.5" />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-[14.5px] leading-snug text-ink sm:text-[15.5px]">
                  {item.title}
                </h3>
                <p className="mt-1 text-[13px] leading-relaxed text-slate-600 sm:text-[14px]">
                  {item.text}
                </p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}
