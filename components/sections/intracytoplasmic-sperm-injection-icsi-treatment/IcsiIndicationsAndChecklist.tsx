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
    title: "Low sperm count/motility and abnormal morphology",
    description: (
      <>
        Sperm count less than 5 million/ml and motility less than 20%, or abnormal
        morphology more than 98%. Read more about{" "}
        <Link
          href="/low-sperm-count-oligospermia"
          className="font-medium text-blue underline underline-offset-2 transition-colors hover:text-rose"
        >
          low sperm count and motility
        </Link>
        .
      </>
    ),
  },
  {
    number: "2",
    title: "Azoospermia",
    description: (
      <>
        If there is absence of sperm in the semen due to blocked ducts or testicular
        problems, we can take sperm from the testes or epididymis. Read more about{" "}
        <Link
          href="/surgical-sperm-retrieval-tesa-pesa"
          className="font-medium text-blue underline underline-offset-2 transition-colors hover:text-rose"
        >
          surgical sperm retrieval
        </Link>
        .
      </>
    ),
  },
  {
    number: "3",
    title: "High sperm DNA fragmentation",
    description:
      "If sperm DNA fragmentation is more than 25%, there are high chances of fertilization failure in IVF, or embryos will arrest early.",
  },
  {
    number: "4",
    title: "Previous total fertilization failure",
    description:
      "If you had IVF and none of the eggs fertilized, then ICSI is recommended.",
  },
  {
    number: "5",
    title: "Preimplantation Genetic Testing",
    description:
      "If we need to do PGT-A or PGT-M, we need to perform ICSI so that no extra paternal DNA sticks to the zona pellucida.",
  },
  {
    number: "6",
    title: "Frozen Eggs",
    description:
      "The zona pellucida becomes thick on freezing and thawing, therefore ICSI is required.",
  },
];

const checklist: { text: ReactNode }[] = [
  {
    text: "Semen analysis on a computerised system. We will check velocity (VAP, VSL, VCL) and progressive motility percentage.",
  },
  {
    text: (
      <>
        Sperm Chromatin Dispersion Test, to see how many single and double strand breaks
        are present in your sperm. Read more about the{" "}
        <Link
          href="/sperm-dna-fragmentation-test"
          className="font-medium text-blue underline underline-offset-2 transition-colors hover:text-rose"
        >
          sperm DNA fragmentation index
        </Link>
        .
      </>
    ),
  },
  {
    text: "Hypoosmotic Swelling Test. This is used to find live but immobile sperm which we can use for ICSI, in case of TESA.",
  },
  {
    text: "Karyotyping and Y chromosome microdeletion (AZFa, AZFb, AZFc), in case we need to do surgical sperm retrieval.",
  },
  {
    text: "Check female factors like ovarian reserve (AMH, AFC) and the uterine cavity, so that the endometrium is prepared for the embryo.",
  },
];

export default function IcsiIndicationsAndChecklist() {
  return (
    <>
      <TreatmentSection>
        <div>
        <TreatmentSectionHeader
          eyebrow="Know More About The Procedure"
          title="Who Needs ICSI Treatment?"
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
          eyebrow="Before treatment"
          title="Workup Before ICSI"
          subtitle="We will perform the following tests to assess if you require ICSI."
        />

        <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
          {checklist.map((item, idx) => (
            <Reveal key={idx} variant="fadeUp" delay={idx * 0.04}>
              <div className="flex items-center gap-3.5 rounded-xl border border-[#fde2ec] bg-white px-4 py-3.5 backdrop-blur-md transition-all duration-200 hover:border-blue/50 hover:bg-[#fff0f5] sm:px-5 sm:py-4">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-rose to-rose-dark text-white shadow-[0_4px_12px_rgba(232,62,116,0.3)] sm:size-6">
                  <FaCheck className="size-2.5 sm:size-3" />
                </span>
                <p className="text-[13.5px] leading-relaxed text-black sm:text-[14.5px]">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      </TreatmentSection>
    </>
  );
}
