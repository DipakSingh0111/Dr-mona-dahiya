"use client";

import Link from "next/link";
import { FaHome, FaChevronRight } from "react-icons/fa";
import { Reveal } from "@/components/ui/Reveal";

export default function GalleryHero() {
  return (
    <section
      className="relative overflow-hidden pt-5 pb-8 sm:pt-6 sm:pb-9 lg:pt-7 lg:pb-10"
      style={{
        background:
          "linear-gradient(115deg, #05193d 0%, #00369e 35%, #0047ca 70%, #08286a 100%)",
      }}
    >
      {/* Radiant ambient glow spots matching Home theme (Rose & Royal Blue) */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-[10%] h-[280px] w-[280px] -translate-y-1/4 rounded-full opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,157,0.45) 0%, rgba(147,197,253,0.2) 50%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 h-[240px] w-[240px] -translate-x-1/4 translate-y-1/4 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(147,197,253,0.35) 0%, transparent 68%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-5 sm:mb-6">
          <ol className="inline-flex max-w-full flex-wrap items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 shadow-[0_8px_24px_rgba(0,20,80,0.2)] backdrop-blur-md sm:gap-2 sm:px-3.5 sm:py-2">
            <li>
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 rounded-full px-1.5 py-0.5 text-[12px] font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white sm:text-[13px]"
              >
                <FaHome className="size-3 shrink-0 sm:size-3.5" />
                Home
              </Link>
            </li>
            <li aria-hidden className="text-white/35">
              <FaChevronRight className="size-2.5 sm:size-3" />
            </li>
            <li>
              <span className="inline-flex items-center rounded-full bg-[#e83e74]/20 px-2.5 py-0.5 text-[12px] font-semibold text-[#f9a8d4] ring-1 ring-[#e83e74]/35 sm:px-3 sm:text-[13px]">
                Gallery
              </span>
            </li>
          </ol>
        </nav>

        {/* Title matching Screenshot */}
        <Reveal variant="slideLeft">
          <h1 className="font-serif text-[2.75rem] leading-[1.15] font-normal tracking-tight text-white sm:text-[3.5rem] lg:text-[4rem]">
            Gallery
          </h1>

          {/* Google Reviews Link matching Screenshot */}
          <div className="mt-4 sm:mt-5">
            <Link
              href="/patient-reviews"
              className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#ff8fb3] transition-colors hover:text-white hover:underline sm:text-[15px]"
            >
              <span>Read Dr. Mona&apos;s Google reviews</span>
              <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
