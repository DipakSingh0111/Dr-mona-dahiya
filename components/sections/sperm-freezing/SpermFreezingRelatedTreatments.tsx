"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function SpermFreezingRelatedTreatments() {
  const treatments = [
    {
      title: "Oncofertility (Cancer Fertility Preservation)",
      desc: "Protect the chance of a family before treatment begins.",
      href: "/treatments",
      badgeColor: "group-hover:border-[#e83e74]/50 group-hover:text-[#e83e74]",
    },
    {
      title: "Embryo Freezing & Banking",
      desc: "Bank your best embryos for later.",
      href: "/treatments",
      badgeColor: "group-hover:border-[#0047ca]/50 group-hover:text-[#0047ca]",
    },
    {
      title: "Azoospermia (Zero Sperm Count)",
      desc: "Zero sperm in the semen does not always mean zero sperm.",
      href: "/azoospermia",
      badgeColor: "group-hover:border-[#8b5cf6]/50 group-hover:text-[#8b5cf6]",
    },
    {
      title: "Surgical Sperm Retrieval (TESA/PESA/Micro-TESE)",
      desc: "Getting sperm directly from the testis or epididymis.",
      href: "/surgical-sperm-retrieval",
      badgeColor: "group-hover:border-[#0d9488]/50 group-hover:text-[#0d9488]",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="relative mx-auto w-full max-w-[1440px]">
        <Reveal className="mb-6 sm:mb-8">
          <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
            Related care
          </p>
          <h2 className="font-serif mt-1 text-[1.65rem] leading-[1.2] font-normal tracking-tight text-slate-900 sm:text-[2.1rem] lg:text-[2.35rem]">
            Related treatments
          </h2>
        </Reveal>

        <Stagger
          stagger={0.06}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {treatments.map((item, idx) => (
            <StaggerItem key={idx}>
              <Link
                href={item.href}
                className="group flex h-full flex-col justify-between rounded-[18px] border border-slate-200/90 bg-gradient-to-br from-slate-50/60 to-white p-5 shadow-[0_4px_16px_rgba(0,20,60,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0047ca]/40 hover:shadow-[0_12px_28px_rgba(0,30,80,0.08)]"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-[15px] font-bold text-slate-900 group-hover:text-[#0047ca] transition-colors sm:text-[16px]">
                      {item.title}
                    </h3>
                    <FaArrowRight className="size-3.5 shrink-0 text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#0047ca]" />
                  </div>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-600 sm:text-[13.5px]">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100">
                  <span className="inline-flex items-center text-[12px] font-semibold text-[#0047ca] group-hover:underline">
                    Treatment page →
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

