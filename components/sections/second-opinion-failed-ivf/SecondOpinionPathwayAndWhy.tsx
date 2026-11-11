"use client";

import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  ProtocolCard,
  WhyPointRow,
  type ProtocolCardItem,
} from "@/components/ui/treatment";

const steps: ProtocolCardItem[] = [
  {
    number: "1",
    title: "Record Evaluation and Timeline of IVF",
    bullets: [
      "Analyse your IVF protocol and hormonal chart",
      "Evaluate your embryology report",
    ],
  },
  {
    number: "2",
    title: "Evaluate Your Uterine Cavity",
    bullets: [
      <>
        Do a 3D sonohysterography or{" "}
        <Link
          href="/hysteroscopy-treatment"
          className="font-medium text-blue underline underline-offset-2 transition-colors hover:text-rose"
        >
          Operative Hysteroscopy
        </Link>{" "}
        if required to look for defects
      </>,
      "If any history of chronic endometritis we will do a biopsy with CD 138 stains",
    ],
  },
  {
    number: "3",
    title: "Test Your Partner's Sperm Quality",
    bullets: [
      <>
        Halosperm. Read more at{" "}
        <Link
          href="/sperm-dna-fragmentation-test"
          className="font-medium text-blue underline underline-offset-2 transition-colors hover:text-rose"
        >
          Sperm DNA Fragmentation Test
        </Link>
      </>,
    ],
  },
  {
    number: "4",
    title: "Check Your Window of Implantation",
    bullets: [
      <>
        If you had failed with good grade blastocyst we may suggest you to do an{" "}
        <Link
          href="/endometrial-receptivity-analysis-era-test-in-noida"
          className="font-medium text-blue underline underline-offset-2 transition-colors hover:text-rose"
        >
          ERA Test
        </Link>
      </>,
    ],
  },
  {
    number: "5",
    title: "Change Your Protocol",
    bullets: [
      "Depending on your ovarian reserve and other findings we may choose to do DuoStim (for low AMH). Do a microfluidic ICSI if sperm DFI is high or change length of downregulation if adenomyosis present",
    ],
  },
];

const whyPoints = [
  {
    title: "Focus on Root Cause",
    desc: "Instead of blindly repeating your previous IVF cycle, Dr Mona will know why your cycle failed.",
  },
  {
    title: "Expert Guidance",
    desc: "All consultations and procedures will be performed by Dr Mona only.",
  },
  {
    title: "Labs Follow Clean Room Standards",
    desc: "Mini incubators, laser and clean rooms 10,000, to ensure healthy blastocyst grow in incubator.",
  },
];

export default function SecondOpinionPathwayAndWhy() {
  return (
    <TreatmentSection>
      <div className="mb-14 sm:mb-16 lg:mb-20">
        <TreatmentSectionHeader
          eyebrow="Process Followed"
          title="Step-by-Step Second-Opinion Pathway"
        />

        <Stagger
          delay={0.05}
          className="mt-7 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          {steps.map((step) => (
            <StaggerItem key={step.number} className="h-full">
              <ProtocolCard {...step} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <div>
        <TreatmentSectionHeader
          eyebrow="About Us"
          title="Why Consult Dr. Mona Dahiya for a Second Opinion?"
        />

        <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
          {whyPoints.map((point, idx) => (
            <Reveal key={point.title} variant="fadeUp" delay={idx * 0.05}>
              <WhyPointRow {...point} />
            </Reveal>
          ))}
        </div>
      </div>
    </TreatmentSection>
  );
}
