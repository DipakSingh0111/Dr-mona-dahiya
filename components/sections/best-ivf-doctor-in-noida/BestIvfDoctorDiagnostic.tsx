"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
} from "@/components/ui/treatment";

const tests = [
  "Ovarian reserve- Serum AMH and TVS day 2/3 to count Antral follicles",
  "Semen analysis with DNA fragmentation if required",
  "Sonography (3d) / SIS for evaluation of uterine cavity. Hysteroscopy if needed",
  "Hormonal and Metabolic workup – TSH, Prolactin, HbA1c and Serum FSH LH & E2 levels",
  "Blood tests for infectious disease screening - HIV I & II, HBAg, Anti HCV and VDRL for both the partners",
];

export default function BestIvfDoctorDiagnostic() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Before treatment"
        title="Diagnostic Test"
        subtitle="Following diagnostic tests will help us know the reason and decide on the course of action. All patients may not require all these tests."
      />

      <div className="mt-7 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
        <Stagger className="flex flex-col gap-3 lg:col-span-7" stagger={0.06}>
          {tests.map((text) => (
            <StaggerItem key={text}>
              <div className="flex items-start gap-3 rounded-2xl border border-[#fde2ec] bg-white/80 px-4 py-3.5 sm:px-5 sm:py-4">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-blue text-white">
                  <FaCheck className="size-3" />
                </span>
                <p className="text-[13.5px] leading-relaxed text-slate-700 sm:text-[14px]">
                  {text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal variant="scaleIn" className="lg:col-span-5">
          <div className="relative mx-auto max-w-[420px] overflow-hidden rounded-[22px] border border-[#fde2ec] shadow-[0_20px_50px_rgba(0,10,40,0.4)]">
            <Image
              src="/images/about-mona-dahiya/dr-mona-dahiya.jpg"
              alt="Dr. Mona Dahiya"
              width={500}
              height={560}
              className="h-auto w-full object-cover object-top"
            />
          </div>
        </Reveal>
      </div>
    </TreatmentSection>
  );
}
