"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  ChecklistRow,
} from "@/components/ui/treatment";

const tests = [
  "Ovarian reserve- Serum AMH and TVS day 2/3 to count Antral follicles",
  "Semen analysis with DNA fragmentation if required",
  "Sonography (3d) / SIS for evaluation of uterine cavity. Hysteroscopy if needed",
  "Hormonal and Metabolic workup – TSH, Prolactin, HbA1c and Serum FSH LH & E2 levels",
  "Blood tests for infectious disease screening - HIV I & II, HBsAg, Anti HCV and VDRL for both the partners",
];

export default function BestIvfDoctorDiagnostic() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Before treatment"
        title="Diagnostic Test"
        subtitle="Following diagnostic tests will help us know the reason and decide on the course of action. All patients may not require all these tests."
      />

      <div className="mt-7 grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col gap-3.5 lg:col-span-7 sm:gap-4">
          {tests.map((text, idx) => (
            <Reveal key={text} variant="fadeUp" delay={idx * 0.04}>
              <ChecklistRow>{text}</ChecklistRow>
            </Reveal>
          ))}
        </div>

        <Reveal variant="scaleIn" className="lg:col-span-5">
          <div className="relative mx-auto max-w-[420px] overflow-hidden rounded-[22px] border-4 border-white shadow-[0_18px_40px_rgba(232,62,116,0.12)]">
            <Image
              src="/images/about-mona-dahiya/iui-about-doctor.jpg"
              alt="Dr. Mona Dahiya"
              width={500}
              height={625}
              quality={95}
              className="h-auto w-full object-cover object-top"
            />
          </div>
        </Reveal>
      </div>
    </TreatmentSection>
  );
}
