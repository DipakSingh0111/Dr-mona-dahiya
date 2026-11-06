"use client";

import { FaCheck } from "react-icons/fa";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
} from "@/components/ui/treatment";

const tests = [
  "Blood test to check ovarian reserve. This will help us determine how many mature eggs you are likely to obtain.",
  "Hormone profile done on Day 2 or Day 3 of your cycle. This includes FSH, LH, Estradiol, Thyroid Stimulating Hormone and Prolactin levels.",
  "Ultrasound to check if your ovaries can be accessed and to rule out any ovarian pathology like cysts or blocked tubes (hydrosalpinx).",
  "Blood test to screen for common viruses: HIV 1 & 2, Hepatitis B (HBsAg), Hepatitis C (HCV) and VDRL.",
];

export default function EggFreezingChecklist() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Pre procedure"
        title="Checklist Before Egg Freezing"
        subtitle="The following tests will help us understand how many eggs you will get from one cycle of egg freezing."
      />

      <Stagger className="mt-7 flex flex-col gap-3" stagger={0.05}>
        {tests.map((text) => (
          <StaggerItem key={text}>
            <div className="flex items-start gap-3 rounded-2xl border border-[#fde2ec] bg-white px-4 py-3.5 backdrop-blur-md sm:px-5 sm:py-4">
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-rose/15 text-rose ring-1 ring-rose/35">
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
