"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const areas = [
  {
    title: "Best IVF Doctor in Defence Colony Delhi",
    subtitle: "Defence Colony, Delhi",
  },
  {
    title: "Best IVF Doctor in Greater Kailash Delhi",
    subtitle: "Greater Kailash, Delhi",
  },
  {
    title: "IVF Doctor in Hauz Khas Delhi",
    subtitle: "Hauz Khas, Delhi",
  },
  {
    title: "Best IVF Doctor in Lajpat Nagar Delhi",
    subtitle: "Lajpat Nagar, Delhi",
  },
  {
    title: "Best IVF Doctor in Saket Delhi",
    subtitle: "Saket, Delhi",
  },
  {
    title: "Best IVF Doctor in South Extension Delhi",
    subtitle: "South Extension, Delhi",
  },
  {
    title: "IVF Specialist in Laxmi Nagar Delhi",
    subtitle: "Laxmi Nagar, Delhi",
  },
  {
    title: "Best IVF Doctor in Mayur Vihar Delhi",
    subtitle: "Mayur Vihar, Delhi",
  },
  {
    title: "IVF Doctor in Mayur Vihar Delhi",
    subtitle: "Mayur Vihar, Delhi",
  },
];

export default function BestIvfDelhiAreas() {
  return (
    <section className="relative overflow-hidden bg-pink px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1440px]">
        <Reveal variant="fadeUp">
          <p className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
            Areas we serve
          </p>
          <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-black sm:text-[2.2rem] lg:text-[2.45rem]">
            Nearby Areas Served in Delhi
          </h2>
        </Reveal>

        <Stagger
          className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.04}
        >
          {areas.map((area) => (
            <StaggerItem key={area.title}>
              <Link
                href="#book-consultation"
                className="group relative flex min-h-[105px] flex-col justify-between rounded-2xl border border-[#fde2ec] bg-white/80 p-5 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-rose/40 hover:bg-pink"
              >
                <div>
                  <h3 className="font-serif text-[15px] font-bold leading-snug text-black sm:text-[15.5px]">
                    {area.title}
                  </h3>
                  <p className="mt-1.5 text-[12.5px] text-black">
                    {area.subtitle}
                  </p>
                </div>
                <span className="mt-3 self-end text-rose transition-transform duration-200 group-hover:translate-x-1">
                  <FaArrowRight className="size-3.5" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
