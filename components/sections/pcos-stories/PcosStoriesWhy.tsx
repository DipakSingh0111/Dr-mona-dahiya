"use client";

import { Reveal } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  WhyPointRow,
} from "@/components/ui/treatment";

const whyPoints = [
  {
    title: "Safe OHSS-Free Protocols",
    desc: "We utilize customized antagonist protocols and agonist triggers to keep you safe from hyperstimulation.",
  },
  {
    title: "Customized Metabolic Treatment",
    desc: "Medical and nutritional treatment corrects insulin resistance and reduces androgens to improve egg quality.",
  },
  {
    title: "One Step at a Time",
    desc: "We try to regulate your cycles and mild oral medications before jumping to aggressive procedures like IVF.",
  },
];

export default function PcosStoriesWhy() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="More About Our Experience"
        title="Why Trust Dr. Mona Dahiya with PCOS?"
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
