"use client";

import type { ReactNode } from "react";
import Link from "next/link";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  NumberedCard,
  ChecklistRow,
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

const checklistItems: { title: ReactNode; text: ReactNode }[] = [
  {
    title: "Scan of ovaries",
    text: "On Day 2/3 of your period we do a 3D TVS to assess how many Follicles you have.",
  },
  {
    title: "Semen Sample",
    text: (
      <>
        A sample of semen will be analysed with Computer software. We also do a{" "}
        <Link
          href="/sperm-dna-fragmentation-test"
          className="font-medium text-blue underline underline-offset-2 transition-colors hover:text-rose"
        >
          Sperm DNA Fragmentation Test
        </Link>
        . Ask partner to abstain for 2-3 days before collecting sample.
      </>
    ),
  },
  {
    title: (
      <>
        TVS with SIS &amp;{" "}
        <Link
          href="/hysteroscopy-treatment"
          className="font-medium text-blue underline underline-offset-2 transition-colors hover:text-rose"
        >
          Hysteroscopy
        </Link>
      </>
    ),
    text: "This is to check your Uterine cavity and remove Polyps/Synechiae and treat Endometritis.",
  },
  {
    title: "Lab work",
    text: "Check AMH, TSH, Free T4, Prolactin and FSH LH and Estradiol on Day 2/3 of your cycle.",
  },
  {
    title: "Mandatory Lab work as per ART Act",
    text: "Partner also has to get tested for HIV I&II, Hepatitis B (HBsAg) and Hepatitis C (Anti HCV) and VDRL.",
  },
];

export default function IvfIndicationsAndChecklist() {
  return (
    <>
      <TreatmentSection>
        <div>
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
      </TreatmentSection>

      <TreatmentSection>
        <div>
        <TreatmentSectionHeader
          eyebrow="Before Treatment"
          title="Checklist Before starting IVF"
          subtitle="These are tests to rule out why you may not be pregnant and decide on a stimulation protocol. You may not need all of these."
        />

        <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
          {checklistItems.map((item, idx) => (
            <Reveal key={idx} variant="fadeUp" delay={idx * 0.04}>
              <ChecklistRow title={item.title} text={item.text} />
            </Reveal>
          ))}
        </div>
      </div>
      </TreatmentSection>
    </>
  );
}
