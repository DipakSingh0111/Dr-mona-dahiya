"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaExternalLinkAlt, FaMapMarkerAlt } from "react-icons/fa";
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

export function ClinicAppointmentCard({
  clinic,
  directionsLabel = "Directions",
  clinicLinkLabel,
  bookButtonLabel = "Book Appointment",
  bookHref = "/book-appointment",
}: {
  clinic: ClinicCardData;
  directionsLabel?: string;
  clinicLinkLabel?: string;
  bookButtonLabel?: string;
  bookHref?: string;
}) {
  const resolvedClinicLabel =
    (clinicLinkLabel ?? clinic.secondaryLabel ?? `${clinic.city} Clinic`).replace(
      "{city}",
      clinic.city,
    );
  const resolvedDirectionsLabel = directionsLabel.replace("{city}", clinic.city);

  return (
    <article className="card-highlight group relative z-0 flex h-full flex-col overflow-visible rounded-[26px] border border-[#fde8ef] bg-white p-4 shadow-[0_8px_28px_rgba(232,62,116,0.06)] transition-all duration-300 hover:z-10 hover:-translate-y-1 hover:border-[#fbcfe0] hover:shadow-[0_18px_40px_rgba(232,62,116,0.12)] sm:p-5">
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

      <div className="relative z-10 mt-9 flex flex-1 flex-col gap-3 pr-2 pl-1">
        <div className="flex min-w-0 flex-1 items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            {clinic.tag ? (
              <p className="text-[10.5px] font-bold tracking-[0.12em] text-rose uppercase sm:text-[11px]">
                {clinic.tag}
              </p>
            ) : null}
            <h3 className="font-display text-[1rem] font-bold tracking-tight text-ink sm:text-[1.0625rem]">
              {clinic.city}
            </h3>
            <p className="mt-2 min-h-[58px] text-[13.5px] leading-relaxed text-ink/75 sm:min-h-[62px] sm:text-[14px]">
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

        {(clinic.mapsUrl || clinic.secondaryHref) && (
          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-3 text-[12px] font-semibold text-rose sm:text-[12.5px]">
            {clinic.mapsUrl ? (
              <a
                href={clinic.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 transition-colors hover:text-rose-dark hover:underline"
              >
                {resolvedDirectionsLabel}
                <FaExternalLinkAlt className="size-2.5 opacity-70" />
              </a>
            ) : (
              <span />
            )}
            {clinic.secondaryHref ? (
              <Link
                href={clinic.secondaryHref}
                className="inline-flex items-center gap-1 transition-colors hover:text-rose-dark hover:underline"
              >
                {resolvedClinicLabel}
                <FaArrowRight className="size-2.5" />
              </Link>
            ) : null}
          </div>
        )}

        <Link
          href={bookHref}
          className="inline-flex w-full items-center justify-center rounded-full border border-rose bg-white py-2.5 text-[13px] font-semibold text-rose shadow-sm transition-all hover:bg-[#fff0f5]"
        >
          {bookButtonLabel}
        </Link>
      </div>
    </article>
  );
}

export interface ClinicsAppointmentCardsProps {
  sectionId?: string;
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  primaryCity?: "delhi" | "noida" | "ghaziabad";
  clinics?: ClinicCardData[];
  className?: string;
  sectionBg?: "bg-pink" | "bg-white";
  directionsLabel?: string;
  clinicLinkLabel?: string;
  bookButtonLabel?: string;
  bookHref?: string;
  /** @deprecated Kept for callers; Home-style cards no longer render a book button override. */
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
  sectionBg,
  directionsLabel,
  clinicLinkLabel,
  bookButtonLabel,
  bookHref = "/book-appointment",
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

  const bgClass =
    sectionBg ?? (className.includes("bg-pink") ? "bg-pink" : "bg-white");
  const borderClass =
    bgClass === "bg-pink"
      ? "border-t border-[#fde2ec]"
      : "border-t border-slate-100";

  return (
    <section
      id={sectionId}
      className={`relative overflow-hidden ${bgClass} py-8 sm:py-10 lg:py-12 ${borderClass} ${className}`}
    >
      <div className="page-container relative">
        {(eyebrow || title || subtitle) && (
          <Reveal variant="fadeUp" className="mb-7 sm:mb-8">
            {eyebrow ? (
              <p className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="font-serif mt-1 text-[1.65rem] leading-[1.18] font-normal tracking-tight text-ink sm:text-[2.1rem] lg:text-[2.35rem] xl:text-[2.55rem]">
                {title}
              </h2>
            ) : null}
            {subtitle ? (
              <p className="mt-2 max-w-3xl text-[14px] leading-relaxed text-ink/80 sm:text-[15px]">
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
              <ClinicAppointmentCard
                clinic={clinic}
                directionsLabel={directionsLabel}
                clinicLinkLabel={clinicLinkLabel}
                bookButtonLabel={bookButtonLabel}
                bookHref={bookHref}
              />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
