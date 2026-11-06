"use client";

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
    <TreatmentSection>
      <div className="mb-14 sm:mb-16 lg:mb-20">
        <TreatmentSectionHeader
          eyebrow="Things we can do for your blocked tubes"
          title="Step-by-Step Treatment Protocol"
          subtitle="The following are what we can do for you once we test your fallopian tubes. This can vary based on each individuals case which we will discuss in consultation."
        />

        <Stagger
          delay={0.05}
          className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5"
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
  );
}
