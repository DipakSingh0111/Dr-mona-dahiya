"use client";

import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import siteData from "@/data/site.json";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import ClinicsAppointmentCards, {
  type ClinicsAppointmentCardsProps,
} from "@/components/sections/ClinicsAppointmentCards";

type IvfSuccessClinicsExtra = {
  directionsLinkText?: string;
  clinicLinkText?: string;
  bookButtonText?: string;
};

export default function IvfSuccessClinics(
  props: ClinicsAppointmentCardsProps & IvfSuccessClinicsExtra,
) {
  if (props && (props.clinics || props.primaryCity)) {
    return <ClinicsAppointmentCards {...props} />;
  }

  const { eyebrow, title, subtitle, items } = siteData.ivfStoriesPage.clinics;

  const displayEyebrow = props?.eyebrow ?? eyebrow;
  const displayTitle = props?.title ?? title;
  const displaySubtitle = props?.subtitle ?? subtitle;
  const directionsLinkText = props.directionsLinkText ?? "Get directions";
  const clinicLinkText = props.clinicLinkText ?? "Clinic page";
  const bookButtonText = props.bookButtonText ?? "Book appointment";

  return (
    <section
      id="clinics"
      className="relative overflow-hidden bg-pink py-8 sm:py-10 lg:py-12 border-t border-[#fde2ec]"
    >
      <div className="page-container relative">
        <Reveal variant="fadeUp" className="mb-7 sm:mb-8">
          <p className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
            {displayEyebrow}
          </p>
          <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-bold tracking-tight text-ink sm:text-[2.2rem] lg:text-[2.45rem]">
            {displayTitle}
          </h2>
          {displaySubtitle && (
            <p className="mt-2 max-w-3xl text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
              {displaySubtitle}
            </p>
          )}
        </Reveal>

        <Stagger
          className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-7"
          stagger={0.1}
        >
          {items.map((clinic) => (
            <StaggerItem key={clinic.city} variant="scaleIn" className="h-full">
              <article className="card-highlight group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-[#fde8ef] bg-white p-4 shadow-[0_8px_24px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#fbcfe0] hover:shadow-[0_16px_36px_rgba(232,62,116,0.12)] sm:p-5">
                <div className="relative h-[200px] w-full overflow-hidden rounded-[18px] bg-[#fff0f5] sm:h-[220px]">
                  <Image
                    src={clinic.image}
                    alt={`${clinic.city} fertility clinic`}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  {clinic.tag && (
                    <span className="absolute top-3 right-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold tracking-wider text-rose shadow-sm backdrop-blur-sm">
                      {clinic.tag}
                    </span>
                  )}
                </div>

                <div className="mt-4 flex flex-1 flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="size-4 text-rose" />
                      <h3 className="font-display text-[20px] font-bold tracking-tight text-ink sm:text-[22px]">
                        {clinic.city}
                      </h3>
                    </div>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-slate-600 sm:text-[13px]">
                      {clinic.address}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-[12px] font-semibold text-rose">
                    <a
                      href={clinic.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 transition-colors hover:text-rose-dark hover:underline"
                    >
                      {directionsLinkText.replace("{city}", clinic.city)}
                      <FaExternalLinkAlt className="size-2.5 opacity-70" />
                    </a>
                    <Link
                      href={clinic.clinicUrl}
                      className="inline-flex items-center gap-1.5 transition-colors hover:text-rose-dark hover:underline"
                    >
                      {clinicLinkText.replace("{city}", clinic.city)}
                      <FaArrowRight className="size-2.5" />
                    </Link>
                  </div>

                  <div className="mt-3">
                    <a
                      href="#book-consultation"
                      className="inline-flex w-full items-center justify-center rounded-full bg-rose py-2.5 text-[13px] font-semibold text-white shadow-[0_4px_14px_rgba(232,62,116,0.25)] transition-all hover:bg-rose-dark"
                    >
                      {bookButtonText}
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
