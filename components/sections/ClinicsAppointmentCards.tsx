"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export interface ClinicCardData {
  city: string;
  tag?: string;
  image: string;
  address: string;
  mapsUrl?: string;
  secondaryLabel?: string;
  secondaryHref: string;
  phone?: string;
}

export const defaultClinics: ClinicCardData[] = [
  {
    city: "Noida",
    tag: "SECTOR 49",
    image: "/images/clinics/noida.jpg",
    address:
      "3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=3rd+Floor+K-06+above+FirstCry+Baraula+Sector+49+Noida",
    secondaryLabel: "Clinic page",
    secondaryHref: "/best-ivf-doctor-in-noida",
  },
  {
    city: "Ghaziabad",
    tag: "RAJ NAGAR EXTENSION",
    image: "/images/clinics/ghaziabad.jpg",
    address:
      "2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=2nd+Floor+RDC+C-53A+near+Bikanerwala+Raj+Nagar+Ghaziabad",
    secondaryLabel: "Clinic page",
    secondaryHref: "/best-ivf-doctor-in-ghaziabad",
  },
  {
    city: "Delhi",
    tag: "LAJPAT NAGAR",
    image: "/images/clinics/delhi.jpg",
    address:
      "Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Building+Number+41+First+Floor+Ring+Road+Block+Q+Lajpat+Nagar+IV+New+Delhi",
    secondaryLabel: "Clinic page",
    secondaryHref: "/best-ivf-doctor-in-delhi",
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
  /** @deprecated Kept for callers; Home-style cards no longer render a book button. */
  showBookButton?: boolean;
}

export default function ClinicsAppointmentCards({
  sectionId = "clinics",
  eyebrow = "Visit Dr. Mona",
  title = "Book a Consultation at Our Clinics",
  subtitle = "Dr. Mona sees patients in Noida, Ghaziabad and Delhi, and offers online consultations.",
  primaryCity,
  clinics,
  className = "",
}: ClinicsAppointmentCardsProps) {
  let list = clinics ?? defaultClinics;

  if (primaryCity && !clinics) {
    if (primaryCity === "noida") {
      list = [defaultClinics[0], defaultClinics[1], defaultClinics[2]];
    } else if (primaryCity === "ghaziabad") {
      list = [defaultClinics[1], defaultClinics[0], defaultClinics[2]];
    } else if (primaryCity === "delhi") {
      list = [defaultClinics[2], defaultClinics[0], defaultClinics[1]];
    }
  }

  return (
    <section
      id={sectionId}
      className={`relative overflow-hidden bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12 border-t border-slate-100 ${className}`}
    >
      <div className="relative mx-auto w-full max-w-[1440px]">
        {(eyebrow || title || subtitle) && (
          <Reveal variant="fadeUp" className="mb-7 sm:mb-8">
            {eyebrow ? (
              <p className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-bold tracking-tight text-ink sm:text-[2.2rem] lg:text-[2.45rem]">
                {title}
              </h2>
            ) : null}
            {subtitle ? (
              <p className="mt-2 max-w-3xl text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
                {subtitle}
              </p>
            ) : null}
          </Reveal>
        )}

        <Stagger
          className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-7"
          stagger={0.1}
        >
          {list.map((clinic) => (
            <StaggerItem key={clinic.city} variant="scaleIn" className="h-full">
              <article className="group relative z-0 flex h-full flex-col overflow-visible rounded-[26px] border border-[#fde8ef] bg-white p-4 shadow-[0_8px_28px_rgba(232,62,116,0.06)] transition-all duration-300 hover:z-10 hover:-translate-y-1 hover:border-[#fbcfe0] hover:shadow-[0_18px_40px_rgba(232,62,116,0.12)] sm:p-5">
                <div className="relative z-0 h-[210px] w-full overflow-hidden rounded-[20px] bg-[#fff0f5] sm:h-[230px]">
                  <Image
                    src={clinic.image}
                    alt={`${clinic.city} fertility centre`}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                    priority={false}
                  />
                </div>

                <div className="pointer-events-none absolute top-[210px] left-8 z-30 -translate-y-1/2 sm:top-[230px] sm:left-9">
                  <div className="flex size-[58px] items-center justify-center rounded-full bg-white shadow-[0_6px_18px_rgba(15,23,42,0.12)] sm:size-[62px]">
                    <div className="flex size-[42px] items-center justify-center rounded-full bg-gradient-to-br from-rose to-rose-dark text-white sm:size-[46px]">
                      <FaMapMarkerAlt className="size-[17px] sm:size-[18px]" />
                    </div>
                  </div>
                </div>

                <div className="relative z-10 mt-9 flex flex-1 items-end justify-between gap-3">
                  <div className="flex min-w-0 flex-1 flex-col justify-between self-stretch pr-2 pl-1">
                    <h3 className="font-display text-[22px] font-bold tracking-tight text-ink sm:text-[24px]">
                      {clinic.city}
                    </h3>
                    <p className="mt-2 min-h-[58px] text-[12.5px] leading-relaxed text-gray-500 sm:min-h-[62px] sm:text-[13px]">
                      {clinic.address}
                    </p>
                  </div>

                  <Link
                    href={clinic.secondaryHref}
                    aria-label={`Open ${clinic.city} clinic details`}
                    className="pointer-events-auto flex size-[44px] shrink-0 items-center justify-center rounded-full border border-[#fde2ec] bg-[#fff0f5] text-rose transition-all duration-300 hover:scale-105 hover:bg-rose hover:text-white sm:size-[48px]"
                  >
                    <FaArrowRight className="size-3.5 sm:size-4" />
                  </Link>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
