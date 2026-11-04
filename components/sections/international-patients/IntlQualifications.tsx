"use client";

import { FaCheck } from "react-icons/fa";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
} from "@/components/ui/treatment";

const items = [
  {
    title: "Trained Abroad",
    description:
      "Completed Fellowship in Reproductive Medicine at Singapore General Hospital. MBBS and MD Gold Medalist from Lady Hardinge and Maulana Azad Medical College.",
  },
  {
    title: "Honest & Ethical",
    description:
      "Follows all guidelines laid out by the Indian ART Act. Sex selection is banned by law in India. We do not perform it.",
  },
  {
    title: "You Will Speak With A Doctor",
    description:
      "When you talk to us about starting your IVF journey, you will speak directly with Dr. Dahiya.",
  },
];

export default function IntlQualifications() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="About Dr. Mona"
        title="Qualifications That Make Dr. Mona The Right Choice"
      />

      <Stagger className="mt-7 flex flex-col gap-3.5 sm:gap-4" stagger={0.06}>
        {items.map((item) => (
          <StaggerItem key={item.title}>
            <div className="flex gap-4 rounded-2xl border border-[#fde2ec] bg-white p-5 backdrop-blur-md transition-all duration-200 hover:border-[#fbcfe0] hover:bg-[#fff0f5] sm:p-6">
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
