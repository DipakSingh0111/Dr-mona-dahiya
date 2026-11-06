"use client";

import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
} from "@/components/ui/treatment";

const items = [
  {
    title: "Send Us Previous Records:",
    text: "semen reports, hormone panel (AMH, FSH, LH, estradiol on day 2 or 3, TSH, prolactin) and previous surgical reports.",
  },
  {
    title: "Ultrasound Scan:",
    text: "have your local gynecologist perform a TVS scan and share the report with us. This will help us assess your ovarian reserve and make sure there are no issues with your uterus.",
  },
  {
    title: "Blood Work:",
    text: "both male and female partners need to be tested for infections (HIV I & II, Hepatitis B surface antigen (HBsAg), anti-HCV and VDRL).",
  },
  {
    title: "Medical Visa Invitation Letter:",
    text: "once your file has been assessed, we will issue a medical visa letter for the patient and spouse from our clinic.",
  },
];

export default function IntlPrepare() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Before Flying To India"
        title="Preparing Yourself Before You Travel To India"
        subtitle="If you can send us these reports before you travel, it will allow Dr. Dahiya to plan your cycle and you can spend less time in India."
      />

      <Stagger className="mt-7 flex flex-col gap-3" stagger={0.05}>
        {items.map((item) => (
          <StaggerItem key={item.title}>
            <div className="flex items-start gap-3.5 rounded-2xl border border-[#fde2ec] bg-white px-4 py-3.5 backdrop-blur-md sm:gap-4 sm:px-5 sm:py-4">
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-rose/15 text-rose ring-1 ring-rose/35">
                <FaCheck className="size-2.5" />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-[14.5px] leading-snug text-ink sm:text-[15.5px]">
                  {item.title.replace(/:$/, "")}
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
