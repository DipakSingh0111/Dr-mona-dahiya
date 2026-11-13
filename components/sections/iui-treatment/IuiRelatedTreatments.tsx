"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const relatedTreatments = [
  { title: "Frozen Embryo Transfer", href: "/frozen-embryo-transfer" },
  { title: "Sperm DNA Fragmentation", href: "/sperm-dna-fragmentation-test" },
  { title: "Hysteroscopy", href: "/hysteroscopy-treatment" },
  { title: "Endometriosis", href: "/endometriosis-fertility-treatment" },
  { title: "Fallopian Tube Blockage", href: "/fallopian-tube-blockage-treatment" },
  {
    title: "Recurrent Implantation Failure",
    href: "/recurrent-implantation-failure-rif",
  },
  { title: "Azoospermia", href: "/azoospermia-treatment" },
  { title: "Low Sperm Count", href: "/low-sperm-count-oligospermia" },
  { title: "Surgical Sperm Retrieval", href: "/surgical-sperm-retrieval-tesa-pesa" },
  { title: "Sperm Freezing", href: "/semen-sperm-freezing" },
  { title: "Embryo Freezing", href: "/embryo-cryopreservation" },
  { title: "Oncofertility", href: "/oncofertility-cancer-fertility-preservation" },
];

export default function IuiRelatedTreatments() {
  return (
    <section className="relative overflow-hidden bg-pink py-10 sm:py-14 lg:py-16 border-t border-[#fde2ec]">
      <div className="page-container relative">
        <Reveal variant="fadeUp">
          <p className="text-[12px] font-bold tracking-[0.14em] text-rose uppercase sm:text-[13px]">
            Treatments
          </p>
          <h2 className="font-serif mt-1.5 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-ink sm:text-[2.25rem] lg:text-[2.65rem]">
            Related Fertility Treatments
          </h2>
        </Reveal>

        <Stagger
          delay={0.03}
          className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3"
        >
          {relatedTreatments.map((item) => (
            <StaggerItem key={item.title}>
              <Link
                href={item.href}
                className="group flex items-center justify-between rounded-xl border border-[#fde2ec] bg-white p-4 shadow-[0_2px_12px_rgba(15,36,56,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:border-rose/40 hover:bg-[#fff9fb] hover:shadow-md"
              >
                <div>
                  <h3 className="font-serif text-[1rem] font-bold text-ink transition-colors group-hover:text-rose sm:text-[1.05rem]">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-[12px] text-ink/60">Treatment page</p>
                </div>
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#fff0f5] text-rose transition-all duration-300 group-hover:bg-rose group-hover:text-white">
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

