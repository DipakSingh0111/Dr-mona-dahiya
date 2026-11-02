"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader
} from "@/components/ui/treatment";
interface RelatedTreatmentItem {
  title: string;
  subtitle: string;
  href: string;
}

const dfiRelatedTreatments: RelatedTreatmentItem[] = [
  {
    title: "Low Sperm Count & Motility (OATS)",
    subtitle: "Improve what can be improved, then pick the right ART",
    href: "/low-sperm-count-oligospermia",
  },
  {
    title: "Azoospermia (Zero Sperm Count)",
    subtitle: "Zero sperm in the semen does not always mean zero sperm",
    href: "/azoospermia-treatment",
  },
  {
    title: "Surgical Sperm Retrieval (TESA/PESA/Micro-TESE)",
    subtitle: "Getting sperm directly from the testis or epididymis",
    href: "/surgical-sperm-retrieval-tesa-pesa",
  },
  {
    title: "Semen & Sperm Freezing",
    subtitle: "Keep your options open",
    href: "/semen-sperm-freezing",
  },
];

export default function DfiRelatedTreatments() {
  return (
    <TreatmentSection>
        {/* Eyebrow & Title */}
        <TreatmentSectionHeader
          eyebrow="Related care"
          title="Related treatments"
        />

        {/* 4 Cards Grid */}
        <Stagger delay={0.04} className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
          {dfiRelatedTreatments.map((item, idx) => (
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
      </TreatmentSection>
  );
}

