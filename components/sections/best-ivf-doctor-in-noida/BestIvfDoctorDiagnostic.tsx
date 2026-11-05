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
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <TreatmentSectionHeader
            eyebrow="Before treatment"
            title="Diagnostic Test"
            subtitle="Following diagnostic tests will help us know the reason and decide on the course of action. All patients may not require all these tests."
          />

          <div className="mt-6 flex flex-col gap-3.5 sm:gap-4">
            {tests.map((text, idx) => (
              <Reveal key={text} variant="fadeUp" delay={idx * 0.04}>
                <ChecklistRow>{text}</ChecklistRow>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal variant="scaleIn" className="w-full lg:col-span-6">
          <div className="relative mx-auto aspect-[1.03/1] w-full max-w-[520px] overflow-hidden rounded-[22px] border-4 border-white bg-white shadow-[0_18px_40px_rgba(232,62,116,0.12)] lg:ml-auto">
            <Image
              src="/images/ivf-noida-01.jpg"
              alt="Dr. Mona Dahiya - Diagnostic Test"
              fill
              sizes="(max-width: 1024px) 90vw, 520px"
              quality={95}
              className="object-cover object-top"
            />
          </div>
        </Reveal>
      </div>
    </TreatmentSection>
  );
}
