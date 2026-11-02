"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  WhyPointRow,
  ProtocolCard
} from "@/components/ui/treatment";
const protocols = [
  {
    number: "1",
    title: "Review and stratification",
    bullets: [
      "Timing of losses, past scans and any tissue or genetic reports",
    ],
  },
  {
    number: "2",
    title: "Laboratory workup",
    bullets: [
      "Karyotype of both partners",
      "Full antiphospholipid panel",
      "3D scan and diagnostic hysteroscopy",
    ],
  },
  {
    number: "3",
    title: "Pathway A: anatomical correction",
    bullets: [
      "Operative hysteroscopy with cold scissors to divide a septum or clear adhesions",
    ],
  },
  {
    number: "4",
    title: "Pathway B: anticoagulation (APS or thrombophilia)",
    bullets: [
      "Low-dose aspirin 75 to 150 mg before conception",
      "Enoxaparin 40 mg daily once pregnancy is confirmed",
    ],
  },
  {
    number: "5",
    title: "Pathway C: IVF with PGT-A (chromosomal causes)",
    bullets: [
      "Embryos grown to Day 5",
      "Laser biopsy and NGS select only chromosomally normal embryos",
    ],
  },
  {
    number: "6",
    title: "Early pregnancy support",
    bullets: [
      "Weekly scans, progesterone support and close care through 12 weeks",
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
    <TreatmentSection>
        {/* ================= SECTION 1: Step-by-Step Treatment Protocol ================= */}
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="How it works"
          title="Step-by-Step Treatment Protocol"
        />

          <Stagger delay={0.05} className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
            {protocols.map((item, idx) => (
              <StaggerItem key={idx}>
              <ProtocolCard {...item} />
            </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* ================= SECTION 2: Why Consult Dr. Mona Dahiya for Recurrent Miscarriage? ================= */}
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="Expertise & authority"
          title="Why Consult Dr. Mona Dahiya for Recurrent Miscarriage?"
        />

          <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
            {whyPoints.map((point, idx) => (
              <Reveal key={idx} variant="fadeUp" delay={idx * 0.05}>
              <WhyPointRow {...point} />
            </Reveal>
            ))}
          </div>
        </div>

        {/* ================= SECTION 3: What Patients Say About Dr. Mona ================= */}
        <div id="patient-reviews">
          <TreatmentSectionHeader
          eyebrow="Patient reviews"
          title="What Patients Say About Dr. Mona"
          subtitle="Individual experiences in patients&apos; own words."
        />

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
      </TreatmentSection>
  );
}

