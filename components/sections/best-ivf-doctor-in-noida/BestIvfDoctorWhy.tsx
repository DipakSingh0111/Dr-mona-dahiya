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
    title: "Same doctor for entire IVF process",
    description:
      "We prepare your protocol, check your USG and perform Embryo transfer by Dr. Mona Dahiya herself.",
  },
  {
    title: "Qualifications",
    description:
      "MBBS, MD (Gold Medalist), DNB & IVF Fellowship from Singapore General Hospital with more than 100 publications to her name.",
  },
  {
    title: "Well Experienced Embryologists & Counselors",
    description:
      "We have skilled embryologists and counselors who assist Dr. Dahiya in performing IVF procedure from Egg collection to Embryo transfer.",
  },
];

export default function BestIvfDoctorWhy() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Expertise & authority"
        title="Why should you choose Dr. Mona Dahiya for IVF treatment in Noida?"
      />

      <div className="mt-7 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch lg:gap-8">
        <Stagger
          className="flex h-full flex-col justify-between gap-4 lg:col-span-7"
          stagger={0.08}
        >
          {reasons.map((item) => (
            <StaggerItem key={item.title} className="h-full">
              <div className="flex h-full gap-4 rounded-2xl border border-[#e83e74]/25 bg-[#0a1f45]/80 p-5 sm:p-6">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#e83e74] to-[#c53658] text-white">
                  <FaCheck className="size-3.5" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-[15.5px] font-bold text-white sm:text-[16.5px]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-white/70 sm:text-[14px]">
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
          <div className="relative h-full min-h-[360px] overflow-hidden rounded-[22px] border border-white/15 shadow-[0_20px_50px_rgba(0,10,40,0.4)] lg:absolute lg:inset-0 lg:min-h-0">
            <Image
              src="/images/publications/awards/ivf-summit-speaker.jpg"
              alt="Dr. Mona Dahiya at India IVF Summit & Awards"
              fill
              sizes="(max-width: 1024px) 90vw, 420px"
              className="object-cover object-[68%_42%]"
              priority
            />
          </div>
        </Reveal>
      </div>
    </TreatmentSection>
  );
}
