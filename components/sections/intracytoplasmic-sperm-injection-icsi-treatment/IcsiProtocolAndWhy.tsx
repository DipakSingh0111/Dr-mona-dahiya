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
    title: "Ovarian stimulation and egg maturation (Cycle Days 2–12)",
    bullets: [
      "Targeted gonadotropin injections over 8–10 days to develop multiple mature follicles",
      "Dual trigger given 35–36 hours prior to retrieval (typically Day 11 or 12)",
    ],
  },
  {
    number: "2",
    title: "Egg denudation and maturity grading (Cycle Day 13/14 • Retrieval Day)",
    bullets: [
      "Cumulus cells removed with hyaluronidase 2–4 hours after retrieval",
      "Only mature Metaphase II (MII) eggs selected for injection",
    ],
  },
  {
    number: "3",
    title: "Advanced sperm selection (Cycle Day 13/14 • Day 0)",
    bullets: [
      "Sperm isolated via microfluidic chips or PICSI dishes",
      "High-magnification check (400x–6000x) to select the best morphology",
    ],
  },
  {
    number: "4",
    title: "Micro-injection (Cycle Day 13/14 • Day 0, 4–6 hrs post-retrieval)",
    bullets: [
      "Egg secured with polar body at 12 or 6 o'clock to protect the spindle",
      "A single immobilised sperm is injected directly into the cytoplasm",
    ],
  },
  {
    number: "5",
    title: "Embryo culture and freezing (Cycle Days 14–19 • Culture Days 1–6)",
    bullets: [
      "Fertilisation (2PN) verified at 16–18 hours post-injection",
      "Embryos cultured to Day 5/6 blastocyst stage for transfer or vitrification",
    ],
  },
];

const whyPoints = [
  {
    title: "Decades of male-factor experience",
    desc: "25+ years handling severe male-factor and zero-sperm cases, with a Singapore General Hospital fellowship.",
  },
  {
    title: "Coordinated laboratory and surgery",
    desc: "TESA or PESA runs alongside egg retrieval, so fresh, living sperm can be injected at once.",
  },
  {
    title: "Minimal egg trauma",
    desc: "Precision glass micropipettes and micro-injectors keep egg survival after injection above 95%.",
  },
];

export default function IcsiProtocolAndWhy() {
  return (
    <TreatmentSection>
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="How it works"
          title="Step-by-Step ICSI Treatment Protocol"
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
          title="Why Consult Dr. Mona Dahiya for ICSI?"
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
                    src="/images/about-mona-dahiya/dr-mona-dahiya.jpg"
                    alt="Dr. Mona Dahiya - ICSI specialist"
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
