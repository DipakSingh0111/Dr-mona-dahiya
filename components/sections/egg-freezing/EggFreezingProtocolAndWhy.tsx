"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const protocols = [
  {
    number: "1",
    title: "Baseline mapping (days 1–3)",
    bullets: ["Scan for follicle count and protocol design."],
  },
  {
    number: "2",
    title: "Ovarian stimulation (days 3–11)",
    bullets: ["Daily injections and scans every 48 hours."],
  },
  {
    number: "3",
    title: "Trigger (day 11 or 12)",
    bullets: ["Dual trigger injections once follicles reach 17 to 19 mm."],
  },
  {
    number: "4",
    title: "Egg retrieval (day 13 or 14)",
    bullets: ["15-minute ultrasound-guided retrieval under sedation."],
  },
  {
    number: "5",
    title: "Maturity grading",
    bullets: ["Surrounding cells removed; only mature eggs are frozen."],
  },
  {
    number: "6",
    title: "Vitrification and storage",
    bullets: [
      "Eggs dehydrated, plunged into liquid nitrogen, and stored in monitored tanks.",
    ],
  },
];

const whyPoints = [
  {
    title: "Realistic, experienced counselling",
    desc: "25+ years in reproductive medicine and a Singapore General Hospital fellowship, with honest advice on how many eggs your age and reserve call for.",
  },
  {
    title: "Modern vitrification",
    desc: "Closed vitrification systems that stop ice-crystals forming and protect the egg membrane, with post-thaw survival above 95%.",
  },
  {
    title: "ART Act compliance",
    desc: "Storage and future-use follow the Indian ART Act, with clear chain-of-custody tracking.",
  },
];

export default function EggFreezingProtocolAndWhy() {
  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <Reveal variant="fadeUp">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              How it works
            </p>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
              Step-by-Step Egg Freezing Protocol
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
              Why Choose Dr. Mona Dahiya for Egg Freezing?
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
                    src="/images/about/book-a-appointment.jpg"
                    alt="Dr. Mona Dahiya - Egg Freezing counselling"
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
