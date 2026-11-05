"use client";

import { FaCheck } from "react-icons/fa";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
} from "@/components/ui/treatment";

const tests = [
  "Semen analysis on computer assisted semen analysis (CASA) machine after an abstinence period of 2-3 days to assess count, motility and morphology (Kruger Strict).",
  "DNA fragmentation (Halosperm): single strand and double strand fragmentation of sperm.",
  "Hormone profile: testosterone, LH, FSH, prolactin and TSH levels in the early morning.",
  "Ultrasound: scrotal USG done to find out the size of the testis and presence of varicocele.",
  "Genetic tests: if count is very low or no sperm (karyotyping and Y chromosome microdeletion).",
];

export default function MaleInfertilityNoidaWorkup() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="What do we test?"
        title="Male Fertility Workup"
        subtitle="Below tests will give us an idea about what is going wrong with your sperm count."
      />

      <Stagger className="mt-7 flex flex-col gap-3" stagger={0.05}>
        {tests.map((text) => (
          <StaggerItem key={text}>
            <div className="flex items-start gap-3 rounded-2xl border border-[#fde2ec] bg-white px-4 py-3.5 backdrop-blur-md sm:px-5 sm:py-4">
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-blue/20 text-blue ring-1 ring-blue/40">
                <FaCheck className="size-2.5" />
              </span>
              <p className="text-[13.5px] leading-relaxed text-ink/80 sm:text-[14px]">
                {text}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}
