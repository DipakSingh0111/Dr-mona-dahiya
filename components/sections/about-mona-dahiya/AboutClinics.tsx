"use client";

import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const clinics = [
  {
    city: "Noida",
    address:
      "3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301",
    clinicPageUrl: "/best-ivf-doctor-in-noida",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=3rd+Floor+K-06+above+FirstCry+Baraula+Sector+49+Noida",
  },
  {
    city: "Ghaziabad",
    address:
      "2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002",
    clinicPageUrl: "/best-ivf-doctor-in-ghaziabad",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=2nd+Floor+RDC+C-53A+near+Bikanerwala+Raj+Nagar+Ghaziabad",
  },
  {
    city: "Delhi",
    address:
      "Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024",
    clinicPageUrl: "/best-ivf-doctor-in-delhi",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Building+Number+41+First+Floor+Ring+Road+Block+Q+Lajpat+Nagar+IV+New+Delhi",
  },
];

export default function AboutClinics() {
  return (
    <section
      id="clinics"
      className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12"
    >
      <div className="relative mx-auto w-full max-w-[1440px]">
        <Reveal className="mb-7 flex flex-col justify-between gap-3 sm:mb-8 md:flex-row md:items-end md:gap-6">
          <div>
            <span className="text-[12px] font-semibold tracking-wider text-[#e83e74] sm:text-[13px]">
              Book An Appointment With Dr. Mona Dahiya
            </span>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
              Three clinics across Delhi NCR
            </h2>
          </div>

          <p className="max-w-md text-[13px] leading-relaxed text-slate-300 sm:text-[14px] md:text-right">
            Timings: Monday To Saturday 10:00 AM To 5:00 PM. Choose The Clinic
            Near You.
          </p>
        </Reveal>

        <Stagger
          className="grid grid-cols-1 gap-5 md:grid-cols-3"
          stagger={0.08}
        >
          {clinics.map((clinic) => (
            <StaggerItem key={clinic.city} className="h-full">
              <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#091a3c]/75 p-5 backdrop-blur-md transition-all duration-300 hover:border-[#e83e74]/40 hover:bg-[#0c224e]">
                <div>
                  {/* Stylized map container with road lines and pin icon */}
                  <div className="relative flex h-36 w-full items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-[#071329]">
                    {/* Diagonal and cross road lines */}
                    <div className="pointer-events-none absolute inset-0 opacity-25">
                      <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-white/30" />
                      <div className="absolute top-1/2 right-0 left-0 h-[2px] bg-white/30" />
                      <div className="absolute -top-10 -bottom-10 left-1/4 w-[4px] rotate-45 bg-[#e83e74]/40" />
                      <div className="absolute -top-10 -bottom-10 right-1/4 w-[3px] -rotate-45 bg-cyan-400/30" />
                    </div>

                    {/* Glowing Pin */}
                    <div className="relative z-10 flex size-10 items-center justify-center rounded-full bg-[#e83e74]/20 ring-1 ring-[#e83e74]/50">
                      <FaMapMarkerAlt className="size-5 text-[#e83e74] drop-shadow-[0_2px_8px_rgba(232,62,116,0.6)]" />
                    </div>
                  </div>

                  <h3 className="font-serif mt-5 text-[22px] font-normal text-white">
                    {clinic.city}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-300">
                    {clinic.address}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-4 text-[13px] font-medium">
                  <Link
                    href={clinic.clinicPageUrl}
                    className="text-teal-400 underline decoration-teal-400/40 underline-offset-4 transition hover:text-teal-300"
                  >
                    Click here to view clinic
                  </Link>
                  <a
                    href={clinic.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-400 underline decoration-teal-400/40 underline-offset-4 transition hover:text-teal-300"
                  >
                    Get directions
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
