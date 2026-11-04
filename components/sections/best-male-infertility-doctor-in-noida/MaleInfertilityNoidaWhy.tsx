"use client";

import { FaCheck } from "react-icons/fa";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
} from "@/components/ui/treatment";

const reasons = [
  {
    title: "Couple-first approach",
    description:
      "Both partners are evaluated together, avoiding delays from treating one in isolation.",
  },
  {
    title: "Microfluidic sperm sorting",
    description:
      "Selects sperm with low DNA damage without high-speed centrifugation.",
  },
  {
    title: "Coordinated retrieval and ICSI",
    description:
      "Fresh testicular or epididymal sperm is injected straight into mature eggs on the same day.",
  },
];

export default function MaleInfertilityNoidaWhy() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Expertise & authority"
        title="Why Male Infertility Patients in Noida Consult Dr. Mona Dahiya"
      />

      <Stagger className="mt-7 flex flex-col gap-3.5 sm:gap-4" stagger={0.06}>
        {reasons.map((item) => (
          <StaggerItem key={item.title}>
            <div className="flex gap-4 rounded-2xl border border-[#fde2ec] bg-white p-5 backdrop-blur-md transition-all duration-200 hover:border-rose/35 hover:bg-[#fff0f5] sm:p-6">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-rose text-white shadow-[0_2px_10px_rgba(232,62,116,0.35)]">
                <FaCheck className="size-3.5" />
              </span>
              <div className="min-w-0">
                <h3 className="text-[15px] font-bold text-black sm:text-[16px]">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-black sm:text-[14px]">
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
