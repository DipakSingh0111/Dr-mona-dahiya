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
    title: "Stimulate the Ovaries",
    bullets: [
      "Retrieve eggs after stimulation",
      "Embryos are developed till Day 3 or blastocyst",
    ],
  },
  {
    number: "2",
    title: "Embryo Selection",
    bullets: [
      "Select embryos with a good quality grade to freeze",
      "Biopsy for genetics (if required)",
    ],
  },
  {
    number: "3",
    title: "Freeze Embryos",
    bullets: [
      "Embryos are placed in vitrification media to freeze quickly",
      "Put in a carrier and labelled",
    ],
  },
  {
    number: "4",
    title: "Store the Embryos",
    bullets: [
      "Stored in a liquid nitrogen tank",
      "Records maintained and checked periodically",
    ],
  },
  {
    number: "5",
    title: "Thaw Embryos",
    bullets: [
      "Once ready to use, embryos are thawed and transferred",
      "The endometrium is prepared for frozen embryo transfer",
    ],
  },
];

const whyPoints = [
  {
    title: "Focus on Blastocyst Formation and Higher Pregnancy Rate",
    desc: "Instead of routinely freezing Day 3 embryos, we culture the embryos till the blastocyst stage (Day 5/6), which yields a higher post-thaw survival rate (>95%), with an individualised approach to vitrifying them.",
  },
  {
    title: "Faster Vitrification Process to ensure no ice crystal formation",
    desc: "We use the ultra-rapid vitrification technique to freeze the embryos at a temperature of −196°C. Double witnessing is done at every stage to ensure 100% safety of your embryos.",
  },
  {
    title: "Higher Pregnancy Rate with Frozen Embryo Transfer",
    desc: "As there is no hormonal stimulation during transfer, the endometrium can be prepared for pregnancy rates 10%–15% higher than a fresh embryo transfer.",
  },
];

export function EmbryoFreezingProtocol() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Embryo Freezing (Cryopreservation) Treatment Procedure"
        title="Step-by-Step Treatment Protocol"
        subtitle="Understand the different steps involved. This may vary based on your requirements discussed at the clinic."
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
              src="/shared-gallery/Embryo freezing.jpeg"
              alt="Embryo Cryopreservation and Liquid Nitrogen Storage"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-center"
            />
          </div>
        </StaggerItem>
      </Stagger>
    </TreatmentSection>
  );
}

export function EmbryoFreezingWhy() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Experience and Knowledge"
        title="Why Choose Dr. Mona Dahiya For Embryo Freezing?"
      />

      <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
        {whyPoints.map((point, idx) => (
          <Reveal key={point.title} variant="fadeUp" delay={idx * 0.05}>
            <WhyPointRow {...point} />
          </Reveal>
        ))}
      </div>
    </TreatmentSection>
  );
}

export function EmbryoFreezingCase() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="From the clinic"
        title="Clinical Case Insight"
      />

      <Reveal variant="fadeUp" delay={0.06} className="mt-6">
        <div className="card-highlight rounded-2xl border border-[#fde2ec] border-l-4 border-l-rose bg-white p-6 shadow-[0_8px_24px_rgba(232,62,116,0.06)] sm:p-7">
          <p className="font-serif text-[14.5px] leading-relaxed font-semibold text-ink sm:text-[16px]">
            A patient at risk of OHSS had all her embryos vitrified and waited a
            cycle. The prepared frozen transfer that followed led to a healthy
            pregnancy.
          </p>
          <p className="mt-3 text-[12px] text-ink/65">
            Details changed to protect patient privacy. Individual results vary.
          </p>
        </div>
      </Reveal>
    </TreatmentSection>
  );
}

export default function EmbryoFreezingProtocolWhyAndCase() {
  return (
    <>
      <EmbryoFreezingProtocol />
      <EmbryoFreezingWhy />
      <EmbryoFreezingCase />
    </>
  );
}
