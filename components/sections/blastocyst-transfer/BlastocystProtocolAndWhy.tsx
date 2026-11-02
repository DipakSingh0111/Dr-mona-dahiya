"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

interface ProtocolCard {
  number: string;
  title: string;
  bullets: Array<{
    text: string;
  }>;
}

const protocols: ProtocolCard[] = [
  {
    number: "1",
    title: "Egg retrieval and insemination (Day 0)",
    bullets: [
      { text: "Ultrasound-guided egg collection" },
      { text: "Conventional IVF or ICSI in the cleanroom lab" },
    ],
  },
  {
    number: "2",
    title: "Fertilisation and cleavage tracking (Days 1–3)",
    bullets: [
      { text: "Day 1: 2-pronuclear fertilisation confirmed at 16 to 18 hours" },
      { text: "Day 3: cell division, symmetry and fragmentation graded" },
    ],
  },
  {
    number: "3",
    title: "Extended culture (Days 4–5)",
    bullets: [
      { text: "Day 4: compaction into a morula" },
      { text: "Day 5 or 6: blastocyst expansion, graded on the Gardner scale (inner cell mass and trophectoderm)" },
    ],
  },
  {
    number: "4",
    title: "Biopsy and vitrification, if indicated",
    bullets: [
      { text: "A laser pulse opens the shell so 4 to 6 outer cells can be taken for PGT-A" },
      { text: "The blastocyst is vitrified within minutes" },
    ],
  },
  {
    number: "5",
    title: "Ultrasound-guided transfer (Day 5 or frozen cycle)",
    bullets: [
      { text: "Soft catheter under abdominal ultrasound" },
      { text: "Embryo placed 1.5 cm below the top of the uterus" },
    ],
  },
  {
    number: "6",
    title: "Luteal support and pregnancy test",
    bullets: [
      { text: "Micronised progesterone" },
      { text: "Blood Beta-hCG 12 to 14 days after transfer" },
    ],
  },
];

interface WhyPoint {
  title: string;
  desc: string;
}

const whyPoints: WhyPoint[] = [
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
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
      {/* Background glow highlights */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-[#0047ca]/15 blur-3xl" />
        <div className="absolute bottom-1/4 left-0 h-96 w-96 rounded-full bg-[#e83e74]/15 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px]">
        {/* ================= SECTION 1: Step-by-Step Blastocyst Culture and Transfer Protocol ================= */}
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <Reveal variant="fadeUp">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              How it works
            </p>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
              Step-by-Step Blastocyst
              <br className="hidden sm:inline" /> Culture and Transfer Protocol
            </h2>
          </Reveal>

          {/* 6 Protocol Cards Grid */}
          <Stagger delay={0.04} className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
            {protocols.map((item, idx) => (
              <StaggerItem key={idx}>
                <div className="relative flex h-full flex-col rounded-2xl border border-[#e83e74]/35 bg-gradient-to-b from-[#141b36] to-[#0a1024] p-5 sm:p-6 shadow-[0_0_24px_rgba(232,62,116,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#e83e74]/65 hover:shadow-[0_0_32px_rgba(232,62,116,0.22)]">
                  <div className="flex items-start gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#e83e74] text-[15px] font-bold text-white shadow-[0_2px_8px_rgba(232,62,116,0.4)]">
                      {item.number}
                    </span>
                    <h3 className="font-serif text-[1.05rem] font-semibold text-white sm:text-[1.12rem] leading-snug pt-0.5">
                      {item.title}
                    </h3>
                  </div>
                  <div className="mt-4 flex flex-col gap-2.5 pl-2 sm:pl-3">
                    {item.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-slate-300 sm:text-[13.5px]">
                        <span className="text-[#e83e74] select-none text-[14px] leading-none pt-0.5">↳</span>
                        <p className="flex-1">{b.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* ================= SECTION 2: Why Consult Dr. Mona Dahiya for Blastocyst Transfer? ================= */}
        <div>
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Left Column: Points (Span 7) */}
            <div className="lg:col-span-7">
              <Reveal variant="fadeUp">
                <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
                  Expertise &amp; authority
                </p>
                <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
                  Why Consult Dr.
                  <br className="hidden sm:inline" /> Mona Dahiya for
                  <br className="hidden sm:inline" /> Blastocyst Transfer?
                </h2>
              </Reveal>

              <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
                {whyPoints.map((point, idx) => (
                  <Reveal key={idx} variant="fadeUp" delay={idx * 0.05}>
                    <div className="flex items-start gap-3.5 rounded-xl border border-white/10 bg-[#091a3c]/70 px-4 py-3.5 backdrop-blur-md transition-all duration-200 hover:border-[#0047ca]/50 hover:bg-[#0c224e]/80 sm:px-5 sm:py-4">
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-[#e83e74] text-white shadow-[0_2px_8px_rgba(232,62,116,0.4)] mt-0.5">
                        <FaCheck className="size-3" />
                      </span>
                      <div>
                        <h3 className="font-serif text-[1rem] font-semibold text-white sm:text-[1.05rem]">
                          {point.title}
                        </h3>
                        <p className="mt-1 text-[13px] leading-relaxed text-slate-300 sm:text-[13.5px]">
                          {point.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Right Column: Doctor sitting at desk photo from screenshot */}
            <div className="flex justify-center lg:col-span-5 lg:justify-end">
              <Reveal variant="scaleIn" delay={0.1}>
                <div className="relative overflow-hidden rounded-[20px] border-[3px] border-white/20 shadow-[0_20px_50px_rgba(0,10,40,0.45)] sm:rounded-[24px]">
                  <Image
                    src="/images/about/ivf-patient-reviews.jpg"
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
    </section>
  );
}

