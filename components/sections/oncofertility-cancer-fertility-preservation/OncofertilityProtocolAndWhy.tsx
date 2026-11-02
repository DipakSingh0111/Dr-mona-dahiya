"use client";

import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  ProtocolCard,
  WhyPointRow
} from "@/components/ui/treatment";
const pathways = [
  {
    number: "1",
    title: "Pathway A: Emergency random-start egg or embryo freezing",
    bullets: [
      "10 to 12 days in total, starting on any day of the cycle",
      "Letrozole 2.5 to 5 mg daily for estrogen-sensitive cancers",
      "Scans and hormone checks every 48 hours",
      "GnRH agonist trigger at 18 mm to cut OHSS risk",
      "Eggs vitrified, or fertilised for embryo banking",
    ],
  },
  {
    number: "2",
    title: "Pathway B: Ovarian transposition (oophoropexy)",
    bullets: [
      "Laparoscopic surgery moves one or both ovaries out of the pelvic radiation field",
    ],
  },
  {
    number: "3",
    title: "Pathway C: Emergency semen freezing",
    bullets: [
      "2 to 3 samples banked within 24 to 48 hours before chemotherapy",
      "Processed and stored in liquid nitrogen at -196°C",
    ],
  },
];

const whyPoints = [
  {
    title: "Experienced clinical judgment",
    desc: "MBBS and MD Gold Medalist with 25+ years managing complex reproductive endocrinology and fertility-sparing care.",
  },
  {
    title: "Protocols for hormone-sensitive cancers",
    desc: "Letrozole+FSH co-treatment grows follicles while keeping estrogen close to natural levels.",
  },
  {
    title: "Coordination with your cancer team",
    desc: "Direct contact with medical, surgical and radiation oncologists across Delhi NCR to fit preservation into your treatment schedule.",
  },
];

export default function OncofertilityProtocolAndWhy() {
  return (
    <TreatmentSection>
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="How it works"
          title="Step-by-Step Fertility Preservation Pathways"
        />

          <Stagger
            delay={0.05}
            className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
          >
            {pathways.map((item) => (
              <StaggerItem key={item.number}>
              <ProtocolCard {...item} />
            </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div>
          <TreatmentSectionHeader
          eyebrow="Expertise & Authority"
          title="Why Trust Dr. Mona Dahiya for Oncofertility Care?"
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
                    src="/images/publications/awards/ivf-summit-certificate.jpg"
                    alt="Dr. Mona Dahiya at India IVF Summit & Awards"
                    width={480}
                    height={560}
                    className="max-h-[420px] w-full object-cover object-top sm:max-h-[480px]"
                    unoptimized
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </TreatmentSection>
  );
}
