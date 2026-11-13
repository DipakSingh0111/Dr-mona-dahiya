"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  ProtocolCard,
  WhyPointRow,
} from "@/components/ui/treatment";

const protocols: {
  number: string;
  title: string;
  bullets: ReactNode[];
}[] = [
  {
    number: "1",
    title: "Start of Cycle",
    bullets: [
      "Do an Ultrasound to check if any cyst is present.",
      "Check your Blood levels to make sure Progesterone is < 1 ng/ml and Estradiol < 50pg/ml before starting.",
    ],
  },
  {
    number: "2",
    title: "Start Stimulating your Ovaries",
    bullets: [
      "Begin injections of FSH or hMG. These are recombinant drugs that will help grow more follicles.",
      "Scan and check Estradiol level every other day.",
    ],
  },
  {
    number: "3",
    title: "Give Trigger Shot",
    bullets: [
      "When 2 or more follicles reach a size of 17-19mm we inject with r-hCG + GnRH Agonist.",
    ],
  },
  {
    number: "4",
    title: "Egg Pick up",
    bullets: [
      "Pick up eggs with minimal sedation and scan. Will take approx 15-20 mins.",
      "Wash sperm and process them using density gradient method.",
    ],
  },
  {
    number: "5",
    title: "Grow Embryos",
    bullets: [
      "We will either do IVF or ICSI in our own incubators in a certified class 10000 clean room.",
      "Grow embryos to Blastocyst stage which is Day 5 or 6.",
    ],
  },
  {
    number: "6",
    title: "Transfer Embryo",
    bullets: [
      "Transfer blastocyst fresh or frozen using a soft catheter. Will be placed 1.5cm away from fundus. No sedation is needed.",
      <>
        Freeze remaining Embryos if any. Know More about{" "}
        <Link
          href="/embryo-cryopreservation"
          className="font-bold text-blue underline underline-offset-2 transition-colors hover:text-rose"
        >
          Freezing your Embryos
        </Link>
      </>,
    ],
  },
  {
    number: "7",
    title: "Pregnancy Test",
    bullets: [
      "Start Progesterone tablets/injections after Egg Retrieval.",
      "Test for pregnancy on Day 9-11 after transfer (Day 14 after Egg pick up).",
    ],
  },
];

const whyPoints = [
  {
    title: "Gold-medalist clinical training:",
    desc: "MBBS (Gold Medalist, Lady Hardinge Medical College), MD in Obstetrics & Gynaecology (Gold Medalist, Maulana Azad Medical College) and DNB.",
  },
  {
    title: "International fellowship:",
    desc: "Did a Fellowship in ART from Singapore General Hospital.",
  },
  {
    title: "Latest Lab Practices:",
    desc: "Using the latest technology like benchtop incubators, Laser Assisted Hatching and Micro fluidic technique to process sperm. Do PGT-A/M if needed.",
  },
  {
    title: "Direct physician care:",
    desc: "Consultations, follicle scans, egg retrievals and embryo transfers are done by Dr. Dahiya herself.",
  },
];

export default function IvfProtocolAndWhy() {
  return (
    <TreatmentSection>
      <div className="mb-14 sm:mb-16 lg:mb-20">
        <TreatmentSectionHeader
          eyebrow="How is IVF done?"
          title="Step-by-Step IVF Treatment Protocol"
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
          eyebrow="Education"
          title="Why choose Dr. Mona Dahiya for your IVF Treatment"
        />

        <div className="mt-7 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col justify-between gap-3.5 sm:gap-4 lg:col-span-7">
            {whyPoints.map((point, idx) => (
              <Reveal key={point.title} variant="fadeUp" delay={idx * 0.05}>
                <WhyPointRow {...point} />
              </Reveal>
            ))}
          </div>

          <div className="relative mx-auto w-full max-w-[440px] lg:col-span-5 lg:mx-0 lg:max-w-none h-full min-h-[380px] sm:min-h-[440px] lg:min-h-0">
            <Reveal variant="scaleIn" delay={0.08} className="h-full">
              <div className="relative h-full w-full min-h-[380px] sm:min-h-[440px] lg:min-h-full overflow-hidden rounded-[20px] border-4 border-white shadow-[0_16px_40px_rgba(232,62,116,0.12)] sm:rounded-[24px]">
                <Image
                  src="/images/ivf-treatment.jpg"
                  alt="Dr. Mona Dahiya - IVF Treatment Specialist"
                  fill
                  quality={100}
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </TreatmentSection>
  );
}
