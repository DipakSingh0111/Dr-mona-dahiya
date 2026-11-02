"use client";

import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  ProtocolCard,
  WhyPointRow
} from "@/components/ui/treatment";
interface ChecklistItem {
  text: string;
}

const checklist: ChecklistItem[] = [
  { text: "Baseline transvaginal scan of ovarian volume and follicle pattern." },
  { text: "Day 2 or 3 LH and FSH (an LH:FSH ratio above 2:1 is common)." },
  { text: "Androgen panel: total testosterone, free androgen index and DHEA-S." },
  { text: "Metabolic profile: fasting glucose, fasting insulin (HOMA-IR), lipids and HbA1c." },
  { text: "Thyroid and prolactin to rule out other causes of irregular ovulation." },
];

interface ProtocolCard {
  number: string;
  title: string;
  subTitle?: string;
  bullets: Array<{
    text: string;
    linkText?: string;
    linkHref?: string;
    suffix?: string;
  }>;
}

const protocols: ProtocolCard[] = [
  {
    number: "1",
    title: "Metabolic stabilisation",
    subTitle: "(4–8 weeks)",
    bullets: [
      {
        text: "Low-glycaemic diet and activity, plus myo-inositol 4,000 mg with D-chiro-inositol",
      },
      {
        text: "Metformin 500 to 1,500 mg daily where needed",
      },
    ],
  },
  {
    number: "2",
    title: "Ovulation",
    subTitle: "induction (days 3–7)",
    bullets: [
      {
        text: "Letrozole 2.5 to 5 mg as first choice",
      },
      {
        text: "Single-follicle growth confirmed by ",
        linkText: "Follicular Ultrasound",
        linkHref: "/treatments",
      },
    ],
  },
  {
    number: "3",
    title: "IUI if needed",
    bullets: [
      {
        text: "Mild stimulation with ",
        linkText: "IUI",
        linkHref: "/treatments",
        suffix: " if timed intercourse does not work",
      },
    ],
  },
  {
    number: "4",
    title: "OHSS-safe antagonist IVF",
    bullets: [
      {
        text: "Low-dose injections with an antagonist to prevent early LH surges",
      },
      {
        text: "GnRH agonist trigger instead of hCG",
      },
      {
        text: "Blastocyst culture in benchtop incubators",
      },
    ],
  },
  {
    number: "5",
    title: "Freeze-all and",
    subTitle: "frozen transfer",
    bullets: [
      {
        text: "All blastocysts frozen so the body recovers",
      },
      {
        text: "Elective ",
        linkText: "Frozen Embryo Transfer",
        linkHref: "/treatments",
        suffix: " in a later cycle",
      },
    ],
  },
];

interface WhyPoint {
  title: string;
  desc: string;
}

const whyPoints: WhyPoint[] = [
  {
    title: "Safety first",
    desc: "GnRH agonist triggers and freeze-all cycles all but eliminate ovarian hyperstimulation syndrome.",
  },
  {
    title: "Metabolic and reproductive care together",
    desc: "Insulin resistance and androgen excess are treated before assisted cycles to improve egg quality.",
  },
  {
    title: "Step-by-step escalation",
    desc: "Simple tablet-based options come before IVF or laparoscopic ovarian drilling.",
  },
];

export default function PcosChecklistAndProtocol() {
  return (
    <TreatmentSection>
        {/* ================= SECTION 1: Diagnostic Checklist ================= */}
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="Before treatment"
          title="Diagnostic Checklist: Metabolic &amp; Hormonal Profiling"
          subtitle="Treating PCOS well starts with its metabolic side, not just the ovaries."
        />

          {/* Checklist Horizontal Bars */}
          <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:gap-3.5">
            {checklist.map((item, idx) => (
              <Reveal key={idx} variant="fadeUp" delay={idx * 0.04}>
                <div className="flex items-center gap-3.5 rounded-xl border border-white/10 bg-[#091a3c]/70 px-4 py-3.5 backdrop-blur-md transition-all duration-200 hover:border-[#0047ca]/50 hover:bg-[#0c224e]/80 sm:px-5 sm:py-4">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-300 ring-1 ring-teal-400/40 sm:size-6">
                    <FaCheck className="size-2.5 sm:size-3" />
                  </span>
                  <p className="text-[13.5px] leading-relaxed text-slate-200 sm:text-[14.5px]">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ================= SECTION 2: Step-by-Step PCOS Treatment Protocol ================= */}
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="How it works"
          title="Step-by-Step PCOS Treatment Protocol"
        />

          <Stagger delay={0.05} className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
            {protocols.map((item, idx) => (
              <StaggerItem key={idx}>
              <ProtocolCard
                number={item.number}
                title={item.title}
                bullets={item.bullets.map((b) =>
                  typeof b === "string"
                    ? b
                    : `${b.text}${b.linkText ?? ""}${b.suffix ?? ""}`,
                )}
              />
            </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* ================= SECTION 3: Why Consult Dr. Mona Dahiya for PCOS? ================= */}
        <div>
          <TreatmentSectionHeader
          eyebrow="Expertise & authority"
          title="Why Consult Dr. Mona Dahiya for PCOS?"
        />

          <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
            {whyPoints.map((point, idx) => (
              <Reveal key={idx} variant="fadeUp" delay={idx * 0.05}>
              <WhyPointRow {...point} />
            </Reveal>
            ))}
          </div>
        </div>
      </TreatmentSection>
  );
}

