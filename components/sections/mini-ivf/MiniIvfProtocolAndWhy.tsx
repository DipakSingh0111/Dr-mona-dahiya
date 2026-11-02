"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const protocols = [
  {
    number: "1",
    title: "Baseline check (cycle days 2–3)",
    bullets: [
      "Scan to rule out ovarian cysts.",
      "Baseline estradiol below 50 pg/mL.",
    ],
  },
  {
    number: "2",
    title: "Oral-first induction (days 3–7)",
    bullets: [
      "Letrozole 2.5 to 5 mg or clomiphene 50 mg.",
      "Your own FSH and LH release is encouraged naturally.",
    ],
  },
  {
    number: "3",
    title: "Low-dose injections (days 6–10)",
    bullets: [
      "75 to 150 IU of rFSH or hMG on alternate days.",
      "Scans aim for 2 to 5 dominant follicles.",
    ],
  },
  {
    number: "4",
    title: "Antagonist and trigger (days 10–12)",
    bullets: [
      "Antagonist added only if LH rises early.",
      "Trigger when lead follicles reach 18 mm.",
    ],
  },
  {
    number: "5",
    title: "Gentle egg retrieval and fertilisation (days 12–14)",
    bullets: [
      "A quick 10-minute retrieval under light sedation.",
      "IVF or ICSI, with embryos grown to Day 3 or Day 5.",
    ],
  },
  {
    number: "6",
    title: "Transfer or banking",
    bullets: [
      "Fresh transfer in a natural cycle.",
      "Or embryos frozen and pooled across 2 or more gentle cycles.",
    ],
  },
];

const whyPoints = [
  {
    title: "Reproductive endocrinology expertise",
    desc: "Trained at Lady Hardinge, Maulana Azad Medical College and Singapore General Hospital, Dr. Dahiya sets low doses deliberately instead of defaulting to maximum-dose protocols.",
  },
  {
    title: "Embryo banking and DuoStim",
    desc: "For low AMH, gentle cycles are combined with embryo banking to collect good blastocysts before transfer.",
  },
  {
    title: "Cleanroom handling of small cohorts",
    desc: "Even 2 to 4 eggs are handled in a Class 10,000 cleanroom to give each the best chance of fertilising and growing.",
  },
];

export default function MiniIvfProtocolAndWhy() {
  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <Reveal variant="fadeUp">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              How it works
            </p>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
              Step-by-Step Mini IVF Protocol
            </h2>
          </Reveal>

          <Stagger
            delay={0.05}
            className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
          >
            {protocols.map((item) => (
              <StaggerItem key={item.number}>
                <div className="relative flex h-full flex-col rounded-2xl border border-[#e83e74]/30 bg-gradient-to-b from-[#141b36] to-[#0a1024] p-5 shadow-[0_0_24px_rgba(232,62,116,0.1)] transition-all duration-300 hover:-translate-y-1 hover:border-[#e83e74]/60 hover:shadow-[0_0_32px_rgba(232,62,116,0.2)] sm:p-6">
                  <div className="flex items-start gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#e83e74] text-[15px] font-bold text-white shadow-[0_2px_8px_rgba(232,62,116,0.4)]">
                      {item.number}
                    </span>
                    <h3 className="font-serif pt-0.5 text-[1.05rem] leading-snug font-semibold text-white sm:text-[1.12rem]">
                      {item.title}
                    </h3>
                  </div>
                  <div className="mt-4 flex flex-col gap-2.5 pl-2 sm:pl-3">
                    {item.bullets.map((bullet) => (
                      <div
                        key={bullet}
                        className="flex items-start gap-2.5 text-[13px] leading-relaxed text-slate-300 sm:text-[13.5px]"
                      >
                        <span className="pt-0.5 text-[14px] leading-none text-[#e83e74] select-none">
                          ↳
                        </span>
                        <p className="flex-1">{bullet}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div>
          <Reveal variant="fadeUp">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              Expertise &amp; authority
            </p>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
              Why Choose Dr. Mona Dahiya for Mini IVF?
            </h2>
          </Reveal>

          <div className="mt-7 grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="flex flex-col gap-3.5 sm:gap-4 lg:col-span-7">
              {whyPoints.map((point, idx) => (
                <Reveal key={point.title} variant="fadeUp" delay={idx * 0.05}>
                  <div className="flex items-start gap-3.5 rounded-xl border border-white/10 bg-[#091a3c]/70 px-4 py-3.5 backdrop-blur-md transition-all duration-200 hover:border-[#0047ca]/50 hover:bg-[#0c224e]/80 sm:px-5 sm:py-4">
                    <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg bg-[#e83e74] text-white shadow-[0_2px_8px_rgba(232,62,116,0.4)]">
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

            <div className="relative mx-auto w-full max-w-[380px] lg:col-span-5 lg:mx-0 lg:max-w-none">
              <Reveal variant="scaleIn" delay={0.08}>
                <div className="relative overflow-hidden rounded-[20px] border-[3px] border-white/70 shadow-[0_20px_50px_rgba(0,10,40,0.45)] sm:rounded-[24px]">
                  <Image
                    src="/images/about/female-infertility.jpg"
                    alt="Dr. Mona Dahiya at clinic for Mini IVF"
                    width={480}
                    height={560}
                    className="max-h-[420px] w-full object-cover object-top sm:max-h-[480px]"
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
