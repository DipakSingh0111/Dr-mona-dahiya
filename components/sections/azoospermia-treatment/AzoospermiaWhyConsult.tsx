"use client";

import { Reveal } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  WhyPointRow,
} from "@/components/ui/treatment";

const whyPoints = [
  {
    title: "Diagnosis Before Procedure",
    desc: "We identify the cause first before suggesting any type of surgery. This ensures you get the right surgery for your case.",
  },
  {
    title: "Honesty",
    desc: "Your chances of spermatogenesis and alternative methods will be communicated to you.",
  },
  {
    title: "Extraction To ICSI in-house",
    desc: "Surgeon and Embryologist, under the guidance of Dr Mona Dahiya, will ensure best outcomes for your case.",
  },
];

export default function AzoospermiaWhyConsult() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Benefits of seeing an Azoospermia Specialist"
        title="Why Consult Dr. Mona Dahiya for Azoospermia?"
      />

      <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
        {whyPoints.map((point, idx) => (
          <Reveal key={point.title} variant="fadeUp" delay={idx * 0.05}>
            <WhyPointRow {...point} />
          </Reveal>
        ))}
      </div>

      <Reveal variant="fadeUp" delay={0.15} className="mt-6">
        <div className="rounded-xl border border-[#fde2ec] bg-white px-5 py-4 text-[12.5px] leading-relaxed text-ink sm:text-[13px]">
          <p>
            <strong className="text-ink">Delhi -</strong> Building Number 41,
            First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New
            Delhi 110024
          </p>
          <p className="mt-1.5">
            <strong className="text-ink">Noida -</strong> 3rd Floor, K-06,
            above FirstCry, Bagula, Sector 49, Noida, Uttar Pradesh 201301
          </p>
          <p className="mt-1.5">
            <strong className="text-ink">Ghaziabad -</strong> 2nd Floor, RDC,
            C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar,
            Ghaziabad, Uttar Pradesh 201002
          </p>
        </div>
      </Reveal>
    </TreatmentSection>
  );
}
