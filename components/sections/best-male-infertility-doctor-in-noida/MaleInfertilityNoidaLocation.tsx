"use client";

import { FaCheck } from "react-icons/fa";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
} from "@/components/ui/treatment";

const cards = [
  {
    title: "Address",
    description:
      "3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301.",
  },
  {
    title: "Getting there",
    description:
      "Via Dadri Main Road and Vikas Marg; close to Sector 50 Metro (Aqua Line).",
  },
];

export default function MaleInfertilityNoidaLocation() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Location"
        title="Easy to Reach in Noida"
      />

      <Stagger
        className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5"
        stagger={0.06}
      >
        {cards.map((item) => (
          <StaggerItem key={item.title}>
            <div className="flex h-full gap-4 rounded-2xl border border-[#fde2ec] bg-white p-5 backdrop-blur-md transition-all duration-200 hover:border-rose/35 hover:bg-[#fff0f5] sm:p-6">
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
