"use client";

import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import siteData from "@/data/site.json";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function IvfFaqsClinics() {
  const { clinics } = siteData.ivfFaqsPage;

  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-6 text-white sm:px-6 sm:py-7 lg:px-8 lg:py-8">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-[10%] h-[280px] w-[280px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(232,62,116,0.28) 0%, rgba(0,71,202,0.18) 50%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1440px]">
        <Reveal className="mb-7 sm:mb-9">
          <p className="text-[12px] font-semibold tracking-wide text-[#e83e74] sm:text-[13px]">
            {clinics.eyebrow}
          </p>
          <h2 className="font-serif mt-2 text-[1.75rem] leading-tight font-normal tracking-tight sm:text-[2.2rem] lg:text-[2.45rem]">
            {clinics.title}
          </h2>
          <p className="mt-2 max-w-2xl text-[13.5px] leading-relaxed text-white/60 sm:text-[14.5px]">
            {clinics.subtitle}
          </p>
        </Reveal>

        <Stagger
          className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5"
          stagger={0.08}
        >
          {clinics.items.map((clinic) => (
            <StaggerItem key={clinic.city} variant="fadeUp" className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-white/12 bg-[#0a1f45]/80 shadow-[0_12px_32px_rgba(0,12,40,0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-[#e83e74]/40 hover:shadow-[0_16px_36px_rgba(232,62,116,0.16)]">
                <div className="relative flex h-[100px] w-full items-center justify-center overflow-hidden sm:h-[110px]">
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(135deg, #0c1f4a 0%, #132b5c 50%, #0a1838 100%)",
                    }}
                  />
                  <svg
                    aria-hidden
                    className="absolute inset-0 h-full w-full opacity-45"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <line
                      x1="0"
                      y1="70%"
                      x2="100%"
                      y2="15%"
                      stroke="#e83e74"
                      strokeWidth="5"
                      strokeOpacity="0.45"
                    />
                    <line
                      x1="28%"
                      y1="0"
                      x2="28%"
                      y2="100%"
                      stroke="#93c5fd"
                      strokeWidth="3"
                      strokeOpacity="0.35"
                    />
                    <line
                      x1="0"
                      y1="42%"
                      x2="100%"
                      y2="42%"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeDasharray="5 5"
                      strokeOpacity="0.22"
                    />
                    <line
                      x1="62%"
                      y1="0"
                      x2="62%"
                      y2="100%"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeDasharray="5 5"
                      strokeOpacity="0.22"
                    />
                  </svg>
                  <div className="relative z-10 flex size-9 items-center justify-center rounded-full bg-[#0a1838]/90 shadow-[0_0_18px_rgba(232,62,116,0.55)] ring-2 ring-[#e83e74]/90">
                    <FaMapMarkerAlt className="size-3.5 text-[#f4729a]" />
                  </div>
                </div>

                <div className="flex flex-1 flex-col px-4 pt-4 pb-4 sm:px-5 sm:pt-4.5 sm:pb-5">
                  <p className="text-[11px] font-bold tracking-[0.12em] text-[#e83e74] uppercase">
                    {clinic.area}
                  </p>
                  <h3 className="font-serif mt-1.5 text-[1.35rem] font-normal tracking-tight text-white sm:text-[1.5rem]">
                    {clinic.city}
                  </h3>
                  <p className="mt-2 flex-1 text-[12.5px] leading-relaxed text-white/55 sm:text-[13px]">
                    {clinic.address}
                  </p>

                  <div className="mt-3.5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[12.5px] font-semibold sm:text-[13px]">
                    <a
                      href={clinic.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#93c5fd] underline underline-offset-4 transition hover:text-white"
                    >
                      Get directions
                    </a>
                    <Link
                      href={clinic.clinicPageUrl}
                      className="text-[#93c5fd] underline underline-offset-4 transition hover:text-white"
                    >
                      Clinic page
                    </Link>
                  </div>

                  <a
                    href={clinics.bookHref}
                    className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-white/35 px-4 py-2.5 text-[13px] font-semibold text-white transition-all duration-200 hover:border-[#e83e74] hover:bg-[#e83e74] hover:shadow-lg hover:shadow-[#e83e74]/25 active:scale-[0.98]"
                  >
                    Book appointment
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
