"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader
} from "@/components/ui/treatment";
const related = [
  {
    title: "Surgical Sperm Retrieval (TESA/PESA/Micro-TESE)",
    description: "Getting sperm directly from the testis or epididymis",
    href: "/surgical-sperm-retrieval-tesa-pesa",
  },
  {
    title: "Low Sperm Count & Motility (OATS)",
    description: "Improve what can be improved, then pick the right ART",
    href: "/treatments",
  },
  {
    title: "Sperm DNA Fragmentation Index (DFI)",
    description: "Look beyond the routine semen report",
    href: "/treatments",
  },
  {
    title: "Semen & Sperm Freezing",
    description: "Keep your options open",
    href: "/semen-sperm-freezing",
  },
];

export default function AzoospermiaRelated() {
  return (
    <TreatmentSection>
        <TreatmentSectionHeader
          eyebrow="Related care"
          title="Related treatments"
        />

        <Stagger
          delay={0.03}
          className="mt-7 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4"
        >
          {related.map((item) => (
            <StaggerItem key={item.title}>
              <Link
                href={item.href}
                className="card-highlight group relative flex items-center justify-between gap-3 rounded-xl border border-[#fde2ec] bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue/60 hover:bg-[#fff0f5] sm:p-5"
              >
                <div className="min-w-0">
                  <h3 className="font-serif text-[1rem] font-semibold text-black transition-colors group-hover:text-sky-300 sm:text-[1.08rem]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[12.5px] text-black group-hover:text-black">
                    {item.description}
                  </p>
                </div>
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full text-rose transition-transform duration-200 group-hover:translate-x-1 group-hover:text-rose">
                  <FaArrowRight className="size-3.5" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </TreatmentSection>
  );
}
