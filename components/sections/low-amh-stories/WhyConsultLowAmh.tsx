"use client";

import { Reveal } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  WhyPointRow,
} from "@/components/ui/treatment";

const whyPoints = [
  {
    title: "Own-Egg Priority",
    desc: "Dr Mona will always help you try and become pregnant with your own eggs before going to donor.",
  },
  {
    title: "Stimulation Expertise",
    desc: "Dr. Mona specializes in DuoStim, which helps stimulate ovaries during the luteal phase to yield more eggs than a standard cycle.",
  },
  {
    title: "Advanced Benchtop Incubators",
    desc: "Our single benchtop incubators will keep your embryos in constant undisturbed micro environments allowing for quicker recovery and better blastocyst formation.",
  },
];

export default function WhyConsultLowAmh() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Dr. Mona Dahiya"
        title="Why Consult Dr. Mona Dahiya for Low AMH?"
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
