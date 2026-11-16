"use client";
import Breadcrumb from "@/components/ui/Breadcrumb";

import Link from "next/link";

import { Reveal } from "@/components/ui/Reveal";

export default function GalleryHero() {
  return (
    <section
      className="relative overflow-hidden pt-5 pb-8 sm:pt-6 sm:pb-9 lg:pt-7 lg:pb-10"
      style={{
        background:
          "var(--pink)",
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

      <div className="page-container relative">
        <Breadcrumb
          items={[
            { label: "About Dr. Mona", href: "/about-mona-dahiya" },
            { label: "Gallery" }
          ]}
        />

        {/* Title matching Screenshot */}
        <Reveal variant="slideLeft">
          <h1 className="font-serif text-[2.75rem] leading-[1.15] font-normal tracking-tight text-ink sm:text-[3.5rem] lg:text-[4rem]">
            Gallery
          </h1>

          {/* Google Reviews Link matching Screenshot */}
          <div className="mt-4 sm:mt-5">
            <Link
              href="/best-ivf-patient-reviews"
              className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-rose transition-colors hover:text-rose hover:underline sm:text-[15px]"
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
