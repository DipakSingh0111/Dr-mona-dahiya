"use client";

import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

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
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1440px]">
        {/* ================= SECTION 1: Diagnostic Checklist ================= */}
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <Reveal variant="fadeUp">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              Before treatment
            </p>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
              Diagnostic Checklist: Metabolic &amp; Hormonal Profiling
            </h2>
            <p className="mt-2 text-[14px] text-slate-300 sm:text-[15px]">
              Treating PCOS well starts with its metabolic side, not just the ovaries.
            </p>
          </Reveal>

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
          <Reveal variant="fadeUp">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              How it works
            </p>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
              Step-by-Step PCOS Treatment Protocol
            </h2>
          </Reveal>

          <Stagger delay={0.05} className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
            {protocols.map((item, idx) => (
              <StaggerItem key={idx}>
                <div className="relative flex h-full flex-col rounded-2xl border border-[#e83e74]/30 bg-gradient-to-b from-[#141b36] to-[#0a1024] p-5 sm:p-6 shadow-[0_0_24px_rgba(232,62,116,0.1)] transition-all duration-300 hover:-translate-y-1 hover:border-[#e83e74]/60 hover:shadow-[0_0_32px_rgba(232,62,116,0.2)]">
                  {/* Header: Number pill + Title */}
                  <div className="flex items-start gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#e83e74] text-[15px] font-bold text-white shadow-[0_2px_8px_rgba(232,62,116,0.4)]">
                      {item.number}
                    </span>
                    <div className="pt-0.5">
                      <h3 className="font-serif text-[1.05rem] font-semibold text-white sm:text-[1.12rem] leading-snug">
                        {item.title}
                        {item.subTitle && (
                          <>
                            <br />
                            <span className="font-normal text-[0.98rem]">{item.subTitle}</span>
                          </>
                        )}
                      </h3>
                    </div>
                  </div>

                  {/* Bullet hierarchy */}
                  <div className="mt-4 flex flex-col gap-2.5 pl-2 sm:pl-3">
                    {item.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-slate-300 sm:text-[13.5px]">
                        <span className="text-[#e83e74] select-none text-[14px] leading-none pt-0.5">↳</span>
                        <p className="flex-1">
                          {bullet.text}
                          {bullet.linkText && bullet.linkHref && (
                            <Link
                              href={bullet.linkHref}
                              className="font-medium text-emerald-300 underline decoration-emerald-400/50 underline-offset-2 transition-colors hover:text-emerald-200 hover:decoration-emerald-300"
                            >
                              {bullet.linkText}
                            </Link>
                          )}
                          {bullet.suffix || ""}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* ================= SECTION 3: Why Consult Dr. Mona Dahiya for PCOS? ================= */}
        <div>
          <Reveal variant="fadeUp">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              Expertise &amp; authority
            </p>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
              Why Consult Dr. Mona Dahiya for PCOS?
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
      </div>
    </section>
  );
}

