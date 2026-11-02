"use client";

import Link from "next/link";
import { FaVial, FaMicroscope, FaDna, FaSnowflake, FaCalendarCheck, FaMapMarkerAlt, FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function PgtCostAndClinics() {
  const costFactors = [
    {
      title: "IVF/ICSI Clinical Phase",
      desc: "Ovarian stimulation medications, cycle monitoring, egg retrieval anesthesia, and extended blastocyst culture.",
      icon: FaCheck,
      color: "from-[#e83e74] to-[#f43f5e]",
      iconBg: "bg-[#e83e74]/10 text-[#e83e74]",
      border: "hover:border-[#e83e74]/50",
    },
    {
      title: "Laser Biopsy Fee",
      desc: "Technical embryology fee for laser perforation and cellular extraction (typically calculated per cycle).",
      icon: FaMicroscope,
      color: "from-[#0047ca] to-[#0284c7]",
      iconBg: "bg-[#0047ca]/10 text-[#0047ca]",
      border: "hover:border-[#0047ca]/50",
    },
    {
      title: "Genomic NGS Lab Testing",
      desc: "Genetic laboratory sequencing costs, billed per individual embryo tested (e.g., batch of 4 to 8 embryos).",
      icon: FaDna,
      color: "from-[#8b5cf6] to-[#a855f7]",
      iconBg: "bg-[#8b5cf6]/10 text-[#8b5cf6]",
      border: "hover:border-[#8b5cf6]/50",
    },
    {
      title: "PGT-M Custom Probe Design",
      desc: "Required for single-gene disorders to engineer family-specific molecular primers prior to the clinical cycle.",
      icon: FaVial,
      color: "from-[#0d9488] to-[#14b8a6]",
      iconBg: "bg-[#0d9488]/10 text-[#0d9488]",
      border: "hover:border-[#0d9488]/50",
    },
    {
      title: "Vitrification & Storage",
      desc: (
        <>
          Liquid nitrogen cryo-maintenance for frozen blastocysts while awaiting genetic reports. See{" "}
          <Link
            href="/treatments"
            className="font-medium text-[#0047ca] underline underline-offset-2 hover:text-[#00369e]"
          >
            Embryo Freezing &amp; Banking
          </Link>
          .
        </>
      ),
      icon: FaSnowflake,
      color: "from-[#ea580c] to-[#f97316]",
      iconBg: "bg-[#ea580c]/10 text-[#ea580c]",
      border: "hover:border-[#ea580c]/50",
    },
    {
      title: "Downstream FET Cycle",
      desc: "Uterine priming medications, lining scans, embryo thawing, and soft catheter transfer.",
      icon: FaCalendarCheck,
      color: "from-[#0284c7] to-[#0047ca]",
      iconBg: "bg-[#0284c7]/10 text-[#0284c7]",
      border: "hover:border-[#0284c7]/50",
    },
  ];

  const clinics = [
    {
      sector: "SECTOR 49",
      city: "Noida",
      address:
        "3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301",
      mapUrl: "https://maps.google.com/?q=Sector+49+Noida",
      clinicUrl: "/location",
    },
    {
      sector: "RAJ NAGAR",
      city: "Ghaziabad",
      address:
        "2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002",
      mapUrl: "https://maps.google.com/?q=Raj+Nagar+Ghaziabad",
      clinicUrl: "/location",
    },
    {
      sector: "LAJPAT NAGAR",
      city: "Delhi",
      address:
        "Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024",
      mapUrl: "https://maps.google.com/?q=Lajpat+Nagar+Delhi",
      clinicUrl: "/location",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50/70 px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="relative mx-auto w-full max-w-[1440px]">
        {/* Cost Factors & Pricing Variables */}
        <Reveal className="mb-6 sm:mb-8">
          <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
            Transparency
          </p>
          <h2 className="font-serif mt-1 text-[1.65rem] leading-[1.2] font-normal tracking-tight text-slate-900 sm:text-[2.1rem] lg:text-[2.35rem]">
            PGT Cost Factors &amp; Pricing Variables in Delhi | Noida | Ghaziabad
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
            The cost of an IVF cycle with PGT testing depends on clinical and laboratory variables:
          </p>
        </Reveal>

        <Stagger
          stagger={0.05}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {costFactors.map((item, idx) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={idx}>
                <div
                  className={`group flex h-full flex-col justify-start rounded-[18px] border border-slate-200/90 bg-white p-5 shadow-[0_4px_16px_rgba(0,20,60,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,30,80,0.08)] ${item.border}`}
                >
                  <div
                    className={`inline-flex size-10 shrink-0 items-center justify-center rounded-xl ${item.iconBg}`}
                  >
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-3.5 text-[15px] font-bold text-slate-900 group-hover:text-[#0047ca] transition-colors sm:text-[16px]">
                    {item.title}
                  </h3>
                  <div className="mt-2 text-[13px] leading-relaxed text-slate-600 sm:text-[13.5px]">
                    {item.desc}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* Book a Consultation at Our Clinics */}
        <div className="mt-12 sm:mt-16">
          <Reveal className="mb-6 sm:mb-8">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              Visit Dr. Mona
            </p>
            <h2 className="font-serif mt-1 text-[1.65rem] leading-[1.2] font-normal tracking-tight text-slate-900 sm:text-[2.1rem] lg:text-[2.35rem]">
              Book a Consultation at Our Clinics
            </h2>
            <p className="mt-2 text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
              Dr. Mona sees patients in Noida, Ghaziabad and Delhi, and offers online consultations.
            </p>
          </Reveal>

          <Stagger
            stagger={0.06}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {clinics.map((c, idx) => (
              <StaggerItem key={idx}>
                <div className="flex h-full flex-col justify-between rounded-[20px] border border-slate-200/90 bg-white p-6 shadow-[0_4px_18px_rgba(0,20,60,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0047ca]/40 hover:shadow-[0_14px_30px_rgba(0,30,80,0.08)]">
                  <div>
                    <span className="text-[11.5px] font-bold tracking-wider text-[#e83e74] uppercase">
                      {c.sector}
                    </span>
                    <h3 className="font-serif mt-1 text-[1.4rem] font-bold text-slate-900">
                      {c.city}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
                      {c.address}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
                    <a
                      href={c.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#0047ca] hover:underline"
                    >
                      <FaMapMarkerAlt className="size-3" />
                      Get directions
                    </a>
                    <span className="text-slate-300">•</span>
                    <Link
                      href={c.clinicUrl}
                      className="text-[12.5px] font-semibold text-slate-700 hover:text-[#0047ca]"
                    >
                      Clinic page
                    </Link>
                    <a
                      href="#book-consultation"
                      className="mt-2 w-full rounded-full border border-slate-300 bg-white py-2 text-center text-[13px] font-semibold text-slate-800 transition-colors hover:border-[#0047ca] hover:bg-[#0047ca] hover:text-white"
                    >
                      Book appointment
                    </a>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

