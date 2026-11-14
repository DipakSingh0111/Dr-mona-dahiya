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
    title: "Stimulation and Egg Maturation (Day 2-12 of Cycle):",
    bullets: [
      "Gonadotropins are given for 8-10 days to grow follicles.",
      "Trigger shot given 35-36 hours before retrieval (usually Day 11 or 12).",
    ],
  },
  {
    number: "2",
    title: "Egg Denudation and Selection of Mature Eggs (Day 13/14 of Cycle – Retrieval Day):",
    bullets: [
      "Cumulus cells are removed 2-4 hours after retrieval.",
      "Only mature eggs (Metaphase II) are taken for ICSI.",
    ],
  },
  {
    number: "3",
    title: "Selection of Best Sperm (Day 13/14 of Cycle – Day 0):",
    bullets: [
      "Sperm are sorted on microfluidic chips or PICSI plates.",
      "The best sperm is selected based on morphology under high magnification (400x-6000x).",
    ],
  },
  {
    number: "4",
    title:
      "Injection of Sperm Inside the Egg (Day 13/14 of Cycle – Day 0, 4-6 hrs after Retrieval):",
    bullets: [
      "The egg is held with the polar body at the 12 or 6 o’clock position.",
      "A single sperm is injected inside the egg after immobilizing it.",
    ],
  },
  {
    number: "5",
    title: "Embryo Culture and Cryopreservation (Day 14-19 of Cycle – Embryo Culture Days 1-5):",
    bullets: [
      "Fertilisation is confirmed after 16-18 hours (2 pronuclei seen).",
      "Embryos are cultured till Day 5/6 for transfer or cryopreservation.",
    ],
  },
];

const whyPoints = [
  {
    title: "Experience With Male Factor Problems",
    desc: "We have been dealing with male factor infertility for more than 25 years, even with zero sperm cases. Dr. Mona completed her fellowship at Singapore General Hospital.",
  },
  {
    title: "Lab Procedures & Surgery Under One Roof",
    desc: "We do TESA/PESA on the same day as egg retrieval, so that we can inject fresh, live sperm.",
  },
  {
    title: "Minimal Damage To Egg",
    desc: "We use glass micropipettes and microinjection, which cause minimal trauma to eggs. Survival rate after ICSI is above 95%.",
  },
];

export default function IcsiProtocolAndWhy() {
  return (
    <>
      <TreatmentSection>
        <div>
        <TreatmentSectionHeader
          eyebrow="How it works"
          title="Step-by-Step ICSI Treatment Protocol"
        />

        <Stagger
          delay={0.05}
          className="mt-7 grid auto-rows-fr grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          {protocols.map((item) => (
            <StaggerItem
              key={item.number}
              className="h-full min-h-[240px] sm:min-h-[260px]"
            >
              <ProtocolCard {...item} />
            </StaggerItem>
          ))}
          <StaggerItem className="h-full min-h-[240px] sm:min-h-[260px]">
            <div className="card-highlight relative h-full min-h-[240px] overflow-hidden rounded-2xl border border-[#fde2ec] bg-white shadow-[0_10px_30px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f8b4cb] hover:shadow-[0_18px_40px_rgba(232,62,116,0.12)] sm:min-h-[260px]">
              <Image
                src="/shared-gallery/icsi treatment.jpeg"
                alt="ICSI Intracytoplasmic Sperm Injection Microinjection"
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
          eyebrow="Our Expertise"
          title="Reasons To Choose Dr. Mona For ICSI"
        />

        <div className="mt-7 grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col justify-center gap-4 sm:gap-5 lg:col-span-7">
            {whyPoints.map((point, idx) => (
              <Reveal key={point.title} variant="fadeUp" delay={idx * 0.05}>
                <WhyPointRow {...point} />
              </Reveal>
            ))}
          </div>

          <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px] lg:col-span-5 lg:mx-0 lg:max-w-[390px]">
            <Reveal variant="scaleIn" delay={0.08}>
              <div className="relative aspect-[5/6] w-full overflow-hidden rounded-[20px] border-[3px] border-white/70 shadow-[0_20px_50px_rgba(0,10,40,0.45)] sm:rounded-[24px]">
                <Image
                  src="/images/ICSI.jpg"
                  alt="Dr. Mona Dahiya - ICSI Specialist"
                  fill
                  quality={100}
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
      </TreatmentSection>
    </>
  );
}
