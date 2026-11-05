"use client";

import { FaCheck } from "react-icons/fa";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
} from "@/components/ui/treatment";

const reasons = [
  {
    title: "Achievements",
    description:
      "She has won Gold medals throughout her course. From MBBS to MD she was always first.",
  },
  {
    title: "IVF May Not Be Required",
    description:
      "Only 1/3rd of our patients require IVF. Some can fall pregnant with lifestyle changes, medications, trying at the right times, IUI or simple surgery.",
  },
  {
    title: "Honest Medical Care",
    description:
      "All your consults, scans, retrieval and transfers will be performed by Dr Mona Dahiya herself.",
  },
];

export default function FemaleInfertilityNoidaWhy() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="What makes us different?"
        title="Why Fertility Patients in Noida Choose Dr. Mona Dahiya"
      />

      <Stagger className="mt-7 flex flex-col gap-3.5 sm:gap-4" stagger={0.06}>
        {reasons.map((item) => (
          <StaggerItem key={item.title}>
            <div className="flex gap-4 rounded-2xl border border-[#fde2ec] bg-white p-5 backdrop-blur-md transition-all duration-200 hover:border-rose/35 hover:bg-[#fff0f5] sm:p-6">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-rose text-white shadow-[0_2px_10px_rgba(232,62,116,0.35)]">
                <FaCheck className="size-3.5" />
              </span>
              <div className="min-w-0">
                <h3 className="text-[15px] font-bold text-ink sm:text-[16px]">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink/80 sm:text-[14px]">
                  {item.description}
                </p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}
