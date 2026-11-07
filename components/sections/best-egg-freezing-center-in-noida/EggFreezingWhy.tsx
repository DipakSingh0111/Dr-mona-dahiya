"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  WhyPointRow,
} from "@/components/ui/treatment";

const reasons = [
  {
    title: "Honest approach",
    desc: "We have been doing IVF for over 25 years, with a fellowship from Singapore General Hospital. We will guide you on how many eggs you need to freeze based on your age and ovarian reserve.",
  },
  {
    title: "State-of-the-art vitrification",
    desc: "Our vitrification technique helps prevent the formation of ice crystals, ensuring a higher chance of egg survival (>95%).",
  },
  {
    title: "Store your eggs as per the ART Act",
    desc: "Your eggs will be stored in accordance with the ART Act. You can choose when to use your eggs in the future.",
  },
];

export default function EggFreezingWhy() {
  return (
    <TreatmentSection>
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <TreatmentSectionHeader
            eyebrow="About us"
            title={
              <>
                Why Choose Dr. Mona
                <br className="hidden sm:inline" /> Dahiya for Egg Freezing?
              </>
            }
          />

          <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
            {reasons.map((point, idx) => (
              <Reveal key={point.title} variant="fadeUp" delay={idx * 0.05}>
                <WhyPointRow {...point} />
              </Reveal>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:col-span-5 lg:justify-end">
          <Reveal
            variant="scaleIn"
            delay={0.1}
            className="w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[480px]"
          >
            <div className="relative aspect-[10/11] w-full overflow-hidden rounded-[22px] border-4 border-white bg-pink shadow-[0_20px_50px_rgba(232,62,116,0.12)] ring-1 ring-rose/15 sm:rounded-[26px]">
              <Image
                src="/images/about-us-egg-freezing.jpg"
                alt="Dr. Mona Dahiya — Why Choose Dr. Mona Dahiya for Egg Freezing"
                fill
                sizes="(max-width: 640px) 380px, (max-width: 1024px) 440px, 480px"
                quality={95}
                className="object-cover object-[center_28%]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </TreatmentSection>
  );
}
