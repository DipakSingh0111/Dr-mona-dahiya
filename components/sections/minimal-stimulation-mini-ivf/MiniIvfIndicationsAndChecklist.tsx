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

const indications = [
  {
    number: "1",
    title: "Low AMH/AFC",
    description:
      "If your AMH value is less than 0.8 and you respond with only 2-4 follicles in normal-dose IVF cycles, then mini IVF is suggested.",
  },
  {
    number: "2",
    title: "Age more than 38-40 yrs",
    description:
      "When the quality of eggs becomes more important than the number of eggs.",
  },
  {
    number: "3",
    title: "PCOS patients at risk of OHSS",
    description:
      "Patients who tend to over-respond to injections can benefit from mini IVF, as the chances of getting OHSS in normal-dose IVF can be higher.",
  },
  {
    number: "4",
    title: "Previous history of over-response",
    description:
      "If you have experienced severe side effects, from nausea to water retention, due to high estrogen levels in a previous cycle, then mini IVF will help.",
  },
  {
    number: "5",
    title: "Affordable IVF treatment",
    description:
      "If you want to plan a baby at a lower cost, mini IVF can be opted for. It is a cheaper version of conventional injectable IVF.",
  },
  {
    number: "6",
    title: "Avoidance of high estrogen levels in the body",
    description:
      "A history of hormone-sensitive conditions that rules out large estradiol rises.",
  },
];

const checklist: { title?: string; text: ReactNode }[] = [
  {
    title: "Estimate ovarian reserve",
    text: "blood workup for AMH, FSH and LH on day 2/3 of the cycle, plus Antral Follicle Count (AFC) on ultrasound.",
  },
  {
    title: "Check thyroid and prolactin levels",
    text: "to ensure proper ovulation. Thyroid (TSH) should be in the range of 2.5 mIU/L.",
  },
  {
    title: "Semen profile of partner",
    text: (
      <>
        if any severe male factor is found, then plan for{" "}
        <Link
          href="/intracytoplasmic-sperm-injection-icsi-treatment"
          className="font-semibold text-blue underline transition-colors hover:text-rose"
        >
          ICSI Treatment
        </Link>{" "}
        as well.
      </>
    ),
  },
  {
    title: "Ultrasound pelvis",
    text: "to exclude any pathology like hydrosalpinx or intracavitary fibroid, with a 2D/3D USG scan.",
  },
  {
    text: (
      <span className="font-semibold text-ink">
        HIV I &amp; II, HBsAg, HCV and VDRL of both partners (as per the ART Act
        of India).
      </span>
    ),
  },
];

export function MiniIvfIndications() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="What is mini IVF"
        title="Who Needs Mini IVF?"
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
    </TreatmentSection>
  );
}

export function MiniIvfChecklist() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Before treatment"
        title="Tests to Be Done Before Starting Mini IVF"
        subtitle="The tests below need to be performed to evaluate you for mini IVF and decide the starting dose of the drug."
      />

      <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:gap-3.5">
        {checklist.map((item, idx) => (
          <Reveal key={idx} variant="fadeUp" delay={idx * 0.04}>
            {item.title ? (
              <ChecklistRow title={item.title} text={item.text} />
            ) : (
              <ChecklistRow>{item.text}</ChecklistRow>
            )}
          </Reveal>
        ))}
      </div>
    </TreatmentSection>
  );
}

export default function MiniIvfIndicationsAndChecklist() {
  return (
    <>
      <MiniIvfIndications />
      <MiniIvfChecklist />
    </>
  );
}
