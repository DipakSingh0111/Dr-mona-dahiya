"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function PgtRelatedTreatments() {
  const treatments = [
    { title: "IVF Treatment", subtitle: "Treatment page", href: "/ivf-treatment" },
    { title: "ICSI Treatment", subtitle: "Treatment page", href: "/intracytoplasmic-sperm-injection-icsi-treatment" },
    { title: "Blastocyst Transfer", subtitle: "Treatment page", href: "/blastocyst-transfer" },
    { title: "Frozen Embryo Transfer", subtitle: "Treatment page", href: "/frozen-embryo-transfer" },
    { title: "Embryo Freezing", subtitle: "Treatment page", href: "/embryo-cryopreservation" },
    { title: "Recurrent Implantation Failure", subtitle: "Treatment page", href: "/recurrent-implantation-failure-rif" },
    { title: "Sperm DNA Fragmentation", subtitle: "Treatment page", href: "/sperm-dna-fragmentation-test" },
    { title: "Hysteroscopy", subtitle: "Treatment page", href: "/hysteroscopy-treatment" },
  ];

  return (
    <section
      className="relative overflow-hidden py-8 sm:py-10 lg:py-12"
      style={{ background: "var(--pink)" }}
    >
      <div className="page-container relative">
        <Reveal className="mb-6 sm:mb-8">
          <p className="text-[12px] font-bold tracking-[0.14em] text-rose uppercase sm:text-[13px]">
            Treatments
          </p>
          <h2 className="font-serif mt-1 text-[1.65rem] leading-[1.2] font-normal tracking-tight text-ink sm:text-[2.1rem] lg:text-[2.35rem]">
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
                className="group flex items-center justify-between rounded-[18px] border border-[#fde2ec] bg-white p-4.5 shadow-[0_8px_24px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-rose/40 hover:shadow-[0_14px_36px_rgba(232,62,116,0.1)]"
              >
                <div>
                  <h3 className="text-[14.5px] font-bold text-ink group-hover:text-rose transition-colors sm:text-[15px]">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-[12px] font-medium text-ink/65">
                    {item.subtitle}
                  </p>
                </div>
                <FaArrowRight className="size-3.5 shrink-0 text-rose transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
