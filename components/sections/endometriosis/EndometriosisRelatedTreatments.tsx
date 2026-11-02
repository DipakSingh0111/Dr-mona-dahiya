"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

interface RelatedTreatmentItem {
  title: string;
  subtitle: string;
  href: string;
}

const endometriosisRelated: RelatedTreatmentItem[] = [
  {
    title: "Diagnostic & Operative Hysteroscopy",
    subtitle: "See inside the uterus, treat in the same sitting",
    href: "/treatments",
  },
  {
    title: "Recurrent Implantation Failure (RIF)",
    subtitle: "A structured second look after failed transfers",
    href: "/treatments",
  },
  {
    title: "Fallopian Tube Blockage",
    subtitle: "Check the tubes, choose the right route",
    href: "/treatments",
  },
  {
    title: "Frozen Embryo Transfer (FET)",
    subtitle: "Vitrified embryos, prepared lining, timed transfer",
    href: "/treatments",
  },
];

export default function EndometriosisRelatedTreatments() {
  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1440px]">
        {/* Eyebrow & Title */}
        <Reveal variant="fadeUp">
          <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
            Related care
          </p>
          <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
            Related treatments
          </h2>
        </Reveal>

        {/* 4 Cards Grid */}
        <Stagger delay={0.04} className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
          {endometriosisRelated.map((item, idx) => (
            <StaggerItem key={idx}>
              <Link
                href={item.href}
                className="group relative flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-[#091a3c]/70 p-5 sm:p-6 backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:border-[#0047ca]/60 hover:bg-[#0c224e]/85"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-serif text-[1.05rem] font-semibold text-white transition-colors group-hover:text-sky-300 sm:text-[1.12rem] leading-snug">
                      {item.title}
                    </h3>
                    <span className="flex size-6 shrink-0 items-center justify-center text-[#e83e74] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#f9a8d4]">
                      <FaArrowRight className="size-3" />
                    </span>
                  </div>
                  <p className="mt-2.5 text-[12.5px] leading-relaxed text-slate-300 group-hover:text-slate-200 sm:text-[13px]">
                    {item.subtitle}
                  </p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

