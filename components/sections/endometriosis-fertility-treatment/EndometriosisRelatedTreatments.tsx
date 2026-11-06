"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
} from "@/components/ui/treatment";

interface RelatedTreatmentItem {
  title: string;
  subtitle: string;
  href: string;
}

const endometriosisRelated: RelatedTreatmentItem[] = [
  {
    title: "Diagnostic & Operative Hysteroscopy",
    subtitle: "See inside the uterus, treat in the same sitting",
    href: "/hysteroscopy-treatment",
  },
  {
    title: "Recurrent Implantation Failure (RIF)",
    subtitle: "A structured second look after failed transfers",
    href: "/recurrent-implantation-failure-rif",
  },
  {
    title: "Fallopian Tube Blockage",
    subtitle: "Check the tubes, choose the right route",
    href: "/fallopian-tube-blockage-treatment",
  },
  {
    title: "Frozen Embryo Transfer (FET)",
    subtitle: "Vitrified embryos, prepared lining, timed transfer",
    href: "/frozen-embryo-transfer",
  },
];

export default function EndometriosisRelatedTreatments() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Related care"
        title="Related treatments"
      />

      <Stagger
        delay={0.04}
        className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
      >
        {endometriosisRelated.map((item) => (
          <StaggerItem key={item.title}>
            <Link
              href={item.href}
              className="card-highlight group relative flex h-full flex-col justify-between rounded-2xl border border-[#fde2ec] bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[#f8b4cb] hover:bg-[#fff8fa] sm:p-6"
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-serif text-[1.05rem] leading-snug font-semibold text-ink transition-colors group-hover:text-rose sm:text-[1.12rem]">
                    {item.title}
                  </h3>
                  <span className="flex size-6 shrink-0 items-center justify-center text-rose transition-transform duration-200 group-hover:translate-x-1">
                    <FaArrowRight className="size-3" />
                  </span>
                </div>
                <p className="mt-2.5 text-[12.5px] leading-relaxed text-ink/75 sm:text-[13px]">
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
