"use client";

import { Reveal } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  WhyPointRow,
} from "@/components/ui/treatment";

const whyPoints = [
  {
    title: "Philosophy Of Using Your Own Eggs And Embryo Banking",
    desc: "We Always Encourage The Use Of Your Own Eggs. For Low Amh Patients We Can Achieve Pregnancy Potential of > 90% By Your Own Eggs By Giving Mild Protocol and Doing Embryo Banking.",
  },
  {
    title: "Usage Of Duostim and hgh",
    desc: "We Use Both Follicular And Luteal Phase For Duostim Which Gives Us Higher Number Of Matured Oocytes By Around 30% To 40% Than Conventional Methods. We Also Use Additional Adjuvant hgh Which Gives Better Oocyte Yield From Dormant Follicle Waves.",
  },
  {
    title: "Mini Incubator With Tri Gas Mix",
    desc: "Low Amh patients have fragile oocytes. We take good care of them by incubating them on Benchtop incubator using 5% Oxygen (tri gas mix). This improves blastocyst yield by 10% to 15 % more from your limited eggs.",
  },
];

export default function LowAmhWhyConsult() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="What Dr Mona does Different From Others ?"
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
