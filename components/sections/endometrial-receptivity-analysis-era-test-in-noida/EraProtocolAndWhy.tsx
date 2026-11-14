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
    title: "Mock cycle preparation - Day 1 to 14",
    bullets: [
      "Take oral Estradiol Valerate 6mg to 8mg daily",
      "Scan to look for an endometrial thickness of 7.5mm or more",
    ],
  },
  {
    number: "2",
    title: "Start Progesterone - Day 15",
    bullets: ["Note down the time when you start progesterone"],
  },
  {
    number: "3",
    title: "Biopsy your Endometrium after 120 Hours",
    bullets: [
      "Small biopsy is taken using a thin pipelle catheter without any anaesthesia. Your biopsy is then immediately placed in the solution to preserve the RNA",
    ],
  },
  {
    number: "4",
    title:
      "Your sample is sent to our NGS lab where we test for 248 genes",
    bullets: ["RNA tested against 248 implantation genes"],
  },
  {
    number: "5",
    title: "Perform a Personalised Embryo Transfer (pET)",
    bullets: [
      "Based on your result your window can fall anywhere. You may have to receive a higher dose of progesterone if your result shows pre receptive state (132 to 144 hours) or less progesterone if your result is post receptive (96 to 108 hours).",
    ],
  },
];

const whyPoints = [
  {
    title: "We only perform ERA when required",
    desc: "ERA test helps in identifying women who have shifted window of implantation. Not all IVF patients need an ERA test.",
  },
  {
    title: "Hour-specific timing",
    desc: "Progesterone is tracked to the hour so your transfer matches the mock cycle exactly.",
  },
  {
    title: "Complete receptivity check",
    desc: "CD138 testing is done alongside to rule out false readings from inflammation.",
  },
];

export default function EraProtocolAndWhy() {
  return (
    <>
      <TreatmentSection>
        <TreatmentSectionHeader
          eyebrow="Steps involved in an ERA test"
          title="Step-by-Step ERA Protocol"
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
                src="/shared-gallery/era test.jpeg"
                alt="Endometrial Receptivity Analysis ERA Test Illustration"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center"
              />
            </div>
          </StaggerItem>
        </Stagger>
      </TreatmentSection>

      <TreatmentSection>
        <TreatmentSectionHeader
          eyebrow="What makes Dr Mona unique when it comes to performing an ERA test?"
          title="Why Consult Dr. Mona Dahiya for ERA Testing?"
        />

        <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
          {whyPoints.map((point, idx) => (
            <Reveal key={point.title} variant="fadeUp" delay={idx * 0.05}>
              <WhyPointRow {...point} />
            </Reveal>
          ))}
        </div>
      </TreatmentSection>
    </>
  );
}
