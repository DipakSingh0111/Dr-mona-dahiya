"use client";

import { FaClock } from "react-icons/fa";
import { MdOutlineCalendarMonth } from "react-icons/md";
import siteData from "@/data/site.json";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  ClinicAppointmentCard,
  defaultClinics,
} from "@/components/sections/ClinicsAppointmentCards";

export default function Clinics() {
  const { eyebrow, titlePrefix, titleAccent, hoursBadge } =
    siteData.clinicsSection;

  return (
    <section
      id="clinics"
      className="relative overflow-hidden bg-white py-6 sm:py-7 lg:py-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 right-0 -z-10 h-[440px] w-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 75% 25%, rgba(255,224,236,0.55) 0%, rgba(255,242,248,0.22) 50%, rgba(255,255,255,0) 75%)",
        }}
      />

      <div className="page-container">
        <div className="mb-6 flex flex-col justify-between gap-5 md:mb-8 md:flex-row md:items-end">
          <div className="shrink-0">
            <div className="mb-3 flex items-center gap-2.5 sm:gap-3">
              <span className="h-[2px] w-7 shrink-0 rounded-full bg-rose sm:w-8" />
              <span className="text-[11.5px] font-bold tracking-[0.12em] text-rose uppercase sm:whitespace-nowrap sm:text-[13px] sm:tracking-[0.14em]">
                {eyebrow}
              </span>
            </div>

            <h2 className="font-display text-2xl leading-[1.15] font-bold tracking-tight text-ink sm:whitespace-nowrap sm:text-3xl lg:text-[2.2rem] xl:text-[2.75rem]">
              <span>{titlePrefix} </span>
              <span className="text-rose">{titleAccent}</span>
            </h2>
          </div>

          <div className="flex w-fit shrink-0 items-center gap-3.5 rounded-[20px] border border-[#fde2ec] bg-gradient-to-r from-[#fff7fa] to-[#fff0f5] px-4 py-3 shadow-sm xl:gap-4 xl:rounded-[22px] xl:px-5 xl:py-4">
            <div className="relative flex size-[44px] shrink-0 items-center justify-center rounded-2xl bg-[#fee7ef] text-rose shadow-sm xl:size-[54px]">
              <MdOutlineCalendarMonth className="size-6 xl:size-8" />
              <span className="absolute -right-0.5 -bottom-0.5 flex size-4.5 items-center justify-center rounded-full bg-white text-rose shadow-sm ring-1 ring-[#fde2ec] xl:size-5">
                <FaClock className="size-2.5 xl:size-3" />
              </span>
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[12.5px] leading-snug font-bold text-ink sm:whitespace-nowrap xl:text-[14px]">
                {hoursBadge.title}
              </p>
              {hoursBadge.subtitle ? (
                <p className="mt-0.5 text-[12px] font-medium text-slate-600 sm:whitespace-nowrap xl:text-[13px]">
                  {hoursBadge.subtitle}
                </p>
              ) : null}
            </div>
          </div>
        </div>

        <Stagger
          className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-7"
          stagger={0.1}
        >
          {defaultClinics.map((clinic) => (
            <StaggerItem key={clinic.city} variant="scaleIn" className="h-full">
              <ClinicAppointmentCard
                clinic={clinic}
                bookHref="#book-appointment"
              />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
