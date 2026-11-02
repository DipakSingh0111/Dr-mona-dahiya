"use client";

import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  ProtocolCard,
  WhyPointRow
} from "@/components/ui/treatment";
const protocols = [
  {
    number: "1",
    title: "Embryo placement",
    bullets: [
      "Embryo placed in a buffered micro-droplet under sterile oil on the microscope stage",
    ],
  },
  {
    number: "2",
    title: "Optical targeting",
    bullets: [
      "Imaging software calibrated to the 40x objective places a target ring on the outer shell",
    ],
  },
  {
    number: "3",
    title: "Laser pulse",
    bullets: [
      "Microsecond pulses at 1.48 μm aimed at the shell edge, away from the cells. Either thinning 50% to 70% of the shell or a full micro-opening.",
    ],
  },
  {
    number: "4",
    title: "Integrity check",
    bullets: [
      "The embryologist confirms the cells are intact and the laser site is precise",
    ],
  },
  {
    number: "5",
    title: "Recovery in the incubator",
    bullets: [
      "Embryo washed and returned to the tri-gas incubator for 2 to 4 hours",
    ],
  },
  {
    number: "6",
    title: "Soft catheter transfer",
    bullets: [
      "Ultrasound-guided transfer into a receptive, synchronised lining",
    ],
  },
];

const whyPoints = [
  {
    title: "25+ years of micromanipulation experience",
    desc: "A Singapore General Hospital fellow who has directed laboratory protocols across thousands of cycles.",
  },
  {
    title: "Modern non-contact laser optics",
    desc: "Computerised laser systems replace older chemical (acid Tyrode's) and mechanical methods, removing chemical toxicity risks.",
  },
  {
    title: "Evidence-based case selection",
    desc: "LAH is advised on clear criteria (shell thickness, age, past failure), never applied to every embryo by default.",
  },
];

export default function LahProtocolAndWhy() {
  return (
    <TreatmentSection>
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="How it works"
          title="Step-by-Step Laser-Assisted Hatching Protocol"
        />

          <Stagger
            delay={0.05}
            className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
          >
            {protocols.map((item) => (
              <StaggerItem key={item.number}>
              <ProtocolCard {...item} />
            </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div>
          <TreatmentSectionHeader
          eyebrow="Expertise & authority"
          title="Why Choose Dr. Mona Dahiya for Laser-Assisted Hatching?"
        />

          <div className="mt-7 grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="flex flex-col gap-3.5 sm:gap-4 lg:col-span-7">
              {whyPoints.map((point, idx) => (
                <Reveal key={point.title} variant="fadeUp" delay={idx * 0.05}>
              <WhyPointRow {...point} />
            </Reveal>
              ))}
            </div>

            <div className="relative mx-auto w-full max-w-[380px] lg:col-span-5 lg:mx-0 lg:max-w-none">
              <Reveal variant="scaleIn" delay={0.08}>
                <div className="relative overflow-hidden rounded-[20px] border-[3px] border-white/70 shadow-[0_20px_50px_rgba(0,10,40,0.45)] sm:rounded-[24px]">
                  <Image
                    src="/images/about-mona-dahiya/laser.jpg"
                    alt="Dr. Mona Dahiya - Laser-Assisted Hatching clinic"
                    width={480}
                    height={560}
                    className="max-h-[420px] w-full object-cover object-top sm:max-h-[480px]"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </TreatmentSection>
  );
}
