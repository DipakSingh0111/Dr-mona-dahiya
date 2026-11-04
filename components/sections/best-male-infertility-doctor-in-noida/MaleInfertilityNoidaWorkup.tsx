"use client";

import { FaCheck } from "react-icons/fa";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
} from "@/components/ui/treatment";

const tests = [
  "Computer-assisted semen analysis (CASA): count, progressive motility and strict Kruger morphology after 2 to 3 days of abstinence.",
  "Halosperm DNA fragmentation test: measures single- and double-strand DNA breaks.",
  "Hormones: morning testosterone, LH, FSH, prolactin and TSH.",
  "Scrotal Doppler ultrasound: testicular volume and varicocele.",
  "Genetic tests: karyotype and Y-chromosome microdeletion for very low count or azoospermia.",
];

export default function MaleInfertilityNoidaWorkup() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Before treatment"
        title="Male Fertility Workup"
        subtitle="These tests show exactly what is affecting sperm, so treatment is targeted."
      />

      <Stagger className="mt-7 flex flex-col gap-3" stagger={0.05}>
        {tests.map((text) => (
          <StaggerItem key={text}>
            <div className="flex items-start gap-3 rounded-2xl border border-[#fde2ec] bg-white px-4 py-3.5 backdrop-blur-md sm:px-5 sm:py-4">
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-blue/20 text-blue ring-1 ring-blue/40">
                <FaCheck className="size-2.5" />
              </span>
              <p className="text-[13.5px] leading-relaxed text-black sm:text-[14px]">
                {text}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}
