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
    title: "Collect Information and Classify Patient",
    bullets: [
      "At what time did the pregnancy stop, any scan images available and any reports if sent previously.",
    ],
  },
  {
    number: "2",
    title: "Send for Investigations",
    bullets: [
      "Karyotype of both partners",
      "Antiphospholipid Profile",
      "3D Ultrasound and Diagnostic Hysteroscopy",
    ],
  },
  {
    number: "3",
    title: "If Anatomy needs correction",
    bullets: [
      "Diagnostic Hysteroscopy followed by operative procedure with cold scissors for division of Septum or Adhesions.",
    ],
  },
  {
    number: "4",
    title: "If Antiphospholipid Syndrome or Clotting disorder found",
    bullets: [
      "Start Low dose aspirin 75 mg / 150mg pre-conception",
      "Start Enoxaparin 40mg sc once positive for pregnancy.",
    ],
  },
  {
    number: "5",
    title: "If Chromosomal Abnormality found",
    bullets: [
      "Grow Embryos till Day 5",
      "Perform Laser Assisted biopsy on Blastocyst and test with Next Generation Sequencing. Transfer only Normal Embryos.",
    ],
  },
  {
    number: "6",
    title: "Support in early pregnancy",
    bullets: [
      "Frequent scans, Progesterone Support and Care till 12 weeks of pregnancy.",
    ],
  },
];

const whyPoints = [
  {
    title: "Complete Evaluation",
    desc: "We look for all causes of miscarriage be it Genetic, Anatomical or Clotting related.",
  },
  {
    title: "Use of PGT-A if required",
    desc: "We offer PGTA (if needed) for cases where translocation is seen or chromosomal abnormalities are common due to advanced maternal age.",
  },
  {
    title: "Correction of anatomy",
    desc: "Dr Mona Dahiya has extensive experience of performing Endoscopic procedures including delicate procedure like Division of Uterine Septum.",
  },
];

export default function RecurrentMiscarriageProtocolAndWhy() {
  return (
    <>
      <TreatmentSection>
        <div>
        <TreatmentSectionHeader
          eyebrow="Treatment"
          title="Treatment For Recurrent Pregnancy Loss : Step By Step Process"
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
                src="/shared-gallery/rpl miscarriage.jpeg"
                alt="Recurrent Pregnancy Loss and Miscarriage Care"
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
          eyebrow="About Us"
          title="Why choose Dr Mona Dahiya for Recurrent Pregnancy Loss ?"
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
