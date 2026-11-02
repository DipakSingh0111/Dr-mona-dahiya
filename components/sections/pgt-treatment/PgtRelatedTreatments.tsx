"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function PgtRelatedTreatments() {
  const treatments = [
    { title: "IVF Treatment", subtitle: "Treatment page", href: "/ivf-treatment" },
    { title: "ICSI Treatment", subtitle: "Treatment page", href: "/icsi-treatment" },
    { title: "Blastocyst Transfer", subtitle: "Treatment page", href: "/blastocyst-transfer" },
    { title: "Frozen Embryo Transfer", subtitle: "Treatment page", href: "/frozen-embryo-transfer" },
    { title: "Embryo Freezing", subtitle: "Treatment page", href: "/treatments" },
    { title: "Recurrent Implantation Failure", subtitle: "Treatment page", href: "/recurrent-implantation-failure" },
    { title: "Sperm DNA Fragmentation", subtitle: "Treatment page", href: "/sperm-dna-fragmentation" },
    { title: "Hysteroscopy", subtitle: "Treatment page", href: "/treatments" },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50/70 px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="relative mx-auto w-full max-w-[1440px]">
        <Reveal className="mb-6 sm:mb-8">
          <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
            Treatments
          </p>
          <h2 className="font-serif mt-1 text-[1.65rem] leading-[1.2] font-normal tracking-tight text-slate-900 sm:text-[2.1rem] lg:text-[2.35rem]">
            Related Fertility Treatments
          </h2>
        </Reveal>

        <Stagger
          stagger={0.04}
          className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {treatments.map((item, idx) => (
            <StaggerItem key={idx}>
              <Link
                href={item.href}
                className="group flex items-center justify-between rounded-[16px] border border-slate-200/90 bg-white p-4.5 shadow-[0_4px_14px_rgba(0,20,60,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0047ca]/40 hover:shadow-[0_10px_24px_rgba(0,71,202,0.08)]"
              >
                <div>
                  <h3 className="text-[14.5px] font-bold text-slate-900 group-hover:text-[#0047ca] transition-colors sm:text-[15px]">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-[12px] font-medium text-slate-500">
                    {item.subtitle}
                  </p>
                </div>
                <FaArrowRight className="size-3.5 shrink-0 text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#0047ca]" />
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

