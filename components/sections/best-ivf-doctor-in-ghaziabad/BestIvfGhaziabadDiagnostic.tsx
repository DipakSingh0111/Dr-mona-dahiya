"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
} from "@/components/ui/treatment";

const tests = [
  "Check ovarian reserve by doing serum AMH and day 2/3 trans vaginal ultrasound to look at antral follicle count.",
  "Semen analysis and sperm DNA fragmentation test.",
  "Evaluate the uterus by 3D ultrasound or SIS and sometimes hysteroscopy is needed.",
  "Blood tests to check thyroid, sugar and hormones (Prolactin, HbA1c, FSH, LH and Estradiol levels)",
  "Test for infections in both partners (HIV I & II, HbsAg, Anti HCV and VDRL)",
];

export default function BestIvfGhaziabadDiagnostic() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Work up before treatment"
        title="Diagnostic checklist"
        subtitle="This will help us know why you are unable to conceive and tailor your plan. These may not be required for all couples."
      />

      <div className="mt-7 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
        <Stagger className="flex flex-col gap-3 lg:col-span-7" stagger={0.06}>
          {tests.map((text) => (
            <StaggerItem key={text}>
              <div className="flex items-start gap-3 rounded-2xl border border-[#fde2ec] bg-white/80 px-4 py-3.5 sm:px-5 sm:py-4">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-rose/15 text-rose ring-1 ring-rose/35">
                  <FaCheck className="size-2.5" />
                </span>
                <p className="text-[13.5px] leading-relaxed text-slate-700 sm:text-[14px]">
                  {text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal variant="scaleIn" className="lg:col-span-5">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-[22px] border-4 border-white shadow-[0_18px_40px_rgba(232,62,116,0.12)]">
            <Image
              src="/images/best-ivf-work-treatment.jpg"
              alt="Dr. Mona Dahiya - Diagnostic checklist"
              fill
              sizes="(max-width: 1024px) 90vw, 420px"
              quality={95}
              className="object-cover object-[center_22%]"
            />
          </div>
        </Reveal>
      </div>
    </TreatmentSection>
  );
}
