"use client";

import { Reveal } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  ChecklistRow,
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

      <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:gap-3.5">
        {tests.map((text, idx) => (
          <Reveal key={text} variant="fadeUp" delay={idx * 0.04}>
            <ChecklistRow>
              <span className="font-semibold text-ink">{text}</span>
            </ChecklistRow>
          </Reveal>
        ))}
      </div>
    </TreatmentSection>
  );
}
