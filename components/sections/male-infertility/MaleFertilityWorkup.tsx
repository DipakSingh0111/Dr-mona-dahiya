"use client";

import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

interface WorkupItem {
  number: string;
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
  suffix?: string;
}

const workupItems: WorkupItem[] = [
  {
    number: "1",
    title: "Low count, motility or shape (OATS)",
    description:
      "Count under 16 million/mL, motility under 30% or normal forms under 4%. See ",
    linkText: "Low Sperm Count & Motility",
    linkHref: "/treatments",
    suffix: ".",
  },
  {
    number: "2",
    title: "High DNA fragmentation (DFI over 25%)",
    description:
      "Linked to unexplained infertility and repeated pregnancy loss. See ",
    linkText: "Sperm DNA Fragmentation Test",
    linkHref: "/treatments",
    suffix: ".",
  },
  {
    number: "3",
    title: "Azoospermia (zero sperm count)",
    description:
      "Obstructive and non-obstructive cases, with surgical retrieval. See ",
    linkText: "Azoospermia Treatment",
    linkHref: "/treatments",
    suffix: ".",
  },
  {
    number: "4",
    title: "Varicocele",
    description:
      "Swollen scrotal veins that overheat the testes and damage sperm production.",
  },
  {
    number: "5",
    title: "Sexual or ejaculatory problems",
    description:
      "Retrograde ejaculation, anejaculation or erectile difficulty that prevents timed intercourse.",
  },
];

export default function MaleFertilityWorkup() {
  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1440px]">
        {/* Eyebrow & Title */}
        <Reveal variant="fadeUp">
          <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
            Who needs a workup
          </p>
          <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
            Who Needs a Dedicated
            <br className="hidden sm:inline" /> Male Fertility Workup?
          </h2>
        </Reveal>

        {/* Cards Grid */}
        <Stagger delay={0.06} className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
          {workupItems.map((item, idx) => (
            <StaggerItem key={idx}>
              <div className="relative flex h-full flex-col justify-between rounded-2xl border border-[#e83e74]/35 bg-gradient-to-b from-[#141b36] to-[#0a1024] p-5 sm:p-6 shadow-[0_0_24px_rgba(232,62,116,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#e83e74]/65 hover:shadow-[0_0_32px_rgba(232,62,116,0.22)]">
                <div>
                  {/* Header: Number pill + Title */}
                  <div className="flex items-start gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#e83e74] text-[15px] font-bold text-white shadow-[0_2px_8px_rgba(232,62,116,0.4)]">
                      {item.number}
                    </span>
                    <h3 className="font-serif text-[1.05rem] font-semibold text-white sm:text-[1.12rem] leading-snug pt-0.5">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="mt-3.5 text-[13px] leading-relaxed text-slate-300 sm:text-[14px]">
                    {item.description}
                    {item.linkText && item.linkHref && (
                      <Link
                        href={item.linkHref}
                        className="font-medium text-emerald-300 underline decoration-emerald-400/50 underline-offset-2 transition-colors hover:text-emerald-200 hover:decoration-emerald-300"
                      >
                        {item.linkText}
                      </Link>
                    )}
                    {item.suffix || ""}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

