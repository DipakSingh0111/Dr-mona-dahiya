"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  NumberedCard,
  ChecklistRow,
  type NumberedCardItem,
} from "@/components/ui/treatment";

const whenCards: NumberedCardItem[] = [
  {
    number: "1",
    title: "Had one or more failed transfers of blastocysts",
    description: (
      <>
        Your blastocyst had a good grade but still didn&apos;t implant. Find
        more on{" "}
        <Link
          href="/recurrent-implantation-failure-rif"
          className="font-medium text-blue underline underline-offset-2 transition-colors hover:text-rose"
        >
          Recurrent Implantation Failure
        </Link>
        .
      </>
    ),
  },
  {
    number: "2",
    title: "Embryos don't divide past Day 3 to Day 5 stage",
    description:
      "Repeated failure can be caused by sperm DNA fragmentation and genetic defect in embryos.",
  },
  {
    number: "3",
    title: "Low fertilisation rate",
    description:
      "Have consistent fertilisation rate of less than 50%, even with a normal semen report.",
  },
  {
    number: "4",
    title: "Low endometrium thickness",
    description:
      "Cycles getting cancelled due to lining being <7 mm every time.",
  },
  {
    number: "5",
    title: "Were told to use donor egg",
    description: (
      <>
        Try methods on your own eggs before going to donor, like DuoStim and
        micro-dose flare. Know more about{" "}
        <Link
          href="/best-low-amh-treatment-in-noida"
          className="font-medium text-blue underline underline-offset-2 transition-colors hover:text-rose"
        >
          Low AMH Treatment
        </Link>
        .
      </>
    ),
  },
];

const records = [
  "Your previous IVF protocol: day-by-day injections taken, antagonist added and when, oestradiol levels and what was the trigger used.",
  "Number of eggs collected and their maturity level. Did they show fertilization or not? How many cells did they develop till Day 3 or Day 5?",
  "If you had a laparoscopy or hysteroscopy/ sonohysterography reports.",
  "Semen report: computer-assisted semen analysis. If you had done a sperm DNA fragmentation test/ halosperm share that too.",
  "If you had a 3D sonography, check for any adenomyosis/junctional zone or hydrosalpinx.",
];

export default function SecondOpinionWhenAndRecords() {
  return (
    <>
      <TreatmentSection>
        <div>
        <TreatmentSectionHeader
          eyebrow="Get an Independent Second Opinion if:"
          title={
            <>
              When Should You Get an
              <br />
              Independent Second Opinion?
            </>
          }
        />

        <Stagger
          delay={0.05}
          className="mt-7 grid auto-rows-fr grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          {whenCards.map((card) => (
            <StaggerItem key={card.number} className="h-full">
              <NumberedCard {...card} />
            </StaggerItem>
          ))}
          <StaggerItem className="h-full">
            <div className="card-highlight relative h-full min-h-[210px] overflow-hidden rounded-2xl border border-[#fde2ec] bg-white shadow-[0_10px_30px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f8b4cb] hover:shadow-[0_18px_40px_rgba(232,62,116,0.12)] sm:min-h-[225px]">
              <Image
                src="/shared-gallery/SECOND OPINION.jpeg"
                alt="Second Opinion for Failed IVF Cycle"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center"
              />
            </div>
          </StaggerItem>
        </Stagger>
      </div>
      </TreatmentSection>

      <TreatmentSection>
        <div>
        <TreatmentSectionHeader
          eyebrow="Things to Know"
          title="Records to Bring Along to Your Failed IVF Cycle Review"
          subtitle="If you can provide us with the following documents we can avoid doing tests on you."
        />

        <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
          {records.map((item, idx) => (
            <Reveal key={item} variant="fadeUp" delay={idx * 0.04}>
              <ChecklistRow>
                <span>{item}</span>
              </ChecklistRow>
            </Reveal>
          ))}
        </div>
      </div>
      </TreatmentSection>
    </>
  );
}
