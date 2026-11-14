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
    title: "Check if tubes are blocked",
    bullets: [
      "Patency test will be done mid cycle",
      "Compare with scan results and previous history",
    ],
  },
  {
    number: "2",
    title: "Check if you have a hydrosalpinx",
    bullets: [
      "Having a hydrosalpinx decreases your chances of getting pregnant via IVF",
      "If you have a hydrosalpinx we will explain how to manage it before going for ivf.",
    ],
  },
  {
    number: "3",
    title: "Tell you if you should treat tubes or go for IVF",
    bullets: [
      "If you qualify we can flush your tubes or perform a minor surgery.",
      "We will suggest you to go for IVF if your tubes are badly damaged/age factor etc",
    ],
  },
  {
    number: "4",
    title: "Perform treatment",
    bullets: [
      "Laparoscopy/performed flushing of tubes",
      "Clip tube/remove if recommended before IVF",
    ],
  },
  {
    number: "5",
    title: "After Treatment",
    bullets: [
      "If your tubes are treated you will be allowed time to try on your own.",
      "If you do not conceive we will proceed with IVF.",
    ],
  },
];

const whyPoints = [
  {
    title: "If your tubes are blocked we will advise you if IVF is a better option.",
    desc: "Trying to clear your tubes can sometimes cost precious time.",
  },
  {
    title: "Dr Mona Dahiya offers both laparoscopy and IVF",
    desc: "So you don't have to go to different doctors.",
  },
  {
    title: "We always consider your chance of ectopic pregnancy",
    desc: "Dr Mona Dahiya takes all precautions and measures to mitigate before moving forward.",
  },
];

export default function FallopianTubesProtocolAndWhy() {
  return (
    <>
      <TreatmentSection>
        <div>
        <TreatmentSectionHeader
          eyebrow="Things we can do for your blocked tubes"
          title="Step-by-Step Treatment Protocol"
          subtitle="The following are what we can do for you once we test your fallopian tubes. This can vary based on each individuals case which we will discuss in consultation."
        />

        <Stagger
          delay={0.05}
          className="mt-7 grid auto-rows-fr grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5"
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
            <div className="card-highlight relative h-full min-h-[240px] overflow-hidden rounded-2xl border border-[#fde2ec] bg-white p-2 shadow-[0_10px_30px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f8b4cb] hover:shadow-[0_18px_40px_rgba(232,62,116,0.12)] sm:min-h-[260px]">
              <Image
                src="/shared-gallery/fallopian tube blockage.jpeg"
                alt="Fallopian Tube Obstruction and Blockage Diagram"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-contain p-2"
              />
            </div>
          </StaggerItem>
        </Stagger>
      </div>
      </TreatmentSection>

      <TreatmentSection>
        <div>
        <TreatmentSectionHeader
          eyebrow="Why Us"
          title={
            <>
              Why Consult Dr. Mona Dahiya for
              <br className="hidden sm:inline" /> Blocked Fallopian Tubes?
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
          <div className="rounded-xl border border-[#fde2ec] bg-white px-5 py-4 text-[12.5px] leading-relaxed text-ink sm:text-[13px]">
            <p>
              <strong className="text-ink">Delhi:</strong> Building Number 41,
              First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar,
              New Delhi 110024
            </p>
            <p className="mt-1.5">
              <strong className="text-ink">Noida:</strong> 3rd Floor, K-06,
              above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301
            </p>
            <p className="mt-1.5">
              <strong className="text-ink">Ghaziabad:</strong> 2nd Floor, RDC,
              C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar,
              Ghaziabad, Uttar Pradesh 201002
            </p>
          </div>
        </Reveal>
      </div>
      </TreatmentSection>
    </>
  );
}
