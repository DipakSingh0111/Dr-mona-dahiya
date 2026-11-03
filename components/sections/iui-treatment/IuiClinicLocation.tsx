"use client";

import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Reveal } from "@/components/ui/Reveal";

export default function IuiClinicLocation() {
  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14 border-t border-white/10">
      <div className="relative mx-auto w-full max-w-[1440px]">
        <Reveal variant="fadeUp">
          <span className="text-[12px] font-semibold tracking-wider text-[#e83e74] uppercase sm:text-[13px]">
            Visit Us In Noida
          </span>

          <h2 className="font-serif mt-2 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
            How to get to Dr. Mona&apos;s IUI clinic.
          </h2>

          <p className="mt-3.5 max-w-3xl text-[13.5px] leading-relaxed text-slate-300 sm:text-[14.5px]">
            Dr. Mona will be doing IUI at her clinic in Noida. You can visit her in person for your initial visit or consult with her online. She also sees patients in Lajpat Nagar, Delhi and Raj Nagar Extension, Ghaziabad.
          </p>
        </Reveal>

        {/* Noida Clinic Card */}
        <div className="mt-8 max-w-[380px]">
          <Reveal variant="fadeUp" delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#091a3c]/75 backdrop-blur-md transition-all duration-200 hover:border-white/20 hover:bg-[#0c224e]">
              {/* Map Preview Thumbnail */}
              <div className="relative h-40 w-full overflow-hidden bg-[#0a1a36]">
                <Image
                  src="/images/clinics/noida.jpg"
                  alt="Noida Clinic Map Location"
                  fill
                  sizes="380px"
                  className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091a3c] via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex size-10 items-center justify-center rounded-full bg-[#e83e74]/20 text-[#f9a8d4] ring-2 ring-[#e83e74] shadow-[0_0_16px_rgba(232,62,116,0.5)]">
                    <FaMapMarkerAlt className="size-5" />
                  </div>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-5">
                <span className="text-[10.5px] font-bold tracking-wider text-[#e83e74] uppercase">
                  Located in Sector 49
                </span>

                <h3 className="font-serif mt-1 text-[1.4rem] font-medium text-white">
                  Noida
                </h3>

                <p className="mt-2 text-[12.5px] leading-relaxed text-slate-300">
                  3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-3 text-[12px] font-medium">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=3rd+Floor+K-06+above+FirstCry+Baraula+Sector+49+Noida"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-300 underline underline-offset-2 hover:text-white transition-colors"
                  >
                    Directions
                  </a>
                  <span className="text-white/20">|</span>
                  <a
                    href="#book-consultation"
                    className="text-teal-300 underline underline-offset-2 hover:text-white transition-colors"
                  >
                    View our second location in Noida
                  </a>
                </div>

                <div className="mt-5">
                  <a
                    href="#book-consultation"
                    className="inline-flex w-full items-center justify-center rounded-full border border-teal-500/50 bg-teal-500/10 py-2.5 text-[13px] font-medium text-teal-300 shadow-sm backdrop-blur-md transition-all duration-200 hover:border-teal-400 hover:bg-teal-500/20 hover:text-white active:scale-95"
                  >
                    Book an Appointment
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
