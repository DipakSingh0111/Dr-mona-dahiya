"use client";

import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
} from "@/components/ui/treatment";

const areas = [
  {
    title: "Best IVF Doctor in Indirapuram Ghaziabad",
    subtitle: "Indirapuram, Ghaziabad",
  },
  {
    title: "Best IVF Doctor in Vaishali Ghaziabad",
    subtitle: "Vaishali, Ghaziabad",
  },
  {
    title: "Best IVF Doctor in Vasundhara Ghaziabad",
    subtitle: "Vasundhara, Ghaziabad",
  },
  {
    title: "Best IVF Doctor in Kaushambi Ghaziabad",
    subtitle: "Kaushambi, Ghaziabad",
  },
  {
    title: "Best IVF Doctor in Raj Nagar Extension Ghaziabad",
    subtitle: "Raj Nagar Extension, Ghaziabad",
  },
  {
    title: "Best IVF Doctor in Crossings Republik Ghaziabad",
    subtitle: "Crossings Republik, Ghaziabad",
  },
  {
    title: "Best IVF Doctor in Sahibabad Ghaziabad",
    subtitle: "Sahibabad, Ghaziabad",
  },
];

export default function BestIvfGhaziabadAreas() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Areas we serve"
        title="Nearby Areas Served in Ghaziabad"
      />

      <Stagger
        delay={0.03}
        className="mt-7 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4"
      >
        {areas.map((area) => (
          <StaggerItem key={area.title}>
            <Link
              href="#book-consultation"
              className="card-highlight group relative flex min-h-[96px] flex-col justify-between rounded-2xl border border-[#fde2ec] bg-white/80 p-5 transition-all hover:border-rose/40 hover:bg-pink"
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
