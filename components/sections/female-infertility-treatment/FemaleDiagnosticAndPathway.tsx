"use client";

import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  WhyPointRow,
  ProtocolCard,
} from "@/components/ui/treatment";

const linkClass =
  "font-medium text-blue underline underline-offset-2 hover:text-blue-dark";

const checklist = [
  {
    title: "Are You Ovulating/Healthy Ovaries",
    desc: "Do AMH, FSH & LH Day 2 or Day 3 + Do a scan to count number of follicles",
  },
  {
    title: "Are Your Tubes Healthy",
    desc: "HSG/Hycosy can be done",
  },
  {
    title: "Any Issues With Uterine Cavity",
    desc: (
      <>
        Saline Sonography/3D Ultrasound &{" "}
        <Link href="/hysteroscopy-treatment" className={linkClass}>
          Hysteroscopy
        </Link>{" "}
        For Polyp, Fibroid &amp; Endometrial Infections
      </>
    ),
  },
  {
    title: "Check For Any Metabolic Disorders",
    desc: "Do Thyroid, Prolactin, Sugar, Fasting insulin & Vitamin D",
  },
];

const pathways = [
  {
    number: "1",
    title: "Look At Your Existing Reports",
    bullets: ["Check Cycle, Any Surgeries Done In The Past"],
  },
  {
    number: "2",
    title: "Do Required Investigations",
    bullets: [
      "Hormone Panel Day 2 Or Day 3 (AMH, FSH, LH, TSH & Prolactin)",
      "Baseline Follicle Count On Scan",
      "Evaluate Tubes & Cavity With HSG Or Hysteroscopy",
    ],
  },
  {
    number: "3",
    title: "Induce Ovulation If Not Ovulating",
    bullets: [
      "Medication Like Letrozole Will Be Given Along With Diet/Life Style Modifications",
      <>
        Do{" "}
        <Link href="/follicular-ultrasound" className={linkClass}>
          Follicular Study
        </Link>{" "}
        To See If You Are Ovulating
      </>,
    ],
  },
  {
    number: "4",
    title: "Do IUI",
    bullets: [
      <>
        <Link href="/best-iui-doctor-in-noida" className={linkClass}>
          IUI
        </Link>{" "}
        Will Be Beneficial For Most Couples Who Have No Obvious Reason/Cervical
        Factor
      </>,
      "We Recommend Doing 3-4 IUI's",
    ],
  },
  {
    number: "5",
    title: "Need To Do Surgery",
    bullets: [
      <>
        <Link href="/hysteroscopy-treatment" className={linkClass}>
          Laparoscopy &amp; Hysteroscopy
        </Link>{" "}
        May Be Required
      </>,
    ],
  },
  {
    number: "6",
    title: "Go For IVF",
    bullets: [
      "If Your Tubes Are Blocked/Endometriosis/Have Low Reserve",
      <>
        You Can Get Pregnant Through{" "}
        <Link href="/ivf-treatment" className={linkClass}>
          IVF
        </Link>{" "}
        With Embryo Culture
      </>,
    ],
  },
];

export default function FemaleDiagnosticAndPathway() {
  return (
    <TreatmentSection>
      <div className="mb-14 sm:mb-16 lg:mb-20">
        <TreatmentSectionHeader
          eyebrow="Checklist For Female Infertility"
          title="Diagnostic Checklist: The 4-Pillar Workup"
          subtitle="Following tests will help us figure out why you cant get pregnant."
        />

        <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
          {checklist.map((item, idx) => (
            <Reveal key={item.title} variant="fadeUp" delay={idx * 0.05}>
              <WhyPointRow {...item} />
            </Reveal>
          ))}
        </div>
      </div>

      <div>
        <TreatmentSectionHeader
          eyebrow="Steps We Take For Female Infertility"
          title="Step-by-Step Treatment Pathway"
        />

        <Stagger
          delay={0.05}
          className="mt-7 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          {pathways.map((item) => (
            <StaggerItem key={item.number} className="h-full">
              <ProtocolCard {...item} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </TreatmentSection>
  );
}
