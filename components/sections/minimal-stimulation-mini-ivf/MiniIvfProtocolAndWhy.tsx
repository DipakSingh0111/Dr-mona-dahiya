"use client";

import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  ProtocolCard,
  WhyPointRow
} from "@/components/ui/treatment";
const protocols = [
  {
    number: "1",
    title: "Baseline check (cycle days 2–3)",
    bullets: [
      "Scan to rule out ovarian cysts.",
      "Baseline estradiol below 50 pg/mL.",
    ],
  },
  {
    number: "2",
    title: "Oral-first induction (days 3–7)",
    bullets: [
      "Letrozole 2.5 to 5 mg or clomiphene 50 mg.",
      "Your own FSH and LH release is encouraged naturally.",
    ],
  },
  {
    number: "3",
    title: "Low-dose injections (days 6–10)",
    bullets: [
      "75 to 150 IU of rFSH or hMG on alternate days.",
      "Scans aim for 2 to 5 dominant follicles.",
    ],
  },
  {
    number: "4",
    title: "Antagonist and trigger (days 10–12)",
    bullets: [
      "Antagonist added only if LH rises early.",
      "Trigger when lead follicles reach 18 mm.",
    ],
  },
  {
    number: "5",
    title: "Gentle egg retrieval and fertilisation (days 12–14)",
    bullets: [
      "A quick 10-minute retrieval under light sedation.",
      "IVF or ICSI, with embryos grown to Day 3 or Day 5.",
    ],
  },
  {
    number: "6",
    title: "Transfer or banking",
    bullets: [
      "Fresh transfer in a natural cycle.",
      "Or embryos frozen and pooled across 2 or more gentle cycles.",
    ],
  },
];

const whyPoints = [
  {
    title: "Reproductive endocrinology expertise",
    desc: "Trained at Lady Hardinge, Maulana Azad Medical College and Singapore General Hospital, Dr. Dahiya sets low doses deliberately instead of defaulting to maximum-dose protocols.",
  },
  {
    title: "Embryo banking and DuoStim",
    desc: "For low AMH, gentle cycles are combined with embryo banking to collect good blastocysts before transfer.",
  },
  {
    title: "Cleanroom handling of small cohorts",
    desc: "Even 2 to 4 eggs are handled in a Class 10,000 cleanroom to give each the best chance of fertilising and growing.",
  },
];

export default function MiniIvfProtocolAndWhy() {
  return (
    <TreatmentSection>
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="How it works"
          title="Step-by-Step Mini IVF Protocol"
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
          eyebrow="Expertise & authority"
          title="Why Choose Dr. Mona Dahiya for Mini IVF?"
        />

          <div className="mt-7 grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="flex flex-col gap-3.5 sm:gap-4 lg:col-span-7">
              {whyPoints.map((point, idx) => (
                <Reveal key={point.title} variant="fadeUp" delay={idx * 0.05}>
              <WhyPointRow {...point} />
            </Reveal>
              ))}
            </div>

            <div className="relative mx-auto w-full max-w-[380px] lg:col-span-5 lg:mx-0 lg:max-w-none">
              <Reveal variant="scaleIn" delay={0.08}>
                <div className="relative overflow-hidden rounded-[20px] border-[3px] border-white/70 shadow-[0_20px_50px_rgba(0,10,40,0.45)] sm:rounded-[24px]">
                  <Image
                    src="/images/about-mona-dahiya/female-infertility.jpg"
                    alt="Dr. Mona Dahiya at clinic for Mini IVF"
                    width={480}
                    height={560}
                    className="max-h-[420px] w-full object-cover object-top sm:max-h-[480px]"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </TreatmentSection>
  );
}
