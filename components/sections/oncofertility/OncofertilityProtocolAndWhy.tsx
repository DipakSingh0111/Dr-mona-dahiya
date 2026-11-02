"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const pathways = [
  {
    number: "1",
    title: "Pathway A: Emergency random-start egg or embryo freezing",
    bullets: [
      "10 to 12 days in total, starting on any day of the cycle",
      "Letrozole 2.5 to 5 mg daily for estrogen-sensitive cancers",
      "Scans and hormone checks every 48 hours",
      "GnRH agonist trigger at 18 mm to cut OHSS risk",
      "Eggs vitrified, or fertilised for embryo banking",
    ],
  },
  {
    number: "2",
    title: "Pathway B: Ovarian transposition (oophoropexy)",
    bullets: [
      "Laparoscopic surgery moves one or both ovaries out of the pelvic radiation field",
    ],
  },
  {
    number: "3",
    title: "Pathway C: Emergency semen freezing",
    bullets: [
      "2 to 3 samples banked within 24 to 48 hours before chemotherapy",
      "Processed and stored in liquid nitrogen at -196°C",
    ],
  },
];

const whyPoints = [
  {
    title: "Experienced clinical judgment",
    desc: "MBBS and MD Gold Medalist with 25+ years managing complex reproductive endocrinology and fertility-sparing care.",
  },
  {
    title: "Protocols for hormone-sensitive cancers",
    desc: "Letrozole+FSH co-treatment grows follicles while keeping estrogen close to natural levels.",
  },
  {
    title: "Coordination with your cancer team",
    desc: "Direct contact with medical, surgical and radiation oncologists across Delhi NCR to fit preservation into your treatment schedule.",
  },
];

export default function OncofertilityProtocolAndWhy() {
  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <Reveal variant="fadeUp">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              How it works
            </p>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
              Step-by-Step Fertility Preservation Pathways
            </h2>
          </Reveal>

          <Stagger
            delay={0.05}
            className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
          >
            {pathways.map((item) => (
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
              Expertise &amp; Authority
            </p>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
              Why Trust Dr. Mona Dahiya for Oncofertility Care?
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
                    src="/images/publications/awards/ivf-summit-certificate.jpg"
                    alt="Dr. Mona Dahiya at India IVF Summit & Awards"
                    width={480}
                    height={560}
                    className="max-h-[420px] w-full object-cover object-top sm:max-h-[480px]"
                    unoptimized
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
