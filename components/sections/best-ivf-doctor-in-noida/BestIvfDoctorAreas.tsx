"use client";

import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
} from "@/components/ui/treatment";

const areas = [
  { title: "Best IVF Doctor in Sector 18 Noida", subtitle: "Sector 18, Noida" },
  { title: "IVF Specialist in Sector 50 Noida", subtitle: "Sector 50, Noida" },
  { title: "Best IVF Doctor in Sector 51 Noida", subtitle: "Sector 51, Noida" },
  { title: "Best IVF Doctor in Sector 62 Noida", subtitle: "Sector 62, Noida" },
  { title: "Best IVF Doctor in Sector 76 Noida", subtitle: "Sector 76, Noida" },
  { title: "Best IVF Doctor in Sector 93 Noida", subtitle: "Sector 93, Noida" },
  {
    title: "Best IVF Doctor in Sector 104 Noida",
    subtitle: "Sector 104, Noida",
  },
  {
    title: "Best IVF Doctor in Sector 137 Noida",
    subtitle: "Sector 137, Noida",
  },
  { title: "Best IVF Doctor in Greater Noida", subtitle: "Greater Noida" },
  {
    title: "Best IVF Doctor in Greater Noida West",
    subtitle: "Greater Noida West",
  },
  { title: "Best IVF Doctor in Noida Extension", subtitle: "Noida Extension" },
  {
    title: "Fertility Specialist in Pari Chowk Greater Noida",
    subtitle: "Pari Chowk, Greater Noida",
  },
];

export default function BestIvfDoctorAreas() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Areas we serve"
        title="Nearby Areas Served in Noida"
      />

      <Stagger
        delay={0.03}
        className="mt-7 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4"
      >
        {areas.map((area) => (
          <StaggerItem key={area.title}>
            <Link
              href="#book-consultation"
              className="group relative flex min-h-[96px] flex-col justify-between rounded-2xl border border-[#fde2ec] bg-white/80 p-5 transition-all hover:border-rose/40 hover:bg-pink"
            >
              <div>
                <h3 className="text-[15px] leading-snug font-bold text-black sm:text-[15.5px]">
                  {area.title}
                </h3>
                <p className="mt-1.5 text-[12.5px] text-black">
                  {area.subtitle}
                </p>
              </div>
              <span className="mt-3 self-end text-rose transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <FaExternalLinkAlt className="size-3.5" />
              </span>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}
