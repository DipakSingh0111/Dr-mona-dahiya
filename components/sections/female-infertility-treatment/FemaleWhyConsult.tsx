"use client";

import { Reveal } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  WhyPointRow,
} from "@/components/ui/treatment";

const whyPoints = [
  {
    title: "Conservative Management",
    desc: "We prefer to do less invasive procedures first and many are cost effective.",
  },
  {
    title: "Medical and surgical training",
    desc: "MBBS Gold Medalist (Lady Hardinge), MD Gold Medalist (Maulana Azad Medical College) and Singapore General Hospital ART Fellow.",
  },
  {
    title: "Everything Under One Roof",
    desc: "Consultations, Scanning & Procedures Are All Available At Our Locations In Noida, Delhi & Ghaziabad.",
  },
];

export default function FemaleWhyConsult() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Expertise & authority"
        title="Why Consult Dr. Mona Dahiya for Female Infertility?"
      />

      <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
        {whyPoints.map((point, idx) => (
          <Reveal key={point.title} variant="fadeUp" delay={idx * 0.05}>
            <WhyPointRow {...point} />
          </Reveal>
        ))}
      </div>
    </TreatmentSection>
  );
}
