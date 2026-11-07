"use client";

import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  ProtocolCard,
  WhyPointRow,
} from "@/components/ui/treatment";

const protocols = [
  {
    number: "1",
    title: "Start mini IVF on day 2-3 of cycle",
    bullets: [
      "Scan to rule out any cyst present in the ovary",
      "Check that estrogen level is less than 50 pg/ml",
    ],
  },
  {
    number: "2",
    title: "Start oral drug for 5 days",
    bullets: [
      "Start Letrozole 2.5-5 mg or Clomiphene 50 mg",
      "This will increase your own body's FSH and LH production",
    ],
  },
  {
    number: "3",
    title: "Injection support for the next 3-5 days",
    bullets: [
      "Start rFSH/hMG injection, 75-150 units every alternate day",
      "Scan to check the number of follicles growing, between 2-5 follicles",
    ],
  },
  {
    number: "4",
    title: "Add antagonist and trigger egg",
    bullets: [
      "Add antagonist if LH level is rising high",
      "Give trigger shot when follicle reaches 18 mm",
    ],
  },
  {
    number: "5",
    title: "Oocyte retrieval and IVF",
    bullets: [
      "Egg pickup is done in 10 mins under sedation",
      "Fertilise eggs using IVF or ICSI and culture embryos till Day 3 or Day 5",
    ],
  },
  {
    number: "6",
    title: "Embryo transfer",
    bullets: [
      "You can either do a fresh embryo transfer in a natural cycle",
      "Or freeze embryos and pool them over 2 or more mild IVF cycles",
    ],
  },
];

const whyPoints = [
  {
    title: "Specialised training in Reproductive Endocrinology",
    desc: "Dr. Mona trained at Lady Hardinge, MAMC and Singapore General Hospital. We start with a lower dose of injections and do not push you onto higher doses.",
  },
  {
    title: "Embryo banking and DuoStim",
    desc: "We have experience in banking embryos and doing DuoStim, so if you have low AMH we can bank good-quality blastocysts before transferring.",
  },
  {
    title: "Class 10,000 clean room",
    desc: "We use a Class 10,000 clean room for embryo manipulation. Even 2-4 eggs can be fertilised and grown to the blastocyst stage.",
  },
];

export function MiniIvfProtocol() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="How mini IVF works"
        title="Steps Involved in the Mini IVF Protocol"
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
    </TreatmentSection>
  );
}

export function MiniIvfWhy() {
  return (
    <TreatmentSection>
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <TreatmentSectionHeader
            eyebrow="Expertise & authority"
            title={
              <>
                Why Choose Mini IVF at
                <br className="hidden sm:inline" /> Dr. Mona Dahiya’s Clinic?
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

          <Reveal variant="fadeUp" delay={0.15} className="mt-6">
            <a
              href="#book-consultation"
              className="inline-flex items-center justify-center rounded-full bg-rose px-6 py-2.5 text-[13.5px] font-semibold text-white shadow-[0_8px_20px_rgba(232,62,116,0.3)] transition-all hover:bg-rose-dark active:scale-95 sm:px-7 sm:py-3 sm:text-[14px]"
            >
              Book Appointment
            </a>
          </Reveal>
        </div>

        <div className="flex justify-center lg:col-span-5 lg:justify-end">
          <Reveal
            variant="scaleIn"
            delay={0.1}
            className="w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[460px]"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[22px] border-4 border-white bg-pink shadow-[0_20px_50px_rgba(232,62,116,0.12)] ring-1 ring-rose/15 sm:rounded-[26px]">
              <Image
                src="/images/about-mona-dahiya/book-a-appointment.jpg"
                alt="Dr. Mona Dahiya at clinic for Mini IVF"
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

export default function MiniIvfProtocolAndWhy() {
  return (
    <>
      <MiniIvfProtocol />
      <MiniIvfWhy />
    </>
  );
}
