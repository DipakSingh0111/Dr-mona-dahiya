"use client";

import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const clinics = [
  {
    city: "Noida",
    tag: "SECTOR 49",
    image: "/images/clinics/noida.jpg",
    address:
      "3rd Floor, K-06 above FirstCry, Barola, Sector 49, Noida, Uttar Pradesh 201301",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=3rd+Floor+K-06+above+FirstCry+Barola+Sector+49+Noida",
    moreLabel: "More Info About Our Noida Clinic",
    moreHref: "/best-ivf-doctor-in-noida",
  },
  {
    city: "Ghaziabad",
    tag: "RAJ NAGAR",
    image: "/images/clinics/ghaziabad.jpg",
    address:
      "2nd Floor, RDC C-53A Near Bikanervala, Sector 15, Sector 10 Raj Nagar, Ghaziabad, Uttar Pradesh 201002",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=2nd+Floor+RDC+C-53A+Near+Bikanervala+Raj+Nagar+Ghaziabad",
    moreLabel: "More Info About Our Ghaziabad Clinic",
    moreHref: "/best-ivf-doctor-in-ghaziabad",
  },
  {
    city: "Delhi",
    tag: "LAJPAT NAGAR",
    image: "/images/clinics/delhi.jpg",
    address:
      "Building No 41, 1st Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Building+No+41+1st+Floor+Ring+Road+Block+Q+Lajpat+Nagar+IV+New+Delhi",
    moreLabel: "More Info About Our Delhi Clinic",
    moreHref: "/best-ivf-doctor-in-delhi",
  },
];

export default function IntlClinics() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
      <div className="relative mx-auto w-full max-w-[1440px]">
        <Reveal variant="fadeUp">
          <span className="text-[12px] font-semibold tracking-wide text-[#e83e74] sm:text-[13px]">
            Book An Appointment
          </span>
          <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
            Schedule An Appointment With Dr. Mona Dahiya
          </h2>
          <p className="mt-2 max-w-3xl text-[14px] leading-relaxed text-white/70 sm:text-[15px]">
            Dr. Mona has 3 clinics to choose from and can also consult with you
            online.
          </p>
        </Reveal>

        <Stagger
          className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
          stagger={0.06}
        >
          {clinics.map((clinic) => (
            <StaggerItem key={clinic.city}>
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#091a3c]/75 backdrop-blur-md transition-all duration-300 hover:border-[#e83e74]/35 hover:bg-[#0c224e]">
                <div className="relative h-36 w-full overflow-hidden bg-[#050f24]">
                  <Image
                    src={clinic.image}
                    alt={`${clinic.city} clinic`}
                    fill
                    sizes="380px"
                    className="object-cover opacity-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="inline-flex size-10 items-center justify-center rounded-full border border-white/20 bg-[#e83e74] text-white shadow-lg">
                      <FaMapMarkerAlt className="size-4" />
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <span className="text-[11px] font-semibold tracking-wider text-[#e83e74] uppercase">
                    {clinic.tag}
                  </span>
                  <h3 className="font-serif mt-1 text-[22px] font-normal text-white">
                    {clinic.city}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/70">
                    {clinic.address}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] font-medium">
                    <a
                      href={clinic.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 underline decoration-cyan-400/40 underline-offset-4 transition hover:text-cyan-300"
                    >
                      Directions To Clinic
                    </a>
                    <span className="text-white/20">|</span>
                    <Link
                      href={clinic.moreHref}
                      className="text-cyan-400 underline decoration-cyan-400/40 underline-offset-4 transition hover:text-cyan-300"
                    >
                      {clinic.moreLabel}
                    </Link>
                  </div>

                  <a
                    href="#book-consultation"
                    className="mt-5 inline-flex w-full items-center justify-center rounded-full border border-white/35 px-4 py-2.5 text-[13px] font-semibold text-white transition hover:border-cyan-300 hover:bg-cyan-400/10 hover:text-cyan-200"
                  >
                    Book appointment
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
