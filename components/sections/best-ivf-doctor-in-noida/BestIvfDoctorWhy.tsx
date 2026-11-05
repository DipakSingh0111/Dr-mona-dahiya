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
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <TreatmentSectionHeader
            eyebrow="Expertise & authority"
            title="Why should you choose Dr. Mona Dahiya for IVF treatment in Noida?"
          />

          <div className="mt-6 flex flex-col gap-3.5 sm:gap-4">
            {reasons.map((point, idx) => (
              <Reveal key={point.title} variant="fadeUp" delay={idx * 0.05}>
                <WhyPointRow {...point} />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal variant="scaleIn" className="w-full lg:col-span-6">
          <div className="relative mx-auto aspect-[1/1.02] w-full max-w-[520px] overflow-hidden rounded-[22px] border-4 border-white bg-white shadow-[0_18px_40px_rgba(232,62,116,0.12)] lg:ml-auto">
            <Image
              src="/images/ivf-noida-02.jpg"
              alt="Dr. Mona Dahiya speaking at India IVF event"
              fill
              sizes="(max-width: 1024px) 90vw, 520px"
              quality={95}
              className="object-cover object-[center_28%]"
            />
          </div>
        </Reveal>
      </div>
    </TreatmentSection>
  );
}
