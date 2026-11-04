"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
} from "@/components/ui/treatment";

const reasons = [
  {
    title: "Honest approach",
    description:
      "We have been doing IVF for over 25 years, with a fellowship from Singapore General Hospital. We will guide you on how many eggs you need to freeze based on your age and ovarian reserve.",
  },
  {
    title: "State-of-the-art vitrification",
    description:
      "Our vitrification technique helps prevent the formation of ice crystals, ensuring a higher chance of egg survival (>95%).",
  },
  {
    title: "Store your eggs as per the ART Act",
    description:
      "Your eggs will be stored in accordance with the ART Act. You can choose when to use your eggs in the future.",
  },
];

export default function EggFreezingWhy() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="About us"
        title="Why Choose Dr. Mona Dahiya for Egg Freezing?"
      />

      <div className="mt-7 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
        <Stagger
          className="flex flex-col gap-3.5 sm:gap-4 lg:col-span-7"
          stagger={0.06}
        >
          {reasons.map((item) => (
            <StaggerItem key={item.title}>
              <div className="flex gap-4 rounded-2xl border-4 border-white bg-white p-5 backdrop-blur-md transition-all duration-200 hover:border-rose/35 hover:bg-[#fff0f5] sm:p-6">
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

        <Reveal
          variant="scaleIn"
          className="relative min-h-[360px] w-full lg:col-span-5 lg:min-h-0"
        >
          <div className="relative h-full min-h-[360px] overflow-hidden rounded-[22px] border-4 border-white shadow-[0_20px_50px_rgba(0,10,40,0.4)] lg:absolute lg:inset-0 lg:min-h-0">
            <Image
              src="/images/about-mona-dahiya/male-infertility.jpg"
              alt="Dr. Mona Dahiya — Why Choose for Egg Freezing"
              fill
              sizes="(max-width: 1024px) 90vw, 420px"
              className="object-cover object-top"
            />
          </div>
        </Reveal>
      </div>
    </TreatmentSection>
  );
}
