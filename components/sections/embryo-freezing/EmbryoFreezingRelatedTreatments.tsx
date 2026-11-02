"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const relatedTreatments = [
  {
    title: "Frozen Embryo Transfer (FET)",
    subtitle: "Vitrified embryos, prepared lining, timed transfer",
    href: "/frozen-embryo-transfer",
  },
  {
    title: "Semen & Sperm Freezing",
    subtitle: "Keep your options open",
    href: "/treatments",
  },
  {
    title: "Oncofertility (Cancer Fertility Preservation)",
    subtitle: "Protect the chance of a family before treatment begins",
    href: "/oncofertility",
  },
  {
    title: "Recurrent Implantation Failure (RIF)",
    subtitle: "A structured second look after failed transfers",
    href: "/recurrent-implantation-failure",
  },
];

export default function EmbryoFreezingRelatedTreatments() {
  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1440px]">
        <Reveal variant="fadeUp">
          <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
            Related care
          </p>
          <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
            Related treatments
          </h2>
        </Reveal>

        <Stagger
          delay={0.05}
          className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-2"
        >
          {relatedTreatments.map((item) => (
            <StaggerItem key={item.title}>
              <Link
                href={item.href}
                className="group relative flex h-full flex-col justify-between rounded-2xl border border-[#e83e74]/35 bg-gradient-to-b from-[#141b36] to-[#0a1024] p-5 shadow-[0_0_24px_rgba(232,62,116,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#e83e74]/65 hover:shadow-[0_0_32px_rgba(232,62,116,0.22)] sm:p-6"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-serif text-[1.05rem] leading-snug font-semibold text-white transition-colors group-hover:text-[#f9a8d4]">
                      {item.title}
                    </h3>
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full text-slate-400 transition-all group-hover:translate-x-0.5 group-hover:text-[#e83e74]">
                      <FaArrowRight className="size-3" />
                    </span>
                  </div>
                  <p className="mt-3 text-[13px] leading-relaxed text-slate-300 sm:text-[13.5px]">
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
