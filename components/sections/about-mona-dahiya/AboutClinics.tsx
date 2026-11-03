"use client";

import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const clinics = [
  {
    city: "Noida",
    address:
      "3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301",
    image: "/images/clinics/noida.jpg",
    clinicPageUrl: "/best-ivf-doctor-in-noida",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=3rd+Floor+K-06+above+FirstCry+Baraula+Sector+49+Noida",
  },
  {
    city: "Ghaziabad",
    address:
      "2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002",
    image: "/images/clinics/ghaziabad.jpg",
    clinicPageUrl: "/best-ivf-doctor-in-ghaziabad",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=2nd+Floor+RDC+C-53A+near+Bikanerwala+Raj+Nagar+Ghaziabad",
  },
  {
    city: "Delhi",
    address:
      "Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024",
    image: "/images/clinics/delhi.jpg",
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
              <article className="group relative z-0 flex h-full flex-col overflow-visible rounded-2xl border border-white/10 bg-[#091a3c]/75 p-4 backdrop-blur-md transition-all duration-300 hover:z-10 hover:-translate-y-1 hover:border-[#e83e74]/40 hover:bg-[#0c224e] sm:p-5">
                <div className="relative z-0 h-[180px] w-full overflow-hidden rounded-xl border border-white/10 bg-[#071329] sm:h-[200px]">
                  <Image
                    src={clinic.image}
                    alt={`${clinic.city} fertility centre`}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#091a3c]/70 via-transparent to-transparent"
                  />
                </div>

                <div className="pointer-events-none absolute top-[180px] left-8 z-30 -translate-y-1/2 sm:top-[200px] sm:left-9">
                  <div className="flex size-[52px] items-center justify-center rounded-full bg-[#0c224e] shadow-[0_6px_18px_rgba(0,0,0,0.35)] ring-1 ring-white/15 sm:size-[56px]">
                    <div className="flex size-[38px] items-center justify-center rounded-full bg-gradient-to-br from-[#f85f8f] to-[#e6356e] text-white sm:size-[42px]">
                      <FaMapMarkerAlt className="size-4 sm:size-[17px]" />
                    </div>
                  </div>
                </div>

                <div className="relative z-10 mt-8 flex flex-1 flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-[22px] font-normal text-white">
                      {clinic.city}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-slate-300">
                      {clinic.address}
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center gap-4 text-[13px] font-medium">
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
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
