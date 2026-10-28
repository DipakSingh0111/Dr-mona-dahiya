"use client";

import Image from "next/image";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineCalendarMonth } from "react-icons/md";
import siteData from "@/data/site.json";
import { Stagger, StaggerItem } from "./Reveal";

export default function ClinicsSection() {
  const { eyebrow, titlePrefix, titleAccent, hoursBadge, clinics } =
    siteData.clinicsSection;

  return (
    <section className="relative overflow-hidden bg-white px-3 py-6 sm:px-4 sm:py-7 lg:pr-8 lg:pl-3 lg:py-8 xl:pl-4">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 right-0 -z-10 h-[440px] w-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 75% 25%, rgba(255,224,236,0.55) 0%, rgba(255,242,248,0.22) 50%, rgba(255,255,255,0) 75%)",
        }}
      />

      <div className="mx-auto w-full max-w-[1400px]">
        <div className="mb-6 flex flex-col justify-between gap-5 md:mb-8 md:flex-row md:items-end">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-8 rounded-full bg-[#e83e74]" />
              <span className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
                {eyebrow}
              </span>
            </div>

            <h2 className="font-display text-3xl leading-[1.15] font-bold tracking-tight text-[#0f2438] sm:text-4xl md:text-[44px] lg:text-[48px]">
              <span>{titlePrefix} </span>
              <span className="text-[#e83e74]">{titleAccent}</span>
            </h2>
          </div>

          <div className="flex max-w-md items-center gap-4 rounded-[22px] border border-[#fde2ec] bg-gradient-to-r from-[#fff7fa] to-[#fff0f5] p-4 shadow-sm sm:px-5 sm:py-4">
            <div className="relative flex size-[50px] shrink-0 items-center justify-center rounded-2xl bg-[#fee7ef] text-[#e83e74] shadow-sm sm:size-[54px]">
              <MdOutlineCalendarMonth className="size-7 sm:size-8" />
              <span className="absolute -right-0.5 -bottom-0.5 flex size-5 items-center justify-center rounded-full bg-white text-[#e83e74] shadow-sm ring-1 ring-[#fde2ec]">
                <svg
                  viewBox="0 0 16 16"
                  className="size-3"
                  fill="currentColor"
                  aria-hidden
                >
                  <circle
                    cx="8"
                    cy="8"
                    r="6.25"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M8 4.5V8l2.2 1.4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[13.5px] leading-snug font-bold text-[#0f2438] sm:text-[14.5px]">
                {hoursBadge.title}
              </p>
              <p className="mt-0.5 text-[12px] font-normal text-gray-500 sm:text-[12.5px]">
                {hoursBadge.subtitle}
              </p>
            </div>
          </div>
        </div>

        <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-7" stagger={0.1}>
          {clinics.map((clinic) => (
            <StaggerItem key={clinic.id} variant="scaleIn">
            <article
              className="group relative z-0 flex flex-col overflow-visible rounded-[26px] border border-[#fde8ef] bg-white p-4 shadow-[0_8px_28px_rgba(232,62,116,0.06)] transition-all duration-300 hover:z-10 hover:-translate-y-1 hover:border-[#fbcfe0] hover:shadow-[0_18px_40px_rgba(232,62,116,0.12)] sm:p-5"
            >
              {/* Image only — overflow hidden for rounded crop */}
              <div className="relative z-0 h-[210px] w-full overflow-hidden rounded-[20px] bg-[#fff0f5] sm:h-[230px]">
                <Image
                  src={clinic.image}
                  alt={`${clinic.city} fertility centre`}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>

              {/*
                Full badge sits ON TOP of image + text (not clipped).
                White outer disc + pink pin circle — overlaps the image edge.
              */}
              <div className="pointer-events-none absolute top-[210px] left-8 z-30 -translate-y-1/2 sm:top-[230px] sm:left-9">
                <div className="flex size-[58px] items-center justify-center rounded-full bg-white shadow-[0_6px_18px_rgba(15,23,42,0.12)] sm:size-[62px]">
                  <div className="flex size-[42px] items-center justify-center rounded-full bg-gradient-to-br from-[#f85f8f] to-[#e6356e] text-white sm:size-[46px]">
                    <FaMapMarkerAlt className="size-[17px] sm:size-[18px]" />
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-9 flex items-end justify-between gap-3">
                <div className="min-w-0 flex-1 pr-2 pl-1">
                  <h3 className="font-display text-[22px] font-bold tracking-tight text-[#0f2438] sm:text-[24px]">
                    {clinic.city}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-[12.5px] leading-relaxed text-gray-500 sm:text-[13px]">
                    {clinic.address}
                  </p>
                </div>

                <a
                  href={clinic.href}
                  aria-label={`Open ${clinic.city} clinic details`}
                  className="pointer-events-auto flex size-[44px] shrink-0 items-center justify-center rounded-full border border-[#fde2ec] bg-[#fff0f5] text-[#e83e74] transition-all duration-300 hover:scale-105 hover:bg-[#e83e74] hover:text-white sm:size-[48px]"
                >
                  <FaArrowRight className="size-3.5 sm:size-4" />
                </a>
              </div>
            </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
