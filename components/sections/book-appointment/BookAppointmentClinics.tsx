"use client";

import Image from "next/image";
import Link from "next/link";
import siteData from "@/data/site.json";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";

export default function BookAppointmentClinics() {
  const { clinics } = siteData.bookAppointmentPage;

  return (
    <section id="clinics" className="relative overflow-hidden bg-pink py-10 sm:py-12 lg:py-14">
      <div className="page-container relative">
        <Reveal variant="fadeUp" className="text-center">
          <span className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
            {clinics.eyebrow}
          </span>
          <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-ink sm:text-[2.2rem] lg:text-[2.45rem]">
            {clinics.title}
          </h2>
          <p className="mx-auto mt-2.5 max-w-2xl text-[14px] leading-relaxed text-ink/75 sm:text-[14.5px]">
            {clinics.subtitle}
          </p>
        </Reveal>

        <Stagger
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7"
          stagger={0.08}
        >
          {clinics.items.map((clinic, idx) => (
            <StaggerItem key={idx}>
              <article className="card-highlight group relative z-0 flex h-full flex-col overflow-visible rounded-[26px] border border-[#fde8ef] bg-white p-4 shadow-[0_8px_28px_rgba(232,62,116,0.06)] transition-all duration-300 hover:z-10 hover:-translate-y-1 hover:border-[#fbcfe0] hover:shadow-[0_18px_40px_rgba(232,62,116,0.12)] sm:p-5">
                {/* Real Clinic Photo matching other pages */}
                <div className="relative z-0 h-[200px] w-full overflow-hidden rounded-[20px] bg-[#fff0f5] sm:h-[220px]">
                  <Image
                    src={clinic.image || `/images/clinics/${clinic.city.toLowerCase()}.jpg`}
                    alt={`${clinic.city} fertility centre`}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                    priority={false}
                  />
                </div>

                {/* Floating Map Pin Badge */}
                <div className="pointer-events-none absolute top-[200px] left-8 z-30 -translate-y-1/2 sm:top-[220px] sm:left-9">
                  <div className="flex size-[54px] items-center justify-center rounded-full bg-white shadow-[0_6px_18px_rgba(15,23,42,0.12)] sm:size-[58px]">
                    <div className="flex size-[38px] items-center justify-center rounded-full bg-gradient-to-br from-rose to-rose-dark text-white sm:size-[42px]">
                      <FaMapMarkerAlt className="size-[16px] sm:size-[17px]" />
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="relative z-10 mt-7 flex flex-1 flex-col justify-between pt-1">
                  <div>
                    <span className="text-[11px] font-bold tracking-widest text-rose uppercase">
                      {clinic.tag}
                    </span>

                    <h3 className="font-display mt-1 text-[22px] font-bold tracking-tight text-ink sm:text-[24px]">
                      {clinic.city}
                    </h3>

                    <p className="mt-2 text-[12.5px] leading-relaxed text-ink/75 sm:text-[13px]">
                      {clinic.address}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-ink/5">
                    {/* Directions & Clinic page links */}
                    <div className="flex items-center gap-4 text-[12.5px] font-semibold">
                      <a
                        href={clinic.directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-ink/70 hover:text-rose transition-colors"
                      >
                        <span>Get directions</span>
                        <FaExternalLinkAlt className="size-2.5 opacity-60" />
                      </a>
                      <span className="text-ink/20">|</span>
                      <Link
                        href={clinic.clinicUrl}
                        className="text-ink/70 hover:text-rose transition-colors"
                      >
                        Clinic page
                      </Link>
                    </div>

                    {/* Button */}
                    <div className="mt-4">
                      <a
                        href="tel:+919267982924"
                        className="inline-flex w-full items-center justify-center rounded-full border border-ink/20 bg-white px-4 py-2.5 text-[13px] font-semibold text-ink transition-all hover:border-rose hover:bg-rose hover:text-white"
                      >
                        Book appointment
                      </a>
                    </div>
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
