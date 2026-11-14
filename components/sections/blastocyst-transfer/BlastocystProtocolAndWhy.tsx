"use client";

import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  WhyPointRow,
  ProtocolCard,
} from "@/components/ui/treatment";

const protocols = [
  {
    number: "1",
    title: "Retrieval and Insemination of Eggs (Day 0)",
    bullets: [
      "USG-guided retrieval",
      "IVF/ICSI performed in a clean room lab",
    ],
  },
  {
    number: "2",
    title: "Day 1 – Day 3 Embryo Development",
    bullets: [
      "Day 1: We confirm that 2 pronuclei are present in the oocyte",
      "Day 3: Graded for cell number, symmetry and fragmentation",
    ],
  },
  {
    number: "3",
    title: "Embryo Growth to Day 5/6",
    bullets: [
      "Day 4: The embryo becomes compacted (morula stage)",
      "Day 5/6: We assess how much the embryo has expanded and grade it based on its Inner Cell Mass and Trophectoderm (Gardner Scale)",
    ],
  },
  {
    number: "4",
    title: "If Biopsy is Required for PGT-A",
    bullets: [
      "A laser is used to make an opening in the zona pellucida, and 4–6 cells are removed from the outer layer",
      "The embryo is vitrified",
    ],
  },
  {
    number: "5",
    title: "Day 5 Embryo Transfer / Frozen Embryo Transfer",
    bullets: [
      "USG-guided soft catheter transfer",
      "The embryo is placed approximately 1.5 cm from the fundus",
    ],
  },
  {
    number: "6",
    title: "Progesterone Support and Pregnancy Test",
    bullets: [
      "Micronised progesterone",
      "Beta hCG levels on Day 12–14 after transfer",
    ],
  },
];

const whyPoints = [
  {
    title: "Individualised care",
    desc: "Each case is assessed individually to see if a Day 5 or Day 3 embryo transfer will benefit you the most, based on embryo growth and your age/cycle history.",
  },
  {
    title: "Bench top Tri-Gas Incubators",
    desc: (
      <>
        We have a Class 10,000 clean room with mini incubators, at 6% CO
        <sub>2</sub> and 5% O<sub>2</sub> with 89% nitrogen, to simulate the in
        vivo environment and decrease oxidative damage to the embryo.
      </>
    ),
  },
  {
    title: "Doctor-led team",
    desc: "We will help guide you through your embryo development along with our senior embryologists. Transfers are done by Dr. Dahiya.",
  },
];

export function BlastocystProtocol() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="How Do We Perform a Blastocyst Transfer?"
        title={
          <>
            Step-by-Step Blastocyst
            <br className="hidden sm:inline" /> Culture and Transfer Protocol
          </>
        }
      />
      <Stagger
        delay={0.04}
        className="mt-7 grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
      >
        {protocols.map((item) => (
          <StaggerItem key={item.number} className="h-full">
            <ProtocolCard {...item} />
          </StaggerItem>
        ))}

        <StaggerItem className="h-full">
          <div className="card-highlight relative h-full min-h-[240px] w-full overflow-hidden rounded-2xl border border-[#fde2ec] bg-white shadow-[0_10px_30px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f8b4cb] hover:shadow-[0_18px_40px_rgba(232,62,116,0.12)] sm:aspect-[4/3]">
            <Image
              src="/shared-gallery/blastocyst.jpeg"
              alt="Day 5 Expanded Blastocyst under Embryology Microscope"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-center"
            />
          </div>
        </StaggerItem>
      </Stagger>
    </TreatmentSection>
  );
}

export function BlastocystWhy() {
  return (
    <TreatmentSection>
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
        {/* Left Column: Points (Span 7) */}
        <div className="lg:col-span-7">
          <TreatmentSectionHeader
            eyebrow="Our Expertise"
            title={
              <>
                Why Choose Dr. Mona Dahiya
                <br className="hidden sm:inline" /> for Blastocyst Transfer?
              </>
            }
          />

          <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
            {whyPoints.map((point, idx) => (
              <Reveal key={point.title} variant="fadeUp" delay={idx * 0.05}>
                <WhyPointRow {...point} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Right Column: Doctor seated at desk photo (/images/blastocyst.jpg) */}
        <div className="flex justify-center lg:col-span-5 lg:justify-end">
          <Reveal
            variant="scaleIn"
            delay={0.1}
            className="w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[460px]"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[22px] border-4 border-white bg-pink shadow-[0_20px_50px_rgba(232,62,116,0.12)] ring-1 ring-rose/15 sm:rounded-[26px]">
              <Image
                src="/images/blastocyst.jpg"
                alt="Dr. Mona Dahiya - Blastocyst Transfer Specialist"
                fill
                sizes="(max-width: 640px) 360px, (max-width: 1024px) 420px, 460px"
                className="object-cover object-top"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </TreatmentSection>
  );
}

export default function BlastocystProtocolAndWhy() {
  return (
    <>
      <BlastocystProtocol />
      <BlastocystWhy />
    </>
  );
}
