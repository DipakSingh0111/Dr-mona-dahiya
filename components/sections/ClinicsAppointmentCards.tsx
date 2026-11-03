"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export interface ClinicCardData {
  city: string;
  tag: string;
  image: string;
  address: string;
  mapsUrl: string;
  secondaryLabel: string;
  secondaryHref: string;
  phone?: string;
}

export const defaultClinics: ClinicCardData[] = [
  {
    city: "Delhi",
    tag: "LAJPAT NAGAR",
    image: "/images/clinics/delhi.jpg",
    address:
      "Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Building+Number+41+First+Floor+Ring+Road+Block+Q+Lajpat+Nagar+IV+New+Delhi",
    secondaryLabel: "Clinic Page",
    secondaryHref: "/location#delhi",
    phone: "tel:+919818816654",
  },
  {
    city: "Noida",
    tag: "SECTOR 49",
    image: "/images/clinics/noida.jpg",
    address:
      "3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=3rd+Floor+K-06+above+FirstCry+Baraula+Sector+49+Noida",
    secondaryLabel: "IVF Noida",
    secondaryHref: "/best-ivf-doctor-in-noida",
    phone: "tel:+919818816654",
  },
  {
    city: "Ghaziabad",
    tag: "RAJ NAGAR EXTENSION",
    image: "/images/clinics/ghaziabad.jpg",
    address:
      "2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=2nd+Floor+RDC+C-53A+near+Bikanerwala+Raj+Nagar+Ghaziabad",
    secondaryLabel: "IVF Ghaziabad",
    secondaryHref: "/best-ivf-doctor-in-ghaziabad",
    phone: "tel:+919818816654",
  },
];

export interface ClinicsAppointmentCardsProps {
  sectionId?: string;
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  primaryCity?: "delhi" | "noida" | "ghaziabad";
  clinics?: ClinicCardData[];
  className?: string;
}

export default function ClinicsAppointmentCards({
  sectionId = "clinics",
  eyebrow = "Consult Dr. Mona",
  title = "Book Appointment with us",
  subtitle = "We have centres at Noida, Ghaziabad and Delhi. Also offer online consultations.",
  primaryCity,
  clinics,
  className = "",
}: ClinicsAppointmentCardsProps) {
  let list = clinics ?? defaultClinics;

  if (primaryCity && !clinics) {
    if (primaryCity === "noida") {
      list = [defaultClinics[1], defaultClinics[2], defaultClinics[0]];
    } else if (primaryCity === "ghaziabad") {
      list = [defaultClinics[2], defaultClinics[1], defaultClinics[0]];
    } else {
      list = defaultClinics;
    }
  }

  return (
    <section
      id={sectionId}
      className={`relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12 ${className}`}
    >
      <div className="relative mx-auto w-full max-w-[1440px]">
        <Reveal variant="fadeUp">
          {eyebrow ? (
            <p className="text-[12px] font-semibold tracking-wide text-[#e83e74] sm:text-[13px]">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-2 max-w-3xl text-[14px] leading-relaxed text-slate-300 sm:text-[15px]">
              {subtitle}
            </p>
          ) : null}
        </Reveal>

        <Stagger
          className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-3"
          stagger={0.08}
        >
          {list.map((clinic) => (
            <StaggerItem key={clinic.city} className="h-full">
              <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#091a3c]/75 p-5 backdrop-blur-md transition-all duration-300 hover:border-[#e83e74]/40 hover:bg-[#0b1f48]">
                <div>
                  <div className="relative h-44 w-full overflow-hidden rounded-xl border border-white/10 bg-[#050f24]">
                    <Image
                      src={clinic.image}
                      alt={`${clinic.city} Clinic`}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  <div className="mt-4">
                    <span className="text-[11px] font-semibold tracking-wider text-[#e83e74] uppercase">
                      {clinic.tag}
                    </span>
                    <h3 className="font-serif mt-1 text-[22px] font-normal text-white">
                      {clinic.city}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-slate-300">
                      {clinic.address}
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-4 text-[13px] font-medium">
                    <a
                      href={clinic.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-cyan-400 underline decoration-cyan-400/40 underline-offset-4 transition hover:text-cyan-300"
                    >
                      <span>Know how to reach</span>
                      <FaExternalLinkAlt className="size-2.5 opacity-70" />
                    </a>
                    <Link
                      href={clinic.secondaryHref}
                      className="text-cyan-400 underline decoration-cyan-400/40 underline-offset-4 transition hover:text-cyan-300"
                    >
                      {clinic.secondaryLabel}
                    </Link>
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href={clinic.phone ?? "#book-consultation"}
                    className="inline-flex w-full items-center justify-center rounded-xl bg-[#c53658] px-4 py-2.5 text-[14px] font-semibold text-white shadow-[0_4px_16px_rgba(197,54,88,0.35)] transition-all hover:bg-[#d82d64] hover:shadow-[0_6px_20px_rgba(197,54,88,0.45)]"
                  >
                    Book Appointment
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

