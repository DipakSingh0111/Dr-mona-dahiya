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

      <div className="mt-7 grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
        <Stagger
          className="flex flex-col gap-3.5 sm:gap-4 lg:col-span-7"
          stagger={0.06}
        >
          {reasons.map((item) => (
            <StaggerItem key={item.title}>
              <div className="flex items-start gap-4 rounded-2xl border border-[#fde2ec] bg-white p-5 backdrop-blur-md transition-all duration-200 hover:border-rose/35 hover:bg-[#fff0f5] sm:p-6">
                <span className="signature-tick mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg text-white">
                  <FaCheck className="size-3.5" />
                </span>
                <div className="min-w-0 flex-1">
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

        <Reveal
          variant="scaleIn"
          className="relative w-full self-start lg:col-span-5"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[380px] overflow-hidden rounded-[22px] border-4 border-white shadow-[0_18px_40px_rgba(232,62,116,0.12)] lg:ml-auto">
            <Image
              src="/images/about-us-egg-freezing.jpg"
              alt="Dr. Mona Dahiya — Why Choose for Egg Freezing"
              fill
              sizes="(max-width: 1024px) 90vw, 380px"
              quality={95}
              className="object-cover object-[center_18%]"
              priority={false}
            />
          </div>
        </Reveal>
      </div>
    </TreatmentSection>
  );
}
