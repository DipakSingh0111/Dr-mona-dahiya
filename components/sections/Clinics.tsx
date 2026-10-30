"use client";

import Image from "next/image";
import { FaArrowRight, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { MdOutlineCalendarMonth } from "react-icons/md";
import siteData from "@/data/site.json";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function Clinics() {
  const { eyebrow, titlePrefix, titleAccent, hoursBadge, clinics } =
    siteData.clinicsSection;

  return (
    <section className="relative overflow-hidden bg-white px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 right-0 -z-10 h-[440px] w-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 75% 25%, rgba(255,224,236,0.55) 0%, rgba(255,242,248,0.22) 50%, rgba(255,255,255,0) 75%)",
        }}
      />

      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-6 flex flex-col justify-between gap-5 md:mb-8 md:flex-row md:items-end">
          <div className="shrink-0">
            <div className="mb-3 flex items-center gap-2.5 sm:gap-3">
              <span className="h-[2px] w-7 shrink-0 rounded-full bg-[#e83e74] sm:w-8" />
              <span className="text-[11.5px] font-bold tracking-[0.12em] text-[#e83e74] uppercase sm:whitespace-nowrap sm:text-[13px] sm:tracking-[0.14em]">
                {eyebrow}
              </span>
            </div>

            <h2 className="font-display text-2xl leading-[1.15] font-bold tracking-tight text-[#0f2438] sm:whitespace-nowrap sm:text-3xl lg:text-[2.2rem] xl:text-[2.75rem]">
              <span>{titlePrefix} </span>
              <span className="text-[#e83e74]">{titleAccent}</span>
            </h2>
          </div>

          <div className="flex w-fit shrink-0 items-center gap-3.5 rounded-[20px] border border-[#fde2ec] bg-gradient-to-r from-[#fff7fa] to-[#fff0f5] px-4 py-3 shadow-sm xl:gap-4 xl:rounded-[22px] xl:px-5 xl:py-4">
            <div className="relative flex size-[44px] shrink-0 items-center justify-center rounded-2xl bg-[#fee7ef] text-[#e83e74] shadow-sm xl:size-[54px]">
              <MdOutlineCalendarMonth className="size-6 xl:size-8" />
              <span className="absolute -right-0.5 -bottom-0.5 flex size-4.5 items-center justify-center rounded-full bg-white text-[#e83e74] shadow-sm ring-1 ring-[#fde2ec] xl:size-5">
                <FaClock className="size-2.5 xl:size-3" />
              </span>
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[12.5px] leading-snug font-bold text-[#0f2438] sm:whitespace-nowrap xl:text-[14.5px]">
                {hoursBadge.title}
              </p>
              <p className="mt-0.5 text-[11.5px] font-normal text-gray-500 sm:whitespace-nowrap xl:text-[12.5px]">
                {hoursBadge.subtitle}
              </p>
            </div>
          </div>
        </div>

        <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-7" stagger={0.1}>
          {clinics.map((clinic) => (
            <StaggerItem key={clinic.id} variant="scaleIn" className="h-full">
              <article
                className="group relative z-0 flex h-full flex-col overflow-visible rounded-[26px] border border-[#fde8ef] bg-white p-4 shadow-[0_8px_28px_rgba(232,62,116,0.06)] transition-all duration-300 hover:z-10 hover:-translate-y-1 hover:border-[#fbcfe0] hover:shadow-[0_18px_40px_rgba(232,62,116,0.12)] sm:p-5"
              >
                <div className="relative z-0 h-[210px] w-full overflow-hidden rounded-[20px] bg-[#fff0f5] sm:h-[230px]">
                  <Image
                    src={clinic.image}
                    alt={`${clinic.city} fertility centre`}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>

                <div className="pointer-events-none absolute top-[210px] left-8 z-30 -translate-y-1/2 sm:top-[230px] sm:left-9">
                  <div className="flex size-[58px] items-center justify-center rounded-full bg-white shadow-[0_6px_18px_rgba(15,23,42,0.12)] sm:size-[62px]">
                    <div className="flex size-[42px] items-center justify-center rounded-full bg-gradient-to-br from-[#f85f8f] to-[#e6356e] text-white sm:size-[46px]">
                      <FaMapMarkerAlt className="size-[17px] sm:size-[18px]" />
                    </div>
                  </div>
                </div>

                <div className="relative z-10 mt-9 flex flex-1 items-end justify-between gap-3">
                  <div className="flex min-w-0 flex-1 flex-col justify-between self-stretch pr-2 pl-1">
                    <h3 className="font-display text-[22px] font-bold tracking-tight text-[#0f2438] sm:text-[24px]">
                      {clinic.city}
                    </h3>
                    <p className="mt-2 min-h-[58px] text-[12.5px] leading-relaxed text-gray-500 sm:min-h-[62px] sm:text-[13px]">
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

