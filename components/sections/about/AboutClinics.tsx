"use client";

import Link from "next/link";
import { FaMapMarkerAlt, FaArrowRight, FaDirections } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const clinics = [
  {
    city: "Noida",
    address:
      "3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301",
    clinicPageUrl: "/clinics/noida",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=3rd+Floor+K-06+above+FirstCry+Baraula+Sector+49+Noida",
  },
  {
    city: "Ghaziabad",
    address:
      "2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002",
    clinicPageUrl: "/clinics/ghaziabad",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=2nd+Floor+RDC+C-53A+near+Bikanerwala+Raj+Nagar+Ghaziabad",
  },
  {
    city: "Delhi",
    address:
      "Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024",
    clinicPageUrl: "/clinics/delhi",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Building+Number+41+First+Floor+Ring+Road+Block+Q+Lajpat+Nagar+IV+New+Delhi",
  },
];

export default function AboutClinics() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fff8fb] via-white to-[#fff5f8] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
      <div
        aria-hidden
        className="pointer-events-none absolute top-[-10%] right-[-5%] h-[320px] w-[320px] rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,210,228,0.55) 0%, transparent 68%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1440px]">
        <Reveal className="mb-7 flex flex-col justify-between gap-3 sm:mb-8 md:flex-row md:items-end md:gap-6">
          <div>
            <span className="text-[12px] font-semibold tracking-[0.04em] text-[#e83e74] sm:text-[13px]">
              Visit Dr. Mona
            </span>
            <h2 className="font-serif mt-2 text-[1.75rem] leading-[1.18] font-bold tracking-tight text-[#0f2438] sm:text-[2.2rem] lg:text-[2.45rem]">
              Three clinics across Delhi NCR
            </h2>
          </div>

          <p className="max-w-md text-[13px] leading-relaxed text-[#64748b] sm:text-[14px] md:text-right">
            Open Monday to Saturday, 10:00 AM to 5:00 PM. Book a slot at the
            clinic closest to you.
          </p>
        </Reveal>

        <Stagger
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
          stagger={0.08}
        >
          {clinics.map((clinic) => (
            <StaggerItem key={clinic.city} variant="fadeUp" className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-[#f5c9d6]/70 bg-white shadow-[0_10px_28px_rgba(232,62,116,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#e83e74]/45 hover:shadow-[0_16px_36px_rgba(232,62,116,0.14)]">
                {/* Compact map preview */}
                <div className="relative flex h-[88px] w-full items-center justify-center overflow-hidden sm:h-[96px]">
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(135deg, #0c1f4a 0%, #132b5c 50%, #0a1838 100%)",
                    }}
                  />
                  <svg
                    aria-hidden
                    className="absolute inset-0 h-full w-full opacity-45"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <line
                      x1="0"
                      y1="70%"
                      x2="100%"
                      y2="15%"
                      stroke="#e83e74"
                      strokeWidth="5"
                      strokeOpacity="0.45"
                    />
                    <line
                      x1="28%"
                      y1="0"
                      x2="28%"
                      y2="100%"
                      stroke="#38bdf8"
                      strokeWidth="3"
                      strokeOpacity="0.35"
                    />
                    <line
                      x1="0"
                      y1="42%"
                      x2="100%"
                      y2="42%"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeDasharray="5 5"
                      strokeOpacity="0.22"
                    />
                    <line
                      x1="62%"
                      y1="0"
                      x2="62%"
                      y2="100%"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeDasharray="5 5"
                      strokeOpacity="0.22"
                    />
                  </svg>
                  <div className="relative z-10 flex size-9 items-center justify-center rounded-full bg-[#0a1838]/90 shadow-[0_0_18px_rgba(232,62,116,0.55)] ring-2 ring-[#e83e74]/90">
                    <FaMapMarkerAlt className="size-3.5 text-[#f4729a]" />
                  </div>
                </div>

                {/* Compact body */}
                <div className="flex flex-1 flex-col px-4 pt-3.5 pb-4 sm:px-5 sm:pt-4 sm:pb-4.5">
                  <h3 className="font-serif text-[1.2rem] font-bold tracking-tight text-[#0f2438] sm:text-[1.3rem]">
                    {clinic.city}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-[12.5px] leading-snug text-[#64748b] sm:text-[13px]">
                    {clinic.address}
                  </p>

                  <div className="mt-3.5 flex items-center gap-4 border-t border-[#fde2ec] pt-3 text-[12.5px] font-semibold sm:text-[13px]">
                    <Link
                      href={clinic.clinicPageUrl}
                      className="inline-flex items-center gap-1.5 text-[#0047ca] underline-offset-4 transition hover:text-[#e83e74] hover:underline"
                    >
                      Clinic page
                      <FaArrowRight className="size-2.5 opacity-70" />
                    </Link>
                    <a
                      href={clinic.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[#0047ca] underline-offset-4 transition hover:text-[#e83e74] hover:underline"
                    >
                      <FaDirections className="size-3 opacity-80" />
                      Get directions
                    </a>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
