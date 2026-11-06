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
    <TreatmentSection>
      <div className="mb-14 sm:mb-16 lg:mb-20">
        <TreatmentSectionHeader
          eyebrow="Treatment"
          title="Treatment For Recurrent Pregnancy Loss : Step By Step Process"
        />

        <Stagger
          delay={0.05}
          className="mt-7 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          {protocols.map((item) => (
            <StaggerItem key={item.number} className="h-full">
              <ProtocolCard {...item} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>

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
  );
}
