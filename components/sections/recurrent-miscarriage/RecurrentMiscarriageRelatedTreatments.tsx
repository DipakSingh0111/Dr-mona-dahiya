"use client";

import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

interface RelatedTreatmentItem {
  title: string;
  subtitle: string;
  href: string;
}

const treatments: RelatedTreatmentItem[] = [
  {
    title: "Frozen Embryo Transfer",
    subtitle: "Treatment page",
    href: "/treatments",
  },
  {
    title: "Sperm DNA Fragmentation",
    subtitle: "Treatment page",
    href: "/sperm-dna-fragmentation",
  },
  {
    title: "Hysteroscopy",
    subtitle: "Treatment page",
    href: "/hysteroscopy",
  },
  {
    title: "Endometriosis",
    subtitle: "Treatment page",
    href: "/endometriosis",
  },
  {
    title: "Fallopian Tube Blockage",
    subtitle: "Treatment page",
    href: "/fallopian-tube-blockage",
  },
  {
    title: "Recurrent Implantation Failure",
    subtitle: "Treatment page",
    href: "/recurrent-implantation-failure",
  },
  {
    title: "Azoospermia",
    subtitle: "Treatment page",
    href: "/azoospermia",
  },
  {
    title: "Low Sperm Count",
    subtitle: "Treatment page",
    href: "/low-sperm-count",
  },
  {
    title: "Surgical Sperm Retrieval",
    subtitle: "Treatment page",
    href: "/surgical-sperm-retrieval",
  },
  {
    title: "Sperm Freezing",
    subtitle: "Treatment page",
    href: "/treatments",
  },
  {
    title: "Embryo Freezing",
    subtitle: "Treatment page",
    href: "/treatments",
  },
  {
    title: "Oncofertility",
    subtitle: "Treatment page",
    href: "/treatments",
  },
];

export default function RecurrentMiscarriageRelatedTreatments() {
  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1440px]">
        {/* Eyebrow & Title */}
        <Reveal variant="fadeUp">
          <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
            Treatments
          </p>
          <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
            Related Fertility Treatments
          </h2>
        </Reveal>

        {/* 12 Cards Grid (3 columns on lg, 2 on sm, 1 on mobile) */}
        <Stagger delay={0.03} className="mt-7 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
          {treatments.map((item, idx) => (
            <StaggerItem key={idx}>
              <Link
                href={item.href}
                className="group relative flex items-center justify-between rounded-xl border border-[#e83e74]/35 bg-gradient-to-b from-[#141b36] to-[#0a1024] px-5 py-4 shadow-[0_0_24px_rgba(232,62,116,0.1)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#e83e74]/65 hover:shadow-[0_0_32px_rgba(232,62,116,0.2)]"
              >
                <div>
                  <h3 className="font-serif text-[0.98rem] font-semibold text-white group-hover:text-[#f9a8d4] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-[12px] text-slate-400">
                    {item.subtitle}
                  </p>
                </div>
                <span className="text-[#e83e74] text-sm opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                  →
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

