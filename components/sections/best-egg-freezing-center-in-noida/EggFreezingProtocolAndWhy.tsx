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
    title: "Baseline mapping (days 1–3)",
    bullets: ["Scan for follicle count and protocol design."],
  },
  {
    number: "2",
    title: "Ovarian stimulation (days 3–11)",
    bullets: ["Daily injections and scans every 48 hours."],
  },
  {
    number: "3",
    title: "Trigger (day 11 or 12)",
    bullets: ["Dual trigger injections once follicles reach 17 to 19 mm."],
  },
  {
    number: "4",
    title: "Egg retrieval (day 13 or 14)",
    bullets: ["15-minute ultrasound-guided retrieval under sedation."],
  },
  {
    number: "5",
    title: "Maturity grading",
    bullets: ["Surrounding cells removed; only mature eggs are frozen."],
  },
  {
    number: "6",
    title: "Vitrification and storage",
    bullets: [
      "Eggs dehydrated, plunged into liquid nitrogen, and stored in monitored tanks.",
    ],
  },
];

const whyPoints = [
  {
    title: "Realistic, experienced counselling",
    desc: "25+ years in reproductive medicine and a Singapore General Hospital fellowship, with honest advice on how many eggs your age and reserve call for.",
  },
  {
    title: "Modern vitrification",
    desc: "Closed vitrification systems that stop ice-crystals forming and protect the egg membrane, with post-thaw survival above 95%.",
  },
  {
    title: "ART Act compliance",
    desc: "Storage and future-use follow the Indian ART Act, with clear chain-of-custody tracking.",
  },
];

export default function EggFreezingProtocolAndWhy() {
  return (
    <TreatmentSection>
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="How it works"
          title="Step-by-Step Egg Freezing Protocol"
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
          title="Why Choose Dr. Mona Dahiya for Egg Freezing?"
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
                    src="/images/about-mona-dahiya/book-a-appointment.jpg"
                    alt="Dr. Mona Dahiya - Egg Freezing counselling"
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
