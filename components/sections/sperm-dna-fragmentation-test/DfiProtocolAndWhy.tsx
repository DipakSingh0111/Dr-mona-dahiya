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
    title: "Collection of sample",
    bullets: [
      "Abstinence for a particular number of days as advised.",
      "Will be done in our lab.",
    ],
  },
  {
    number: "2",
    title: "Find out your DFI level",
    bullets: [
      "Normal range of DFI is less than 15%.",
      "DFI from 15%-25% is said to be moderate. We can advise you on few changes you can make.",
      "Higher than 25%-30% can be treated.",
    ],
  },
  {
    number: "3",
    title: "Identify the cause of DFI",
    bullets: [
      "Varicocele correction / Cure any infection if any.",
      "Change lifestyle habits and take antioxidants for next 3 months.",
    ],
  },
  {
    number: "4",
    title: "Do a repeat DFI test",
    bullets: [
      "Check DFI levels after 3 months.",
      "If levels have come down you can move forward with your treatment.",
    ],
  },
  {
    number: "5",
    title: "Pick best sperms for ICSI",
    bullets: [
      "If DFI level is still high we can use sperms from testes.",
      "Based on which we will perform ICSI.",
    ],
  },
];

const whyPoints = [
  {
    title: "Educate you about your report",
    desc: "Your DFI report will be explained to you.",
  },
  {
    title: "Look at both partner issues",
    desc: "While treating one partner we keep other in mind too.",
  },
  {
    title: "Treat you according to your requirement",
    desc: "Depending on your needs we can offer treatments from lifestyle modifications to ICSI with testes sperms.",
  },
];

export default function DfiProtocolAndWhy() {
  return (
    <>
      <TreatmentSection>
        <div>
        <TreatmentSectionHeader
          eyebrow="Procedure for treatment"
          title="Step-by-Step Treatment Protocol"
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
            <div className="card-highlight relative h-full min-h-[240px] overflow-hidden rounded-2xl border border-[#fde2ec] bg-white shadow-[0_10px_30px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f8b4cb] hover:shadow-[0_18px_40px_rgba(232,62,116,0.12)] sm:min-h-[260px]">
              <Image
                src="/shared-gallery/sperm dfi.jpeg"
                alt="Sperm DNA Fragmentation Index DFI Test"
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
          eyebrow="Why choose us?"
          title={
            <>
              Why Consult Dr. Mona Dahiya for Sperm DNA Fragmentation?
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
      </div>
      </TreatmentSection>
    </>
  );
}
