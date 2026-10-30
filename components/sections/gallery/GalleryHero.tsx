"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export default function GalleryHero() {
  return (
    <section
      className="relative overflow-hidden pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-20"
      style={{
        background:
          "linear-gradient(115deg, #05193d 0%, #00369e 35%, #0047ca 70%, #08286a 100%)",
      }}
    >
      {/* Radiant ambient glow spots matching Home theme (Rose & Royal Blue) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[10%] h-[460px] w-[460px] rounded-full opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,157,0.45) 0%, rgba(147,197,253,0.2) 50%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-[-5%] h-[360px] w-[360px] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(147,197,253,0.35) 0%, transparent 68%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb matching Screenshot */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex items-center gap-2 text-xs font-medium sm:mb-8 sm:text-[13px]"
        >
          <Link
            href="/"
            className="text-white/70 transition-colors hover:text-white"
          >
            Home
          </Link>
          <span className="text-white/40">/</span>
          <span className="font-semibold text-white">Gallery</span>
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

