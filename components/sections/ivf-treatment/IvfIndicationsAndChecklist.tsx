"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  NumberedCard,
} from "@/components/ui/treatment";

interface IndicationItem {
  number: string;
  title: string;
  description: ReactNode;
}

const indications: IndicationItem[] = [
  {
    number: "1",
    title: "Blocked Tubes",
    description: (
      <>
        Tubes can be Blocked or not present or you can have Hydrosalpinx.{" "}
        <Link
          href="/fallopian-tube-blockage-treatment"
          className="font-medium text-blue underline underline-offset-2 transition-colors hover:text-rose"
        >
          Blocked Tubes Treatment
        </Link>
      </>
    ),
  },
  {
    number: "2",
    title: "Decreased Ovarian Reserve (Low AMH)",
    description:
      "Age related decline or early depletion of your Ovarian Reserve (AMH < 1.1ng/ml). Can be treated with micro dose flare or DuoStim.",
  },
  {
    number: "3",
    title: "Endometriosis Moderate- Severe Grade",
    description: (
      <>
        You may have Chocolate cysts or Endometriosis causing adhesions in your
        pelvis. Need to be stimulated with caution while doing IVF.{" "}
        <Link
          href="/endometriosis-fertility-treatment"
          className="font-medium text-blue underline underline-offset-2 transition-colors hover:text-rose"
        >
          Endometriosis Treatment
        </Link>
      </>
    ),
  },
  {
    number: "4",
    title: "PCOS Not ovulating or resistant to Clomiphene",
    description:
      "As they are high responders they need to be on Antagonist protocol to prevent OHSS.",
  },
  {
    number: "5",
    title: "Unexplained Infertility",
    description:
      "After 3-4 good quality IUI's without any reason found for not conceiving.",
  },
  {
    number: "6",
    title: "Male Factor",
    description: (
      <>
        If there is decreased Sperm Count or Motility which needs help from a
        Lab.{" "}
        <Link
          href="/low-sperm-count-oligospermia"
          className="font-medium text-blue underline underline-offset-2 transition-colors hover:text-rose"
        >
          Poor Sperm Count &amp; Motility
        </Link>
      </>
    ),
  },
];

const checklistItems: ReactNode[] = [
  <>
    <strong className="font-semibold text-ink">Scan of ovaries:</strong> On Day
    2/3 of your period we do a 3D TVS to assess how many Follicles you have.
  </>,
  <>
    <strong className="font-semibold text-ink">Semen Sample:</strong> A sample
    of semen will be analysed with Computer software. We also do a{" "}
    <Link
      href="/sperm-dna-fragmentation-test"
      className="font-medium text-blue underline underline-offset-2 transition-colors hover:text-rose"
    >
      Sperm DNA Fragmentation Test
    </Link>
    . Ask partner to abstain for 2-3 days before collecting sample.
  </>,
  <>
    <strong className="font-semibold text-ink">TVS with SIS &amp; </strong>
    <Link
      href="/hysteroscopy-treatment"
      className="font-medium text-blue underline underline-offset-2 transition-colors hover:text-rose"
    >
      Hysteroscopy
    </Link>
    <strong className="font-semibold text-ink">:</strong> This is to check your
    Uterine cavity and remove Polyps/Synechiae and treat Endometritis.
  </>,
  <>
    <strong className="font-semibold text-ink">Lab work:</strong> Check AMH,
    TSH, Free T4, Prolactin and FSH LH and Estradiol on Day 2/3 of your cycle.
  </>,
  <>
    <strong className="font-semibold text-ink">
      Mandatory Lab work as per ART Act:
    </strong>{" "}
    Partner also has to get tested for HIV I&amp;II, Hepatitis B (HBsAg) and
    Hepatitis C (Anti HCV) and VDRL.
  </>,
];

export default function IvfIndicationsAndChecklist() {
  return (
    <TreatmentSection>
      <div className="mb-14 sm:mb-16 lg:mb-20">
        <TreatmentSectionHeader
          eyebrow="About"
          title="Who Needs IVF Treatment?"
        />

        <Stagger
          delay={0.05}
          className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          {indications.map((item) => (
            <StaggerItem key={item.number}>
              <NumberedCard {...item} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <div>
        <TreatmentSectionHeader
          eyebrow="Before Treatment"
          title="Checklist Before starting IVF"
          subtitle="These are tests to rule out why you may not be pregnant and decide on a stimulation protocol. You may not need all of these."
        />

        <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
          {checklistItems.map((item, idx) => (
            <Reveal key={idx} variant="fadeUp" delay={idx * 0.04}>
              <div className="flex items-start gap-3.5 rounded-xl border border-[#fde2ec] bg-white px-4 py-3.5 backdrop-blur-md transition-all duration-200 hover:border-blue/50 hover:bg-[#fff0f5] sm:px-5 sm:py-4">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-rose/15 text-rose ring-1 ring-rose/35 sm:mt-0.5 sm:size-6">
                  <FaCheck className="size-2.5 sm:size-3" />
                </span>
                <p className="text-[13.5px] leading-relaxed text-ink sm:text-[14.5px]">
                  {item}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </TreatmentSection>
  );
}
