"use client";

import { FaCheck, FaStar } from "react-icons/fa";
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
    title: "Review and stratification",
    bullets: [
      { text: "Timing of losses, past scans and any tissue or genetic reports" },
    ],
  },
  {
    number: "2",
    title: "Laboratory workup",
    bullets: [
      { text: "Karyotype of both partners" },
      { text: "Full antiphospholipid panel" },
      { text: "3D scan and diagnostic hysteroscopy" },
    ],
  },
  {
    number: "3",
    title: "Pathway A: anatomical correction",
    bullets: [
      { text: "Operative hysteroscopy with cold scissors to divide a septum or clear adhesions" },
    ],
  },
  {
    number: "4",
    title: "Pathway B: anticoagulation (APS or thrombophilia)",
    bullets: [
      { text: "Low-dose aspirin 75 to 150 mg before conception" },
      { text: "Enoxaparin 40 mg daily once pregnancy is confirmed" },
    ],
  },
  {
    number: "5",
    title: "Pathway C: IVF with PGT-A (chromosomal causes)",
    bullets: [
      { text: "Embryos grown to Day 5" },
      { text: "Laser biopsy and NGS select only chromosomally normal embryos" },
    ],
  },
  {
    number: "6",
    title: "Early pregnancy support",
    bullets: [
      { text: "Weekly scans, progesterone support and close care through 12 weeks" },
    ],
  },
];

interface WhyPoint {
  title: string;
  desc: string;
}

const whyPoints: WhyPoint[] = [
  {
    title: "Systematic investigation",
    desc: "Genetic, anatomical, clotting and immune causes are all checked instead of repeating the same empirical prescriptions.",
  },
  {
    title: "PGT-A when it helps",
    desc: "For translocations or age-related chromosomal problems, testing embryos lets only euploid ones be transferred.",
  },
  {
    title: "Surgical correction",
    desc: "Gold-medallist training and endoscopic experience for delicate hysteroscopic septum resection.",
  },
];

interface PatientReview {
  title?: string;
  body: string;
  initial: string;
  name: string;
  source: string;
}

const reviews: PatientReview[] = [
  {
    title: "Fertility Specialist Who Truly Cares",
    body: "Dr. Mona's infectious energy and positivity are truly remarkable. She has a unique ability to make her patients feel at ease and understood, and her passion for helping women navigate the fertility journey is inspiring. Her dedication to empowering women with knowledge and comfort is unparalleled, and we feel grateful to have had the opportunity to get treated by her. If you're seeking a fertility specialist who truly cares, look no further than Dr. Mona - she's a true gem!",
    initial: "V",
    name: "Vijay Veer",
    source: "Patient review",
  },
  {
    body: "We are forever grateful to Dr. Dahiya for helping us start our family. As a leading fertility specialist, she customized a treatment plan that worked for us when others couldn't. Her expertise in infertility treatment is remarkable, and her warm demeanor made the journey less stressful. She's simply the best IVF doctor.",
    initial: "M",
    name: "Md Kalam",
    source: "Google patient review",
  },
  {
    body: "We were struggling to conceive for years, but Dr. Mona Dahiya made our dream come true! Her expertise in IVF treatment and compassion are unbeatable. We are now happy that we have got twins in one go. We Thank you, Dr. Mona for your dedication and care.",
    initial: "R",
    name: "Radha Kishan",
    source: "Google patient review",
  },
];

export default function RecurrentMiscarriageProtocolAndWhy() {
  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1440px]">
        {/* ================= SECTION 1: Step-by-Step Treatment Protocol ================= */}
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <Reveal variant="fadeUp">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              How it works
            </p>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
              Step-by-Step Treatment Protocol
            </h2>
          </Reveal>

          <Stagger delay={0.05} className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
            {protocols.map((item, idx) => (
              <StaggerItem key={idx}>
                <div className="relative flex h-full flex-col rounded-2xl border border-[#e83e74]/35 bg-gradient-to-b from-[#141b36] to-[#0a1024] p-5 sm:p-6 shadow-[0_0_24px_rgba(232,62,116,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#e83e74]/65 hover:shadow-[0_0_32px_rgba(232,62,116,0.22)]">
                  {/* Header: Number pill + Title */}
                  <div className="flex items-start gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#e83e74] text-[15px] font-bold text-white shadow-[0_2px_8px_rgba(232,62,116,0.4)]">
                      {item.number}
                    </span>
                    <div className="pt-0.5">
                      <h3 className="font-serif text-[1.05rem] font-semibold text-white sm:text-[1.12rem] leading-snug">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Bullet hierarchy with arrows */}
                  <div className="mt-4 flex flex-col gap-2.5 pl-2 sm:pl-3">
                    {item.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-slate-300 sm:text-[13.5px]">
                        <span className="text-[#e83e74] select-none text-[14px] leading-none pt-0.5">↳</span>
                        <p className="flex-1">{bullet.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* ================= SECTION 2: Why Consult Dr. Mona Dahiya for Recurrent Miscarriage? ================= */}
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <Reveal variant="fadeUp">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              Expertise &amp; authority
            </p>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
              Why Consult Dr. Mona Dahiya for Recurrent Miscarriage?
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

        {/* ================= SECTION 3: What Patients Say About Dr. Mona ================= */}
        <div id="patient-reviews">
          <Reveal variant="fadeUp">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              Patient reviews
            </p>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
              What Patients Say About Dr. Mona
            </h2>
            <p className="mt-2 text-[14px] text-slate-300 sm:text-[15px]">
              Individual experiences in patients&apos; own words.
            </p>
          </Reveal>

          <Stagger delay={0.05} className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
            {reviews.map((rev, idx) => (
              <StaggerItem key={idx}>
                <div className="relative flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-[#091a3c]/70 p-5 sm:p-6 backdrop-blur-md transition-all duration-300 hover:border-[#0047ca]/50">
                  <div>
                    {rev.title && (
                      <h3 className="font-serif text-[1.05rem] font-semibold text-white mb-2 leading-snug">
                        {rev.title}
                      </h3>
                    )}
                    <p className="text-[13px] leading-relaxed text-slate-200 sm:text-[13.5px]">
                      {rev.body}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center gap-3 pt-3 border-t border-white/10">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#e83e74] text-white font-bold text-sm shadow-[0_2px_8px_rgba(232,62,116,0.4)]">
                      {rev.initial}
                    </span>
                    <div>
                      <p className="text-[13px] font-semibold text-white">{rev.name}</p>
                      <p className="text-[11.5px] text-slate-400">{rev.source}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          {/* Read All Patient Reviews Button */}
          <Reveal variant="fadeUp" delay={0.15} className="mt-6">
            <a
              href="#book-consultation"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-[13px] font-semibold text-white transition-all hover:border-[#e83e74]/50 hover:bg-[#e83e74]/10 sm:text-[13.5px]"
            >
              Read All Patient Reviews
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

