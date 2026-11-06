"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const treatments = [
  {
    title: "Frozen Embryo Transfer",
    href: "/frozen-embryo-transfer",
  },
  {
    title: "Sperm DNA Fragmentation",
    href: "/sperm-dna-fragmentation-test",
  },
  {
    title: "Hysteroscopy",
    href: "/hysteroscopy-treatment",
  },
  {
    title: "Endometriosis",
    href: "/endometriosis-fertility-treatment",
  },
  {
    title: "Blocked Fallopian Tube",
    href: "/fallopian-tube-blockage-treatment",
  },
  {
    title: "Implantation Failure",
    href: "/recurrent-implantation-failure-rif",
  },
  {
    title: "Azoospermia",
    href: "/azoospermia-treatment",
  },
  {
    title: "Low Sperm Count",
    href: "/low-sperm-count-oligospermia",
  },
  {
    title: "Surgical Sperm Extraction",
    href: "/surgical-sperm-retrieval-tesa-pesa",
  },
  {
    title: "Sperm Freezing",
    href: "/semen-sperm-freezing",
  },
  {
    title: "Embryo Freezing",
    href: "/embryo-cryopreservation",
  },
  {
    title: "Oncofertility",
    href: "/oncofertility-cancer-fertility-preservation",
  },
];

export default function BestIvfDelhiRelated() {
  return (
    <section className="relative overflow-hidden bg-pink py-8 sm:py-10 lg:py-12">
      <div className="page-container relative">
        <Reveal variant="fadeUp">
          <p className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
            Other Services
          </p>
          <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-black sm:text-[2.2rem] lg:text-[2.45rem]">
            Other Treatments we provide
          </h2>
        </Reveal>

        <Stagger
          className="mt-7 grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          stagger={0.04}
        >
          {treatments.map((item) => (
            <StaggerItem key={item.title}>
              <Link
                href={item.href}
                className="card-highlight group relative flex items-center justify-between rounded-xl border border-[#fde2ec] bg-white p-4 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-blue/60 hover:bg-[#fff0f5]"
              >
                <div>
                  <h3 className="font-serif text-[1rem] font-semibold text-black transition-colors group-hover:text-sky-300 sm:text-[1.05rem]">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-[12px] text-black group-hover:text-black">
                    Treatment page
                  </p>
                </div>
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full text-black transition-all group-hover:translate-x-1 group-hover:text-sky-300">
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
