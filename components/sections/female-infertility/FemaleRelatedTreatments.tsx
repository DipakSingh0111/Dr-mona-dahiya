"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

interface RelatedTreatmentItem {
  title: string;
  href: string;
}

const relatedTreatments: RelatedTreatmentItem[] = [
  { title: "Frozen Embryo Transfer", href: "/treatments" },
  { title: "Sperm DNA Fragmentation", href: "/treatments" },
  { title: "Hysteroscopy", href: "/treatments" },
  { title: "Endometriosis", href: "/treatments" },
  { title: "Fallopian Tube Blockage", href: "/treatments" },
  { title: "Recurrent Implantation Failure", href: "/treatments" },
  { title: "Azoospermia", href: "/treatments" },
  { title: "Low Sperm Count", href: "/treatments" },
  { title: "Surgical Sperm Retrieval", href: "/treatments" },
  { title: "Sperm Freezing", href: "/treatments" },
  { title: "Embryo Freezing", href: "/treatments" },
  { title: "Oncofertility", href: "/treatments" },
];

export default function FemaleRelatedTreatments() {
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

        {/* 3 Column Grid of 12 Treatments */}
        <Stagger delay={0.03} className="mt-7 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
          {relatedTreatments.map((item, idx) => (
            <StaggerItem key={idx}>
              <Link
                href={item.href}
                className="group relative flex items-center justify-between rounded-xl border border-white/10 bg-[#091a3c]/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0047ca]/60 hover:bg-[#0c224e]/85"
              >
                <div>
                  <h3 className="font-serif text-[1rem] font-semibold text-white transition-colors group-hover:text-sky-300 sm:text-[1.08rem]">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-[12px] text-slate-400 group-hover:text-slate-300">
                    Treatment page
                  </p>
                </div>
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full text-[#e83e74] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#f9a8d4]">
                  <FaArrowRight className="size-3" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

