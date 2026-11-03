"use client";

import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Reveal } from "@/components/ui/Reveal";

export default function IuiDelhiClinic() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
      <div className="relative mx-auto w-full max-w-[1440px]">
        <Reveal variant="fadeUp">
          <span className="text-[12px] font-semibold tracking-wider text-[#e83e74] uppercase sm:text-[13px]">
            Visit Us At Our Delhi Clinic
          </span>

          <h2 className="font-serif mt-2 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
            Book Your IUI Appointment In Delhi
          </h2>

          <p className="mt-3.5 max-w-3xl text-[13.5px] leading-relaxed text-slate-300 sm:text-[14.5px]">
            You can meet Dr Mona Dahiya in person at her clinic in Lajpat Nagar
            South Delhi. She can also be seen online through an online
            consultation. She also sees patients in Noida and Ghaziabad.
          </p>
        </Reveal>

        <div className="mt-8 max-w-[380px]">
          <Reveal variant="fadeUp" delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#091a3c]/75 backdrop-blur-md transition-all duration-200 hover:border-white/20 hover:bg-[#0c224e]">
              <div className="relative h-40 w-full overflow-hidden bg-[#0a1a36]">
                <Image
                  src="/images/clinics/delhi.jpg"
                  alt="Delhi Clinic Map Location"
                  fill
                  sizes="380px"
                  className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091a3c] via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex size-10 items-center justify-center rounded-full bg-[#e83e74]/20 text-[#f9a8d4] shadow-[0_0_16px_rgba(232,62,116,0.5)] ring-2 ring-[#e83e74]">
                    <FaMapMarkerAlt className="size-5" />
                  </div>
                </div>
              </div>

              <div className="p-5">
                <span className="text-[10.5px] font-bold tracking-wider text-[#e83e74] uppercase">
                  LAJPAT NAGAR
                </span>

                <h3 className="font-serif mt-1 text-[1.4rem] font-medium text-white">
                  South Delhi
                </h3>

                <p className="mt-2 text-[12.5px] leading-relaxed text-slate-300">
                  Building Number 41, First Floor, Ring Road, Block Q, Lajpat
                  Nagar IV, Lajpat Nagar, New Delhi 110024
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-3 text-[12px] font-medium">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Building+Number+41+First+Floor+Ring+Road+Block+Q+Lajpat+Nagar+IV+New+Delhi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-300 underline underline-offset-2 transition-colors hover:text-white"
                  >
                    Find Directions
                  </a>
                  <span className="text-white/20">|</span>
                  <Link
                    href="/best-ivf-doctor-in-delhi"
                    className="text-teal-300 underline underline-offset-2 transition-colors hover:text-white"
                  >
                    IVF In Delhi
                  </Link>
                </div>

                <div className="mt-5">
                  <a
                    href="#book-consultation"
                    className="inline-flex w-full items-center justify-center rounded-full border border-white/30 bg-transparent py-2.5 text-[13px] font-medium text-white shadow-sm transition-all duration-200 hover:border-teal-400/60 hover:bg-teal-500/10 hover:text-teal-200 active:scale-95"
                  >
                    Book Appointment
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
