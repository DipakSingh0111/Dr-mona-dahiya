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
            <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#091a3c]/75 px-4 py-3.5 backdrop-blur-md sm:px-5 sm:py-4">
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-300 ring-1 ring-teal-500/40">
                <FaCheck className="size-2.5" />
              </span>
              <p className="text-[13.5px] leading-relaxed text-slate-200 sm:text-[14px]">
                <span className="font-semibold text-white">{item.title}</span>{" "}
                {item.text}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}
