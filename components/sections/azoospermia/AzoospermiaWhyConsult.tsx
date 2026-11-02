"use client";

import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const reasons = [
  {
    title: "A diagnosis before a procedure",
    description:
      "The cause is identified first, so you have the right surgery, not just any surgery.",
  },
  {
    title: "Candid counselling",
    description:
      "You are told the real chance of finding sperm and the alternatives.",
  },
  {
    title: "Retrieval to ICSI in one team",
    description:
      "Surgeon, embryologist and fertility specialist coordinate care.",
  },
];

const clinics = [
  {
    city: "Delhi",
    address:
      "Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024",
  },
  {
    city: "Noida",
    address:
      "3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301",
  },
  {
    city: "Ghaziabad",
    address:
      "2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002",
  },
];

export default function AzoospermiaWhyConsult() {
  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="relative mx-auto w-full max-w-[1440px]">
        <Reveal variant="fadeUp">
          <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
            Expertise & authority
          </p>
          <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
            Why Consult Dr. Mona Dahiya for Azoospermia?
          </h2>
        </Reveal>

        <Stagger className="mt-7 flex flex-col gap-4" stagger={0.08}>
          {reasons.map((item) => (
            <StaggerItem key={item.title}>
              <div className="group flex flex-col gap-4 rounded-2xl border border-[#e83e74]/25 bg-[#0a1f45]/80 p-5 transition-all duration-300 hover:border-[#e83e74]/45 sm:flex-row sm:items-center sm:p-6">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#e83e74] to-[#c53658] text-white shadow-[0_4px_14px_rgba(232,62,116,0.35)]">
                  <FaCheck className="size-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-[15.5px] font-bold text-white transition-colors group-hover:text-[#f9a8d4] sm:text-[16.5px]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-white/70 sm:text-[14px]">
                    {item.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal variant="fadeUp" delay={0.1} className="mt-6">
          <div className="rounded-2xl border border-white/10 bg-[#091a3c]/70 p-5 sm:p-6">
            <div className="flex flex-col gap-3">
              {clinics.map((clinic) => (
                <p
                  key={clinic.city}
                  className="text-[13.5px] leading-relaxed text-slate-200 sm:text-[14px]"
                >
                  <strong className="font-semibold text-white">
                    {clinic.city}:
                  </strong>{" "}
                  {clinic.address}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
