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
    title: "Same doctor for entire IVF process",
    desc: "We prepare your protocol, check your USG and perform Embryo transfer by Dr. Mona Dahiya herself.",
  },
  {
    title: "Qualifications",
    desc: "MBBS, MD (Gold Medalist), DNB & IVF Fellowship from Singapore General Hospital with more than 100 publications to her name.",
  },
  {
    title: "Well Experienced Embryologists & Counselors",
    desc: "We have skilled embryologists and counselors who assist Dr. Dahiya in performing IVF procedure from Egg collection to Embryo transfer.",
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
        <div className="flex flex-col gap-3.5 sm:gap-4 lg:col-span-7">
          {reasons.map((point, idx) => (
            <Reveal key={point.title} variant="fadeUp" delay={idx * 0.05}>
              <WhyPointRow {...point} />
            </Reveal>
          ))}
        </div>

        <Reveal
          variant="scaleIn"
          className="relative min-h-[360px] w-full lg:col-span-5 lg:min-h-0"
        >
          <div className="relative h-full min-h-[360px] overflow-hidden rounded-[22px] border-4 border-white shadow-[0_18px_40px_rgba(232,62,116,0.12)] lg:absolute lg:inset-0 lg:min-h-0">
            <Image
              src="/images/best-ivf-doctor-in-noida.jpg"
              alt="Dr. Mona Dahiya speaking at India IVF event"
              fill
              sizes="(max-width: 1024px) 90vw, 420px"
              quality={95}
              className="object-cover object-top"
            />
          </div>
        </Reveal>
      </div>
    </TreatmentSection>
  );
}
