"use client";

import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  WhyPointRow,
  ProtocolCard,
} from "@/components/ui/treatment";

const protocols = [
  {
    number: "1",
    title: "Egg retrieval and insemination (Day 0)",
    bullets: [
      "Ultrasound-guided egg collection",
      "Conventional IVF or ICSI in the cleanroom lab",
    ],
  },
  {
    number: "2",
    title: "Fertilisation and cleavage tracking (Days 1–3)",
    bullets: [
      "Day 1: 2-pronuclear fertilisation confirmed at 16 to 18 hours",
      "Day 3: cell division, symmetry and fragmentation graded",
    ],
  },
  {
    number: "3",
    title: "Extended culture (Days 4–5)",
    bullets: [
      "Day 4: compaction into a morula",
      "Day 5 or 6: blastocyst expansion, graded on the Gardner scale (inner cell mass and trophectoderm)",
    ],
  },
  {
    number: "4",
    title: "Biopsy and vitrification, if indicated",
    bullets: [
      "A laser pulse opens the shell so 4 to 6 outer cells can be taken for PGT-A",
      "The blastocyst is vitrified within minutes",
    ],
  },
  {
    number: "5",
    title: "Ultrasound-guided transfer (Day 5 or frozen cycle)",
    bullets: [
      "Soft catheter under abdominal ultrasound",
      "Embryo placed 1.5 cm below the top of the uterus",
    ],
  },
  {
    number: "6",
    title: "Luteal support and pregnancy test",
    bullets: [
      "Micronised progesterone",
      "Blood Beta-hCG 12 to 14 days after transfer",
    ],
  },
];

const whyPoints = [
  {
    title: "Case-by-case judgment",
    desc: "No fixed transfer-day policy. Embryo kinetics, age and cycle history decide whether a Day-3 or Day-5 transfer is safer for you.",
  },
  {
    title: "Class 10,000 tri-gas benchtop cleanroom",
    desc: "Mini-incubators at 6% CO2, 5% O2 and 89% N2 copy the low-oxygen conditions of the tube and uterus, limiting oxidative stress.",
  },
  {
    title: "Direct physician involvement",
    desc: "Dr. Dahiya reviews embryo progress with the senior embryologists and performs the transfer herself.",
  },
];

export default function BlastocystProtocolAndWhy() {
  return (
    <TreatmentSection className="lg:py-14">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-blue/15 blur-3xl" />
        <div className="absolute bottom-1/4 left-0 h-96 w-96 rounded-full bg-rose/15 blur-3xl" />
      </div>

      <div className="relative">
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
            eyebrow="How it works"
            title={
              <>
                Step-by-Step Blastocyst
                <br className="hidden sm:inline" /> Culture and Transfer Protocol
              </>
            }
          />
          <Stagger
            delay={0.04}
            className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
          >
            {protocols.map((item) => (
              <StaggerItem key={item.number}>
                <ProtocolCard {...item} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* ================= SECTION 2: Why Consult Dr. Mona Dahiya for Blastocyst Transfer? ================= */}
        <div>
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Left Column: Points (Span 7) */}
            <div className="lg:col-span-7">
              <TreatmentSectionHeader
          eyebrow="Expertise & authority"
          title={<>Why Consult Dr.
                  <br className="hidden sm:inline" /> Mona Dahiya for
                  <br className="hidden sm:inline" /> Blastocyst Transfer?</>}
        />

              <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
                {whyPoints.map((point, idx) => (
                  <Reveal key={idx} variant="fadeUp" delay={idx * 0.05}>
              <WhyPointRow {...point} />
            </Reveal>
                ))}
              </div>
            </div>

            {/* Right Column: Doctor sitting at desk photo from screenshot */}
            <div className="flex justify-center lg:col-span-5 lg:justify-end">
              <Reveal variant="scaleIn" delay={0.1}>
                <div className="relative overflow-hidden rounded-[20px] border-[3px] border-[#fbcfe0] shadow-[0_20px_50px_rgba(0,10,40,0.45)] sm:rounded-[24px]">
                  <Image
                    src="/images/about-mona-dahiya/iui-benefits-doctor.jpg"
                    alt="Dr. Mona Dahiya - Blastocyst Transfer Expert in Clinic"
                    width={440}
                    height={520}
                    className="max-h-[380px] sm:max-h-[440px] w-full object-cover object-top"
                  />
                </div>
              </Reveal>
            </div>
          </div>

          </div>

          </div>
    </TreatmentSection>
  );
}

