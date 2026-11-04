"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
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
  {
    title: "Best IVF Doctor in Greater Noida",
    subtitle: "Greater Noida, Noida",
  },
  {
    title: "Best IVF Doctor in Greater Noida West",
    subtitle: "Greater Noida West, Noida",
  },
  {
    title: "Best IVF Doctor in Noida Extension",
    subtitle: "Noida Extension, Noida",
  },
  {
    title: "Fertility Specialist in Pari Chowk Greater Noida",
    subtitle: "Pari Chowk, Noida",
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
        className="mt-7 grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3"
      >
        {areas.map((area) => (
          <StaggerItem key={area.title}>
            <Link
              href="#book-consultation"
              className="group relative flex items-center justify-between rounded-xl border border-[#fde2ec] bg-white p-4 shadow-[0_8px_24px_rgba(232,62,116,0.05)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#f8b4cb] hover:shadow-[0_14px_32px_rgba(232,62,116,0.1)]"
            >
              <div>
                <h3 className="font-serif text-[1rem] font-semibold text-black transition-colors group-hover:text-rose sm:text-[1.08rem]">
                  {area.title}
                </h3>
                <p className="mt-0.5 text-[12px] text-black">{area.subtitle}</p>
              </div>
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full text-rose transition-transform duration-200 group-hover:translate-x-1">
                <FaArrowRight className="size-3" />
              </span>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}
